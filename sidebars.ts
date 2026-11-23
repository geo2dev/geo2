import fs from 'fs';
import path from 'path';
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import sidebar from './config/sidebar.json';

// The menu is config/sidebar.json, edited in TinaCMS ("Docs Sidebar": drag to
// reorder). Each entry points at a doc file; a doc's own `sidebar_label`
// frontmatter is its menu text, categories carry their label here.

type Entry = { _template?: string; label?: string; document?: string; items?: Entry[] };

const toId = (file: string) => file.replace(/^docs\//, '').replace(/\.mdx?$/, '');
const listed = new Set<string>();
const id = (file: string) => (listed.add(toId(file)), toId(file));

const convert = (entry: Entry): any =>
  entry.items || entry.label
    ? {
        type: 'category',
        label: entry.label,
        ...(entry.document && { link: { type: 'doc', id: id(entry.document) } }),
        items: (entry.items ?? []).filter(filled).map(convert),
      }
    : id(entry.document!);

// A row added in the CMS but left without a page would break the build.
const filled = (entry: Entry) => Boolean(entry.document || entry.label);

const items = (sidebar.items as Entry[]).filter(filled).map(convert);

// A page created in the CMS but not yet placed in the menu still shows up
// (at the bottom) instead of silently missing from navigation.
const walk = (dir: string): string[] =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : /\.mdx?$/.test(e.name) ? [path.join(dir, e.name)] : [],
  );
const unlisted = walk('docs')
  .map((f) => toId(f.replace(/\\/g, '/')))
  .filter((docId) => !listed.has(docId))
  .sort();

const sidebars: SidebarsConfig = { docs: [...items, ...unlisted] };

export default sidebars;

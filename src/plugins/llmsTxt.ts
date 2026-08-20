import fs from 'node:fs/promises';
import path from 'node:path';
import type { LoadContext, Plugin } from '@docusaurus/types';

// Emits llms.txt (link index) and llms-full.txt (whole corpus) per llmstxt.org,
// so AI assistants can read the docs without crawling the rendered site.
// Written in-house because the published plugins derive URLs from file names;
// here every URL lives in frontmatter `slug`, which only Docusaurus knows.

type Entry = { title: string; permalink: string; description?: string; source: string };

export default function llmsTxtPlugin(context: LoadContext): Plugin<void> {
  let entries: Entry[] = [];

  return {
    name: 'llms-txt',

    // The docs plugin has resolved slugs and sidebar order by now.
    async allContentLoaded({ allContent }) {
      const docsPlugin = Object.values(
        (allContent['docusaurus-plugin-content-docs'] ?? {}) as Record<string, any>,
      )[0];
      const version = docsPlugin?.loadedVersions?.[0];
      if (!version) return;

      const byId = new Map<string, any>(version.docs.map((doc: any) => [doc.id, doc]));
      // Walk the sidebar so llms.txt reads in the same order as the site.
      const walk = (items: any[]): any[] =>
        items.flatMap((item) => [
          ...(item.type === 'doc' ? [byId.get(item.id)] : []),
          ...(item.type === 'category'
            ? [
                ...(item.link?.type === 'doc' ? [byId.get(item.link.id)] : []),
                ...walk(item.items ?? []),
              ]
            : []),
        ]);

      const ordered = walk(Object.values(version.sidebars ?? {}).flat() as any[]).filter(Boolean);
      // Anything not in a sidebar still belongs in the index.
      const seen = new Set(ordered.map((doc: any) => doc.id));
      const docs = [...ordered, ...version.docs.filter((doc: any) => !seen.has(doc.id))];

      entries = docs.map((doc: any) => ({
        title: doc.title,
        permalink: doc.permalink,
        description: doc.frontMatter?.description,
        source: doc.source.replace('@site', context.siteDir),
      }));
    },

    async postBuild({ outDir, siteConfig }) {
      const url = (permalink: string) => new URL(permalink, siteConfig.url).href;
      const header = [`# ${siteConfig.title}`, '', `> ${siteConfig.tagline}`, ''];

      await fs.writeFile(
        path.join(outDir, 'llms.txt'),
        [
          ...header,
          '## Documentation',
          '',
          ...entries.map(
            (e) => `- [${e.title}](${url(e.permalink)})${e.description ? `: ${e.description}` : ''}`,
          ),
          '',
        ].join('\n'),
      );

      const bodies = await Promise.all(
        entries.map(async (e) => {
          const raw = await fs.readFile(e.source, 'utf8');
          const body = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').trim();
          return `# ${e.title}\n\nSource: ${url(e.permalink)}\n\n${body}\n`;
        }),
      );

      await fs.writeFile(
        path.join(outDir, 'llms-full.txt'),
        [header.join('\n'), ...bodies].join('\n---\n\n'),
      );
    },
  };
}

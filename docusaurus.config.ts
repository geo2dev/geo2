import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';
import remarkGithubAlerts from './src/remark/githubAlerts';

// Docs originate from a one-time Confluence export (the nightly sync is
// retired). Slugs, labels, and sidebar order live in frontmatter /
// _category_.json and are edited via Pages CMS (.pages.yml).

/** "Hub_ Orders" / "Mobile App_ Map" -> "Orders" / "Map" */
const cleanLabel = (s: string) => s.replace(/^[^_]+_\s*/, '').trim();

const config: Config = {
  title: 'Geo2 Documentation',
  tagline: 'Delivery management platform',
  url: 'https://help.geo2.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400..700;1,400..700&display=swap',
  ],

  // Build fails on broken links/anchors so CMS edits can't silently break navigation.
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  markdown: {
    // Docs are parsed as CommonMark. The one page that needs MDX (FAQ.md,
    // for its <details> blocks) opts in via its own frontmatter (`format: mdx`).
    format: 'md',
    preprocessor: ({ filePath, fileContent }) => {
      // Pages CMS inserts images as /Documentation/attachments/… — rewrite to
      // a page-relative path so webpack resolves and bundles them.
      const rel = filePath.replace(/\\/g, '/').split('Documentation/')[1];
      const ups = rel ? '../'.repeat(rel.split('/').length - 1) : '';
      return fileContent.replace(/\]\(\/Documentation\/attachments\//g, `](${ups}attachments/`);
    },
    hooks: { onBrokenMarkdownLinks: 'warn' },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'Documentation/Welcome',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          beforeDefaultRemarkPlugins: [remarkGithubAlerts],
          editUrl: undefined, // editing happens in Pages CMS, no public "edit this page"
          showLastUpdateTime: true,
          sidebarItemsGenerator: async ({ defaultSidebarItemsGenerator, ...args }) => {
            const positionOf = new Map(
              args.docs.map((doc) => [doc.id, doc.frontMatter.sidebar_position]),
            );
            // Confluence exports a page and its children as siblings ("API.md"
            // next to "API/"), which renders as a duplicate sidebar entry.
            // Merge the doc into its category as the category link.
            const mergeSiblingDocs = (items: any[]): any[] => {
              const categories = new Map(
                items.filter((i) => i.type === 'category').map((c) => [c.label, c]),
              );
              return items.flatMap((item) => {
                if (item.type === 'doc') {
                  const category = categories.get(item.id.split('/').pop());
                  if (category) {
                    category.link = { type: 'doc', id: item.id };
                    return [];
                  }
                }
                if (item.type === 'category') {
                  item.items = mergeSiblingDocs(item.items);
                }
                return [item];
              });
            };
            // Categories carry no sidebar_position of their own — order them by
            // their merged doc's position so the whole sidebar is driven by the
            // per-page sidebar_position frontmatter (editable in Pages CMS).
            const itemPosition = (item: any): number =>
              positionOf.get(item.type === 'doc' ? item.id : item.link?.id) ??
              Number.MAX_SAFE_INTEGER;
            // Doc labels come from frontmatter sidebar_label; category labels
            // default to the folder name, so clean them here ("Hub_ Orders" -> "Orders")
            const finalize = (items: any[]): any[] =>
              items
                .map((item) =>
                  item.type === 'category'
                    ? { ...item, label: cleanLabel(item.label), items: finalize(item.items) }
                    : item,
                )
                .sort((a, b) => itemPosition(a) - itemPosition(b));
            return finalize(mergeSiblingDocs(await defaultSidebarItemsGenerator(args)));
          },
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        docsDir: 'Documentation/Welcome',
      },
    ],
  ],

  themeConfig: {
    image: 'img/og_image_1200x630.png',
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      logo: {
        alt: 'Geo2',
        src: 'img/geo2_black.svg',
        srcDark: 'img/geo2_white.svg',
        height: 32,
      },
      items: [
        { to: '/getting-started-in-hub', label: 'Getting Started Hub', position: 'left' },
        { to: '/getting-started-in-mobile-app', label: 'Getting Started Mobile App', position: 'left' },
        { to: '/api', label: 'API', position: 'left' },
        { to: '/release-notes', label: 'Release Notes', position: 'left' },
        {
          type: 'dropdown',
          label: 'Get the App',
          position: 'right',
          items: [
            { href: 'https://geo2.onelink.me/vIzC/wpw7uzdf', label: 'App Store' },
            { href: 'https://geo2.onelink.me/8Xke/98ngzi3v', label: 'Google Play' },
          ],
        },
        {
          href: 'https://hub.geo2.com',
          label: 'Hub',
          position: 'right',
        },
        {
          href: 'https://geo2.com',
          label: 'Site',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Springboard Applications Ltd`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['json', 'bash'],
    },
    docs: {
      sidebar: { hideable: true, autoCollapseCategories: true },
    },
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
  } satisfies Preset.ThemeConfig,
};

export default config;


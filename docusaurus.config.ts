import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';
import remarkGithubAlerts from './src/remark/githubAlerts';

// Docs are synced daily from Confluence into Documentation/Welcome by
// .github/workflows/sync-docs.yml and get overwritten on every sync.
// Never rely on frontmatter inside those files — everything (slugs,
// homepage, labels) is derived here in config instead.

/** "Mobile App_ Sign In.md" -> "mobile-app-sign-in" */
const slugify = (s: string) =>
  s
    .replace(/\.mdx?$/, '')
    .replace(/_/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

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

  // Confluence export inevitably contains some dangling links — don't fail the build.
  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  markdown: {
    // Parse .md as MDX: Confluence export wraps FAQ answers in <details> blocks,
    // which CommonMark treats as raw HTML (markdown inside stays unrendered)
    format: 'mdx',
    // Confluence text isn't MDX-safe: `{CONTACT_NAME}` tokens, inline JSON,
    // `<DELIVERY_ETA>` placeholders, `<https://…>` autolinks — all parse as
    // JS expressions/JSX and crash. Escape everything except real HTML tags,
    // skipping code fences and inline code.
    preprocessor: ({ fileContent }) =>
      fileContent
        .split(/(```[\s\S]*?```|`[^`\n]*`)/g)
        .map((segment, i) =>
          i % 2
            ? segment
            : segment
                .replace(/(?<!\\)[{}]/g, '\\$&')
                .replace(/<(https?:\/\/[^>\s]+)>/g, '[$1]($1)') // MDX has no autolinks
                .replace(/<(br|hr)\s*>/gi, '<$1/>') // MDX needs void tags self-closed
                .replace(
                  /(?<!\\)<(?!\/?(?:br|hr|strong|em|b|i|u|s|code|pre|kbd|details|summary|ul|ol|li|p|a|img|sub|sup|span|div|mark|font|table|thead|tbody|tr|td|th|h[1-6]|blockquote)\b|!--)/gi,
                  '\\<',
                )
                // JSX wants style as an object, not an HTML string
                .replace(/style="([^"]*)"/g, (_, css: string) => {
                  const props = css
                    .split(';')
                    .filter((d) => d.includes(':'))
                    .map((d) => {
                      const [key, ...value] = d.split(':');
                      const jsxKey = key.trim().replace(/-([a-z])/g, (_m, c: string) => c.toUpperCase());
                      return `${jsxKey}: '${value.join(':').trim()}'`;
                    });
                  return `style={{${props.join(', ')}}}`;
                }),
        )
        .join(''),
    hooks: { onBrokenMarkdownLinks: 'warn' },
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);
      const rel = params.filePath
        .replace(/\\/g, '/')
        .split('Documentation/Welcome/')[1];
      if (!rel) return result;
      if (rel === 'Welcome.md') {
        // Confluence space homepage becomes the site homepage.
        // Its first paragraph is an alert marker, so set the meta description explicitly.
        result.frontMatter.slug = '/';
        result.frontMatter.sidebar_position = 0; // pin Welcome to the top of the sidebar
        result.frontMatter.description =
          'Geo2 documentation: web-based Hub, driver mobile app, and API for delivery route planning and management.';
      } else if (!result.frontMatter.slug) {
        result.frontMatter.slug = '/' + rel.split('/').map(slugify).join('/');
      }
      return result;
    },
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
          editUrl: undefined, // source of truth is Confluence, not this repo
          showLastUpdateTime: true,
          sidebarItemsGenerator: async ({ defaultSidebarItemsGenerator, ...args }) => {
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
            const clean = (items: any[]): any[] =>
              items.map((item) => ({
                ...item,
                ...(item.label ? { label: cleanLabel(item.label) } : {}),
                ...(item.items ? { items: clean(item.items) } : {}),
              }));
            return clean(mergeSiblingDocs(await defaultSidebarItemsGenerator(args)));
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
      copyright: `Copyright © ${new Date().getFullYear()} Geo2.`,
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

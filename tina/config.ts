import { defineConfig } from 'tinacms';

// Menu rows show the file they point at, e.g. "hub-orders/index".
const pageLabel = (item: any) => ({
  label: (item?.document || 'Page').replace(/^docs\//, '').replace(/\.md$/, ''),
});
const sectionLabel = (item: any) => ({ label: `▸ ${item?.label || 'Section'}` });
const pageRef = {
  name: 'document',
  label: 'Page',
  type: 'reference' as const,
  collections: ['docs'],
  // Not `required`: Tina's GraphQL needs the same type as a section's
  // optional page. sidebars.ts skips rows left empty.
};
const sectionName ={ name: 'label', label: 'Section name', type: 'string' as const, required: true };
const sectionPage = {
  name: 'document',
  label: 'Section page',
  type: 'reference' as const,
  collections: ['docs'],
  description: 'Page opened when the section title is clicked.',
};

// TinaCMS editor for the docs. `yarn cms` runs it locally (no account needed);
// in production the admin is built into static/admin and talks to TinaCloud
// using the TINA_TOKEN / TINA_SEARCH_TOKEN secrets.
export default defineConfig({
  branch: process.env.TINA_BRANCH || 'main',
  // Public identifier of the TinaCloud project (not a secret).
  clientId: process.env.TINA_CLIENT_ID || '268687e7-c7a4-4e91-90df-e2749d750f96',
  token: process.env.TINA_TOKEN || '',
  build: { outputFolder: 'admin', publicFolder: 'static' },
  media: {
    // Images live in static/attachments and are inserted as /attachments/…,
    // which Docusaurus serves as-is — so the editor preview shows them too.
    tina: { mediaRoot: 'attachments', publicFolder: 'static' },
  },
  // Search box in the editor's document list. Indexed locally by `yarn cms`;
  // in production `tinacms build` uploads the index to TinaCloud and needs
  // TINA_SEARCH_TOKEN (TinaCloud → project → Tokens → search token).
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN || '',
      stopwordLanguages: ['eng'],
    },
    // Default is 100 characters per field, which only covers a page's intro.
    maxSearchIndexFieldLength: 2000,
  },
  schema: {
    collections: [
      {
        name: 'docs',
        label: 'Documentation',
        path: 'docs',
        format: 'md',
        ui: {
          filename: {
            // Tina rejects paths with spaces; derive a safe name from the label.
            slugify: (values) =>
              (values?.sidebar_label || '')
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, ''),
          },
        },
        fields: [
          {
            name: 'slug',
            label: 'URL slug',
            type: 'string',
            required: true,
            description: 'Page URL, e.g. /web-based-hub/hub-orders. Changing it breaks existing links.',
            ui: {
              validate: (value) =>
                /^\/[a-z0-9]+(?:[-/][a-z0-9]+)*$|^\/$/.test(value || '')
                  ? undefined
                  : 'Lowercase path starting with /, e.g. /web-based-hub/hub-orders',
            },
          },
          { name: 'sidebar_label', label: 'Sidebar label', type: 'string', required: true, isTitle: true },
          {
            name: 'description',
            label: 'Meta description',
            type: 'string',
            required: true,
            description: 'One sentence, ~155 characters. Shown in Google results and used by AI assistants.',
            ui: { component: 'textarea' },
          },
          // Only FAQ uses it (`format: mdx` for its <details> blocks); listed so saves keep it.
          { name: 'format', label: 'Format', type: 'string', options: ['md', 'mdx'], searchable: false },
          { name: 'body', label: 'Body', type: 'rich-text', isBody: true },
        ],
      },
      {
        // The site menu. One file; entries are dragged to reorder.
        name: 'sidebar',
        label: 'Docs Sidebar',
        path: 'config',
        match: { include: 'sidebar' },
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            name: 'items',
            label: 'Menu',
            type: 'object',
            list: true,
            templates: [
              { name: 'doc', label: 'Page', ui: { itemProps: pageLabel }, fields: [pageRef] },
              {
                name: 'category',
                label: 'Section',
                ui: { itemProps: sectionLabel },
                fields: [
                  sectionName,
                  sectionPage,
                  {
                    name: 'items',
                    label: 'Pages',
                    type: 'object',
                    list: true,
                    templates: [
                      { name: 'doc', label: 'Page', ui: { itemProps: pageLabel }, fields: [pageRef] },
                      {
                        name: 'subcategory',
                        label: 'Subsection',
                        ui: { itemProps: sectionLabel },
                        fields: [
                          sectionName,
                          sectionPage,
                          {
                            name: 'items',
                            label: 'Pages',
                            type: 'object',
                            list: true,
                            ui: { itemProps: pageLabel },
                            fields: [pageRef],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

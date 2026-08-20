# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Docusaurus 3 documentation site for Geo2 (a TMS/delivery route planner), deployed to Firebase Hosting at help.geo2.com. Content lives in `Documentation/Welcome/` (originally a one-time Confluence export) and is edited either directly in the repo or via Pages CMS (app.pagescms.org, configured in `.pages.yml`). The former nightly Confluence sync is retired.

## Commands

Package manager is **yarn** (yarn.lock, `--frozen-lockfile` in CI).

- `yarn start` — dev server
- `yarn build` — production build (also the main correctness check; it fails on broken links/MDX)
- `yarn serve` — serve the built site
- `yarn typecheck` — tsc
- `yarn clear` — clear Docusaurus cache

No tests or linter are configured.

## Architecture

Every doc carries frontmatter that drives the site:

- `slug` — the page URL (changing it breaks existing links)
- `sidebar_label` — sidebar text ("Hub_ Orders.md" files keep their Confluence-style names; the label is the clean part)
- `sidebar_position` — order among siblings; categories are ordered by the position of their merged sibling doc (see below)
- `description` — meta description (the homepage `Welcome.md` also sets `slug: /`)

`docusaurus.config.ts` still does the export-specific heavy lifting:

- an MDX-safety preprocessor (escapes `{}` / `<`, fixes `<br>`, converts inline `style` strings) — the Confluence-exported markdown is not MDX-safe; it also rewrites `/Documentation/attachments/...` image paths (inserted by the CMS) to page-relative so webpack bundles them
- `sidebarItemsGenerator`: merges a doc into its same-named sibling folder ("API.md" + "API/" become one category with the doc as category link), orders categories by the merged doc's `sidebar_position`, and cleans category labels ("Hub_ Orders" → "Orders")

Images live in `Documentation/attachments/` and are referenced with relative paths (`../attachments/...`) or `/Documentation/attachments/...` (CMS inserts; rewritten at build time).

`src/remark/githubAlerts.ts` converts `[!NOTE]`-style blockquotes into Docusaurus admonitions. `src/css/custom.css` holds design tokens mirrored from the geo2-site repo (accent `#05d72d`, Noto Sans).

Deploy: push to main → `deploy-docs.yml` builds and deploys to Firebase Hosting. Pages CMS commits via its GitHub App, which emits normal push events. PRs get a Firebase preview channel via `firebase-hosting-pull-request.yml`.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Docusaurus 3 documentation site for Geo2 (a TMS/delivery route planner), deployed to Firebase Hosting at help.geo2.com. Content lives in `docs/` (originally a one-time Confluence export) and is edited either directly in the repo or via Pages CMS (app.pagescms.org, configured in `.pages.yml`). The former nightly Confluence sync is retired.

## Commands

Package manager is **yarn** (yarn.lock, `--frozen-lockfile` in CI).

- `yarn start` — dev server
- `yarn cms` — dev server + TinaCMS editor at `/admin/index.html` (local mode, saves to the working tree)
- `yarn build` — production build (also the main correctness check; it fails on broken links/MDX)
- `yarn serve` — serve the built site
- `yarn typecheck` — tsc
- `yarn clear` — clear Docusaurus cache

No tests or linter are configured.

## Architecture

Every doc carries frontmatter that drives the site:

- `slug` — the page URL (changing it breaks existing links)
- `sidebar_label` — sidebar text (file names are slugs like `hub-orders.md`; TinaCMS rejects paths with spaces)
- `description` — meta description (the homepage `welcome.md` also sets `slug: /`)

Docs are parsed as CommonMark (`markdown.format: 'md'`); only `faq.md` opts into MDX. The menu is `config/sidebar.json` (read by `sidebars.ts`, edited in TinaCMS as "Docs Sidebar"): entries reference doc files, sections carry their own label, and docs missing from it are appended at the bottom rather than hidden. There is no `sidebar_position`.

Images live in `static/attachments/` and are referenced as `/attachments/...` (served as-is by Docusaurus, so the TinaCMS editor can preview them).

TinaCMS is being trialled as the editor (`tina/config.ts`). It re-serialises markdown on save (`*` bullets, unquoted frontmatter, padded tables) and flattens multi-paragraph blockquotes — use `:::note` blocks, not `> [!NOTE]`, for anything with a heading or several paragraphs.

`src/remark/githubAlerts.ts` converts `[!NOTE]`-style blockquotes into Docusaurus admonitions. `src/remark/youtubeEmbed.ts` turns a YouTube thumbnail image (or link) alone in its paragraph into an embedded player (Pages CMS rich-text strips raw `<iframe>`). `src/css/custom.css` holds design tokens mirrored from the geo2-site repo (accent `#05d72d`, Noto Sans).

Deploy: push to main → `deploy-docs.yml` builds and deploys to Firebase Hosting. Pages CMS commits via its GitHub App, which emits normal push events. PRs get a Firebase preview channel via `firebase-hosting-pull-request.yml`.

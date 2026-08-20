# Geo2 Documentation

User documentation site for [Geo2](https://geo2.com), served at [help.geo2.com](https://help.geo2.com).

## About Geo2

[Geo2](https://geo2.com) is a cloud-based transport management system (TMS) and all-in-one delivery route planner. It helps businesses and independent drivers plan, execute, and optimize the movement of goods — reducing delivery costs, shortening driving time, and simplifying day-to-day delivery operations.

The platform consists of:

- **[Web-based Hub](https://hub.geo2.com)** — browser interface for order management, AI-powered route planning and optimization, live GPS tracking, reporting, and analytics
- **Driver mobile app** (iOS/Android) — routes and stops, proof of delivery (POD) capture, barcode scanning, vehicle checks, offline mode
- **[REST API](https://api.geo2.com/v1/docs/html/)** — integration with your own systems: orders, routes, depots, vehicles, PODs, and users

Typical use cases: last-mile delivery, courier services, field logistics for small fleets and growing logistics teams.

## How it works

```
Documentation/Welcome/*.md    edited in the repo or via Pages CMS (.pages.yml)
  └─ deploy-docs.yml           builds Docusaurus and deploys to Firebase Hosting
```

- **Content lives in this repo.** Edit `Documentation/Welcome/**` directly, or through [Pages CMS](https://app.pagescms.org) (collections defined in `.pages.yml`), which commits via its GitHub App. Frontmatter (`slug`, `sidebar_label`, `sidebar_position`, `description`) drives URLs and the sidebar — keep it. The former nightly Confluence sync is retired.
- **`docusaurus.config.ts` does all the adaptation.** The original Confluence-exported markdown is not MDX-safe, so the config contains a preprocessor (escapes `{}`/`<`, fixes `<br>`, converts `style` strings, rewrites CMS-inserted `/Documentation/attachments/...` image paths), a remark plugin for `[!NOTE]`-style alerts (`src/remark/githubAlerts.ts`), clean URL slugs, and sidebar de-duplication.
- **Deploys** run on every push to `main` (including Pages CMS commits) and can be triggered manually. PRs get a Firebase preview channel with the URL posted as a comment.


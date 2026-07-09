---
slug: "/web-based-hub/hub-environment-settings/hub-geo-coding-settings"
sidebar_label: "Geo Coding Settings"
sidebar_position: 6
---


# Hub: Geo Coding Settings

Geo2 geo-codes determine the geographical location of different types of addresses:

- Organization and environment addresses
- Depot addresses
- Route start/end addresses
- Order addresses

Environment geo coding settings let you control which address elements are used during geo-coding.  The first geo-coding attempt is made using `Default` settings.  If this does not lead to an accurate location, `Auto retry` settings are used instead.

Typical settings would be:

| **Default**    | **Auto retry**   |
|:---------------|:-----------------|
| Address line 1 | Address line 1   |
| Address line 2 | Postal code      |
| Address line 3 |                  |
| City           |                  |
| Country        |                  |
| Postal code    |                  |

![Screenshot 2026-04-06 at 16.16.10.png](/Documentation/attachments/0609c0dd-b28b-4f59-8bd8-0d4ff354751c.png)

Press `Update` to save the settings.

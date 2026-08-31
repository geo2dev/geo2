---
slug: /web-based-hub/hub-environment-settings/hub-vehicle-categories-settings
sidebar_label: Vehicle Categories Settings
sidebar_position: 5
description: Vehicle categories let you match users and vehicles for a route
  assignment. By default, standard driving categories (A, B, C, etc.) are
  listed.
---
# Hub: Vehicle Categories Settings

Vehicle categories let you match users and vehicles for a route assignment. By default, standard driving categories (A, B, C, etc.) are listed. You can edit or delete them and create custom categories for your environment in Hub → Settings → Environment → Vehicle categories. Using or updating vehicle categories require an Advanced or Enterprise subscription.

![Screenshot 2026-08-31 at 12.37.48.png](/Documentation/attachments/mth3ulus-atcds60p.png)

These categories can then be assigned to vehicles (via Settings → Environment → [Hub: Vehicles Settings](Hub_%20Vehicles%20Settings.md)) and users (via Settings → Environment → [Hub: Users Settings](Hub_%20Users%20Settings.md)). It is possible to select multiple categories.

Assign categories to users by going to Settings → Environment → Users in Hub and pressing the Vehicle categories selector. Remember to press `Update` to save changes.

![Screenshot 2026-08-31 at 12.39.06.png](/Documentation/attachments/mth3z1t3-o95u6q25.png)

![Screenshot 2026-08-31 at 12.39.21.png](/Documentation/attachments/mth3z6t3-o0mlsj30.png)

Assign categories to users by going to Settings → Environment → Vehicles in Hub and pressing the Edit button to update the vehicle. On the Edit vehicle dialog, press the Vehicle categories selector. Remember to press `Save` to save changes.

![Screenshot 2026-04-06 at 16.10.26.png](/Documentation/attachments/03710add-330f-43f8-a375-f0071b0dc595.png)![Screenshot 2026-04-06 at 16.10.38.png](/Documentation/attachments/d5f044c7-ce2c-4bc3-bb65-ed99f47a93e6.png)![Screenshot 2026-04-06 at 16.10.46.png](/Documentation/attachments/9aea4c78-b182-49fb-ac09-7eb778c418b5.png)![Screenshot 2026-04-06 at 16.10.57.png](/Documentation/attachments/ac28222e-342e-4228-87d3-bb4b56c7c70b.png)

When planning a route on [Hub: Routes](../Hub_%20Routes.md)in Hub or via Geo2 API, the system will match the user’s and vehicle’s categories. Users without categories can only be assigned to vehicles without categories. Vehicles without categories can be assigned to any user.
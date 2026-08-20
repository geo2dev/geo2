---
slug: "/release-notes/release-notes-5-4-mobile-app-pending"
sidebar_label: "Release Notes 5.4 (mobile app: pending)"
sidebar_position: 136
description: "Geo2 documentation: Release Notes 5.4 (mobile app: pending)"
---


# Release Notes 5.4 (mobile app: pending)

## Release Date

Hub:

2026-08-17

## New Features

| **Summary** | **Description** |
| --- | --- |
| Hub: Calendar view for Routes | A new **Calendar view** is now available on Routes page, providing a clearer way to review and manage routes by vehicle or driver. Users can switch between daily and weekly views, navigate across dates, filter displayed vehicles or drivers, and see key route information such as planned start time, number of stops, weight, and volume. The calendar also helps identify scheduling overlaps, multi-day routes, and potential vehicle capacity issues at a glance. Selecting a route opens its details, stops, and map directly below the calendar without leaving the page. Standard route actions, including adding orders, are also available from the selected route. |
| Hub: Route cost calculation | A new **Planned/Actual costs** section is now available on Route view page to help track planned and actual route expenses. Set the environment currency, define hourly costs for drivers and vehicles, and add a vehicle cost per distance unit in Environment settings. Geo2 then calculates **driver time, vehicle time, mileage, total route cost, and average cost per stop** automatically. Planned costs are based on planned route duration and distance, while actual costs become available once the route is completed. This provides a clearer view of route operating costs and makes it easier to compare planned performance with real results. |
| Hub: Bulk route update | A new **Bulk edit** option is now available on the Routes page, allowing multiple routes to be updated at once. Select the routes you want to change and update shared fields such as **status, driver, participants, vehicle, area, planned start time, route start/end, and vehicle checks**. Only the fields entered in the Bulk edit dialog are updated, while all other route data remains unchanged. Completed routes are excluded from bulk editing, and the option is **not available in Calendar view**. Existing subscription and permission restrictions still apply, making large-scale route management faster and less repetitive. |
| Hub: Route duplication with stops | A new **Duplicate route** action is now available on the Route view page to help planners quickly recreate routes for future dates or carry unfinished work forward. You can create one or multiple copies, optionally repeat them **daily or weekly**, and choose whether to create the route without stops, copy all stops, or move only undelivered stops. Key route details such as vehicle, driver, participants, area, depot and vehicle checks are carried over automatically, while execution data and PODs are reset. When moving undelivered stops, only stops with no POD or with Failed or Partially successful POD status are transferred, and they are removed from the original route. New duplicated routes are created in **Planning** status and are not optimized automatically. |

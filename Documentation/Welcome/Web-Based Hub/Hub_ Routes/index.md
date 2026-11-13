---
slug: /web-based-hub/hub-routes
sidebar_label: Routes
sidebar_position: 10
description: Routes are groups of orders typically handled in a single vehicle trip.
---
# Hub: Routes

![Routes views - list, table, calendar, map | Geo2 Hub](https://img.youtube.com/vi/j_eYLX4xz3I/hqdefault.jpg)

Routes are groups of orders typically handled in a single vehicle trip.

## Routes List

To list routes in the environment, select `Routes` from the menu in Hub. By default, routes created in the last 30 days are listed. You can select to list all routes in the environment. Full filtering and sorting criteria are only available for the 30-day tab.

![Screenshot 2026-11-12 at 15.40.44.png](/Documentation/attachments/mwdnnv3d-gf59g22k.png)

On Routes page in Hub, you can choose how routes are displayed using one of the available view options:

- List view
- Table (grid) view
- Calendar view
- Map view

### List View

List view displays route information in a structured list. For each route, you can see:

- Route key
- Route status
- Number of stops (orders)
- Trip number
- Area
- Driver
- Participants
- Vehicle
- Depot
- Created date and time
- Planned start and end date/time
- Planned distance and duration
- Actual start and end date/time
- Actual distance and duration

Click the `route key` to open the route on a separate page, where you can manage and plan it by adding orders (stops) and breaks, optimizing the route, and performing other route-related actions.

![Screenshot 2026-11-12 at 15.41.18.png](/Documentation/attachments/mwdnomgw-58noxxqq.png)

### Table (Grid) View

Table view displays the same route information but in a grid format: 

- Route key
- Route status
- Number of stops (orders)
- Trip number
- Area
- Driver
- Participants
- Vehicle
- Depot
- Created date and time
- Planned start and end date/time
- Planned distance and duration
- Actual start and end date/time
- Actual distance and duration

You can customize the table by choosing which columns to show or hide, allowing you to focus on the route information that is most relevant to you. Click the `: (three-dot) icon` next to a column label and select `Hide column` to hide that column. To manage several columns at once, select `Manage columns` and choose which columns to show or hide.

![Screenshot 2026-11-12 at 15.41.49.png](/Documentation/attachments/mwdnpmp4-gpc5azng.png)

![Screenshot 2026-11-12 at 15.41.56.png](/Documentation/attachments/mwdnpqmz-vi5bflfi.png)

![Screenshot 2026-11-12 at 15.42.03.png](/Documentation/attachments/mwdnpu5z-g34yng2g.png)

Click the `route key` to open the route on a separate page, where you can manage and plan it by adding orders (stops) and breaks, optimizing the route, and performing other route-related actions.

### Calendar View

Calendar view helps you review and manage routes based on their planned start date and time. 

![Screenshot 2026-11-12 at 15.43.28.png](/Documentation/attachments/mwdnrdc4-60djpg5q.png)

You can switch between Weekly and Daily views and use the navigation controls to move between dates. Select `Today` to return to the current day or week.

![Screenshot 2026-11-12 at 15.44.11.png](/Documentation/attachments/mwdnsper-gcvwwo58.png)

![Screenshot 2026-11-12 at 15.44.18.png](/Documentation/attachments/mwdnssir-jflmgak0.png)

![Screenshot 2026-11-12 at 15.44.25.png](/Documentation/attachments/mwdnsvjm-pdtzg3h8.png)

Routes can be grouped by vehicle, driver or area. You can also choose which vehicles, drivers and areas to display in the calendar. 

![Screenshot 2026-11-12 at 15.45.16.png](/Documentation/attachments/mwdnuce6-3q0ozm9m.png)

![Screenshot 2026-11-12 at 15.45.23.png](/Documentation/attachments/mwdnui2e-rw2nuj3y.png)

![Screenshot 2026-11-12 at 15.45.37.png](/Documentation/attachments/mwdnun7c-2cg2l044.png)

Use Transpose to change the calendar layout by switching the position of dates and vehicles/drivers.

![Screenshot 2026-11-12 at 15.46.34.png](/Documentation/attachments/mwdnvjxv-sh8bo1qr.png)

![Screenshot 2026-11-12 at 15.46.40.png](/Documentation/attachments/mwdnvnab-m8oar0gh.png)

By default, each route card displays key route information, including:

- Route key
- Planned start time
- Number of stops
- Route weight and volume, when enabled in `Environment settings → Display preferences`

If the route weight or volume reaches or exceeds the capacity of the assigned vehicle, the relevant capacity information is highlighted to make potential capacity issues easier to identify.

You can configure what information is displayed in `Settings → Routes → Calendar route card layout`. Learn more about configuring **[calendar route card layout](https://help.geo2.com/web-based-hub/hub-environment-settings/hub-routes-settings)**.

![Screenshot 2026-11-12 at 15.48.52.png](/Documentation/attachments/mwdnyagu-wywqtrkf.png)

Routes are displayed according to their planned start time. If several routes have the same planned start time, they are ordered by their creation date and time. If a route starts on one day and finishes on another, it is displayed across both days in the calendar.

You can still use the available filters to narrow down the routes displayed in Calendar view, for example by depot.

Click a `route card` to open its details below the calendar. The expanded route details include the list of stops and a map, allowing you to review the route without leaving Calendar view.

![Screenshot 2026-11-12 at 15.51.29.png](/Documentation/attachments/mwdo20om-r2amn5mg.png)

![Screenshot 2026-11-12 at 15.51.36.png](/Documentation/attachments/mwdo23bl-xl52jz9l.png)

From the expanded route details, you can use the available `Actions` to perform route-related operations, such as adding orders. You can also open the route on its dedicated Route page in a separate browser tab.

Learn more about Calendar view. 

### Map View

The **Map view** allows you to visualise and manage multiple routes on a single map, making it easier to review stop locations, compare routes, and adjust delivery plans. You can select one or more routes using checkboxes in **List or Table view** and switch to Map view to display them, with up to **40 routes visible at once**. Each route is displayed in a different colour to help you distinguish between them.

![Screenshot 2026-11-12 at 16.00.35.png](/Documentation/attachments/mwdodnu0-ny616x93.png)

![Screenshot 2026-11-12 at 16.00.43.png](/Documentation/attachments/mwdodqwt-7o1a3vf8.png)

If no routes are selected, the map opens empty, allowing you to manually add routes or unassigned orders.

![Screenshot 2026-11-12 at 16.01.16.png](/Documentation/attachments/mwdoe8it-epwdwnmd.png)

In Map view, you can:

- View multiple routes and their stops on an interactive map.
- Review route details and expand or collapse stop cards to see delivery information.
- Select individual stops or multiple stops directly on the map.
- Move stops between routes to adjust your delivery plans.
- Add existing orders to routes or work with orders that haven't been assigned to a route yet.
- Move orders to the **No route** group for later assignment.
- Add and manage route breaks.
- Manage routes and stops using the available actions.

![Screenshot 2026-11-12 at 16.02.20.png](/Documentation/attachments/mwdoflnw-7mvf0wb3.png)

You can switch between **List, Table, Calendar, and Map views** directly from the Routes page without losing your selected routes and other applicable filters.

Map view is available with Advanced and Enterprise subscriptions for users with the required permissions.

Learn more about **[Map view](https://help.geo2.com/web-based-hub/hub-routes/hub-route-map-view)**.

### Filters

To narrow down the list of routes, you can set a filter in the Filtering section on the left side of the list. The following filters are available:


| **Field** | **Operator** | **Description** |
| ---------------- | ------------ | ------------------------------------------------------------------------------------ |
| Created | From/To | Range of route creation date/time. |
| Status | Select | Choose the status of a route: - Planning - Planned - Released - Started - Completed |
| Key | Contains | Match the route key. |
| Trip | From/To | Range of route trip number. |
| Depot | Select | Key of depot assigned to the route. |
| Driver | Select | Display name of user assigned to the route. |
| Vehicle | Select | Key of vehicle assigned to the route. |
| Area | Select | Key of area assigned to the route. |
| Purpose code | Select | Filter routes by one or more purpose codes configured for the current environment. |
| Planned start | From/To | Range of route planned start date/time. |
| Planned end | From/To | Range of route planned end date/time. |
| Planned duration | From/To | Range of route planned duration. |
| Planned distance | From/To | Range of route planned distance. |
| Actual start | From/To | Range of route actual start date/time. |
| Actual end | From/To | Range of route actual end date/time. |
| Actual duration | From/To | Range of route actual duration. |
| Actual distance | From/To | Range of route actual distance. |


![Screenshot 2026-11-12 at 16.02.53.png](/Documentation/attachments/mwdok4jc-cz7jdfmd.png)

## Bulk Route Update

Bulk route update lets you edit multiple routes at the same time from Routes page in Hub. It is useful when several routes need the same change, so you do not have to open and update each route individually.

For example, you can use bulk update to:

- Release multiple planned routes at once before drivers start their work.
- Assign the same driver, vehicle, or area to several routes.
- Change the planned start time for a group of routes.
- Add participants to multiple routes.
- Change the route start or end location for several routes.
- Apply the same vehicle check requirements to multiple routes.

To update routes in bulk:

1. Go to Routes.
2. Open the Last 30 days view.
3. Select the routes you want to update.
4. Click `Bulk edit`.
5. In the Edit routes dialog, enter values only for the fields you want to change.
6. Click `Update`.

The dialog displays the number of selected routes and their route keys so you can confirm which routes will be updated. Route keys cannot be changed using bulk update.

![Screenshot 2026-11-12 at 16.06.46.png](/Documentation/attachments/mwdolrsy-6diqrh8c.png)

You can update the following route properties:

- Trip
- Status
- Driver
- Participants
- Route start
- Route end
- Vehicle
- Area
- Planned start
- Vehicle check on route start
- Vehicle check on route completion

![Screenshot 2026-11-12 at 16.06.53.png](/Documentation/attachments/mwdom1na-arbf24oj.png)

When changing the Route start or Route end, a map is available to help you select the required location.

Only fields that you change in the Edit routes dialog are updated. For example, if you select 20 routes and specify only a new Planned start time, Geo2 updates the planned start time for all selected routes while keeping their existing drivers, vehicles, areas, statuses, and other settings unchanged.

This makes it possible to safely update one or several shared properties without overwriting unrelated route information.

Completed routes cannot be edited using bulk update.

If your selection includes completed routes, Geo2 excludes them from the update and shows:

- The number of selected routes.
- The number of excluded routes.
- The reason why the routes were excluded.

The remaining eligible routes can still be updated.

Bulk route update is available to users who have permission to edit routes.

The feature is available across subscription levels. However, individual fields may still be restricted depending on your subscription. The same subscription limitations that apply when creating or editing a route also apply to bulk route updates.

## Mileage Report Export

The **Mileage report export** feature allows you to generate reports for completed routes, including actual distance travelled, route purpose, driver, vehicle, start and end locations, and other relevant information. These reports can be used for mileage tracking, accounting, tax reporting, and reimbursement purposes.

### How to export a mileage report

1. Navigate to **Routes** in Hub.
2. Select the **Last 30 days** or **All** tab, depending on the reporting period you need.
3. Apply filters if necessary, such as date range, driver, vehicle, or other available options.
4. Optionally, select specific routes using the checkboxes.
5. Click `Export mileage report`.
6. Choose your preferred export format: **CSV, PDF, or XLSX**.

If no routes are selected, the report will include all completed routes matching your currently applied filters. If you select specific routes, only those completed routes will be included.

Only routes with a **Completed** status can be included in a mileage report. Routes with other statuses will not be exported.

![Screenshot 2026-11-13 at 13.16.01.png](/Documentation/attachments/mwey0qww-46lrfhoj.png)

![Screenshot 2026-11-13 at 13.16.08.png](/Documentation/attachments/mwey0v44-eh264d7h.png)

### Information included in the report

Each mileage report contains the following information:

- **Route key** — unique identifier of the route.
- **Purpose code** — assigned route purpose, such as Business, Client visit, or Personal use.
- **Driver** — full name of the assigned driver.
- **Vehicle** — key of the vehicle assigned to the route.
- **Actual start and end date/time** — when the route was started and completed.
- **Start location and address** — name and full address of the starting location.
- **End location and address** — name and full address of the ending location.
- **Actual distance** — total distance recorded for the completed route.
- **Distance unit** — miles or kilometres, based on your environment preferences.

If a route starts or ends at a depot, the report includes the depot name and full address. For routes starting or ending at a stop location, the corresponding stop address is included.

At the bottom of the report, you will find a **Totals** section showing the total number of routes and total actual distance travelled.

![Screenshot 2026-11-13 at 13.16.36.png](/Documentation/attachments/mwey1as7-v5chcnhs.png)

### Subscription levels and permissions

Mileage report export is available with **Pro, Advanced, and Enterprise** subscriptions. The export option is disabled for users on the Free subscription level.

Environment **Admins and Managers** can export mileage reports for all completed routes they have access to. Environment Users cannot export mileage reports, while User Admins do not have access to the Routes page.
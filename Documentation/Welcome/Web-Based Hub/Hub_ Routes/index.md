---
slug: /web-based-hub/hub-routes
sidebar_label: Routes
sidebar_position: 10
description: Routes are groups of orders typically handled in a single vehicle trip.
---
# Hub: Routes

Routes are groups of orders typically handled in a single vehicle trip.

## Routes List

To list routes in the environment, select `Routes` from the menu in Hub. By default, routes created in the last 7 days are listed. You can select the other two tabs to show routes created in the last 30 days or list all routes in the environment. Full filtering and sorting criteria are only available for the 7-day and 30-day tabs.

![Screenshot 2026-09-21 at 14.12.19.png](/Documentation/attachments/mub81fsz-lxih36o7.png)

On Routes page in Hub, you can choose how routes are displayed using one of the available view options:

- List view
- Table (grid) view
- Calendar view

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

![Screenshot 2026-09-21 at 14.12.19.png](/Documentation/attachments/mub8p4xm-0xj8icso.png)

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

![Screenshot 2026-09-21 at 14.13.29.png](/Documentation/attachments/mub8r2jv-ulscozyr.png)

![Screenshot 2026-09-21 at 14.20.33.png](/Documentation/attachments/mub8r89m-e0a139ui.png)

![Screenshot 2026-09-21 at 14.21.10.png](/Documentation/attachments/mub8ttgr-89u2x0en.png)

Click the `route key` to open the route on a separate page, where you can manage and plan it by adding orders (stops) and breaks, optimizing the route, and performing other route-related actions.

### Calendar View

Calendar view helps you review and manage routes based on their planned start date and time. 

![Screenshot 2026-09-21 at 14.13.37.png](/Documentation/attachments/mub8x9qz-ocn9lfof.png)

You can switch between Weekly and Daily views and use the navigation controls to move between dates. Select `Today` to return to the current day or week.

![Screenshot 2026-09-21 at 14.21.27.png](/Documentation/attachments/mub8xpcx-y5dfxpbf.png)

![Screenshot 2026-09-21 at 14.21.39.png](/Documentation/attachments/mub8y7b9-ayvo82qo.png)

![Screenshot 2026-09-21 at 14.21.47.png](/Documentation/attachments/mub8yc57-7l6khz83.png)

Routes can be grouped by vehicle or by driver. You can also choose which vehicles or drivers to display in the calendar. 

Use Transpose to change the calendar layout by switching the position of dates and vehicles/drivers.

![Screenshot 2026-09-21 at 14.21.56.png](/Documentation/attachments/mub8ynny-kb8t4wz5.png)

Each route card displays key route information, including:

- Route key
- Planned start time
- Number of stops
- Route weight and volume, when enabled in `Environment settings → Display preferences`

If the route weight or volume reaches or exceeds the capacity of the assigned vehicle, the relevant capacity information is highlighted to make potential capacity issues easier to identify.

Routes are displayed according to their planned start time. If several routes have the same planned start time, they are ordered by their creation date and time. If a route starts on one day and finishes on another, it is displayed across both days in the calendar.

You can still use the available filters to narrow down the routes displayed in Calendar view, for example by depot.

Click a `route card` to open its details below the calendar. The expanded route details include the list of stops and a map, allowing you to review the route without leaving Calendar view.

![Screenshot 2026-09-21 at 14.22.26.png](/Documentation/attachments/mub8zivh-mkmrp7ot.png)

From the expanded route details, you can use the available `Actions` to perform route-related operations, such as adding orders. You can also open the route on its dedicated Route page in a separate browser tab.

![Screenshot 2026-09-21 at 14.22.36.png](/Documentation/attachments/mub90501-xmfrlp1c.png)

![Screenshot 2026-09-21 at 14.22.47.png](/Documentation/attachments/mub9097f-aspgj33m.png)

### Filters

To narrow down the list of routes, you can set a filter in the Filtering section on the left side of the list. The following filters are available:


| **Field** | **Operator** | **Description** |
| ---------------- | ------------ | ----------------------------------------------------------------------------------- |
| Created | From/To | Range of route creation date/time. |
| Status | Select | Choose the status of a route: - Planning - Planned - Released - Started - Completed |
| Key | Contains | Match the route key. |
| Trip | From/To | Range of route trip number. |
| Depot | Select | Key of depot assigned to the route. |
| Driver | Select | Display name of user assigned to the route. |
| Vehicle | Select | Key of vehicle assigned to the route. |
| Planned start | From/To | Range of route planned start date/time. |
| Planned end | From/To | Range of route planned end date/time. |
| Planned duration | From/To | Range of route planned duration. |
| Planned distance | From/To | Range of route planned distance. |
| Actual start | From/To | Range of route actual start date/time. |
| Actual end | From/To | Range of route actual end date/time. |
| Actual duration | From/To | Range of route actual duration. |
| Actual distance | From/To | Range of route actual distance. |


---
slug: /web-based-hub/hub-orders/hub-ai-route-building
sidebar_label: AI Route Building
sidebar_position: 3
description: AI route building proposes routes across all available vehicles in
  each depot that can accommodate a selected set of orders.
---
# Hub: AI Route Building

## Introduction

AI route building proposes routes across all available vehicles in each depot that can accommodate a selected set of orders. You are not bound by the results of route building - once routes are created, you can continue to fully adjust them. An example of a scenario in which route building can be applied effectively:

1. You have all the orders planned to be delivered tomorrow.
2. You have not yet created any routes for tomorrow.
3. You select all orders for tomorrow in the Orders list and request routes to be built for them.
4. Assuming vehicles have sufficient capacities and each vehicle’s route being able to be driven in a reasonable amount of time, the result will be a set of routes that handle groups of orders while minimising geographical overlap between vehicle routes and the time taken for each route.

This process is called *known-demand route building*, because all the vehicles and orders going into it are identified in advance.

It is up to you to ensure that you are not overcommitting a vehicle by it being assigned to more than one route in overlapping time windows.

## Start AI Route Building

When you select orders on Orders page in Hub, you initiate the building of routes across all available vehicles for the selected orders by pressing the `AI route building` button:

![Screenshot 2026-09-01 at 15.43.08.png](/Documentation/attachments/mtipxm6z-1yfd98y8.png)

Learn how to run the route building:

[Load building.mp4](/Documentation/attachments/e97e6213-f28e-4a79-9740-a13c618fb1aa.mp4)

This will open the `AI route building` dialog. At the top of the dialog, you will see the number of selected orders before. If you have selected an order that is already assigned to a route, it will be excluded and the reason is provided.

![Screenshot 2026-09-01 at 15.43.17.png](/Documentation/attachments/mtipxsim-fu1r68ri.png)

## AI Route Building Options

You have a number of options to fine-tune the AI route building:


| **Option** | **Description** |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Planned start | This will become the planned date/time for each route that is generated. The start time will come from Settings → Environment -> [Hub: Routes Settings](../Hub_%20Environment%20Settings/Hub_%20Routes%20Settings.md). |
| Maximum driving hours | The maximum number of hours allowed for each vehicle’s route. The limit is 24 hours. The number will come from Settings → Environment -> [Hub: Routes Settings](../Hub_%20Environment%20Settings/Hub_%20Routes%20Settings.md)**.** |
| Offload by | *Offloading* is the removal of an order from a route. This can occur if there is insufficient vehicle capacity to accommodate all orders or if orders have to be removed to fit a vehicle route within the maximum driving hours. You can specify in what order orders are offloaded to meet these constraints: - `Distance - offload furthest first`. This will offload starting with orders furthest from the depot. This option is useful if you are best equipped to handle locations close to the depot and you may consider outsourcing/delaying the handling of orders further away. - `Distance - offload closest first`. This is the opposite of the option above. - `Weight - offload heaviest first`. This will offload starting with the heaviest orders. This option is useful if you are best equipped to handle lighter orders and you may consider outsourcing/delaying the handling of the heaviest orders. - `Weight - offload lightest first`. This is the opposite of the option above. - `Volume - offload largest first`. This will offload starting with the bulkiest orders. This option is useful if you are best equipped to handle smaller orders and you may consider outsourcing/delaying the handling of the bulkiest orders. - `Volume - offload smallest first`. This is the opposite of the option above. It may not be possible to express your preferences fully with these offloading options - remember that you can control the orders going into the route building and also adjust the routes once generated. |
| Vehicle categories | Vehicle categories let you group your fleet by type — for example vans, refrigerated trucks, or heavy-duty vehicles. Categories are defined in Settings → Vehicle categories in Hub and assigned to individual vehicles when adding or editing them in Settings → Vehicles**** in Hub.When building routes with AI, you can use the `Vehicle categories` selector (next to the *Offload by* field) to control which vehicles are available for planning. All categories are selected by default, so the entire fleet is considered. Deselecting a category excludes its vehicles from AI route building — only vehicles belonging to the selected categories will be assigned to routes. |
| Minimize vehicles | Select this option if you want the route building to attempt to fit the orders on fewer than your full list of vehicles. |
| Consider time windows | Select this option if you want to automatically optimize generated routes considering assigned order time windows ([Hub: Order Creation and Editing](Hub_%20Order%20Creation%20and%20Editing.md)). This option is only enabled if at least 1 order has required time windows. Otherwise, generated routes will optimized considering just traffic and distance data. Vehicle dimensions specified in Settings → Environment -> [Hub: Vehicles Settings](../Hub_%20Environment%20Settings/Hub_%20Vehicles%20Settings.md) will be considered automatically for building a route. You are not obliged to accept the suggested stops order. |


![Screenshot 2026-09-01 at 15.43.24.png](/Documentation/attachments/mtiq298t-xvyxecee.png)

![Screenshot 2026-09-01 at 15.43.31.png](/Documentation/attachments/mtiq2cud-wzx602pl.png)

You can dismiss the dialog by pressing the `Close` button. If you press `Generate`, the route building will start.

![Screenshot 2026-09-01 at 15.48.17.png](/Documentation/attachments/mtiq33au-38764h1f.png)

## AI Route Building Process

Once the `Generate` button is pressed, you will be redirected to Route building page in Hub. At the top of the page, you will see the selected before data and options:

- Orders - number of orders sent for route building.
- Depots - number of depots assigned to selected orders.
- Vehicles - number of vehicles used in route building.
- Run by - display name of a user who ran route building.
- Created - date/time when route building was processed.
- Planned start - date/time selected as a planned start for routes. See [Hub: AI Route Building](Hub_%20AI%20Route%20Building.md) above.
- Maximum driving hours - maximum number of hours allowed for each vehicle’s route. See [Hub: AI Route Building](Hub_%20AI%20Route%20Building.md) above.
- Offload by - option to remove orders if there is insufficient vehicle capacity to accommodate all orders, etc. See [Hub: AI Route Building](Hub_%20AI%20Route%20Building.md) above.
- Minimize vehicles - option to attempt to fit orders on fewer than your full list of vehicles.
- Consider time windows - option to automatically optimize generated routes considering assigned order time windows .

On the right side of the page, you can see the live logs notifying you about the status of route building. On the left side, once the route building is completed, you can find the list of created routes with the number of orders in it, assigned depot, and vehicle.  If you have selected orders from more than 1 depot, logs and route building results will be shown right after processing each depot separately.

## Reviewing the Results

Once routes are generated, you will see the results in the table view on the left side of Route building page:


| **Name** | **Description** |
| -------- | ----------------------------------------------------------------------------- |
| Route | Route key. The name consists of a route planned date, depot, and trip number. |
| Orders | Number of orders in each route. |
| Depot | Depot key. Assigned to a route depot. |
| Vehicle | Vehicle key. Assigned to a route vehicle. |


![Screenshot 2026-09-01 at 15.49.22.png](/Documentation/attachments/mtiq4ibo-uax08zx7.png)

The list of routes could be scrollable to check all created routes. By pressing the route key on one of the created routes, the selected route will be opened in the new tab of the browser.

On the right side of the page, under the Logs title, there are messages that can give you more details about either what and why went wrong or just notify you about some changes.

Examples:

“Removed 19 orders during vehicle assignment” means that there was not enough vehicle capacity in any of the vehicles so these orders were not considered during the route building.

“Route stops: 2, 2, 5, 7.” means that 4 routes have been generated with 2, 2, 5 and 7 stops in them.

“Minimise vehicles removed 6 vehicles” means that the Minimize vehicles option chosen before running the route building has led to removing 6 vehicles instead of the full list of vehicles you have in the Environment settings.

“Depot address geo-location is not sufficiently accurate” means that you might need to go to Settings → Environment -> [Hub: Depots Settings](../Hub_%20Environment%20Settings/Hub_%20Depots%20Settings.md) and check if your depot address was properly geocoded.

Route building creates routes like any other - you can access them through the Routes page in Hub. You can visualise generated routes by pressing the `Map view` button at the top right corner - see [Hub: Map View](../Hub_%20Map%20View.md).

You can return to the route building results later by pressing the `AI route building logs` button in the menu in Hub and pressing the card of the route building session you want to review.

![Screenshot 2026-09-01 at 16.01.32.png](/Documentation/attachments/mtiqk3ip-wlbbx4eu.png)


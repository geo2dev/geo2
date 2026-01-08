
[Web-Based Hub](../../Web-Based%20Hub.md) > [Hub: Orders](../Hub_%20Orders.md)

# Hub: AI Route Building

- [Introduction](#introduction)
- [Start AI Route Building](#start-ai-route-building)
  - [AI Route Building Options](#ai-route-building-options)
  - [AI Route Building Process](#ai-route-building-process)
  - [Reviewing the Results](#reviewing-the-results)

# Introduction

AI route building proposes routes across all available vehicles in each depot that can accommodate a selected set of orders. You are not bound by the results of route building - once routes are created, you can continue to fully adjust them. An example of a scenario in which route building can be applied effectively:

1. You have all the orders planned to be delivered tomorrow.
2. You have not yet created any routes for tomorrow.
3. You select all orders for tomorrow in the Orders list and request routes to be built for them.
4. Assuming vehicles have sufficient capacities and each vehicle’s route being able to be driven in a reasonable amount of time, the result will be a set of routes that handle groups of orders while minimising geographical overlap between vehicle routes and the time taken for each route.

This process is called *known-demand route building*, because all the vehicles and orders going into it are identified in advance.

It is up to you to ensure that you are not overcommitting a vehicle by it being assigned to more than one route in overlapping time windows.

# Start AI Route Building

When you select orders on Orders page, you initiate the building of routes across all available vehicles for the selected orders by pressing the `AI route building` button:

![Screenshot 2025-08-29 at 14.42.59.png](../../../attachments/f324e932-979c-4384-a96d-87bba5fc6f44.png)

Learn how to run the route building:

[Load building.mp4](/wiki/download/attachments/27599455/Load%20building.mp4?version=1&modificationDate=1701357969563&cacheVersion=1&api=v2&width=500)

This will open the `AI route building` dialog. At the top of the dialog, you will see the number of selected orders before. If you have selected an order that is already assigned to a route, it will be excluded and the reason is provided.

![Screenshot 2025-08-29 at 14.49.23.png](../../../attachments/842a56d5-6b87-4755-8bfa-e86cf9908197.png)

## AI Route Building Options

You have a number of options to fine-tune the route building:

|  **Option**           |  **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Planned start         | This will become the planned date/time for each route that is generated. The start time will come from [Hub: Environment Settings](../Hub_%20Environment%20Settings.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Maximum driving hours | The maximum number of hours allowed for each vehicle’s route. The limit is 24 hours. The number will come from [Hub: Environment Settings](../Hub_%20Environment%20Settings.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Offload by            | *Offloading* is the removal of an order from a route. This can occur if there is insufficient vehicle capacity to accommodate all orders or if orders have to be removed to fit a vehicle route within the maximum driving hours. You can specify in what order orders are offloaded to meet these constraints: <br/><ul><li><p><code>Distance - offload furthest first</code>.  This will offload starting with orders furthest from the depot.  This option is useful if you are best equipped to handle locations close to the depot and you may consider outsourcing/delaying the handling of orders further away.</p></li><li><p><code>Distance - offload closest first</code>.  This is the opposite of the option above.</p></li><li><p><code>Weight - offload heaviest first</code>.  This will offload starting with the heaviest orders.  This option is useful if you are best equipped to handle lighter orders and you may consider outsourcing/delaying the handling of the heaviest orders.</p></li><li><p><code>Weight - offload lightest first</code>.  This is the opposite of the option above.</p></li><li><p><code>Volume - offload largest first</code>.  This will offload starting with the bulkiest orders.  This option is useful if you are best equipped to handle smaller orders and you may consider outsourcing/delaying the handling of the bulkiest orders.</p></li><li><p><code>Volume - offload smallest first</code>.  This is the opposite of the option above.</p></li></ul> It may not be possible to express your preferences fully with these offloading options - remember that you can control the orders going into the route building and also adjust the routes once generated. |
| Minimize vehicles     | Select this option if you want the route building to attempt to fit the orders on fewer than your full list of vehicles.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Consider time windows | Select this option if you want to automatically optimize generated routes considering assigned order time windows ([Hub: Orders](../Hub_%20Orders.md)). This option is only enabled if at least 1 order has required time windows. Otherwise, generated routes will optimized considering just traffic and distance data. Vehicle dimensions specified in [Hub: Environment Settings](../Hub_%20Environment%20Settings.md) will be considered automatically for building a route. You are not obliged to accept the suggested stops order.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

You can dismiss the dialog by pressing the `Close` button. If you press `Generate`, the route building will start.

![Screenshot 2025-08-29 at 14.49.30.png](../../../attachments/a80d4f7b-82d2-4fdb-8f04-ab438388f692.png)

## AI Route Building Process

Once the `Generate` button is pressed, you will be redirected to Route building page. At the top of the page, you will see the selected before data and options:

- Orders - number of orders sent for route building.
- Depots - number of depots assigned to selected orders.
- Vehicles - number of vehicles used in route building.
- Ran by - display name of a user who ran route building.
- Created - date/time when route building was processed.
- Planned start - date/time selected as a planned start for routes. See [Hub: AI Route Building](Hub_%20AI%20Route%20Building.md)above.
- Maximum driving hours - maximum number of hours allowed for each vehicle’s route. See [Hub: AI Route Building](Hub_%20AI%20Route%20Building.md) above.
- Offload by - option to remove orders if there is insufficient vehicle capacity to accommodate all orders, etc. See [Hub: AI Route Building](Hub_%20AI%20Route%20Building.md) above.
- Minimize vehicles - option to attempt to fit orders on fewer than your full list of vehicles.
- Consider time windows - option to automatically optimize generated routes considering assigned order time windows .

On the right side of the page, you can see the live logs notifying you about the status of route building. On the left side, once the route building is completed, you can find the list of created routes with the number of orders in it, assigned depot, and vehicle.  If you have selected orders from more than 1 depot, logs and route building results will be shown right after processing each depot separately.

## Reviewing the Results

Once routes are generated, you will see the results in the table view on the left side of Route building page:

|  **Name**    |  **Description**                                                              |
|:-------------|:------------------------------------------------------------------------------|
| Route        | Route key. The name consists of a route planned date, depot, and trip number. |
| Orders       | Number of orders in each route.                                               |
| Depot        | Depot key. Assigned to a route depot.                                         |
| Vehicle      | Vehicle key. Assigned to a route vehicle.                                     |

![Screenshot 2025-08-29 at 14.50.31.png](../../../attachments/659f1810-dc76-43d7-a722-629127db94e0.png)

The list of routes could be scrollable to check all created routes. By pressing the route key on one of the created routes, the selected route will be opened in the new tab of the browser.

On the right side of the page, under the Logs title, there are messages that can give you more details about either what and why went wrong or just notify you about some changes.

Examples:

“Removed 19 orders during vehicle assignment” means that there was not enough vehicle capacity in any of the vehicles so these orders were not considered during the route building.

“Route stops: 2, 2, 5, 7.” means that 4 routes have been generated with 2, 2, 5 and 7 stops in them.

“Minimise vehicles removed 6 vehicles” means that the Minimize vehicles option chosen before running the route building has led to removing 6 vehicles instead of the full list of vehicles you have in the Environment settings.

“Depot address geo-location is not sufficiently accurate” means that you might need to go to [Hub: Environment Settings](../Hub_%20Environment%20Settings.md) and check if your depot address was properly geocoded.

Route building creates routes like any other - you can access them through the Routes page. You can visualise generated routes by pressing the `Map view` button - see [Hub: Map View](../Hub_%20Map%20View.md).

![Screenshot 2025-08-29 at 14.50.40.png](../../../attachments/fef5c366-410f-428e-a211-d59ba8ca92e7.png)![Screenshot 2025-11-05 at 16.49.02.png](../../../attachments/90696b81-38b5-4155-9df8-5b091f3be44d.png)

You can return to the route building results later by pressing the `Route building logs` button in the header toolbar and pressing the card of the route building session you want to review.

![Screenshot 2025-08-29 at 14.48.33.png](../../../attachments/5bdceb5e-6f1d-49c4-82c9-4ba532c686e5.png)

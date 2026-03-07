
[Mobile App](../Mobile%20App.md)

# Mobile App: Routes and Stops

- [Introduction](#introduction)
- [Route Statuses](#route-statuses)
- [Starting Route](#starting-route)
- [Current Route](#current-route)
- [Route Creation](#route-creation)
- [Adding/Creating Stops](#adding-creating-stops)
  - [Address Scanning](#address-scanning)
  - [Address Voice Search](#address-voice-search)
  - [Stop details](#stop-details)
  - [Add Existing Order](#add-existing-order)
- [Adding/Displaying Breaks](#adding-displaying-breaks)
- [Drag-and-Drop Stops](#drag-and-drop-stops)
- [Calibrating Route](#calibrating-route)
- [Optimizing Route with Time Windows](#optimizing-route-with-time-windows)
- [Optimizing Route without Time Windows](#optimizing-route-without-time-windows)
- [Editing and Deleting Route](#editing-and-deleting-route)
- [Editing and Deleting Stop](#editing-and-deleting-stop)
- [Vehicle Loading with Photos](#vehicle-loading-with-photos)
- [Navigation](#navigation)
- [Switching Between Stops](#switching-between-stops)
- [Stop Packages](#stop-packages)
- [Stop Products](#stop-products)
- [Stop Packages with Products](#stop-packages-with-products)
- [Recording Stop Duration](#recording-stop-duration)

# Introduction

`Routes` page lets you view routes that have been released to you.  By default, routes planned for the current date are shown, but you can select other dates to show routes for those dates.  The green dot below the date means that you have planned routes assigned to you for this date.

![App 25.png](../../attachments/ed726956-4fcf-49f6-867a-66a8a8ebf0c4.png)

# Route Statuses

There are three route statuses relevant to the mobile app:

|  **Status**                                                                                 |  **Description**                                                                             |
|:--------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------|
| Released <br/>![IMG_6675 1.png](../../attachments/cf4ccb80-ab80-46e2-a20c-558b55922cc1.png) | The route has been released to you.                                                          |
| Started <br/>![](../../attachments/3303e95a-5f5c-4517-b34a-e52edc1e1a9c.png)                | You have started to deliver the route, linking your location tracking to the route.          |
| Completed <br/>![](../../attachments/e332276f-4462-4d08-8a1b-80492ced124f.png)              | You have finished delivering the route.  Location tracking is no longer linked to the route. |

# Starting Route

You can click the 3 dots menu on a route card and press the `Start` button to start the route.  Later, the `Start` button is replaced with the `Pause` button to temporarily pause the route (location tracking for this route will be paused).  To continue the route again, press the `Continue` button. 

![App 36.png](../../attachments/b6d3515e-5f9c-4320-9f7e-217e997a0242.png)![App 37.png](../../attachments/a4c2b183-f912-4646-b1fb-a232d3ee3b7d.png)![App 38.png](../../attachments/7e850b61-3db6-4c62-b4a0-63b35ef8a1e9.png)![App 39.png](../../attachments/8d44ee46-dfde-4c70-84af-1724beb7ef9c.png)

You can also click on the route card to view its details.  At the bottom, you will find the `Start route` button.  After starting the route, the `Start route` button is replaced with the `Complete route` button. To temporarily pause a route press the `arrow` icon near the `Complete route` button and select `Pause route`.  To continue the paused route again, you need to press the `Continue route` button.  It's not possible to continue the route that has been completed already. 

![App 40.png](../../attachments/5dfc52e1-f13f-4737-9914-ea6aec329b13.png)![App 41.png](../../attachments/b27ebe41-a767-4a40-9910-27e96ca4120f.png)![App 42.png](../../attachments/0f29d630-dde5-428b-a74d-520d1c264756.png)![App 43.png](../../attachments/7a9b6958-55ad-47b9-9645-9ba78c0e3973.png)

# Current Route

When you have started a route and location tracking is enabled (the route is not paused), it will be displayed with a green frame around the route card on Routes page.

![App 37.png](../../attachments/a4c2b183-f912-4646-b1fb-a232d3ee3b7d.png)

# Route Creation

Depending on your permissions in the environment, you can create a route in the mobile app as well as in Geo2 Hub. To create a route, you need to press the `Plan route` in Menu or on Routes page. If you do not have any assigned to you routes for today, you will also see the `Plan route` button at the bottom of Map page.

![App 44.png](../../attachments/20086dde-12d4-4923-b9be-942ed604ec12.png)![App 45.png](../../attachments/6e6e9889-8095-4d48-96a5-836dcf164fe9.png)![App 46.png](../../attachments/a05c5f32-8d79-44ec-a942-bc35090fa2e4.png)![App 47.png](../../attachments/8167b20a-5abd-4004-bc1f-e05686c853b6.png)![App 48.png](../../attachments/a43e1495-0c79-4bb9-9566-34106d56bc48.png)

After pressing the button, Plan route page will be displayed where you need to fill in the next fields:

![App 49.png](../../attachments/d5edd074-2ab2-4332-b606-30f9a089a2a6.png)

|  **Fields**    |  **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |  **Required field**    |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|
| Route key      | Unique route key within an environment.  It will be automatically generated from a date, depot, and trip number if you leave it empty.   It can be a route number, for example, 1, 2, 3, etc.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Yes                    |
| Route start    | Before planning your route, you will be asked to use your current geolocation as a route start point but it can be changed. By pressing the Route start field, you can also select other depots from your environment, first stop location (first order recipient’s address), or search address. If you select to search for an address, the Search address dialog will be displayed where you can start typing and selecting an address from the drop-down which appears.  If no suitable match is found, press the `Can't find the address you need?` button and continue entering the address in the relevant address fields manually. Once it is done, press the `Confirm` button. Your address will be saved as a route start.                                                                                                                                                                                         | Yes                    |
| Planned start  | Expected dispatch date/time of the route from the route start location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Yes                    |
| Route end      | By default, the Return to start option is selected for a route end but it can be changed. By pressing the Route end field, you can also select depots from your environment, last stop location (last order recipient’s address), or search address. If you select to search for an address, the Search address dialog will be displayed where you can start typing and selecting an address from the drop-down which appears.  If no suitable match is found, press the `Can't find the address you need?` button and continue entering the address in the relevant address fields manually. Once it is done, press the `Confirm` button. Your address will be saved as a route end and you will be redirected back to Plan route page.                                                                                                                                                                                    | Yes                    |
| Vehicle        | Vehicle assigned to the route. If there are no vehicles yet in your environment, press on the `Tap to add a vehicle` to add it. Vehicle dimensions (“Gross weight”, “Height”, “Width”, and “Length” fields) can be used for route calibration/optimization with vehicle restrictions. The system will factor these dimensions into route building to generate the most efficient outcomes, for example, to avoid bridges with height restrictions, narrow roads unsuitable for wider vehicles, or areas with weight limits that could affect the selected route.                                                                                                                                                                                                                                                                                                                                                            | No                     |
| Driver         | User responsible for the route.  By default, it's a user creating a route from the mobile app.  It can be changed.  Once a route is released, the assigned user sees the route in the mobile app. A driver has permission to start/complete the route. Once the route is started and location tracking enabled, the driver’s location will be displayed [Hub: Routes](../Web-Based%20Hub/Hub_%20Routes.md) and on the [Hub: Analytics](../Web-Based%20Hub/Hub_%20Analytics.md) on Dashboard page, as well as on the recorded [Hub: Vehicle Checks](../Web-Based%20Hub/Hub_%20Vehicle%20Checks.md). The driver’s location can also be optionally displayed on [Hub: Environment Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings.md). However, for POD's, the geolocation of the user who records it will be captured (either the driver or participant). This field is displayed only for Enterprise level users. | No                     |
| Participants   | Up to 2 additional users assigned to the route. Once released, the assigned participant sees the route in the mobile app. While the driver retains the ability to start and complete a route, participants will have access to a route to check the list of stops and create POD's for them. Participants field is displayed only to users with Enterprise subscription level.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | No                     |

![App 50.png](../../attachments/7d94d7c6-5f03-4214-a6cd-90d4c4c00e35.png)![App 51.png](../../attachments/37bda247-7a9d-47db-b7d8-f7d8135b4826.png)![App 52.png](../../attachments/7bcd4ff4-4552-456f-ba14-94dfa52fed4a.png)![App 53.png](../../attachments/4f636f81-94dc-44d2-ba76-6721bb7b8ba4.png)![App 54.png](../../attachments/366bf743-7348-4046-ab36-cf1bf5c6067e.png)![App 55.png](../../attachments/e5a319bd-791c-4172-a474-f287ce1a8f1a.png)![App 56.png](../../attachments/b5b509e7-eb53-434b-8fad-b2f53e2c60a2.png)

After filling in all the fields, you need to press the `Create` button to save the route data.  You will be redirected to Route view page where you can add stops to the route.

![App 57.png](../../attachments/e2f39d73-2d74-4cfb-9ef0-60a5b9f336d9.png)

# Adding/Creating Stops

Depending on your permissions in the environment settings, you can create or add an existing order to a route in the mobile app or Geo2 Hub. Press the `Add first stop` button at the bottom or `Tap to add a stop` in the stop list on the Route view page. The Search dialog appears, allowing you to type a recipient address and select from the results, use your current location, scan an address, use voice search, or add an existing order.

![App 58.png](../../attachments/7b135545-3e30-476f-b848-0a5146d42f71.png)![App 60.png](../../attachments/6cd7b502-0061-4323-8fb1-a4babd500de7.png)![App 59 (1).png](../../attachments/aab21fd6-306b-4f9c-8089-5a296983aa7b.png)![App 61.png](../../attachments/50282e80-b296-4434-bf17-96293802b43e.png)

Once the address is selected and stop is added, you can continue typing to add more stops.

## Address Scanning

To scan an address, press the `scan` icon on the Tap to add a stop (more stops) search bar or the `Scan address` button on the Search address dialog. The Scan address page will appear. Point your camera steadily at the address and resize the green frame if needed. After scanning, click the `Confirm` button or `Try again` to rescan. Pressing `Confirm` sends the scanned address to find matching results. Select an address from the results to add a stop to the route.

![App 61.png](../../attachments/50282e80-b296-4434-bf17-96293802b43e.png)![App 63.png](../../attachments/2c40ada9-f52a-43ee-881b-e44d854544cc.png)![App 64.png](../../attachments/00f25dc1-39c2-439b-961b-ea9f4815953c.png)![App 65.png](../../attachments/1c985060-c4a4-4178-a539-a6a4dd389e7b.png)

## Address Voice Search

To use voice search for an address, press the `mic` icon on the Tap to add a stop (more stops) search bar or the `Voice search` button in the Search address dialog. The Voice search dialog appears. English is selected by default, but you can change it to any preferred language. Speak the address; the system will recognize it. If the detected address is correct, press `Confirm` to find matching results. Select an address from the results to add a stop to the route. If the detected address is incorrect, press `Try again`.

![App 65.png](../../attachments/1c985060-c4a4-4178-a539-a6a4dd389e7b.png)![App 67.png](../../attachments/3102e6af-b86d-43fc-ac0f-88774c14cba6.png)![App 68.png](../../attachments/6964744e-e1dc-498b-9217-456f4d6d3670.png)![App 66.png](../../attachments/224e3eeb-8342-4f04-96a9-f406595758b3.png)![App 69.png](../../attachments/17a1105d-5c4c-45a8-8867-704e3b39a4d1.png)![App 70.png](../../attachments/5e34cf95-7c6a-4221-bbc7-5a12bf87e04b.png)

## Stop details

Once the stop is added to the route, you can adjust its details:

![App 72.png](../../attachments/744a54f1-7e8a-4c8e-9c05-78db788bad1b.png)![App 73.png](../../attachments/4163040e-97b7-4c86-863e-d315fd9a72cd.png)![App 74.png](../../attachments/78df80b7-47da-4613-a645-ca3d32907e19.png)

|  **Fields**             |  **Description**                                                                                                                                                                                                                                                                              |  **Required fields**    |
|:------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|
| Type                    | Delivery or Collection.                                                                                                                                                                                                                                                                       | Yes                     |
| Order key               | Order identifier unique within the environment, for example, an order number 1, 2, 3, 4, etc.  By default, it will be autogenerated from the current date and time. You can click on the `Scan icon` to scan the key.                                                                         | Yes                     |
| Planned                 | For information - date/time when the order is planned to be delivered/collected.  By default, it's current date/time.                                                                                                                                                                         | No                      |
| Committed               | For information - date/time that has been agreed with the customer for delivery/collection. This field is available only for users with Enterprise subscription level.                                                                                                                        | No                      |
| Required from           | For information - from when the customer requires the order to be delivered/collected. It can be used for route optimization with time windows.                                                                                                                                               | No                      |
| Required to             | For information - till when the customer requires the order to be delivered/collected. It can be used for route optimization with time windows.                                                                                                                                               | No                      |
| Stop duration           | The amount of time the delivery vehicle is expected to remain at a route stop. This is used when orders are first brought into a route and, together with drive times, stop durations are intended to lead to route durations that are more realistic than if only drive time was considered. | Yes                     |
| Tab - Recipient details | Optional recipient contact details like contact name, email, phone and mobile phone numbers.                                                                                                                                                                                                  | Yes                     |
| Tab - Packages          | Optional package barcodes.  Barcodes can be either typed in manually or scanned.                                                                                                                                                                                                              | No                      |
| Delivery instructions   | Optional notes for drivers that are shown in the mobile app.  For example, "leave with reception".                                                                                                                                                                                            | No                      |

You can set parcel placement (e.g., "front right" or "left shelf") and optionally add photos for a delivery order by pressing the `Set placement in the vehicle` button at the bottom of the page. Press `Confirm` to save the placement, which can be updated later. The placement and photo count appear on the stop card, and full-size photos can be viewed in Stop details page.

![App 76.png](../../attachments/46c31aaf-53b9-4f66-b8e4-fdcff8058f87.png)![App 75.png](../../attachments/630b1454-56ff-40a2-b932-05ebd26b3f58.png)![App 77.png](../../attachments/e6dddeb7-e2c7-4106-b0ad-d7cd35d81ea1.png)

If a route starts or ends at a depot, it will be used as a stop depot: the route start depot will be populated to the delivery stop, and the route end depot will be populated to the collection stop. If a route does not use a depot as its start or end point but there is a default depot selected in [Hub: Environment Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings.md), it will be used as a stop depot. If there is no default depot, the Depot field inside a stop will be blank.

After adding all stops to the route, you need to press the `Done` button at the top of dialog to run automatic route optimization find the fastest route.  You will be redirected back to Route view page where you can see the added stop cards.  It will be shown on the map when you slide down the bottom sheet.  You can press the `Start route` button to start the route or add more orders.

![App 78.png](../../attachments/aaf20d54-8b18-4e21-9902-5c5bec3dba78.png)![App 79.png](../../attachments/7a1bcffd-0384-4029-a277-f0cd0884e788.png)![App 80.png](../../attachments/d206db24-237c-46ad-9d50-fb9e097d6cc0.png)![App 81.png](../../attachments/c35fd4a0-4270-400f-8d24-ae066b8dae47.png)

## Add Existing Order

To add an existing order to a route, press the `Add existing order` button on Search address dialog. You need to type in the order key or scan it and all the information from this order will be automatically pre-populated to the fields.  You cannot edit the order information on this page. Most of the fields will be disabled for editing. To edit the order, you need to add it to the route, then you can go inside the order and press the `Edit stop` button.

**If a route starts or ends at a depot, orders with depots must match**: the delivery depot must align with the start, and the collection depot with the end. Orders without assigned depots can be added to any route, and if a route does not use a depot as its start or end point, any order, with or without a depot, can be added.

If this order is already assigned to another route, you will be asked to confirm whether you want to move it from one route to another.

![App 83 (1).png](../../attachments/50724fd0-6e9f-4a7a-91af-74b851154204.png)![App 82.png](../../attachments/eda5a3da-9278-497e-8b08-58e5a0ad4aed.png)![App 83.png](../../attachments/c92fffc5-03f5-4301-8951-60fbdf51d655.png)

After adding all stops to the route, you need to press the `Done` button at the top of dialog to run automatic route optimization find the fastest route.  You will be redirected back to Route view page where you can see the added stop cards.  It will be shown on the map when you slide down the bottom sheet.  You can press the `Start route` button to start the route or add more orders.

# Adding/Displaying Breaks

The route view shows breaks alongside order stops. With the required permission in the environment, you can add a break to a route in the mobile app as well as in Geo2 Hub.

To add a break, press the `Add break` button at the top of the stop list.  This button is only available when at least 1 stop is added to the route. You will see a prompt to specify a break in minutes.  By pressing the `Add` button, it will be added to the end of the stop list.  The break can be dragged-and-dropped to any position in the route. The route will be automatically calibrated, taking new breaks into account.

![App 84.png](../../attachments/1bc737e9-d1a9-4ef4-b2ac-a84b9b9f3f23.png)![App 85.png](../../attachments/ff1090c3-68d8-41c5-ba90-1521fb876143.png)![App 86.png](../../attachments/684788fd-d290-4eaa-b5a4-47aaeb81f28d.png)![App 87.png](../../attachments/9f86f945-e189-4abf-a9ea-b04199f64cfe.png)![App 88.png](../../attachments/d14f2e40-e974-46fb-85fb-04ea8bb7c7cb.png)![App 89.png](../../attachments/6df2256d-47d7-4124-a439-be4471abfa1a.png)

# Drag-and-Drop Stops

Stop cards could be drag-and-dropped to any position of the route.  For it, you need to press on the stop card and move it.  Remember to press the `Save` button to save your changes.  Once saved, a route will be automatically calibrated updating timings and distance.

Route start and end cards cannot be moved.

![App 90.png](../../attachments/1a94b2ea-c95b-48f1-b4e6-0d96a892aca0.png)![App 91.png](../../attachments/c6775c87-aa45-4210-aa78-69935aca461b.png)![App 92.png](../../attachments/4a313765-05c2-4ca0-9c16-a0bcd0cb0912.png)

# Calibrating Route

Once stops are added to a route, we run automatic route optimization and calibration so you can choose the fastest and/or shortest route. You can also press the `Actions` (arrow) button and select `Calibrate` option to update the planned timings and distance of the route without modifying the order list.  Example: You created 4 stops one by one, didn't change their position, and clicked on the `Calibrate` button.  The route didn't change but the planned time changed.  Changes are saved automatically.

The Calibrate option is available if a route has at least 1 order. 

Before route calibration:

![App 93.png](../../attachments/14814784-6371-4c91-b2ad-ef34137fe402.png)

After route calibration:

![App 94.png](../../attachments/3e558106-c13c-4c55-8b50-b78938444bdf.png)

We apply automatic calibration in most cases so you don't need to press `Calibrate`:

- removing stops from a route and pressing `Save`
- adding, changing, deleting a break inside a route
- changing (shuffling) stop order inside a route and pressing on `Save`
- changing start and end points in a route if there is at least 1 stops
- changing route planned start time if there is at least 1 stop
- changing vehicle in a route if there is at least 1 stop
- changing time-at-stop inside order or route stops

Exceptions when we don't apply automatic calibration: 

- editing a stop (editing recipient address inside stops)
- manually set up a route inside a stop (done from Hub)
- deleting an order on Stop details page
- making changes in a depot address or vehicle speed factor

If the route already calibrated, the Calibrate button will be disabled.

![App 95.png](../../attachments/e6a4955c-177d-4b54-9e85-f3caf0edceab.png)

# Optimizing Route with Time Windows

After adding stops to a route, we run automatic route optimization and calibration so you can select the fastest or shortest route. If the route includes at least one stop with specified Required from and/or Required to fields and you have an Advanced or Enterprise subscription, the system optimizes the route with time windows. To use the Optimize with time windows option separately, press the `Actions` (arrow) button and select the `Optimize with time windows` option. Route optimization requires at least two stops, with at least one stop having specified required time slots (either “Required from”, “Required to”, or both).

![App 96.png](../../attachments/8220864e-87da-4f14-9f1a-fb5b46a0b916.png)

When you press `Optimize with time windows`, the geo-locations of the assigned route start point and the stops will be used to suggest an optimum driving route as well as to match the required time windows for each stop. The time window specified using the `Required from` and `Required to` fields inside a stop is not considered a hard constraint by the system. That is, the system doesn't fail if the stop cannot be visited during the time window; instead, the system tries to find a route that visits the stop during its time window, but if time-window violations are inevitable, the system tries to find a solution that minimizes the time-window violation time for all stops in the problem.

If you have provided vehicle dimensions (“Gross weight”, “Height”, “Width”, and “Length” fields) for the vehicle assigned to the route, it will be used for optimization with vehicle restrictions. The system will factor these dimensions into route building to generate the most efficient outcomes, for example, to avoid bridges with height restrictions, narrow roads unsuitable for wider vehicles, or areas with weight limits that could affect the selected route.

Changes are saved automatically.

Before route optimization:

![App 97.png](../../attachments/c01322a8-c4cc-47b7-ae94-5c596576aedf.png)![App 98.png](../../attachments/90162971-de95-46f3-884f-4ba38d0803ae.png)

After route optimization with time windows:

![App 99.png](../../attachments/a03843e2-071b-4c86-ab07-66c469b9a786.png)![App 100.png](../../attachments/e79fd886-b3ec-4f8a-a2ae-3ed35d6b8793.png)

If the route is already optimized with time windows, the Optimize button will be disabled.

![App 101.png](../../attachments/4d483b54-c365-4262-937f-366f9b57cae3.png)

# Optimizing Route without Time Windows

After adding stops to a route, we run automatic route optimization and calibration so you can select the fastest or shortest route. If stops lack required time windows ("Required from" and/or "Required to" fields), the system optimizes without time windows. To use the Optimize without time windows option separately, press the `Actions` (arrow) button and select the `Optimize without time windows` option.

Route optimization is available when a route has at least two orders.

![App 103.png](../../attachments/aabd5e63-54bc-45c4-83e4-6f96c68053a5.png)

When you press `Optimize without time windows`, the geo-locations of the assigned route start location and the stops will be used to suggest an optimum driving route.  The order of the stops may be changed and the planned timings and distance of the route updated.  If you have provided vehicle dimensions (“Gross weight”, “Height”, “Width”, and “Length” fields) for the vehicle assigned to the route, it will be used for optimization with vehicle restrictions. The system will factor these dimensions into route building to generate the most efficient outcomes, for example, to avoid bridges with height restrictions, narrow roads unsuitable for wider vehicles, or areas with weight limits that could affect the selected route.

Changes will be saved automatically.

Before optimization without time windows:

![App 102.png](../../attachments/9a540083-e2ab-489f-81cf-2137cdb38039.png)

After optimization without time windows:

![App 104.png](../../attachments/23326a34-906a-4ab3-8194-f2861a37dca8.png)

If the route is already optimized without time windows, the Optimize button will be disabled.

![App 105.png](../../attachments/1008e5b7-93d3-4310-83c5-755b887d616c.png)

# Editing and Deleting Route

By pressing `3 dots` icon on a route card on Routes page, the dialog will be opened with the following options: Edit, Delete, and Select routes for bulk route deletion.  You can create, edit, and delete routes only if you have permission to do it - Manager or Admin role in the current environment.

![App 106.png](../../attachments/93d484e1-e4c7-498a-ac82-ba20e3056791.png)

You can also click on the `3 dots` icon on the Route view page and select the `Edit route` or `Delete route` option.

![App 107.png](../../attachments/26ed8321-f871-401b-9e65-b3010615ec83.png)

After clicking on the `Edit` button, you will be redirected to Edit route page where you can change some route details and save changes.

After clicking on the `Delete` button, the confirmation dialog will be displayed where you need to confirm the deletion of the route.  It's not possible to delete the route that has the Started or Completed status. 

# Editing and Deleting Stop

To edit or permanently delete a stop, you need to go to the Route view page and click on the stop card.  You will be redirected to Details page.  At the bottom of the page, you will see the `Edit` and `Delete stop` buttons.  After clicking on the `Edit` button, you will be redirected to Edit stop page where you can make some changes and save them.  After clicking on the `Delete` button, the confirmation dialog will be displayed where you need to confirm the deletion of the stop. 

![App 108.png](../../attachments/8a61c9a4-0da7-4d7e-a093-d1d11537eae4.png)![App 109.png](../../attachments/d670331b-4433-4488-bf42-e2761fa76ea1.png)

To select multiple stops, press the `Actions` (arrow) button on the Route view page and choose the `Select stops` option. You can remove stops from a route (stops remain available to add to another route) or create one POD for multiple stops. If your environment settings disallow multiple PODs per order per route, you cannot select stops with existing PODs because you cannot create a new POD.

![App 110.png](../../attachments/842eba08-4130-4678-8a15-15471e3d9628.png)![App 111.png](../../attachments/9f5b7f12-b5c3-4c78-8789-8ba6f47af7bd.png)![App 112.png](../../attachments/02b96c99-aa2e-4422-bb9a-94c4779e9b62.png)

# Vehicle Loading with Photos

Once a route is optimized and ready-to-go, you can load your vehicle with the assigned delivery stops by selecting `Load vehicle` from the `Actions` (arrow) button on Route view page. Stops appear in reverse order to help you load items that will be delivered last first, with **collection orders excluded**. For each stop, you can set parcel placement (e.g., "front right" or "left shelf") and optionally add photos. Press `Confirm` to save the placement, which can be updated later. Note that new photos will replace the old ones. Once your orders are loaded to the vehicle, press `Finish loading` to return to Route view page.

![App 113.png](../../attachments/a356174d-3fba-42c3-8f28-e1b6855c9715.png)![App 114.png](../../attachments/2b50d592-f7cd-4906-9fff-f201798a8157.png)![App 116.png](../../attachments/9f1f26a0-4a90-4da0-b7ba-4a549d397c34.png)![App 115.png](../../attachments/ab3bead9-fbb0-4129-bb63-3cb9c6d86ea0.png)![App 117.png](../../attachments/330e3896-fcbf-4286-a930-f412948249e2.png)![App 118.png](../../attachments/8e4b5037-62b3-4b64-bd35-1ffcb3d2bd16.png)

The placement and photo count appear on the stop card, and full-size photos can be viewed in the Order details page.

![App 119.png](../../attachments/cd1a38cd-cc73-4586-a58c-9e01bf565948.png)![App 120.png](../../attachments/9e97aeb9-bee5-4255-a7e0-cbc12ce1cc3c.png)

You can also set placement and upload photos when adding or editing an order.

![App 121.png](../../attachments/3b04c78a-f55e-460d-a1b3-9c3236bb8877.png)![App 122.png](../../attachments/13e7e080-bb7f-412b-bc5f-d51fe4b96663.png)![App 123.png](../../attachments/0781086f-5306-47c3-bee1-0edfbf29ed38.png)![App 124.png](../../attachments/554d5179-c77a-44ab-8d08-d95d0b0a205f.png)

# Navigation

The navigation icon in the top right of Details (of a certain stop) page panel lets you jump out to a navigation app (Google Maps, Apple Maps, Waze, etc.) to help you navigate in an unfamiliar area.

![App 125.png](../../attachments/ebba79e9-4dcc-4eb4-a267-555600a08404.png)

# Switching Between Stops

You can see navigation arrows on Stop details page above the bottom-screen dialog to quickly switch between route stops. These arrows move dynamically with the bottom sheet as it changes height during scrolling. Next to the arrows, the stop numbers of the previous and next stops are displayed, helping you know which stops you can navigate to. The left arrow is hidden on the first stop, and the right arrow is hidden on the last stop, ensuring navigation options are only shown when applicable. If there is only one stop in the route, no arrows are displayed at all.

![App 127.png](../../attachments/ab403fd7-e0bd-4020-a560-73854627c883.png)![App 126.png](../../attachments/79f9272e-b71f-4d24-bcac-b96393e8af04.png)

# Stop Packages

You can add packages to a stop either in [Hub: Orders](../Web-Based%20Hub/Hub_%20Orders.md)or in the mobile app during adding or editing of a stop.  Packages will be then displayed on the Stop details page in the mobile app with a barcode, description, height, width, depth, volume, and weight depending on the data provided in [Web-Based Hub](../Web-Based%20Hub.md)or in the mobile app.

Example when adding packages from the mobile app:

![App 128.png](../../attachments/3d1d8839-7940-47ff-bfbc-dfdfcb1e0341.png)![App 129.png](../../attachments/7c7a553d-01e2-42b7-9648-efec121c9741.png)![App 130.png](../../attachments/65b6db53-777c-4316-ade2-c43f4d0ae72c.png)

Example when adding packages from Hub:

![Screenshot 2025-12-26 at 14.15.46.png](../../attachments/1f6f7678-de41-47c5-b03e-430c335f256f.png)![App 131.png](../../attachments/278e7521-9b06-4ef4-877a-7646f8972411.png)

# Stop Products

You can add products to a stop in [Hub: Orders](../Web-Based%20Hub/Hub_%20Orders.md).  Pre-defined products will be then displayed on the Stop details page in the mobile app with a product code, description, quantity, and weight depending on the data provided in [Web-Based Hub](../Web-Based%20Hub.md).

![App 132.png](../../attachments/4a73e905-1ba1-4518-8e66-89edd9cca497.png)

# Stop Packages with Products

You can add packages and products to a stop and link them in [Hub: Orders](../Web-Based%20Hub/Hub_%20Orders.md).  Pre-defined packages with products will be then displayed on the Stop details page in the mobile app. For a package, a barcode, height, width, depth, volume, and weight can be displayed depending on the data provided in Geo2 Hub. For a product, a product code, description, quantity, and weight can be displayed depending on the data provided in Geo2 Hub. To check products added to a package, press the `Products` button on a package. The list of products added to the package will be displayed. Press `Cross` on the dialog to close it.

![App 133.png](../../attachments/bbaba95d-ec1a-463e-a83a-be5346a37b45.png)![App 134.png](../../attachments/49a62d9d-d683-4ac5-aeee-31f8e4a7a4c2.png)

# Recording Stop Duration

`Record stop duration` setting in [Hub: Environment Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings.md)enables the mobile app’s feature to record the actual time spent at a stop by a driver.

![Screenshot 2025-12-26 at 15.04.51.png](../../attachments/fd23d63f-a2ed-4e3f-8225-62255d372172.png)

Once enabled, the `Record arrival` button will appear on Stop details page within a route in the mobile app. Tapping it records the arrival time for that stop. The button will then be replaced by `Record departure` option. The Create POD option becomes available once you record arrival. You can either generate a proof of delivery (POD) before recording the departure or simply log the departure time without a POD.

![App 135.png](../../attachments/dd844997-b47e-4bee-8ae0-a8dc41af0951.png)![App 136.png](../../attachments/5228ad2a-c54a-41b9-8ff3-6c8e44c7dd78.png)

If you press `Record arrival` and then tap the `close` icon to return to Route view page, you will be prompted to confirm whether you want to record the departure time for this stop.

- Selecting `Yes` will record the departure time.
- Selecting `No` will keep the stop duration counting, and you will be redirected to Route view page.

If you pause or complete a route, the departure time for the stop where you pressed `Record arrival` will be recorded automatically. The same applies if you fully close the app.

If you press `Record arrival` at a stop and return to Route view page while the stop duration is still counting, you can select multiple stops and press `Record arrival` again.

- If one of the selected stops has an ongoing stop duration, you will be asked whether you want to overwrite the arrival time.
- If none of the selected stops have an ongoing stop duration, you will be asked to confirm whether the departure time for the previous stop should be recorded automatically.
- If selected stops have an ongoing stop duration and you try to select more stops, you will be asked to confirm whether the departure time for the previous stops should be recorded automatically.

We allow **overwriting arrival and departure times for stops** when necessary. Once both arrival and departure times are recorded, the actual stop duration is calculated based on the time difference. This duration appears on the stop card on Route view page in Hub, allowing you to compare the planned and actual stop duration and take action when necessary.

![Screenshot 2025-12-26 at 15.18.45.png](../../attachments/712782f9-8ab5-41ea-93d9-e4a65e3864df.png)

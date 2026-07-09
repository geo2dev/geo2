---
slug: "/mobile-app/mobile-app-routes-and-stops"
sidebar_label: "Routes and Stops"
sidebar_position: 6
---


# Mobile App: Routes and Stops

# Introduction

`Routes` page lets you view routes that have been released to you, each displayed with a small map preview. You can access the Routes page from the Menu options. By default, routes planned for the current date are shown, but you can select other dates to show routes for those dates.  The green dot below the date means that you have planned routes assigned to you for this date.

![20260428_17.png](../../attachments/f6d9a9fa-01a7-4993-88ca-cf87158d30bd.png)

# Route Statuses

There are three route statuses relevant to the mobile app:

| **Status** | **Description** |
| --- | --- |
| Released <br/>![IMG_6675 1.png](../../attachments/cf4ccb80-ab80-46e2-a20c-558b55922cc1.png) | The route has been released to you. |
| Started <br/>![](../../attachments/3303e95a-5f5c-4517-b34a-e52edc1e1a9c.png) | You have started to deliver the route, linking your location tracking to the route. |
| Completed <br/>![](../../attachments/e332276f-4462-4d08-8a1b-80492ced124f.png) | You have finished delivering the route.  Location tracking is no longer linked to the route. |

# Starting Route

You can click on the route card on Routes page to view its details.  At the bottom, you will find the `Start route` button.  After starting the route, the `Start route` button is replaced with the `Complete route` button. To temporarily pause a route (location tracking for this route will be paused) press the `arrow` icon near the `Complete route` button and select `Pause route`.  To continue the paused route again, you need to press the `Continue route` button.  It's not possible to continue the route that has been completed already. 

![20260429_28.png](../../attachments/cb5e8fb5-edfe-4c35-9aae-7ff5153f168f.png)![20260429_29.png](../../attachments/deb664b6-8c52-4a8e-a48b-0305e06e3d11.png)![20260429_30.png](../../attachments/b0884317-9584-481c-8b4e-0b914e74c824.png)![20260429_31.png](../../attachments/26068c10-61be-4f86-9325-25dc7dbc62fa.png)![20260429_32.png](../../attachments/ae3da1a7-20c8-48da-beef-e29ed14af2b0.png)![20260429_33.png](../../attachments/db40d886-66ab-498d-8c63-13cf28dc097e.png)

# Current Route

When you have started a route and location tracking is enabled (the route is not paused), it will be displayed with a green frame around the route card on Routes page.

![20260429_34.png](../../attachments/3ac96991-123f-4ac5-a6d7-eeb93747d325.png)

You can also temporarily pause a route (location tracking for this route will be paused) from Routes calendar by pressing the 3 dots icon on a route card and selecting `Pause route` option.  To continue the paused route again, you need to press the `Continue route` button.  It's not possible to continue the route that has been completed already.

![20260429_35.png](../../attachments/491180e8-7bc5-40a2-adfd-312a1195fcee.png)![20260429_36.png](../../attachments/7ebc7ca4-1179-4c6a-9e73-008d49a962d9.png)

# Route Creation

Depending on your permissions in the environment, you can create a route in the mobile app as well as in Geo2 Hub. To create a route, you need to press the `Plan route` in Menu or on Routes page. If you do not have any assigned to you routes for today, you will also see the `Plan route` button at the bottom of Map page.

![20260429_37.png](../../attachments/eb204bac-9ad1-4f63-acd5-c55286274f8f.png)![20260429_39.png](../../attachments/0c0111dc-162e-4040-901d-a37c11bd6a78.png)![20260429_38.png](../../attachments/df332339-7d9c-43fc-ac8a-5dee824b4f9f.png)

After pressing the button, Create route page will be displayed where you need to fill in the following fields:

![20260429_40.png](../../attachments/17d3ee02-9438-4aa4-b91c-e6ed489cec75.png)

| **Fields** | **Description** | **Required field** |
| --- | --- | --- |
| Route key | Unique route key within an environment.  It will be automatically generated from a date, depot (if it exists in your environment), and trip number if you leave it empty.   It can be a route number, for example, 1, 2, 3, etc. | Yes |
| Route start | Before planning your route, you will be asked to use your current geolocation as a route start point but it can be changed. By pressing the Route start field, you can also select other depots from your environment if they exist, first stop location (first stop recipient’s address), or search address. If you select to search for an address, the Search address dialog will be displayed where you can start typing and selecting an address from the drop-down which appears.  If no suitable match is found, press the `Can't find the address you need?` button and continue entering the address in the relevant address fields manually. Once it is done, press the `Confirm` button. Your address will be saved as a route start. | Yes |
| Planned start | Expected dispatch date/time of the route from the route start location. By default, it is taken from your settings. | Yes |
| Route end | By default, the Return to start option is selected for a route end but it can be changed. By pressing the Route end field, you can also select depots from your environment if they exist, last stop location (last stop recipient’s address), or search address. If you select to search for an address, the Search address dialog will be displayed where you can start typing and selecting an address from the drop-down which appears.  If no suitable match is found, press the `Can't find the address you need?` button and continue entering the address in the relevant address fields manually. Once it is done, press the `Confirm` button. Your address will be saved as a route end and you will be redirected back to Create route page. | Yes |
| Vehicle | Vehicle assigned to the route. If there are no vehicles yet in your environment, press on the `Tap to add a vehicle` to add it. Vehicle dimensions (“Gross weight”, “Height”, “Width”, and “Length” fields) can be used for route calibration/optimization with vehicle restrictions. The system will factor these dimensions into route building to generate the most efficient outcomes, for example, to avoid bridges with height restrictions, narrow roads unsuitable for wider vehicles, or areas with weight limits that could affect the selected route. | No |
| Driver | User responsible for the route.  By default, it's a user creating a route from the mobile app.  It can be changed.  Once a route is released, the assigned user sees the route in the mobile app. A driver has permission to start/complete the route. Once the route is started and location tracking enabled, the driver’s location will be displayed [Hub: Routes](../Web-Based%20Hub/Hub_%20Routes.md) and on the [Hub: Analytics](../Web-Based%20Hub/Hub_%20Analytics.md) on Analytics page in Hub, as well as on the recorded [Hub: Vehicle Checks](../Web-Based%20Hub/Hub_%20Vehicle%20Checks.md). The driver’s location can also be optionally displayed on [Hub: Environment Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings.md). However, for POD's, the geolocation of the user who records it will be captured (either the driver or participant). This field is displayed only for Enterprise level users. | No |
| Participants | Up to 2 additional users assigned to the route. Once released, the assigned participant sees the route in the mobile app. While the driver retains the ability to start and complete a route, participants will have access to a route to check the list of stops and create POD's for them. Participants field is displayed only to users with Enterprise subscription level. | No |

![20260429_41.png](../../attachments/2d5f2dc0-26c8-4cb1-96fa-235b0a483260.png)![20260429_42.png](../../attachments/e9c667cf-eeb7-4fce-af5f-e0f7417ebe79.png)![20260429_43.png](../../attachments/f2e20003-6bd7-48ee-8157-0c7ffeb90598.png)

After filling in all the fields, you need to press the `Create` button to save the route data.  You will be redirected to Route view page where you can add stops to the route.

![20260429_44.png](../../attachments/9492c237-00b2-449a-ac29-f87b12bf09cc.png)

# Adding/Creating Stops

Depending on your permissions in the environment settings, you can create or add an existing order to a route in the mobile app or Geo2 Hub. Press the `Add first stop` button at the bottom or `Tap to add a stop` in the stop list on the Route view page. The Search dialog appears, allowing you to type a recipient address and select from the results, use your current location, scan multiple addresses at once, use voice search, use bulk address paste, or add an existing order. All these features are included across every subscription level. The only restriction applies to the Free level, which allows a maximum of 15 stops per route.

![20260429_44.png](../../attachments/9492c237-00b2-449a-ac29-f87b12bf09cc.png)![20260429_45.png](../../attachments/82eed6b5-464f-440f-b4c2-f86b3543eb59.png)![20260429_46.png](../../attachments/643b363b-7d0b-4c27-a395-5dc826b8c755.png)![20260429_47.png](../../attachments/4f76df32-e1ae-4655-8ca6-236a76057732.png)

Once the address is selected and stop is added, you can continue adding more stops.

## Muti-Address Scanning

Multi-address scanning allows solo delivery drivers to quickly add multiple stops without manually entering each address. It’s especially helpful in the following scenarios:

- **E-commerce deliveries:** Scan multiple package labels for the same area and generate an optimized route instantly.
- **Food delivery (batch orders):** Capture several delivery addresses from one pickup and plan efficient drop-offs.
- **Pharmacy deliveries:** Ensure accurate address matching and reduce the risk of errors.
- **Field service visits:** Scan job sheets to create a clear schedule of stops for the day.
- **Retail and grocery deliveries:** Add multiple orders at once by scanning labeled bags or parcels.
- **Office mail and documents:** Quickly process a stack of envelopes and organize stops.
- **Small business deliveries:** Turn a group of packages into a ready-to-use route in seconds.

**Benefits:**

- Saves time on route setup
- Reduces manual entry errors
- Helps manage multiple deliveries more efficiently

To scan an address, press the `scan` icon on the Tap to add a stop (more stops) search bar or on the Search address dialog. The Scan address page will appear. Point your camera steadily at the address and resize the green frame if needed. Tap a highlighted block to confirm its adding as a stop. Continue moving the camera over the labels to scan more addresses. After scanning the address, you can click the red `Delete` icon to remove it and scan again.

Multi-address scanning is available only when adding stops to the route. For route start/end points, driver location, or POD address, you can scan only one address at a time.

![20260429_47.png](../../attachments/4f76df32-e1ae-4655-8ca6-236a76057732.png)![20260429_48.png](../../attachments/cf48734c-2c9a-4a01-b415-44d4f2871853.png)![20260429_49.png](../../attachments/018e1c6b-0fa0-4c4a-9905-cc99f84989a3.png)![20260429_50.png](../../attachments/49d2c4c1-495b-4a92-94a9-39ae013134e1.png)

Once scanning is complete, click `Confirm` to send the scanned addresses to find matching results. You will then be redirected to Select addresses page, where:

- The **scanned address** appears in **bold black text**
- The **matched result** is shown below in **grey text**

If needed, you can modify an address by clicking the `Edit` button. The app will display all available matches for each scanned address, so you can choose a different one if necessary. Use the checkboxes to decide which addresses to include in your route. All addresses are selected by default, but you can deselect any you do not need.

Finally, click `Confirm` to add the selected addresses as stops in your route.

![20260429_51.png](../../attachments/d130ad31-159d-4e90-aa73-dc74311d16db.png)![20260429_52.png](../../attachments/9404acb5-4062-43c3-b061-06a623f5354c.png)

## Address Voice Search

To use voice search for an address, press the `mic` icon on the Tap to add a stop (more stops) search bar or on the Search address dialog. The Voice search dialog appears. Your device language will be selected by default, but you can change it to any preferred language. Speak the address; the system will recognize it. If the detected address is correct, press `Confirm` to find matching results. Select an address from the results to add a stop to the route. If the detected address is incorrect, press `Try again`.

![20260429_53.png](../../attachments/1a9db606-f107-4d37-8798-be0e6b430982.png)![20260429_54.png](../../attachments/077927db-e6f6-4e69-8517-de04cd35b7b4.png)![20260429_55.png](../../attachments/0f808cef-5121-479e-a3b9-b6750632838f.png)![20260429_56.png](../../attachments/542c381a-4c7a-4594-9336-c3ca346da554.png)

## Bulk Address Paste

The Paste list feature is especially useful for solo delivery drivers who need to quickly plan routes with multiple stops. Instead of entering addresses one by one, you can paste a full list from a dispatcher, spreadsheet, or notes and generate a route in seconds. This is particularly helpful for gig drivers using platforms like Amazon Flex, where multiple deliveries are assigned at once. It also supports drivers working across different apps, allowing them to combine addresses into a single optimized route. Overall, the feature saves time, reduces manual input, and makes it easy to adjust or reuse address lists for recurring or on-the-go deliveries.

To add up to 50 stops to a route at once, use the `Paste list` option in the Search address dialog when adding stops. Simply type or paste your addresses — one per line — and click `Search` to find matches. You will be then be taken to the **Select addresses** page, where:

- Your **pasted addresses** appear in **bold black text**
- **Matching results** are displayed below in **grey**

If needed, you can click `Edit` to adjust any address. The app will show all available matches for each entry, allowing you to choose a different option. Use the checkboxes to select which addresses to include — everything is selected by default, but you can deselect any you do not need.

![20260429_57.png](../../attachments/d837530e-c40f-471d-9efa-0f6290d35100.png)![20260429_58.png](../../attachments/bb7fced0-e410-4b9a-88d5-975b263a1e42.png)![20260429_59.png](../../attachments/9893390c-9d6e-4ecf-976d-a886dbb16a3c.png)

When ready, click `Confirm` to add the selected addresses as stops in your route.

![20260429_60.png](../../attachments/63bd4e93-cfda-4ab8-81b3-28b26ddf9423.png)

Remember that Free level users can include up to 15 stops per route. If you exceed this limit, you will be redirected to the Subscriptions page, where you can start a trial of a higher plan (Pro or Advanced) to add all addresses. Alternatively, you can remove some stops to stay within the limit.

## Stop details

Once the stop is added to the route, you can adjust its details:

![20260429_61.png](../../attachments/75cf3109-df7e-436b-8770-4ddc1031c33a.png)![20260429_62.png](../../attachments/4f9a2663-2e43-448b-a60e-3d9abc44ce64.png)![20260429_63.png](../../attachments/5e136dbf-cb53-4e1d-8059-e6d9fad6da62.png)

| **Fields** | **Description** | **Required fields** |
| --- | --- | --- |
| Type | Delivery or Collection. | Yes |
| Order key | Order identifier unique within the environment, for example, an order number 1, 2, 3, 4, etc.  By default, it will be autogenerated from the current date and time. You can click on the `Scan icon` to scan the key. | Yes |
| Committed | For information - date/time that has been agreed with the customer for delivery/collection. This field is available only for users with Enterprise subscription level. | No |
| Required from | For information - from when the customer requires the order to be delivered/collected. It can be used for route optimization with time windows. | No |
| Required to | For information - till when the customer requires the order to be delivered/collected. It can be used for route optimization with time windows. | No |
| Stop duration | The amount of time the delivery vehicle is expected to remain at a route stop. This is used when orders are first brought into a route and, together with drive times, stop durations are intended to lead to route durations that are more realistic than if only drive time was considered. | Yes |
| Tab - Recipient details | Optional recipient contact details like contact name, email, phone and mobile phone numbers. | Yes |
| Tab - Packages | Optional package barcodes.  Barcodes can be either typed in manually or scanned. | No |
| Delivery instructions | Optional notes for drivers that are shown in the mobile app.  For example, "leave with reception". | No |

You can set parcel placement (e.g., "front right" or "left shelf") and optionally add photos for a delivery order by pressing the `Set placement in the vehicle` button at the bottom of the page. Press `Confirm` to save the placement, which can be updated later. The placement and photo count appear on the stop card, and full-size photos can be viewed in Stop details page.

![20260429_64.png](../../attachments/d61cd70e-e8d9-4fc5-8871-019fd96eb756.png)![20260429_65.png](../../attachments/b56031c5-dd7f-4319-be56-fcfdd68b6723.png)

If a route starts or ends at a depot, it will be used as a stop depot: the route start depot will be populated to the delivery stop, and the route end depot will be populated to the collection stop. If a route does not use a depot as its start or end point but there is a default depot selected in [Hub: Environment Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings.md), it will be used as a stop depot. If there is no default depot, the Depot field inside a stop will be blank.

After adding all stops to the route, you need to press the `Finish adding stops` button at the bottom of the dialog to run automatic route optimization find the fastest route.  You can proceed with your current or optimized stop order. Once selected, you will be redirected back to Route view page where you can see the added stop cards.  It will be shown on the map when you slide down the bottom sheet.  You can press the `Start route` button to start the route or add more orders.

![20260429_66.png](../../attachments/ec218e42-2ab2-42f7-9021-66aeb8f5bafd.png)![20260429_67.png](../../attachments/b4fb9de6-6fe2-4863-80db-6b3a307943f2.png)![20260429_68.png](../../attachments/f030ebf5-3bcb-4583-9349-e03fb0f9c451.png)![20260429_69.png](../../attachments/dc5e7114-2444-42fa-850c-4c33b8ec954e.png)

## Add Existing Order

To add an existing order to a route, press the `Add existing order` button on Search address dialog. You need to type in the order key or scan it and all the information from this order will be automatically pre-populated to the fields.  You cannot edit the order information on this page. Fields will be disabled for editing. To edit the order, you need to add it to the route, then you can go inside the order and press the `Edit stop` button.

**If a route starts or ends at a depot, orders with depots must match**: the delivery depot must align with the start, and the collection depot with the end. Orders without assigned depots can be added to any route, and if a route does not use a depot as its start or end point, any order, with or without a depot, can be added.

If this order is already assigned to another route, you will be asked to confirm whether you want to move it from one route to another.

![20260429_70.png](../../attachments/819ae6db-b9be-440f-b37f-c71c01026f4a.png)![20260429_71.png](../../attachments/c710a0d5-cfeb-4f41-bd38-ced494dd4161.png)![20260429_72.png](../../attachments/a73a60d8-5918-4f3b-a57b-ea3cc0db7c4d.png)

After adding all stops to the route, you need to press the `Finish adding stops` button at the bottom of the dialog to run automatic route optimization find the fastest route.  You can proceed with your current or optimized stop order. Once selected, you will be redirected back to Route view page where you can see the added stop cards.  It will be shown on the map when you slide down the bottom sheet.  You can press the `Start route` button to start the route or add more orders.

# Adding/Displaying Breaks

For drivers — especially solo drivers managing long routes — planned breaks are essential. They provide a structured way to **refuel or recharge the vehicle**, take a rest, or pause safely between deliveries without disrupting the overall schedule. By integrating breaks directly into the route, you can maintain efficiency while also supporting your well-being and compliance with driving regulations. The route view displays breaks alongside order stops, making them a natural part of the journey rather than an afterthought. With the appropriate permissions enabled in your environment, breaks can be added both in the mobile app and in Geo2 Hub.

To add a break, tap the `Add break` button at the top of the stop list. This option becomes available once at least one stop has been added to the route. You will be prompted to define the break duration (in minutes) and optionally assign a location. Locations can be added by typing an address, scanning, or using voice search.

![20260429_73.png](../../attachments/09a07068-fc85-4ebd-bdda-f0c718bf348e.png)![20260429_74.png](../../attachments/568e21fd-3315-4a80-b671-b637c715f4d3.png)

Once confirmed, the break is added to the end of the stop list, but it can be easily repositioned using drag-and-drop to fit your preferred sequence. The route is automatically recalculated to include the new break, ensuring accurate timing and navigation.

![20260429_75.png](../../attachments/6d0ea94e-4b96-440e-ae2a-82b864f17e05.png)![20260429_76.png](../../attachments/fc9300a6-cdb2-4a6f-ad84-cebc6a63f3bf.png)

If a break includes a location, it will also appear on the map. Selecting either the break card in the stop list or its map marker opens the Break details page. From there, you can start navigation using your preferred app, such as Waze, Google Maps, or Apple Maps, and mark the break as completed once finished. You can also edit or remove the break from the route at any time.

![20260429_77.png](../../attachments/ced17f43-8dfd-4f80-87e3-9ee0f240f831.png)

# Drag-and-Drop Stops

Stop cards could be drag-and-dropped to any position of the route.  For it, you need to press on the stop card and move it.  Remember to press the `Save` button to save your changes.  Once saved, a route will be automatically calibrated updating timings and distance.

Route start and end cards cannot be moved.

![20260429_78.png](../../attachments/c096706c-25a4-48a5-bcb9-e4b341204162.png)![20260429_79.png](../../attachments/7ceba41c-cfc4-44b9-bad5-beff15a69164.png)![20260429_80.png](../../attachments/4f8de9dc-81fb-4313-891d-c9187ddfdabc.png)

# Calibrating Route

Once stops are added to a route, we run automatic route optimization and calibration so you can choose the fastest and/or shortest route. You can also press the `Actions` (arrow) button and select `Calibrate` option to update the planned timings and distance of the route without modifying the order list.  Example: You created 4 stops one by one, didn't change their position, and clicked on the `Calibrate` button.  The route didn't change but the planned time changed.  Changes are saved automatically.

The Calibrate option is available if a route has at least 1 order. 

Before route calibration:

![20260429_81.png](../../attachments/152a382a-b72f-4cfc-a810-9dbe00834210.png)

After route calibration:

![20260429_82.png](../../attachments/242898d6-40e7-44c4-b475-564057e45179.png)

We apply automatic calibration in most cases so you don't need to press `Calibrate`:

- removing stops from a route and pressing `Save`
- adding, changing, deleting a break inside a route
- changing (shuffling) stop order inside a route and pressing on `Save`
- changing start and end points in a route if there is at least 1 stop
- changing route planned start time if there is at least 1 stop
- changing vehicle in a route if there is at least 1 stop
- changing time-at-stop inside order or route stops
- deleting a stop on Stop details page

<font style="color: #091e42;">Exceptions when we don't apply automatic calibration: </font>

- editing a stop (editing recipient address inside stops)
- manually set up a route inside a stop (done from Hub)
- making changes in a depot address or vehicle speed factor

If the route already calibrated, the Calibrate button will be disabled.

# Optimizing Route with Time Windows

After adding stops to a route and pressing `Finish adding stops` button, we run automatic route optimization and calibration so you can select the fastest or shortest route. If the route includes at least one stop with specified Required from and/or Required to fields and you have an Advanced or Enterprise subscription, the system optimizes the route with time windows. To use the Optimize with time windows option separately, press the `Actions` (arrow) button and select the `Optimize with time windows` option. Route optimization requires at least two stops, with at least one stop having specified required time slots (either “Required from”, “Required to”, or both).

![20260430_1.png](../../attachments/9a956949-a9ff-4b08-85ce-058f87f3c24f.png)

When you press `Optimize with time windows`, the geo-locations of the assigned route start point and the stops will be used to suggest an optimum driving route as well as to match the required time windows for each stop. The time window specified using the `Required from` and `Required to` fields inside a stop is not considered a hard constraint by the system. That is, the system doesn't fail if the stop cannot be visited during the time window; instead, the system tries to find a route that visits the stop during its time window, but if time-window violations are inevitable, the system tries to find a solution that minimizes the time-window violation time for all stops in the problem.

If you have provided vehicle dimensions (“Gross weight”, “Height”, “Width”, and “Length” fields) for the vehicle assigned to the route, it will be used for optimization with vehicle restrictions. The system will factor these dimensions into route building to generate the most efficient outcomes, for example, to avoid bridges with height restrictions, narrow roads unsuitable for wider vehicles, or areas with weight limits that could affect the selected route.

Changes are saved automatically.

Before route optimization:

![20260430_2.png](../../attachments/4c89a4f4-cc75-4599-ad75-1b6a0fe6dd88.png)

After route optimization with time windows:

![20260430_3.png](../../attachments/d07d8a35-6d57-4efa-9e49-9fdfff436aed.png)

If the route is already optimized with time windows, the Optimize button will be disabled however, you can still optimize the route without time windows and compare the difference.

![20260430_4.png](../../attachments/bdd41aec-2b1a-41f8-9e37-df7b8730914a.png)

# Optimizing Route without Time Windows

After adding stops to a route, we run automatic route optimization and calibration so you can select the fastest or shortest route. If stops lack required time windows ("Required from" and/or "Required to" fields), the system optimizes without time windows. To use the Optimize without time windows option separately, press the `Actions` (arrow) button and select the `Optimize without time windows` option.

Route optimization is available when a route has at least two orders.

![20260430_1.png](../../attachments/9a956949-a9ff-4b08-85ce-058f87f3c24f.png)

When you press `Optimize without time windows`, the geo-locations of the assigned route start location and the stops will be used to suggest an optimum driving route.  The order of the stops may be changed and the planned timings and distance of the route updated.  If you have provided vehicle dimensions (“Gross weight”, “Height”, “Width”, and “Length” fields) for the vehicle assigned to the route, it will be used for optimization with vehicle restrictions. The system will factor these dimensions into route building to generate the most efficient outcomes, for example, to avoid bridges with height restrictions, narrow roads unsuitable for wider vehicles, or areas with weight limits that could affect the selected route.

Changes will be saved automatically.

Before optimization without time windows:

![20260430_5.png](../../attachments/a565286c-bf13-410c-8c9c-b3ec19b290af.png)

After optimization without time windows:

![20260430_6.png](../../attachments/c2c245d6-922e-47e5-9e08-d7856f90f0a5.png)

If the route is already optimized without time windows, the Optimize button will be disabled however, you can still optimize the route with time windows and compare the difference.

![20260430_7.png](../../attachments/f8c0c866-ce25-437e-bf1a-bd356648e4b9.png)

# Editing and Deleting Route

By pressing `3 dots` icon on a route card on Routes page, the dialog will be opened with the following options: Edit, Delete, and Select routes for bulk route deletion.  You can create, edit, and delete routes only if you have permission to do it - Manager or Admin role in the current environment.

![20260430_8.png](../../attachments/42357ac8-d0cf-4f3e-a6b8-485d33668bc8.png)

You can also click on the `3 dots` icon on the Route view page and select the `Edit route` or `Delete route` option.

![20260430_9.png](../../attachments/420d530d-5c56-44d0-8757-bfc900375065.png)

After clicking on the `Edit` button, you will be redirected to Edit route page where you can change some route details and save changes.

After clicking on the `Delete` button, the confirmation dialog will be displayed where you need to confirm the deletion of the route.  It's not possible to delete the route that has the Started or Completed status. 

# Editing and Deleting Stop

To edit or permanently delete a stop, you need to go to the Route view page and click on the stop card.  You will be redirected to Details page.  At the bottom of the page, you will see the `Edit` and `Delete stop` buttons.  After clicking on the `Edit` button, you will be redirected to Edit stop page where you can make some changes and save them.  After clicking on the `Delete` button, the confirmation dialog will be displayed where you need to confirm the deletion of the stop. 

![20260430_10.png](../../attachments/aad09430-c6f7-4b53-a871-77199e88b71b.png)![20260430_11.png](../../attachments/2dc81653-166e-47e3-8476-a95551c5561f.png)

To select multiple stops, press the `Actions` (arrow) button on the Route view page and choose the `Select stops` option. You can remove stops from a route (stops remain available to add to another route) or create one POD for multiple stops. If your environment settings disallow multiple PODs per order per route, you cannot select stops with existing PODs because you cannot create a new POD.

![20260430_12.png](../../attachments/41feb682-dc9e-48b8-82b2-9b755905a802.png)![20260430_13.png](../../attachments/1f9f0eca-64d9-4e0a-a2e0-bec335602fce.png)

# Vehicle Loading with Photos

Once a route is optimized and ready-to-go, you can load your vehicle with the assigned delivery stops by selecting `Load vehicle` from the `Actions` (arrow) button on Route view page. Stops appear in reverse order to help you load items that will be delivered last first, with **collection orders excluded**. For each stop, you can set parcel placement (e.g., "front right" or "left shelf") and optionally add photos. Press `Confirm` to save the placement, which can be updated later. Note that new photos will replace the old ones. Once your orders are loaded to the vehicle, press `Finish loading` to return to Route view page.

![20260430_14.png](../../attachments/96621168-ec61-4192-8bfe-33f3b150540c.png)![20260430_15.png](../../attachments/0125bdf6-d2c5-40ef-ab0e-1cc1e218b899.png)![20260430_16.png](../../attachments/e082150b-17ec-4647-9ebc-f5c650b813a8.png)![20260430_17.png](../../attachments/d9738661-505b-4fc8-9cb9-9fdbdff181f0.png)![20260430_18.png](../../attachments/2eecf06a-7218-446a-bb3f-3845ab246ebc.png)

The placement and photo count appear on the stop card, and full-size photos can be viewed in the Order details page.

![20260430_19.png](../../attachments/83b1fb0f-944d-48e8-9ba8-44e1181000de.png)![20260430_20.png](../../attachments/0449e6b8-4875-4082-9ade-2cee8c5af73b.png)

You can also set placement and upload photos when adding or editing an order.

![20260429_63.png](../../attachments/5e136dbf-cb53-4e1d-8059-e6d9fad6da62.png)![20260429_64.png](../../attachments/d61cd70e-e8d9-4fc5-8871-019fd96eb756.png)![20260429_65.png](../../attachments/b56031c5-dd7f-4319-be56-fcfdd68b6723.png)

# Navigation

The navigation icon in the top right of Details (of a certain stop) page panel lets you jump out to a navigation app (Google Maps, Apple Maps, Waze, etc.) to help you navigate in an unfamiliar area.

![20260430_21.png](../../attachments/96957b64-9ace-4905-b4d2-f61ec85c950e.png)![20260430_22.png](../../attachments/d3ae784e-61ef-42ca-9fc5-097a4f056596.png)

# Switching Between Stops

You can see navigation arrows on Stop details page above the bottom-screen dialog to quickly switch between route stops. These arrows move dynamically with the bottom sheet as it changes height during scrolling. Next to the arrows, the stop numbers of the previous and next stops are displayed, helping you know which stops you can navigate to. The left arrow is hidden on the first stop, and the right arrow is hidden on the last stop, ensuring navigation options are only shown when applicable. If there is only one stop in the route, no arrows are displayed at all.

![20260430_21.png](../../attachments/96957b64-9ace-4905-b4d2-f61ec85c950e.png)

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

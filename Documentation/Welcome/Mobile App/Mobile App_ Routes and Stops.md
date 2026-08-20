---
slug: "/mobile-app/mobile-app-routes-and-stops"
sidebar_label: "Routes and Stops"
sidebar_position: 6
---

# Mobile App: Routes and Stops

# Introduction

`Routes` page lets you view routes that have been released to you, each displayed with a small map preview. You can access the Routes page from the Menu options. By default, routes planned for the current date are shown, but you can select other dates to show routes for those dates.  The green dot below the date means that you have planned routes assigned to you for this date.

The Routes page supports two display modes: Preview and Compact. A toggle above the route list allows you to switch between the two views. Preview mode (default) displays each route together with a map preview, while Compact mode hides the map and shows a simplified route card. The selected view is saved per user on the current device, so the same mode is restored the next time the Routes page is opened on that device. On low-performance devices, Compact mode is enabled by default to improve performance and provide a smoother user experience.

![20260729_14.png](../../attachments/a5c39ecd-7ac1-4a5d-8f2d-96ea0d976af3.png)![20260729_15.png](../../attachments/3b3a06ce-62a8-4841-ab2e-96a439102a59.png)

# Route Statuses

There are three route statuses relevant to the mobile app:

| **Status** | **Description** |
| --- | --- |
| Released <br/>![IMG_6675 1.png](../../attachments/cf4ccb80-ab80-46e2-a20c-558b55922cc1.png) | The route has been released to you. |
| Started <br/>![](../../attachments/3303e95a-5f5c-4517-b34a-e52edc1e1a9c.png) | You have started to deliver the route, linking your location tracking to the route. |
| Completed <br/>![](../../attachments/e332276f-4462-4d08-8a1b-80492ced124f.png) | You have finished delivering the route.  Location tracking is no longer linked to the route. |

# Starting Route

You can click on the route card on Routes page to view its details.  At the bottom, you will find the `Start route` button.  After starting the route, the `Start route` button is replaced with the `Complete route` button. To temporarily pause a route (location tracking for this route will be paused) press the `arrow` icon near the `Complete route` button and select `Pause route`.  To continue the paused route again, you need to press the `Continue route` button.  It's not possible to continue the route that has been completed already. 

![20260729_16.png](../../attachments/f9239fbf-cddc-420b-b7c2-60be876ed072.png)![20260729_17.png](../../attachments/c51a963b-5171-4d2b-9f0a-067b1240af0f.png)![20260729_18.png](../../attachments/6412c8e3-1a11-4359-9c1e-2a59420d07b3.png)![20260729_19.png](../../attachments/5c0a3dd0-ed4e-44cf-ab88-a1309f567313.png)![20260729_20.png](../../attachments/56bef2a5-f6ee-4578-90c2-8ed1728f686c.png)![20260729_21.png](../../attachments/3a171d57-e703-4b45-bdab-ff32c6d448b6.png)

# Current Route

When you have started a route and location tracking is enabled (the route is not paused), it will be displayed with a green frame around the route card on Routes Calendar page.

![20260729_22.png](../../attachments/26c1f1b1-37c7-4362-a647-46636af5d8d2.png)

You can also temporarily pause a route (location tracking for this route will be paused) from Routes calendar by pressing the 3 dots icon on a route card and selecting `Pause route` option.  To continue the paused route again, you need to press the `Continue route` button.  It's not possible to continue the route that has been completed already.

![20260729_23.png](../../attachments/73255041-9c6b-4722-931c-4e00d21a8cf6.png)![20260729_24.png](../../attachments/05fa139d-fdf4-4901-8ab9-ed64073b6509.png)![20260729_25.png](../../attachments/f8eaaf52-ef46-4a9f-b5cf-ebf3fbcaca41.png)![20260729_26.png](../../attachments/a549dc4d-2e59-4d05-b666-5326b2a9bace.png)

# Route Creation

Depending on your permissions in the environment, you can create a route in the mobile app as well as in Geo2 Hub. To create a route, you need to press the `Plan route` in Menu or on Routes page. If you do not have any assigned to you routes for today, you will also see the `Plan route` button at the bottom of Map page.

![20260729_1.png](../../attachments/72588d5d-ee16-4a7f-bfb6-9ea63c9803ca.png)![20260729_12.png](../../attachments/67ffcd38-a3f1-44ff-bee1-7422e8c9bfbd.png)![20260729_14.png](../../attachments/a5c39ecd-7ac1-4a5d-8f2d-96ea0d976af3.png)

After pressing the button, Create route page will be displayed where you need to fill in the following fields:

![20260728_6.png](../../attachments/58fe16f8-ddde-47ef-abdb-5d3632bdc62f.png)

| **Fields** | **Description** | **Required field** |
| --- | --- | --- |
| Route key | Unique route key within an environment.  It will be automatically generated from a date, depot (if it exists in your environment), and trip number if you leave it empty.   It can be a route number, for example, 1, 2, 3, etc. | Yes |
| Route start | Before planning your route, you will be asked to use your current geolocation as a route start point but it can be changed. By pressing the Route start field, you can also select other depots from your environment if they exist, first stop location (first stop recipient’s address), or search address. If you select to search for an address, the Search address dialog will be displayed where you can start typing and selecting an address from the drop-down which appears, use voice search, scan an address, or search location on the map.  If no suitable match is found, press the `Can't find the address you need?` button and continue entering the address in the relevant address fields manually. Once it is done, press the `Confirm` button. Your address will be saved as a route start. | Yes |
| Planned start | Expected dispatch date/time of the route from the route start location. By default, it is taken from your settings. | Yes |
| Route end | By default, the Return to start option is selected for a route end but it can be changed. By pressing the Route end field, you can also select depots from your environment if they exist, last stop location (last stop recipient’s address), or search address. If you select to search for an address, the Search address dialog will be displayed where you can start typing and selecting an address from the drop-down which appears, use voice search, scan an address, or search location on the map.  If no suitable match is found, press the `Can't find the address you need?` button and continue entering the address in the relevant address fields manually. Once it is done, press the `Confirm` button. Your address will be saved as a route end and you will be redirected back to Create route page. | Yes |
| Vehicle | Vehicle assigned to the route. Once a new organization/environment is created, the following default vehicle are created: van, truck, car, motorbike, bicycle. If there are no vehicles in your environment, press on the `Tap to add a vehicle` to add it. Vehicle dimensions (“Gross weight”, “Height”, “Width”, and “Length” fields) can be used for route calibration/optimization with vehicle restrictions. The system will factor these dimensions into route building to generate the most efficient outcomes, for example, to avoid bridges with height restrictions, narrow roads unsuitable for wider vehicles, or areas with weight limits that could affect the selected route. | No |
| Driver | User responsible for the route.  By default, it's a user creating a route from the mobile app.  It can be changed.  Once a route is released, the assigned user sees the route in the mobile app. A driver has permission to start/complete the route. Once the route is started and location tracking enabled, the driver’s location will be displayed [Hub: Routes](../Web-Based%20Hub/Hub_%20Routes.md) and on the [Hub: Analytics](../Web-Based%20Hub/Hub_%20Analytics.md) on Analytics page in Hub, as well as on the recorded [Hub: Vehicle Checks](../Web-Based%20Hub/Hub_%20Vehicle%20Checks.md). The driver’s location can also be optionally displayed on [Hub: Environment Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings/Hub_%20Environment%20Settings.md). However, for POD's, the geolocation of the user who records it will be captured (either the driver or participant). This field is displayed only for Enterprise level users. | No |
| Participants | Up to 2 additional users assigned to the route. Once released, the assigned participant sees the route in the mobile app. While the driver retains the ability to start and complete a route, participants will have access to a route to check the list of stops and create POD's for them. Participants field is displayed only to users with Enterprise subscription level. | No |

![20260729_27.png](../../attachments/5b07a35e-1efc-4154-8a55-dfe282661b2a.png)![20260729_28.png](../../attachments/4060ec89-7832-455d-9648-98db89f9ee2a.png)![20260729_29.png](../../attachments/e90e489a-f32a-4c4f-b656-b0f970daeaa1.png)

After filling in all the fields, you need to press the `Create` button to save the route data.  You will be redirected to Route view page where you can add stops to the route.

![20260729_30.png](../../attachments/67b521a5-59e4-47f6-ade5-56bbbe04ae51.png)

# Adding/Creating Stops

Depending on your permissions in the environment settings, you can create or add an existing order to a route in the mobile app or Geo2 Hub. Press the `Add first stop` button at the bottom or `Tap to add a stop` in the stop list on the Route view page. The Search dialog appears, allowing you to type a recipient address and select from the results, scan multiple addresses at once, use voice search, use bulk address paste, import from photos, screenshots, PDFs or add an existing order. All these features are included across every subscription level. The only restriction applies to the Free level, which allows a maximum of 15 stops per route.

![20260729_31.png](../../attachments/7a00c1e0-2c81-4229-b8d7-8eeff9be7cc3.png)![20260729_32.png](../../attachments/fc82b35e-ef5c-4e73-906e-6a6148b8c9a2.png)![20260729_33.png](../../attachments/41bbee86-1d6d-4a8c-a0ad-5227c65a5162.png)

Once stops are added, press the `Finish adding stops` button to run automatic route optimization to save time and fuel.

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

To scan an address, press the `scan` icon on the Tap to add a stop (more stops) search bar or on the Search address dialog. The Scan address page will appear. Point your camera steadily at the address(es) and hold steady - automatic address detection will start. When the boarder fills green, they are all added. Continue moving the camera over the labels to scan more addresses. After scanning the address, you can click the red `Delete` icon to remove it and scan again.

![20260729_31.png](../../attachments/7a00c1e0-2c81-4229-b8d7-8eeff9be7cc3.png)![20260729_32.png](../../attachments/fc82b35e-ef5c-4e73-906e-6a6148b8c9a2.png)![20260729_34.png](../../attachments/a7aacd34-159b-485d-b528-40d1491c886e.png)![20260729_35.png](../../attachments/cb7ad6e6-835e-46dd-bc1e-d388f118b245.png)

Multi-address scanning is available only when adding stops to the route. For route start/end points, driver location, or POD address, you can scan only one address at a time.

Once scanning is complete, click `Finish scanning addresses` to send the scanned addresses to find matching results. You will then be redirected to Select addresses page, where:

- The **scanned address** appears in **bold black text**
- The **matched result** is shown below in **grey text**

If needed, you can modify an address by clicking the `Edit` button. The app will display all available matches for each scanned address, so you can choose a different one if necessary. Use the checkboxes to decide which addresses to include in your route. All addresses are selected by default, but you can deselect any you do not need.

Finally, click `Confirm` to add the selected addresses as stops in your route.

![20260729_36.png](../../attachments/255c1ee4-baf4-4c04-95e3-0f957ff35678.png)![20260729_37.png](../../attachments/9453778f-d57f-44a4-8d4a-7b8fef8f447c.png)

You can continue adding more stops using typing addresses, voice search, multi-address scanning, search locations on the map or import from photos, screenshots or PDFs. Once completed, press the `Finish adding stops` button to run route automatic optimization to save time and fuel.

![20260729_39.png](../../attachments/c953fe77-2f7f-4208-9454-fcc2694ed471.png)![20260729_38.png](../../attachments/7007e966-e748-46f1-b530-3ee8b006047c.png)![20260729_40.png](../../attachments/7bcb0d17-200c-4a4c-ac9d-0e51c0bdbf20.png)

## Address Voice Search

To use voice search for an address, press the `mic` icon on the Tap to add a stop (more stops) search bar or on the Search address dialog. The Voice search dialog appears. Your device language will be selected by default, but you can change it to any preferred language. Speak the address; the system will recognize it. If the detected address is correct, press `Confirm` to find matching results. Select an address from the results to add a stop to the route. If the detected address is incorrect, press `Try again`.

![20260729_41.png](../../attachments/b83370fc-eef7-42fa-9bf5-4d36faa4e773.png)![20260729_42.png](../../attachments/9a9a5b06-a3b1-4404-80a1-7257ca73e7b6.png)![20260729_43.png](../../attachments/2574decc-17eb-4aa5-89bf-2559ffb143e1.png)

You can continue adding more stops using typing addresses, voice search, multi-address scanning, search locations on the map or import from photos, screenshots or PDFs. Once completed, press the `Finish adding stops` button to run route automatic optimization to save time and fuel.

![20260729_44.png](../../attachments/0df0de96-5fec-4c0f-a2b3-b009e2cfcae0.png)![20260729_45.png](../../attachments/8cbcc76a-81db-4505-ab45-17f06935cecd.png)

## Search Addresses on the Map

The Map search feature lets you select an exact location by placing a pin on the map instead of typing an address. It is available when adding route stops, setting route start/end points, adding or editing orders, and creating Proof of Delivery (POD).

**Common use cases:**

- Select the exact entrance of a building or warehouse.
- Choose delivery locations in areas without accurate postal addresses.
- Add precise pickup or delivery points for gig delivery platforms such as Amazon Flex, Walmart Spark, or Evri.
- Set accurate locations for local delivery and service businesses.

To open the map, tap the `map` icon next on on the Tap to add a stop (more stops) search bar or on the Search address dialog.

![20260729_62.png](../../attachments/d7246f96-10c0-4d78-b8fe-23e13f489eed.png)![20260729_63.png](../../attachments/6985c2ab-be4c-4f75-a158-ad02a0cc3967.png)

When the map opens, it centers on your current location if location permission has been granted. Drag the pin to the desired location to identify the address. After the address is found, it is displayed at the bottom of the screen. Tap `Confirm` to use the selected location.

![20260729_64.png](../../attachments/fd399def-91f1-485f-bee4-cc5f9fb1f234.png)![20260730_1.png](../../attachments/ed098d2e-e88c-4b71-95ed-8f2a448535f2.png)

After confirmation, you are returned to the previous screen with the address automatically filled in. When adding multiple stops, you can immediately continue adding the next stop or reopen the map to select another location.

You can continue adding more stops using typing addresses, voice search, multi-address scanning, search locations on the map or import from photos, screenshots or PDFs. Once completed, press the `Finish adding stops` button to run route automatic optimization to save time and fuel.

![20260729_39.png](../../attachments/c953fe77-2f7f-4208-9454-fcc2694ed471.png)![20260729_38.png](../../attachments/7007e966-e748-46f1-b530-3ee8b006047c.png)![20260729_40.png](../../attachments/7bcb0d17-200c-4a4c-ac9d-0e51c0bdbf20.png)

## Bulk Address Paste (Paste List)

The Paste list feature is especially useful for solo delivery drivers who need to quickly plan routes with multiple stops. Instead of entering addresses one by one, you can paste a full list from a dispatcher, spreadsheet, or notes and generate a route in seconds. This is particularly helpful for gig drivers using platforms like Amazon Flex, where multiple deliveries are assigned at once. It also supports drivers working across different apps, allowing them to combine addresses into a single optimized route. Overall, the feature saves time, reduces manual input, and makes it easy to adjust or reuse address lists for recurring or on-the-go deliveries.

To add up to 50 stops to a route at once, use the `Paste list` option in the Search address dialog when adding stops. Simply type or paste your addresses — one per line — and click `Search` to find matches.

![20260729_46.png](../../attachments/1de2058b-83c7-4103-9741-3b645ef2e249.png)![20260729_47.png](../../attachments/f0e6733a-f9b7-47ab-8f90-3ff93b5ba378.png)![20260729_48.png](../../attachments/04d05842-c2bf-45f2-978e-98fe89e8fa09.png)

You will be then be taken to the **Select addresses** page, where:

- Your **pasted addresses** appear in **bold black text**
- **Matching results** are displayed below in **grey**

If needed, you can click `Edit` to adjust any address. The app will show all available matches for each entry, allowing you to choose a different option. Use the checkboxes to select which addresses to include — everything is selected by default, but you can deselect any you do not need.

![20260729_48 (1).png](../../attachments/05bbbe66-9387-4fa4-89d2-9cafc1ff36cb.png)

When ready, click `Confirm` to add the selected addresses as stops in your route.

![20260729_49.png](../../attachments/202c535e-3143-4ea4-b212-73b6aa8a7459.png)

Remember that Free level users can include up to 15 stops per route. If you exceed this limit, you will be redirected to the Subscriptions page, where you can start a trial of a higher plan (Pro or Advanced) to add all addresses. Alternatively, you can remove some stops to stay within the limit.

You can continue adding more stops using typing addresses, voice search, multi-address scanning, search locations on the map or import from photos, screenshots or PDFs. Once completed, press the `Finish adding stops` button to run route automatic optimization to save time and fuel.

![20260729_50.png](../../attachments/ca0832d6-ead8-4046-8cad-ed1286731b04.png)![20260729_51.png](../../attachments/bb1950b3-d280-446b-bb63-aa5cbf7a947d.png)![20260729_52.png](../../attachments/81c78cfd-112f-4083-adc1-da1b9a6472b3.png)

## Import Addresses from Photos, Screenshots and PDFs

The `Import` feature allows you to quickly add multiple stops to a route by importing PDF files or photos/screenshots of delivery lists. Geo2 uses AI to automatically detect addresses and other available delivery information, allowing you to review and edit the extracted data before adding the stops to the route.

The feature is particularly useful for drivers who receive delivery lists as PDFs or images, including:

- **Amazon Flex** drivers importing screenshots or PDF manifests.
- **Walmart Spark** drivers importing printed or shared delivery lists.
- **Evri** couriers scanning paper manifests before starting a route.
- **Local courier and delivery businesses** importing dispatch sheets received by email or messaging apps.
- **Small businesses** such as florists, bakeries, pharmacies, and catering companies importing daily delivery schedules without manually entering addresses.

By automatically converting delivery lists into route stops, the `Import` feature significantly reduces route planning time and minimizes manual data entry.

The feature is available from the Search address dialog when adding stops and can only be used for creating route stops. Press `Import` button to import either from PDF or gallery (select photos, screenshots). It is not available when selecting route start/end points, adding breaks, creating PODs, or editing existing stops.

![20260729_53.png](../../attachments/7e6143f6-166a-43af-a44e-6f26c453e9a2.png)![20260729_54.png](../../attachments/7818ace6-4c5f-4dbb-8746-2be9329d3f86.png)

After uploading one or more files, the extracted stops are displayed on the Select stops screen. While processing is in progress, uploaded files show a preview with a loading indicator. Detected stops are automatically selected, and any uncertain information is marked as `Need review` until you open the stop for review. You can edit stop details by clicking the `Edit` button to review contact and delivery details. The `Confirm` button remains disabled until all uploaded files have finished processing.

![20260729_55.png](../../attachments/c6870fce-4d9f-4ea7-b1e0-1c9c9e382ee9.png)![20260729_56.png](../../attachments/38394927-68dc-4bff-a696-4a676589a76b.png)![20260729_57.png](../../attachments/017ce192-563e-4d8a-931b-e201eb1fdb2c.png)![20260729_58.png](../../attachments/00f49874-0070-4dba-bc64-29d7aa0508de.png)

After confirmation, the selected stops are added to the route. You can import additional files later using `⋮ → Import`.

You can continue adding more stops using typing addresses, voice search, multi-address scanning, search locations on the map or import from photos, screenshots or PDFs. Once completed, press the `Finish adding stops` button to run route automatic optimization to save time and fuel.

![20260729_59.png](../../attachments/20df1627-e21f-484b-bb55-b91b0bd3dfa6.png)![20260729_60.png](../../attachments/90bd937f-61cd-4c3c-8d02-9b006c7c9b6b.png)![20260729_61.png](../../attachments/bf09ab28-434a-47d1-bc37-ceb67797d989.png)

Subscription limitations:

- **Free** and **Pro** users can upload **1 PDF or image** at a time.
- **Advanced** and **Enterprise** users can upload **up to 5 files** simultaneously.

The Free level's **15-stop-per-route** limit also applies. If an import would exceed this limit, Geo2 displays a dialog allowing you to either upgrade (or start a free trial) and import all stops, or continue on the Free plan and import only the first 15 stops.

## Stop details

Once the stop is added to the route, you can adjust its details:

![20260729_65.png](../../attachments/aa17a9ab-bcf8-4d69-bad9-1c25101206b4.png)![20260729_66.png](../../attachments/6554b51e-2244-40ac-895d-2da0eef7a79a.png)![20260729_67.png](../../attachments/1757b1d1-08fb-4709-9450-288d91ba3439.png)

| **Fields** | **Description** | **Required fields** |
| --- | --- | --- |
| Type | Delivery or Collection. | Yes |
| Order key | Order identifier unique within the environment, for example, an order number 1, 2, 3, 4, etc.  By default, it will be autogenerated from the current date and time. You can click on the `Scan icon` to scan the key. | Yes |
| Committed | For information - date/time that has been agreed with the customer for delivery/collection. This field is available only for users with Enterprise subscription level. | No |
| Required from | For information - from when the customer requires the order to be delivered/collected. It can be used for route optimization with time windows. | No |
| Required to | For information - till when the customer requires the order to be delivered/collected. It can be used for route optimization with time windows. | No |
| Stop duration | The amount of time the delivery vehicle is expected to remain at a route stop. This is used when orders are first brought into a route and, together with drive times, stop durations are intended to lead to route durations that are more realistic than if only drive time was considered. | Yes |
| Tab - Recipient details | Optional recipient contact details like contact name, email, phone and mobile phone numbers. | Yes |
| Tab - Packages | Optional package barcodes.  Barcodes can be either typed in manually or scanned. Adding package information is available only with Advanced and Enterprise subscription levels. | No |
| Delivery instructions | Optional notes for drivers that are shown in the mobile app.  For example, "leave with reception". | No |

You can set parcel placement (e.g., "front right" or "left shelf") and optionally add photos for a delivery order by pressing the `Set placement in the vehicle` button at the bottom of the page. Press `Confirm` to save the placement, which can be updated later. The placement and photo count appear on the stop card, and full-size photos can be viewed in Stop details page.

![20260729_68.png](../../attachments/950f1c08-8d68-4528-ab85-b33e863b7e9b.png)![20260729_67.png](../../attachments/1757b1d1-08fb-4709-9450-288d91ba3439.png)

If a route starts or ends at a depot, it will be used as a stop depot: the route start depot will be populated to the delivery stop, and the route end depot will be populated to the collection stop. If a route does not use a depot as its start or end point but there is a default depot selected in [Hub: Environment Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings/Hub_%20Environment%20Settings.md), it will be used as a stop depot. If there is no default depot, the Depot field inside a stop will be blank.

After adding all stops to the route, you need to press the `Finish adding stops` button at the bottom of the dialog to run automatic route optimization find the fastest route.  You can proceed with your current or optimized stop order. Once selected, you will be redirected back to Route view page where you can see the added stop cards.  It will be shown on the map when you slide down the bottom sheet.  You can press the `Start route` button to start the route or add more orders.

![20260729_59.png](../../attachments/20df1627-e21f-484b-bb55-b91b0bd3dfa6.png)![20260729_60.png](../../attachments/90bd937f-61cd-4c3c-8d02-9b006c7c9b6b.png)![20260729_61.png](../../attachments/bf09ab28-434a-47d1-bc37-ceb67797d989.png)

## Add Existing Order

To add an existing order to a route, press the `Add existing order` button on Search address dialog. You need to type in the order key or scan it and all the information from this order will be automatically pre-populated to the fields.  You cannot edit the order information on this page. Fields will be disabled for editing. To edit the order, you need to add it to the route, then you can go inside the order and press the `Edit stop` button.

**If a route starts or ends at a depot, orders with depots must match**: the delivery depot must align with the start, and the collection depot with the end. Orders without assigned depots can be added to any route, and if a route does not use a depot as its start or end point, any order, with or without a depot, can be added.

If this order is already assigned to another route, you will be asked to confirm whether you want to move it from one route to another.

![20260729_70.png](../../attachments/d88ff439-542f-48d2-82e3-e92739ec7833.png)![20260729_69.png](../../attachments/17c65681-4c4c-4c35-a7ed-f951b3d2b6bd.png)![20260729_71.png](../../attachments/848c07f1-1018-4726-b707-dc57adf6077f.png)

After adding all stops to the route, you need to press the `Finish adding stops` button at the bottom of the dialog to run automatic route optimization find the fastest route.  You can proceed with your current or optimized stop order. Once selected, you will be redirected back to Route view page where you can see the added stop cards.  It will be shown on the map when you slide down the bottom sheet.  You can press the `Start route` button to start the route or add more orders.

# Adding/Displaying Breaks

For drivers — especially solo drivers managing long routes — planned breaks are essential. They provide a structured way to **refuel or recharge the vehicle**, take a rest, or pause safely between deliveries without disrupting the overall schedule. By integrating breaks directly into the route, you can maintain efficiency while also supporting your well-being and compliance with driving regulations. The route view displays breaks alongside order stops, making them a natural part of the journey rather than an afterthought. With the appropriate permissions enabled in your environment, breaks can be added both in the mobile app and in Geo2 Hub. Adding breaks is available with all subscription levels, starting from Free level.

To add a break, tap the `Add break` button at the top of the stop list on Route view page. This option becomes available once at least one stop has been added to the route. You will be prompted to define the break duration (in minutes) and optionally assign a location. Locations can be added by typing an address, scanning, using voice search or searching location on the map.

![20260730_2.png](../../attachments/113425f5-501c-40f7-86f3-8bc7974f36ae.png)![20260730_3.png](../../attachments/2399372e-94a4-42f9-b0d9-9ccfe50ab150.png)![20260730_4.png](../../attachments/e87b673a-7532-46f5-a09a-c8101c785fd2.png)

Once confirmed, the break is added to the end of the stop list, but it can be easily repositioned using drag-and-drop to fit your preferred sequence. The route is automatically recalculated to include the new break, ensuring accurate timing and navigation.

![20260730_5.png](../../attachments/6fd37fd5-0b38-4631-99fa-9f2f419629ea.png)![20260730_6.png](../../attachments/bf7d56b4-e823-4768-abc3-4e11c847840f.png)![20260730_7.png](../../attachments/8ae9cd5e-902a-41ca-af4f-9414071ca5c7.png)![20260730_8.png](../../attachments/79453e5e-06d4-48ff-bf53-66f8848383f6.png)

If a break includes a location, it will also appear on the map. Selecting either the break card in the stop list or its map marker opens the Break details page. From there, you can start navigation using your preferred app, such as Waze, Google Maps, or Apple Maps, and mark the break as completed once finished. You can also edit or remove the break from the route at any time.

![20260730_9.png](../../attachments/f2482b2e-268b-4831-aa12-9226ffffc49b.png)

# Drag-and-Drop Stops

Stop cards could be drag-and-dropped to any position of the route.  For it, you need to press on the stop card and move it.  Remember to press the `Save` button to save your changes.  Once saved, a route will be automatically calibrated updating timings and distance.

Route start and end cards cannot be moved.

![20260730_10.png](../../attachments/090f49e0-3b7e-472c-86ed-f7a619d0e9e3.png)![20260730_11.png](../../attachments/35d2a8c9-f692-4958-8577-d9475deced3b.png)![20260730_12.png](../../attachments/e6427bb4-607e-46ee-8667-6688b25a721e.png)

# Calibrating Route

Once stops are added to a route, we run automatic route optimization and calibration so you can choose the fastest and/or shortest route. You can also press the `: (three dots)` icon on Route view page and select `Calibrate` option to update the planned timings and distance of the route without modifying the order list.  Example: You created 4 stops one by one, didn't change their position, and clicked on the `Calibrate` button.  The route didn't change but the planned time changed.  Changes are saved automatically.

The Calibrate option is available if a route has at least 1 order. 

Before route calibration:

![20260730_13.png](../../attachments/4454f564-fcdd-40e0-aa60-65534758883f.png)

After route calibration:

![20260730_14.png](../../attachments/88160e81-22c1-4794-9739-08aea718997e.png)

We apply automatic calibration in most cases so you don't need to press `Calibrate`:

- removing stops from a route and pressing `Save`
- adding, changing, deleting a break inside a route
- changing (shuffling) stop order inside a route and pressing on `Save`
- changing start and end points in a route if there is at least 1 stop
- changing route planned start time if there is at least 1 stop
- changing vehicle in a route if there is at least 1 stop
- changing time-at-stop inside order or route stops
- deleting a stop on Stop details page

Exceptions when we don't apply automatic calibration: 

- editing a stop (editing recipient address inside stops)
- manually set up a route inside a stop (done from Hub)
- making changes in a depot address or vehicle speed factor

If the route already calibrated, the Calibrate button will be disabled.

# Optimizing Route with Time Windows

After adding stops to a route and pressing `Finish adding stops` button, we run automatic route optimization and calibration so you can select the fastest or shortest route. If the route includes at least one stop with specified Required from and/or Required to fields and you have an Advanced or Enterprise subscription, the system optimizes the route with time windows. To use the Optimize with time windows option separately, press the `: (3 dots)` icon on Route view page and select the `Optimize with time windows` option. Route optimization requires at least two stops, with at least one stop having specified required time slots (either “Required from”, “Required to”, or both).

![20260730_15.png](../../attachments/2c911c2a-68fc-4c15-bc83-f30af5b7b020.png)

When you press `Optimize with time windows`, the geo-locations of the assigned route start point and the stops will be used to suggest an optimum driving route as well as to match the required time windows for each stop. The time window specified using the `Required from` and `Required to` fields inside a stop is not considered a hard constraint by the system. That is, the system doesn't fail if the stop cannot be visited during the time window; instead, the system tries to find a route that visits the stop during its time window, but if time-window violations are inevitable, the system tries to find a solution that minimizes the time-window violation time for all stops in the problem.

If you have provided vehicle dimensions (“Gross weight”, “Height”, “Width”, and “Length” fields) for the vehicle assigned to the route, it will be used for optimization with vehicle restrictions. The system will factor these dimensions into route building to generate the most efficient outcomes, for example, to avoid bridges with height restrictions, narrow roads unsuitable for wider vehicles, or areas with weight limits that could affect the selected route.

Changes are saved automatically.

Before route optimization:

![20260730_16.png](../../attachments/d0e9a2bf-2f0e-4a17-8d3f-c6fd1293a461.png)

After route optimization with time windows:

![20260730_17.png](../../attachments/6cd2e1aa-f558-45f5-90be-8ea0c9c8fbbd.png)

If the route is already optimized with time windows, the Optimize button will be disabled however, you can still optimize the route without time windows and compare the difference.

![20260730_18.png](../../attachments/04f43d69-1ae8-4547-b079-09c8a2be11ca.png)

# Optimizing Route without Time Windows

After adding stops to a route, we run automatic route optimization and calibration so you can select the fastest or shortest route. If stops lack required time windows ("Required from" and/or "Required to" fields), the system optimizes without time windows. To use the Optimize without time windows option separately, press the `: (3 dots)` icon on Route view page and select the `Optimize without time windows` option. Optimization without time windows is available on all subscription levels, starting from Free level.

Route optimization is available when a route has at least two orders.

![20260730_15.png](../../attachments/2c911c2a-68fc-4c15-bc83-f30af5b7b020.png)

When you press `Optimize without time windows`, the geo-locations of the assigned route start location and the stops will be used to suggest an optimum driving route.  The order of the stops may be changed and the planned timings and distance of the route updated.  If you have provided vehicle dimensions (“Gross weight”, “Height”, “Width”, and “Length” fields) for the vehicle assigned to the route, it will be used for optimization with vehicle restrictions. The system will factor these dimensions into route building to generate the most efficient outcomes, for example, to avoid bridges with height restrictions, narrow roads unsuitable for wider vehicles, or areas with weight limits that could affect the selected route.

Changes will be saved automatically.

Before optimization without time windows:

![20260730_19.png](../../attachments/aca04070-9037-48a4-a137-0fe0ccf8e603.png)

After optimization without time windows:

![20260730_20.png](../../attachments/955c3fe4-68b8-4a29-9b09-7aefed2952ea.png)

If the route is already optimized without time windows, the Optimize button will be disabled however, you can still optimize the route with time windows and compare the difference.

# Editing and Deleting Route

By pressing `3 dots` icon on a route card on Routes page, the dialog will be opened with the following options: Edit, Delete, and Select routes for bulk route deletion.  You can create, edit, and delete routes only if you have permission to do it - Manager or Admin role in the current environment.

![20260730_21.png](../../attachments/4720ca07-d4ab-4b49-aac8-e8658d96f5e6.png)

You can also click on the `3 dots` icon on the Route view page and select the `Edit route` or `Delete route` option.

![20260730_22.png](../../attachments/a131a84a-88f7-43ea-b38e-cd811c6f4ce3.png)

After clicking on the `Edit` button, you will be redirected to Edit route page where you can change some route details and save changes.

After clicking on the `Delete` button, the confirmation dialog will be displayed where you need to confirm the deletion of the route.  It's not possible to delete the route that has the Started or Completed status. 

# Editing and Deleting Stop

To edit or permanently delete a stop, you need to go to the Route view page and click on the stop card.  You will be redirected to Details page.  At the bottom of the page, you will see the `Edit` and `Delete stop` buttons.  After clicking on the `Edit` button, you will be redirected to Edit stop page where you can make some changes and save them.  After clicking on the `Delete` button, the confirmation dialog will be displayed where you need to confirm the deletion of the stop. 

![20260730_23.png](../../attachments/cabbccf3-619b-4434-850f-0a9cde1e43dc.png)

To select multiple stops, press the `: (3 dots)` icon on the Route view page and choose the `Select stops` option. You can remove stops from a route (stops remain available to add to another route) or create one POD for multiple stops. If your environment settings disallow multiple PODs per order per route, you cannot select stops with existing PODs because you cannot create a new POD.

![20260730_24.png](../../attachments/d23358b0-5966-4fb6-9ae1-d056011db828.png)![20260730_25.png](../../attachments/3db19ebf-93b4-4a42-af89-18361ff12a72.png)

# Vehicle Loading with Photos

Once a route is optimized and ready-to-go, you can load your vehicle with the assigned delivery stops by selecting `Load vehicle` from the `: (3 dots)` icon on Route view page. Stops appear in reverse order to help you load items that will be delivered last first, with **collection orders excluded**. For each stop, you can set parcel placement (e.g., "front right" or "left shelf") and optionally add photos. Press `Confirm` to save the placement, which can be updated later. Note that new photos will replace the old ones. Once your orders are loaded to the vehicle, press `Finish loading` to return to Route view page.

Vehicle loading (setting placement in the vehicle) with photos is available on all subscriptions levels, including Free level.

![20260730_26.png](../../attachments/60b618d0-b18b-46f3-bf3e-ca7c75691d72.png)![20260730_27.png](../../attachments/c2dfe7de-5bd4-4aac-ae54-f5973009bd94.png)![20260730_28.png](../../attachments/97bc6ddf-0aaa-4239-b9d5-3f7c0a700721.png)![20260730_29.png](../../attachments/ffbe90b2-5c43-465e-b9eb-d4ceefd525ac.png)

The placement and photo count appear on the stop card, and full-size photos can be viewed in the Order details page.

![20260730_30.png](../../attachments/fa0ed07e-5a87-4d87-a0fd-5af3c1255895.png)![20260730_31.png](../../attachments/d137a77c-380b-4c78-913f-d7f653653e9b.png)

You can also set placement and upload photos when adding or editing an order.

![20260730_32.png](../../attachments/f672e839-5a9d-42fd-878e-d96a90e162a4.png)![20260730_33.png](../../attachments/63e2c666-f211-4fd9-bb9f-5536f24dd8c4.png)![20260730_34.png](../../attachments/48f5354b-bf3b-49d1-bbc3-23c39fd4bf75.png)![20260730_35.png](../../attachments/1a2ada56-1b66-48da-b792-1ecc2f29701b.png)

# Navigation

The navigation icon in the top right of Details (of a certain stop) page panel lets you jump out to a navigation app (Google Maps, Apple Maps, Waze, etc.) to help you navigate in an unfamiliar area.

![20260730_35.png](../../attachments/1a2ada56-1b66-48da-b792-1ecc2f29701b.png)![20260730_36.png](../../attachments/abc64da4-06b5-43d4-bfd5-5d06abf75c8b.png)

# Switching Between Stops

You can see navigation arrows on Stop details page above the bottom-screen dialog to quickly switch between route stops. These arrows move dynamically with the bottom sheet as it changes height during scrolling. Next to the arrows, the stop numbers of the previous and next stops are displayed, helping you know which stops you can navigate to. The left arrow is hidden on the first stop, and the right arrow is hidden on the last stop, ensuring navigation options are only shown when applicable. If there is only one stop in the route, no arrows are displayed at all.

![20260730_37.png](../../attachments/ac7b2dae-5f66-4f50-9e69-30b494935f18.png)

# Stop Packages

You can add packages to a stop either in [Hub: Orders](../Web-Based%20Hub/Hub_%20Orders/Hub_%20Orders.md)or in the mobile app during adding or editing of a stop.  Packages will be then displayed on the Stop details page in the mobile app with a barcode, description, height, width, depth, volume, and weight depending on the data provided in [Web-Based Hub](../Web-Based%20Hub/Web-Based%20Hub.md)or in the mobile app.

Adding package information is available only with Advanced and Enterprise subscription levels.

Example when adding packages from the mobile app:

![20260731_2.png](../../attachments/25445fca-3094-4f0f-91ed-217654b5d4c4.png)![20260731_1.png](../../attachments/38fdc9d8-2e12-48cd-9d14-9c0f97eaee62.png)![20260731_3.png](../../attachments/289d4cd9-7c8f-4e12-8ac0-698033b4cab8.png)

Example when adding packages from Hub:

![Screenshot 2026-07-31 at 11.54.15.png](../../attachments/39c1c318-ccfc-4e3d-a5ba-ebe6eb087337.png)![20260731_4.png](../../attachments/46a49869-51d9-4a25-96ec-4f65e73b297a.png)

# Stop Products

You can add products to a stop in [Hub: Orders](../Web-Based%20Hub/Hub_%20Orders/Hub_%20Orders.md).  Pre-defined products will be then displayed on the Stop details page in the mobile app with a product code, description, quantity, and weight depending on the data provided in [Web-Based Hub](../Web-Based%20Hub/Web-Based%20Hub.md).

![20260803_2.png](../../attachments/24270042-e4f3-4227-88b3-421a569966f9.png)![20260803_1.png](../../attachments/add9ee22-4ac2-4cf2-a9fb-2e44b721d8e4.png)

# Stop Packages with Products

You can add packages and products to a stop and link them in [Hub: Orders](../Web-Based%20Hub/Hub_%20Orders/Hub_%20Orders.md).  Pre-defined packages with products will be then displayed on the Stop details page in the mobile app. For a package, a barcode, height, width, depth, volume, and weight can be displayed depending on the data provided in Geo2 Hub. For a product, a product code, description, quantity, and weight can be displayed depending on the data provided in Geo2 Hub. To check products added to a package, press the `Products` button on a package. The list of products added to the package will be displayed. Press `Cross` on the dialog to close it.

![20260803_3.png](../../attachments/8fdb03c3-b4ae-4618-a456-5f06d692cf1e.png)![20260803_4.png](../../attachments/11616928-8763-41e2-931f-15e2d883d131.png)

# Recording Stop Duration

`Record stop duration` setting in [Hub: Environment Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings/Hub_%20Environment%20Settings.md)in Geo2 Hub enables the mobile app’s feature to record the actual time spent at a stop by a driver. Recording actual stop duration feature is available only with Enterprise subscription level.

![Screenshot 2026-08-03 at 13.45.42.png](../../attachments/6850a938-1627-4263-b246-147a8812ab94.png)

Once enabled, the `Record arrival` button will appear on Stop details page within a route in the mobile app. Tapping it records the arrival time for that stop. The button will then be replaced by `Record departure` option. The Create POD option becomes available once you record arrival. You can either generate a proof of delivery (POD) before recording the departure or simply log the departure time without a POD.

![20260803_5.png](../../attachments/e52a2666-9872-40ec-9fc3-8418637a445f.png)![20260803_6.png](../../attachments/2c761c25-551a-4b32-8fa0-f1953477341e.png)

If you press `Record arrival` and then tap the `close` icon to return to Route view page, you will be prompted to confirm whether you want to record the departure time for this stop.

- Selecting `Yes` will record the departure time.
- Selecting `No` will keep the stop duration counting, and you will be redirected to Route view page.

If you pause or complete a route, the departure time for the stop where you pressed `Record arrival` will be recorded automatically. The same applies if you fully close the app.

If you press `Record arrival` at a stop and return to Route view page while the stop duration is still counting, you can select multiple stops and press `Record arrival` again.

- If one of the selected stops has an ongoing stop duration, you will be asked whether you want to overwrite the arrival time.
- If none of the selected stops have an ongoing stop duration, you will be asked to confirm whether the departure time for the previous stop should be recorded automatically.
- If selected stops have an ongoing stop duration and you try to select more stops, you will be asked to confirm whether the departure time for the previous stops should be recorded automatically.

We allow **overwriting arrival and departure times for stops** when necessary. Once both arrival and departure times are recorded, the actual stop duration is calculated based on the time difference. This duration appears on the stop card on Route view page in Hub, allowing you to compare the planned and actual stop duration and take action when necessary.

![Screenshot 2026-08-03 at 13.51.01.png](../../attachments/766fd27b-c463-400f-a9f5-44b84af318a7.png)

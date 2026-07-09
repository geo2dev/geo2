---
slug: "/mobile-app/mobile-app-vehicle-checks"
sidebar_label: "Vehicle Checks"
sidebar_position: 9
---


# Mobile App: Vehicle Checks

# Introduction

Vehicle checks in the mobile app provide a standardized way for drivers to complete vehicle inspections before and after their routes. By digitizing the process, the feature ensures that all required checks are completed consistently, with results captured instantly and stored in the Geo2 app and web-based Hub.

In day-to-day operations, drivers can quickly go through a checklist, flag issues, and attach photos or comments where needed. This helps fleet managers monitor vehicle condition in real time, address defects faster, and maintain a reliable record of inspections for safety, maintenance, and compliance purposes.

# Enabling Vehicle Checks for Route

You can activate vehicle checks on the mobile app when the route is being started and completed in Settings in the app or in Settings → Environment → Routes in Hub.  By default, these options are disabled but you can change it anytime.  Recording of vehicle checks requires Advanced or Enterprise subscription.

![20260428_24 (1).png](../../attachments/39d6b232-a5c8-4be7-a961-d4af139e9022.png)![Screenshot 2026-04-28 at 16.44.22.png](../../attachments/9dfb90a8-cca4-4212-a54f-5554edcecd26.png)

Even though vehicle checks are enabled or disabled in Settings, it is possible to manage vehicle checks for an individual route on Create/Edit route and Route view pages in Hub.

![Screenshot 2026-04-28 at 16.49.41.png](../../attachments/e206e1aa-e90c-4382-83e5-ced0ce95d487.png)![Screenshot 2026-04-28 at 16.50.06.png](../../attachments/2d4cf9e1-ba1d-49df-bdad-94a4d709a1b6.png)

# Vehicle Check Creation for Route

If Vehicle checks are enabled, Vehicle check creation page will be displayed every time the route is started and completed.  If the geolocation is turned off, you will be asked to turn it on for the Vehicle check creation but you can create it without geolocation.

For the Vehicle check creation, you need to take or select photos of the vehicle (optional) and create a signature (optional).  Remember to save it.  If a vehicle is specified for a route, it will be displayed on Create vehicle check page and it is not possible to edit it.  If there is no vehicle provided for a route, you will be asked to select a vehicle existing in your environment settings for which you want to create this check.  If there are no vehicle yet created in the environment and you have permission to update environment settings, you will see the possibility to add a vehicle.

![App 229.png](../../attachments/cf142142-2204-4070-a166-679d5d256638.png)![App 230.png](../../attachments/ab16f276-a487-41ea-b54e-90657a6ebf11.png)

To complete the creation, press the `Create` button. If a vehicle check is enabled at route start, once it is recorded, the route will automatically begin and you will be redirected to the first stop. If a vehicle check is enabled at route completion, once it is recorded, the route will be marked as finished, and you can either proceed to the next route or plan a new one, depending on your permissions.

# Unplanned/Ad-hoc Vehicle Check

To create an unplanned/ad-hoc vehicle check that is not related to any route, you can press the `Create vehicle check` button in Menu or Vehicle checks page.

![20260428_25.png](../../attachments/da593c0f-7527-42f0-9c7e-e2f9070af69b.png)![20260428_26.png](../../attachments/ec82fb94-33ad-4f06-9e7f-625d23d8a751.png)

On Create vehicle check page, you will be asked to select a vehicle existing in your environment settings for which you want to create this check.  You also need to take or select photos of the vehicle (optional) and create a signature (optional).  If there are no vehicle yet created in the environment and you have permission to update environment settings, you will see the possibility to add a vehicle.

To complete the creation, press the `Create` button.

![App 233.png](../../attachments/bf124449-3eff-4d5b-9873-3fbf7981f910.png)![App 235.png](../../attachments/d6451f70-3e8a-445b-bcc6-b9513e12b219.png)![App 234.png](../../attachments/3f02c84a-0aa4-4b23-963a-b3a3736a85b6.png)

# Vehicle Checks History

The created vehicle check will be stored under Vehicle checks in the mobile app's menu and in Geo2 Hub. In the mobile app, you can view vehicle checks history from the past 30 days. To access the full vehicle checks history, you can visit [**Geo2 web-based Hub**](https://hub.geo2.com/en-GB/auth/signin). Data older than 30 days is available with Pro, Advanced, or Enterprise subscription.

![App 236.png](../../attachments/4fe1d871-8c14-45de-a466-28b49bda2e7d.png)![Screenshot 2025-12-29 at 14.50.58.png](../../attachments/9fa188a4-28c0-4929-870c-cd8135c3627d.png)

To view the details of a vehicle check, click on the Vehicle check card. Based on the available information, the following details may be displayed:

- Date and time of the vehicle check record
- Route key (for checks recorded at route start and completion)
- Vehicle key
- Depot key (if the vehicle is assigned to a depot)
- Photos and signature
- Driver’s geolocation at the time of the vehicle check recording

![App 237.png](../../attachments/9c7df23c-46fa-4459-947c-92b31828fb2d.png)![Screenshot 2025-12-29 at 14.52.09.png](../../attachments/8ea9ef0c-7fb1-4bf5-b1e4-3b7cf059f715.png)

# Custom Vehicle Checks Fields

In Settings → Environment → Customer fields in Geo2 Hub, you can set up custom fields for Vehicle checks to ask for needed information from a driver on a route starting and completion.  Custom fields are available with Enterprise subscription level.

Examples of the custom fields from Environment settings:

- Ask for the vehicle registration number
- Ask if the damage is reported
- Ask for Mileage

![Screenshot 2025-12-29 at 14.53.13.png](../../attachments/3790da42-fec7-4c9a-a1f8-d511c1ebf101.png)

That's how it could look on Vehicle check creation page: 

![App 238.png](../../attachments/81e9a307-5565-4f34-af16-4c4d9c2ca063.png)![App 239.png](../../attachments/124dd5e6-9997-4966-82ba-2f112a54ce22.png)

In Vehicle checks history it will be displayed this way:

![App 240.png](../../attachments/cf35b471-7382-48b3-b627-1d283df1a5fd.png)![Screenshot 2025-12-29 at 14.58.42.png](../../attachments/a7817727-0686-458c-a67f-d6667ef9b5ff.png)

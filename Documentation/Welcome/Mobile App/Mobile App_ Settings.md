---
slug: "/mobile-app/mobile-app-settings"
sidebar_label: "Settings"
sidebar_position: 10
---

# Mobile App: Settings

# Introduction

In Settings in the mobile app, you can edit your organization (Users and Subscriptions settings), environment (Routes, Vehicles, Failure reason codes, Proof of delivery and Public tracking settings) and device settings. Settings page is accessible to users of all roles within an organization and environment. However, the visibility of specific settings depends on the user’s role. For instance, users with the Environment User role will not see settings for Routes, Vehicles, Failure reason codes, Proof of delivery and Public tracking.

**Organization** is a group of users who share a subscription and collaborate on data in one or more environments. **Environments** let you represent teams within a single company or provide separate spaces for testing and productive use.

Examples:

- A large company (organization) with smaller teams (environments) working on different projects.
- A holding company (organization) with smaller companies (environments) working in different spheres.
- A middle-size company (organization) with several depots (environments).

As a Free level user, you will have only 1 environment. If you want to use more environments for different purposes, [**upgrade to Enterprise in Geo2 Hub**](https://hub.geo2.com/en-GB/auth/signin).

# Routes Settings

In the Routes settings, you can select whether distance, length, or weight is shown in metric or imperial units, set default stop duration and route start time, add vehicles, enable vehicle checks on route start and end, and update failure reason codes for POD’s.

![20260429_1.png](../../attachments/5170e0c7-7574-411b-abb5-752702b68887.png)

## Stop Duration

Stop duration means the default amount of time the delivery vehicle is expected to remain at a route stop.  This is used when orders are first brought into a route and, together with drive times, stop durations are intended to lead to route durations that are more realistic than if only drive time was considered.

Once a new organization is created, by default, the stop duration is set to 1 minute. You can click on the setting to put your custom duration. Press `Confirm` to save changes.

![20260429_2.png](../../attachments/56e47741-e0f4-4d67-ab8a-a498d1553e2d.png)![20260429_3.png](../../attachments/23aa0c51-c77f-4ff3-b59b-27fc0e04d7d8.png)![20260429_4.png](../../attachments/8b5fbfa1-c923-4c6a-b811-b071db25b29e.png)![20260429_5.png](../../attachments/d83ba41d-7b63-4746-aa84-96e85f915d4f.png)

## Start Time

The setting means the default route start time, i.e. the time when a vehicle sets off from the depot.

Once a new organization is created, by default, the start time is set to 08:00. You can click on the setting to add your custom start time. Press `Update` to save changes.

![20260429_6.png](../../attachments/c5c98713-7330-4f30-9a86-382bbbf351fc.png)![20260429_7.png](../../attachments/4b9a2640-1a3c-4885-99d6-f684afdf683d.png)![20260429_8.png](../../attachments/f51f6116-841c-44b0-ae8d-cf8b14c43d0d.png)![20260429_9.png](../../attachments/5422535f-ba2a-4b7c-9980-7a6f9dbc2d5b.png)

## Vehicles

Vehicles are assigned to deliver routes with orders.  Once you register your account and a new environment is created, default vehicles are created: van, truck, car, motorbike and bicycle. You can add more vehicles either one by one by pressing the `Add vehicle` button or all at once by pressing the `Import` button in Geo2 Hub → [Hub: Environment Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings.md).

By pressing the `Add vehicle` button in the app, you will see the dialog to fill in the information.  Required fields are Key and Type.  All other fields are optional. By pressing the `Measures` button, you will see additional fields like Gross weight, Height, Width, and Length.

![20260429_10.png](../../attachments/d9c92d6f-473e-4234-8a8e-9b209d316538.png)![20260429_11.png](../../attachments/7ab8e0af-c222-401b-af09-2381934773b3.png)![20260429_12.png](../../attachments/4eae0236-db0e-48c3-b38a-aebe1efb090a.png)![20260429_13.png](../../attachments/43b18c2a-2510-4d6e-8e51-74cf89d5b2fc.png)

The properties of each vehicle are:

| <mark style="background: #f0f1f2;">**Property**</mark> | <mark style="background: #f0f1f2;">**Description**</mark> | <mark style="background: #f0f1f2;">**Mandatory**</mark> |
| --- | --- | --- |
| <mark style="background: #ffffff;">Key</mark> | <mark style="background: #ffffff;">Your unique identifier for the vehicle in this environment, for example, Vehicle 1 or Van 001. It is used for displaying vehicles for route assignment and vehicle check creation.</mark> | <mark style="background: #ffffff;">Yes</mark> |
| <mark style="background: #ffffff;">Registration</mark> | <mark style="background: #ffffff;">Vehicle registration number to help identify your vehicle, for example, ABCD012.</mark> | <mark style="background: #ffffff;">No</mark> |
| <mark style="background: #ffffff;">Type</mark> | <mark style="background: #ffffff;">Vehicle type used to consider average speed for route optimization and planned timing adjustments - truck, van, car, motorbike, bicycle.</mark> | <mark style="background: #ffffff;">Yes</mark> |
| <mark style="background: #ffffff;">Gross weight</mark> | <mark style="background: #ffffff;">Number to specify the maximum vehicle weight in the weight units specified in Routes → Weight unit, for example, 22000. It is considered for route optimization and calibration with vehicle restrictions.</mark> | <mark style="background: #ffffff;">No</mark> |
| <mark style="background: #ffffff;">Height</mark> | <mark style="background: #ffffff;">Number to specify the maximum vehicle height based on the length units specified in in Routes → Length unit, for example, 9. This is considered for route optimization and calibration with vehicle restrictions. <br/> For metric environment settings (cm), the value is in metres. <br/> For imperial environment settings (in), the value is in feet.</mark> | <mark style="background: #ffffff;">No</mark> |
| <mark style="background: #ffffff;">Width</mark> | <mark style="background: #ffffff;">Number to specify the maximum vehicle width based on the length units in Routes → Length unit, for example, 9. This is considered for route optimization and calibration with vehicle restrictions. <br/> For metric environment settings (cm), the value is in metres. <br/> For imperial environment settings (in), the value is in feet.</mark> | <mark style="background: #ffffff;">No</mark> |
| <mark style="background: #ffffff;">Length</mark> | <mark style="background: #ffffff;">Number to specify the maximum vehicle length based on the length units specified in Routes → Length unit, for example, 9. This is considered for route optimization and calibration with vehicle restrictions. <br/> For metric environment settings (cm), the value is in metres. <br/> For imperial environment settings (in), the value is in feet.</mark> | <mark style="background: #ffffff;">No</mark> |

Once information is provided, press the `Add` button to save changes.  You can edit vehicle properties by clicking on it.  Remember to press the `Update` button to save changes.

![20260429_14.png](../../attachments/7d45c700-7036-4111-b39f-492d483a2f29.png)

You can select a vehicle to `Delete` it.  For data integrity, it is best to not delete a vehicle once it has started to be used.

## Vehicle Checks

You can activate vehicle check in the mobile app when the route is being started and/or completed by enabling/disabling the Vehicle check on route start/end toggle. Learn more about [Mobile App: Vehicle Checks](Mobile%20App_%20Vehicle%20Checks.md).

Vehicle checks are available with Advanced and Enterprise subscription levels.

![20260428_24 (1).png](../../attachments/8409c9fc-f761-4883-8bb0-41aac56e37de.png)

## Failure Reason Codes

Failure reason codes let you classify reasons for failed deliveries/collections and are available in the mobile app when recording a POD.  Once an environment is created, the first 8 default failure reason codes are added automatically.  Thus, you can create a proof of delivery in the mobile app in a failed or partially successful status.

![20260429_15.png](../../attachments/42e0f342-f173-4c12-9029-663dbd37077c.png)

To add a failure reason code, press the `Add reason code` button.  A prompt will be shown to specify the details of the new failure reason code.  Both fields are required.  The Reason code field value will be displayed to recipients then on public POD page and POD PDF. The Description field is for internal usage only. To save changes, press the `Add` button.

![App 255.png](../../attachments/791401dd-f245-4833-9836-d1d2b9ec3ced.png)

To edit a reason code, click on it.   Remember to press the `Update` button to save any changes.

![App 256.png](../../attachments/fba02ec2-9741-41bb-84cc-2d601e468417.png)

You can select a reason code to `Delete` it.  For data integrity, it is best to not delete a reason code once it has started to be used. It is not possible to delete all reason codes as it will impact a POD creation. Your environment needs at least 1 added failure reason code.

# Recipient Notifications Settings

A recipient can be sent emails with a link to track an order delivery progress and an order POD (proof of delivery).

![20260429_18.png](../../attachments/481c50f5-866d-4be6-9c67-87c32736d459.png)

## Proof of Delivery

By default, a proof of delivery (POD) recording is enabled in every newly created environment. If you don’t need this feature, you can easily disable it in Settings → Proof of delivery in the mobile app. In addition to enabling or disabling POD capture, you can also configure which details are required — such as contact name, remarks, signature, and photos — for each delivery outcome: successful, partially successful, or failed. Recording a POD is available at all subscription levels.

If POD recording is turned off, the mobile app hides the `Create POD` button.

![20260429_19.png](../../attachments/966f1864-87ce-4bb7-8a6f-41101a5cc247.png)![20260429_20.png](../../attachments/a2fd6d65-2274-4448-9020-fa3421419cdf.png)

A recipient can be sent an email with an order POD - both automatically when the POD is recorded and manually at any time from Geo2 Hub. The sender address of email notifications is [noreply@geo2.com](mailto:noreply@geo2.com) if there is no indicated Sender name at Geo2 Hub.  Learn more about the [Hub: Environment Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings.md). Sending POD emails requires an Advanced or Enterprise subscription.

Here are the configurable settings in the app:

| <mark style="background: #f0f1f2;">**Setting**</mark> | <mark style="background: #f0f1f2;">**Description**</mark> |
| --- | --- |
| <mark style="background: #ffffff;">Successful/Failed</mark> | <mark style="background: #ffffff;">Settings from the relevant section will be used in the event of a successful/partially successful/failed delivery/collection.</mark> |
| <mark style="background: #ffffff;">Allow sending of emails</mark> | <mark style="background: #ffffff;">If selected, POD messages will be sent automatically to a recipient email address once a POD is recorded.</mark> |
| <mark style="background: #ffffff;">Subject</mark> | <mark style="background: #ffffff;">Subject line of notifications.  You can use these tokens for POD emails: <br/> **{CONTACT\_NAME}** - recipient name <br/> **{ORDER\_KEY}** - order key</mark> |
| <mark style="background: #ffffff;">Body</mark> | <mark style="background: #ffffff;">Body of notifications.  You can use these tokens for POD emails: <br/> **{CONTACT\_NAME}** - recipient name <br/> **{ORDER\_KEY}** - order key <br/> **{PUBLIC\_POD}** - POD tracking link</mark> |

Once all information is provided, click the `Update` button to save changes.

![20260429_21.png](../../attachments/b985b30e-61d1-40f0-bc55-7806d26d0e9e.png)![20260429_22.png](../../attachments/c29671ee-d2a3-408c-9a8e-8391218113e3.png)

Once a POD is created and an order has a recipient email address, the POD notification email will be sent (if it was enabled in Settings).

## Public Tracking

It's possible for external users such as recipients to optionally track the progress of their orders on a public web page.  Public tracking links can be sent via email and SMS notifications.  The sender address of email notifications is [noreply@geo2.com](mailto:noreply@geo2.com) if there is no indicated Sender name at Geo2 Hub.  Sending public tracking emails requires an Advanced or Enterprise subscription. SMS is available only with an Enterprise subscription.

![20260429_23.png](../../attachments/c2d39497-c392-4b0e-99f4-279008f01c69.png)![20260429_24.png](../../attachments/502c1c4c-dd54-4b2d-b68d-b72ab9626571.png)![20260429_25.png](../../attachments/6f2b35d5-10e9-4d69-9664-34ce03db70dd.png)

Here are the configurable settings in the app:

| <mark style="background: #f0f1f2;">**Setting**</mark> | <mark style="background: #f0f1f2;">**Description**</mark> |
| --- | --- |
| Tracking email enabled on status | Send an email notification to the recipient, in which you can include the tracking page address, to enable them to track the order prior to delivery/collection.  The possible triggers are: <br/> **None** - Do not send emails. <br/> **Released** - When the order (stop) is assigned to a released route. Typically not used in the app. <br/> **Planning** - When the order (stop) is assigned to a route in planning.  Typically not used in the app. <br/> **Planned** - When the order (stop) is assigned to a planned route.  Typically not used in the app. <br/> **In Transit** - When the route, to which the order (stop) has been assigned, has been started. |
| <mark style="background: #ffffff;">Subject</mark> | <mark style="background: #ffffff;">Subject for the notification email.  You can use these tokens for Public tracking emails: <br/> **{CONTACT\_NAME}** - recipient name <br/> **{ORDER\_KEY}** - order key</mark> |
| <mark style="background: #ffffff;">Body</mark> | <mark style="background: #ffffff;">Body of the notification email.  Ensure that the wording of the email is appropriate for the trigger you have configured.  You can use the next tokens for an email notification: <br/> **{CONTACT\_NAME}** - recipient name <br/> **{ORDER\_KEY}** - order key <br/> **{PUBLIC\_TRACKING}** - public tracking link</mark> |
| Disclose calculated ETA | On Public tracking page, when an order has not been delivered/collected yet, show a calculated ETA based on the planned stop delivery/collection time +- delivery ETA taken from Settings → Routes.  This will be expressed as a range. |
| Disclose stop position | On Public tracking page, when an order has not been delivered/collected yet, show the last delivered stop on the route, giving the recipient an indication of how far away the delivery vehicle is from them in terms of the number of stops. |
| Disclose vehicle position | On Public tracking page, when an order has not been delivered/collected yet, show the last known vehicle position on the map. |

Once the route status changes to the configured value (e.g. In Transit), an email notification with a public tracking link will be sent to the recipient's email address.  For this to work, it is important that the recipient’s contact details (email address and mobile phone number) are specified in the order.

# Users Settings

If you are on a Free subscription level, you will see only your user. It is possible to add new users to the current subscription level in [**Geo2 Hub**](https://hub.geo2.com/en-GB/auth/signin), for example, for seasonal workers if you are on Advanced or Enterprise subscription level.  One purchased subscription (license) is counted as one user. If you are on Advanced level, you can add up to 10 users to your organization in total. If you are on Enterprise level, you are not limited in the number of users. You can press the  `Add users` button on [Hub: Subscriptions](../Web-Based%20Hub/Hub_%20Subscriptions.md), select the number of users, and proceed with payment.

![App 265.png](../../attachments/2cd4fc25-9c11-4f78-8125-d490497a9250.png)

If you are on Advanced or Enterprise level, you can invite other users to your organization.  You can invite them either one-by-one, by pressing the `Invite user` button, or all at once, by pressing the `Import` button in Geo2 Hub.

![App 264.png](../../attachments/897a01cd-23e1-4239-8c16-da5923beaf9d.png)

By press `Invite user` in the app, you will see the dialog prompting you for an email address, full name, role and subscription.  Make sure the email address used is valid and can receive incoming messages.  Instructions for the invited user are in the invitation email message and [Hub: Accept Invitation](../Web-Based%20Hub/Hub_%20Accept%20Invitation.md).

![App 266.png](../../attachments/eb30d6d3-8e8d-4de9-ad0d-b6fc1836118c.png)

The properties of each user are:

| <mark style="background: #f0f1f2;">**Property**</mark> | <mark style="background: #f0f1f2;">**Description**</mark> |
| --- | --- |
| <mark style="background: #ffffff;">Email</mark> | <mark style="background: #ffffff;">The email address must be in a valid email format - [recipient@domain\_name.domain\_suffix.](#) For example, [john.doe@gmail.com.](mailto:janedoe@gmail.com)</mark> |
| <mark style="background: #ffffff;">Full name</mark> | <mark style="background: #ffffff;">For example, Driver John Doe.  It is used for displaying users for route assignment, POD, and vehicle check creation.</mark> |
| <mark style="background: #ffffff;">Role</mark> | <mark style="background: #ffffff;">Role is a set of permissions for the user in the organization/environment.  Each user can either have the role of User, which does not enable them to modify the organization and environment (including route and order creation), or Admin, which gives them control over the organization and environment.  For organization and environment user roles and their permissions, see [User Roles](../User%20Roles.md). In the mobile app, you can select either User or Admin role that will be applied both to your organization and environment.</mark> |

**To enable the use of the Geo2 product, an Organization Admin needs to assign a subscription to a newly invited user.** The message at the top of the `Users` page informs you about your current organization subscription.

By pressing on a user, you can edit their role and subscription. Remember to press the `Update` button to save changes.

If you want to delete a user from your organization, press the `Delete` button. This user will lose access to your organization.

# Device Settings

In the Device settings, you can choose whether location tracking is enabled.  Geo2 organizations use collected location data for management and reporting.

There are further options that customise the behaviour of the app:

- **Barcode sound** - select the sound that confirms the scanning of a barcode.
- **Photo resolution** - select the resolution of photos taken by the app - higher resolution produces higher quality but also increases the amount of network data that will be used to sync the photos.
- **Language** – choose your preferred language for the mobile app interface: English, Spanish, French, Brazilian Portuguese, Romanian, or Ukrainian.

  **Theme** – choose your preferred app appearance: system default, light mode, or dark mode.

![20260429_26.png](../../attachments/ec8b244a-7027-4b79-9bad-1093de8f4c74.png)

# Account Settings

Here you can find the next information:

- Contact Support - to report the issue, ask a question about Geo2, or leave your feedback to improve the product.
- Privacy Policy and Terms of Service.

To remove your account data, please click on the `Delete account` button and confirm the action.

![20260429_27.png](../../attachments/cb0e5844-d7c6-4351-9b60-ebda83d21111.png)

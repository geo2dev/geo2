---
slug: /mobile-app/mobile-app-settings
sidebar_label: Settings
sidebar_position: 11
description: 'In Settings in the mobile app, you can edit your organization (Users and Subscriptions settings), environment (Routes, Vehicles, Failure reason codes,'
---

# Mobile App: Settings

## Introduction

The Settings page in the Geo2 mobile app allows you to customize how the app works, manage routes and vehicles, configure delivery and tracking preferences, and update your organization and account settings.

Settings are organized into seven sections to make it easier to find and manage different options:

* **Display preferences** — customize units of measurement and other display preferences.
* **Routes and stops** — configure default route settings, road avoidance preferences, and route purpose codes.
* **Vehicles and checks** — manage vehicles, vehicle costs, and vehicle check settings.
* **Proof of delivery and tracking** — configure Proof of Delivery (POD), failure reason codes, and public tracking.
* **Organization** — manage organization users, subscriptions, and environment settings.
* **Device** — customize device-specific settings, including location tracking, language, and photo resolution.
* **Account** — access support, legal information, and account management options.

![20261120\_6.png](/attachments/mwp0tj81-m9ose5bd.png)

![20261120\_7.png](/attachments/mwp0tmhq-chllxgxk.png)

![20261120\_8.png](/attachments/mwp0tqeq-cgktc5ip.png)

![20261120\_9.png](/attachments/mwp0ttgb-fucru62k.png)

The Settings page is accessible to users of all roles within an organization and environment. However, the visibility of specific settings and the ability to modify them depend on the user's role.

For example, Environment Admins can manage environment settings, while Environment Managers can view them without making changes. Environment Users and User Admins cannot access environment settings.

**Organization** is a group of users who share a subscription and collaborate on data in one or more environments.

**Environments** let you represent teams within a single company or provide separate spaces for testing and productive use.

Examples:

* A large company (organization) with smaller teams (environments) working on different projects.
* A holding company (organization) with smaller companies (environments) working in different industries.
* A medium-sized company (organization) with several depots (environments).

With a Free subscription, you can have one environment. If you need additional environments, you can [upgrade to Enterprise in Geo2 Hub](https://hub.geo2.com/en-GB/auth/signin).

## Display Preferences

Display preferences allow you to customize how information is presented in the Geo2 mobile app.

### Measurement Units

You can select the units used to display distances, vehicle dimensions, and weights.

Available settings include:

* **Distance unit** — choose between metric and imperial distance measurements.
* **Length unit** — select the unit used for vehicle dimensions.
* **Weight unit** — select the unit used for vehicle weight.

These settings are used throughout the app, including route details, vehicle settings, and mileage information.

### Currency

The **Currency** setting determines which currency is used to display vehicle costs and other cost-related information in Geo2. When a new environment is created, Geo2 automatically selects a default currency based on the environment's country.

For example:

* United Kingdom — GBP (£)
* United States — USD ($)

You can change the currency to another supported currency at any time if you have permission to update environment settings.

To change the currency:

1. Open **Settings** in the Geo2 mobile app.
2. Find **Currency** in the environment settings.
3. Select your preferred currency.
4. Save your changes.

Changing the currency does not automatically convert previously entered monetary values. For example, if a vehicle cost was set to 1 EUR and you change the currency to USD, the value will be displayed as 1 USD rather than being converted using an exchange rate.

Environment Admins can update this setting, while Environment Managers can view the selected currency in read-only mode.

## Routes and Stops

The Routes and stops section allows you to configure default route settings, including stop duration, start time, road avoidance preferences, and route purpose codes.

![20261120\_10.png](/attachments/mwp0uicz-tygriwzz.png)

### Stop Duration

Stop duration is the default amount of time a delivery vehicle is expected to remain at a route stop. It is used when orders are first added to a route. Together with driving times, stop durations help Geo2 calculate more realistic route durations.

When a new organization is created, the default stop duration is set to **1 minute**.

To change it:

1. Open **Settings → Stop duration**.
2. Enter your preferred duration.
3. Press `Confirm` to save your changes.

The selected duration will be applied by default when creating new stops.

### Start Time

The Start time setting determines the default time when a vehicle is expected to begin its route, for example, when leaving the depot.

When a new organization is created, the default start time is **08:00**.

To update it:

1. Open **Settings → Start time**.
2. Select your preferred start time.
3. Press `Update` to save your changes.

### Avoid Roads

The **Avoid roads** setting allows you to choose which road types Geo2 should avoid when calculating routes. Select road types to avoid when calculating routes.

You can configure the following options:

* **Toll roads** — avoid roads that require toll payments.
* **Highways** — avoid major highways and motorways.
* **Ferries** — avoid ferry crossings.

By default, all options are disabled.

You can enable or disable each option depending on your route planning preferences. These preferences are considered when Geo2 calculates and optimizes routes. Depending on available roads and routing restrictions, it may not always be possible to avoid every selected road type.

### Route Purpose Codes

Route purpose codes allow you to categorize routes and mileage records based on the purpose of the journey. This is especially useful for businesses and drivers who need to distinguish between business, commuting, and personal mileage for reporting and record-keeping.

For example, you can create purpose codes such as:

* Delivery round
* Client visit
* Commute to depot
* Personal use

Each purpose code consists of the following properties:

| **Property** | **Description**                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------- |
| Description  | A custom name describing the purpose of the route, such as Delivery round or Client visit.                    |
| Type         | A predefined category: Business, Commuting, or Personal.                                                      |
| Default      | Indicates whether this purpose code is selected by default when creating routes or starting mileage tracking. |

Geo2 supports three predefined types:

* **Business** — journeys made for business purposes, such as deliveries, customer visits, or work-related travel.
* **Commuting** — journeys between home and a regular workplace or depot.
* **Personal** — journeys unrelated to business activities.

You can create custom purpose descriptions, but the available Types cannot be changed or extended.

When a new environment is created, Geo2 automatically adds three purpose codes:

| **Description** | **Type**  | **Default** |
| --------------- | --------- | ----------- |
| Business        | Business  | Yes         |
| Commuting       | Commuting | No          |
| Personal        | Personal  | No          |

**Business** is selected as the default purpose code. Only one purpose code can be marked as Default at a time.

![20261120\_11.png](/attachments/mwp0w6lj-ckgpx7y4.png)

To create a new purpose code:

1. Open **Settings → Route purpose codes**.
2. Press `Add purpose code`.
3. Enter a Description, such as "Delivery round".
4. Select the appropriate Type: Business, Commuting, or Personal.
5. If needed, mark the purpose code as Default.
6. Save your changes.

![20261120\_12.png](/attachments/mwp0whro-igkihz2o.png)

![20261120\_13.png](/attachments/mwp0wno9-6gnjmtop.png)

The new purpose code will be available for selection when assigning a purpose to routes or starting mileage tracking.

To edit an existing purpose code, select it from the list, update its details, and save your changes.

You can also delete purpose codes where deletion is allowed.

![20261120\_14.png](/attachments/mwp0wvds-usnm8rfx.png)

If you want to change the default purpose code, select another code and mark it as Default. The previously selected default will be replaced automatically.

Environment Admins can add, edit, delete, and change default purpose codes. Environment Managers can view the configured codes but cannot modify them. Environment Users and User Admins cannot access this setting.

Purpose codes are also used in the Geo2 Mileage tracking feature to categorize recorded journeys. When you start standalone mileage tracking, Geo2 asks you to select a purpose code before tracking begins. The default purpose code is preselected, but you can choose another available code.

![20261118\_3.png](/attachments/mwp0xizt-l5uysgn1.png)

![20261118\_4.png](/attachments/mwp0xnay-rweuceez.png)

You can also filter mileage records by purpose code and include this information in mileage reports.

![20261118\_10.png](/attachments/mwp0xu9p-grb9st92.png)

Learn more about [Mileage tracking](https://help.geo2.com/mobile-app/).

## Vehicles and Checks

The Vehicles and checks section allows you to manage the vehicles used for deliveries, configure vehicle costs, and enable vehicle checks.

![20261120\_15.png](/attachments/mwp0ypge-seahbrlo.png)

### Vehicles

Vehicles are assigned to routes containing delivery or collection orders.

When a new environment is created, Geo2 automatically adds the following default vehicle types:

* Van
* Truck
* Car
* Motorbike
* Bicycle

You can add additional vehicles individually through the mobile app or import multiple vehicles at once using [Geo2 Hub](https://hub.geo2.com/).

![20261120\_16.png](/attachments/mwp0ytjc-6f030knv.png)

To add a new vehicle:

1. Open **Settings → Vehicles**.
2. Press `Add vehicle`.
3. Enter the vehicle details.
4. Press `Measures` to configure additional vehicle dimensions, if necessary.
5. Press `Add` to save the vehicle.

![20261120\_17.png](/attachments/mwp0z67x-j3g0m8bs.png)

![20261120\_18.png](/attachments/mwp0z9y8-5qwhmtv1.png)

The required fields are **Key** and **Type**. All other properties are optional.

| **Property**           | **Description**                                                                                            | **Required** |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- | ------------ |
| Key                    | A unique identifier for the vehicle within the environment, such as Vehicle 1 or Van 001.                  | Yes          |
| Registration           | Vehicle registration number, such as ABCD012.                                                              | No           |
| Type                   | Vehicle category used for route optimization and planning, such as van, truck, car, motorbike, or bicycle. | Yes          |
| Gross weight           | Maximum vehicle weight in the selected weight unit. Used for routing with vehicle restrictions.            | No           |
| Height                 | Maximum vehicle height based on the environment's length unit.                                             | No           |
| Width                  | Maximum vehicle width based on the environment's length unit.                                              | No           |
| Length                 | Maximum vehicle length based on the environment's length unit.                                             | No           |
| Cost per distance unit | Vehicle operating cost per unit of distance, using the environment's currency and distance unit.           | No           |
| Cost per hour          | Vehicle operating cost per hour, using the environment's currency.                                         | No           |

Vehicle dimensions and weight can be considered during route optimization and calibration when vehicle restrictions apply.

Geo2 allows you to configure operating costs for individual vehicles. Two optional fields are available when adding or editing a vehicle:

**Cost per distance unit**

Specifies the estimated cost of operating a vehicle per unit of distance.

The unit depends on the environment's Distance unit setting.

For example:

* £0.50 per mile
* $0.80 per mile
* €0.45 per kilometre

**Cost per hour**

Specifies the estimated hourly operating cost of the vehicle.

For example:

* £15 per hour
* $20 per hour
* €18 per hour

Both fields accept numerical values. The currency displayed is determined by the environment's Currency setting. These values can be used in Geo2's route cost calculations to estimate vehicle operating expenses based on distance and time.

If you change the environment currency, previously entered vehicle costs are not converted automatically. Only the displayed currency changes, while the numerical values remain the same.

#### Edit or delete a vehicle

To edit vehicle details, select the vehicle from the list, update the relevant properties, and press `Update`.

You can also delete a vehicle where permitted.

![20261120\_19.png](/attachments/mwp105o3-xqvdu4qc.png)

For data integrity, it is recommended not to delete vehicles that have already been used for routes or vehicle checks.

### Vehicle Checks

Vehicle checks allow drivers to record the condition of their vehicles before starting or after completing a route. You can configure whether vehicle checks are required at different stages of route execution.

Available settings include:

* **Vehicle check on route start** — enable a vehicle check when a route is started.
* **Vehicle check on route end** — enable a vehicle check when a route is completed.

You can enable or disable these options independently.

Vehicle checks are available with Advanced and Enterprise subscriptions.

Learn more about [Vehicle Checks](https://help.geo2.com/mobile-app/).

## Proof of Delivery and Tracking

This section allows you to configure Proof of Delivery (POD), failure reason codes, and public tracking settings.

![20261120\_20.png](/attachments/mwp10v49-ucf218bf.png)

### Failure Reason Codes

Failure reason codes allow you to categorize unsuccessful or partially successful deliveries and collections. They are available when recording Proof of Delivery in the Geo2 mobile app. When a new environment is created, Geo2 automatically adds eight default failure reason codes. You can customize these codes to match your business requirements.

![20261120\_21.png](/attachments/mwp11b71-u4gpn4ny.png)

To create a new failure reason code:

1. Open **Settings → Failure reason codes**.
2. Press `Add reason code`.
3. Enter the required information:

* **Reason code** — the value displayed to recipients on the public POD page and in the POD PDF.
* **Description** — additional information used internally.

1. Press `Add` to save your changes.

Both fields are required.

![20261120\_22.png](/attachments/mwp11kev-q4v1l2ds.png)

To edit an existing failure reason code, select it from the list, update its information, and press `Update`.

You can also delete failure reason codes where permitted.

![20261120\_23.png](/attachments/mwp11u9i-u2v7eh84.png)

For data integrity, it is recommended not to delete codes that have already been used.

At least one failure reason code must remain in the environment to support POD creation.

### Proof of Delivery

Proof of Delivery (POD) allows drivers to record the outcome of a delivery or collection. By default, POD recording is enabled for every newly created environment. You can enable or disable this functionality in **Settings → Proof of delivery**. If POD recording is disabled, the mobile app hides the `Create POD` button.

You can also configure which details are required for each delivery outcome:

* Successful
* Partially successful
* Failed

Depending on the delivery outcome, you can specify whether the following details are required:

* Contact name
* Remarks
* Signature
* Photos

POD recording is available with all Geo2 subscription levels.

![20261120\_24.png](/attachments/mwp12h41-cquk7rg9.png)

![20261120\_25.png](/attachments/mwp12kwu-mw2xggpw.png)

Geo2 can automatically send POD confirmation emails to recipients when a delivery or collection is recorded. POD emails can also be sent manually through Geo2 Hub. Automatic POD email notifications require an Advanced or Enterprise subscription.

![20261120\_26.png](/attachments/mwp1301y-ns5fqjx3.png)

![20261120\_28.png](/attachments/mwp137q0-25w53d6r.png)

The sender address is **[noreply@geo2.com](mailto:noreply@geo2.com)** unless a custom sender name has been configured in Geo2 Hub.

The following settings are available:

| **Setting**             | **Description**                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Successful/Failed       | Configure notification content and behaviour for the relevant delivery outcome, including partially successful deliveries. |
| Allow sending of emails | Enable automatic POD emails when a delivery or collection is recorded.                                                     |
| Subject                 | Customize the notification email subject.                                                                                  |
| Body                    | Customize the content of the notification email.                                                                           |

You can use the following tokens in the email subject and body:

* `{CONTACT_NAME}` — recipient's name
* `{ORDER_KEY}` — order identifier
* `{PUBLIC_POD}` — link to the public POD page (email body)

Once you have configured the notification settings, press `Update` to save your changes.

If automatic POD emails are enabled and the order contains a valid recipient email address, Geo2 sends the notification after POD recording.

### Public Tracking

Public tracking allows recipients to follow the progress of their deliveries or collections through a public web page. Tracking links can be shared with recipients by email or SMS, depending on the organization's subscription.

* **Email notifications** — available with Advanced and Enterprise subscriptions.
* **SMS notifications** — available with Enterprise subscriptions.

The sender email address is **[noreply@geo2.com](mailto:noreply@geo2.com)** unless a custom sender name has been configured in Geo2 Hub.

![20261120\_29.png](/attachments/mwp1p9j9-gr24geus.png)

![20261120\_30.png](/attachments/mwp1pg8v-m2eomoff.png)

| **Setting**                      | **Description**                                                                                 |
| -------------------------------- | ----------------------------------------------------------------------------------------------- |
| Tracking email enabled on status | Select the order or route status that triggers a tracking notification email.                   |
| Subject                          | Customize the subject of the notification email.                                                |
| Body                             | Customize the notification content, including the public tracking link.                         |
| Disclose calculated ETA          | Display an estimated delivery or collection time range on the public tracking page.             |
| Disclose stop position           | Show the last completed stop to indicate how many stops remain before the recipient's delivery. |
| Disclose vehicle position        | Display the last known vehicle position on the public tracking map.                             |

You can choose when a public tracking email should be sent:

* **None** — do not send tracking emails.
* **Released** — when an order is assigned to a released route.
* **Planning** — when an order is assigned to a route in planning.
* **Planned** — when an order is assigned to a planned route.
* **In Transit** — when the assigned route has been started.

The Released, Planning, and Planned statuses are typically managed through Geo2 Hub rather than the mobile app.

You can use the following tokens to personalize tracking notification emails:

* `{CONTACT_NAME}` — recipient's name
* `{ORDER_KEY}` — order identifier
* `{PUBLIC_TRACKING}` — public tracking link (email body)

Make sure the email content matches the notification trigger you have configured. For example, if the email is sent when a route starts, the message can inform the recipient that their delivery is on its way.

When the route or order reaches the selected status, Geo2 sends the tracking notification to the recipient.

For email and SMS notifications to work, the relevant recipient contact information must be provided in the order.

## Organization

The Organization section allows you to manage users and access subscription-related settings.

![20261120\_31.png](/attachments/mwp1upcx-612zefoy.png)

### Users

The Users page allows you to view and manage the users who belong to your Geo2 organization, subject to your role permissions and subscription level. With a Free subscription, you will see only your own user account.

With Advanced or Enterprise, you can invite additional users to your organization.

* **Advanced** — supports up to 10 users in total.
* **Enterprise** — supports an unlimited number of users.

Each user requires an assigned subscription licence.

Additional licences can be purchased through [Geo2 Hub → Subscriptions](https://hub.geo2.com/en-GB/auth/signin).

![20261120\_32.png](/attachments/mwp1uxfo-ogqskv71.png)

To invite a new user from the mobile app:

1. Open **Settings → Users**.
2. Press `Invite user`.
3. Enter the user's email address and full name.
4. Select the appropriate user role and subscription.
5. Send the invitation.

![20261120\_33.png](/attachments/mwp1v3s7-a8xq8x9i.png)

Make sure the email address is valid and can receive incoming messages.

The invited user will receive an email containing instructions for joining your organization.

You can also import multiple users at once through Geo2 Hub.

| **Property** | **Description**                                                                  |
| ------------ | -------------------------------------------------------------------------------- |
| Email        | A valid email address used for the invitation and account access.                |
| Full name    | The name displayed for route assignments, Proof of Delivery, and vehicle checks. |
| Role         | Determines the user's permissions within the organization and environment.       |
| Subscription | The subscription licence assigned to the user.                                   |

In the mobile app, you can select User or Admin when inviting users, with the selected role applied to both the organization and environment.

An Organization Admin must assign a subscription to a newly invited user to enable access to Geo2.

Learn more about [User Roles](https://help.geo2.com/).

Select a user to update their role or assigned subscription.

Press `Update` to save any changes.

To remove a user from your organization, select `Delete`. The removed user will lose access to your organization.

![20261120\_34.png](/attachments/mwp1vo47-onteybfr.png)

### Subscriptions

The Subscriptions settings allow you to review and manage subscription-related information. Subscription availability and management options depend on your current plan and how the subscription was purchased.

For subscriptions purchased through the App Store or Google Play, subscription cancellation is managed directly through the corresponding store settings.

For organization-level subscription management, including additional user licences, use [Geo2 Hub](https://hub.geo2.com/en-GB/auth/signin).

## Device

Device settings allow you to customize how Geo2 behaves on your device.

These settings include location tracking, scanning preferences, photo resolution, language, and app appearance.

### Location Tracking

Geo2 uses location data to support route execution, delivery tracking, mileage recording, and reporting. Location tracking allows the app to record the device's location while tracking is active.

Depending on your device and operating system, Geo2 may request additional permissions to continue recording location data while the app is running in the background.

Background location access is particularly important for accurate mileage tracking when you switch to another app or lock your device. Without the required permissions, location data may be incomplete, affecting recorded distances and tracking information.

### Barcode Sound

The Barcode sound setting allows you to select the sound played when a barcode is successfully scanned. This provides audible confirmation that the scan has been completed.

### Photo Resolution

The Photo resolution setting determines the quality of photos captured through Geo2, including Proof of Delivery and vehicle check photos. Higher resolution produces better image quality but increases the amount of data required to upload and synchronize photos.

### Language

The Language setting allows you to choose your preferred language for the Geo2 mobile app interface. Select your preferred language from the available options: Czech, German, English, Spanish, French, Italian, Brazilian Portuguese, Romanian, Ukrainian.

### Theme

The Theme setting allows you to customize the appearance of the Geo2 mobile app.

Available options:

* **System default** — follows your device's appearance settings.
* **Light mode** — uses the light app interface.
* **Dark mode** — uses the dark app interface.

## Account

The Account section provides access to support, legal information, and account management options.

### Contact Support

Use **Contact Support** to:

* Report an issue with Geo2.
* Ask a question about the app or its features.
* Share feedback or suggestions for future improvements.

### Privacy Policy and Terms of Service

You can review Geo2's Privacy Policy and Terms of Service directly from the Account section.

### Delete account

If you want to remove your Geo2 account data, select `Delete account` and confirm the action.

Make sure you understand the consequences of account deletion before proceeding.

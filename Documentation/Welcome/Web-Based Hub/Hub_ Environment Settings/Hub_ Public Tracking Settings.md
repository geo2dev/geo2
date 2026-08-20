---
slug: "/web-based-hub/hub-environment-settings/hub-public-tracking-settings"
sidebar_label: "Public Tracking Settings"
sidebar_position: 10
description: "It's possible for external users such as recipients to optionally track the progress of their orders on a public web page."
---


# Hub: Public Tracking Settings

It's possible for external users such as recipients to optionally track the progress of their orders on a public web page.  Public tracking emails require an Advanced or Enterprise subscription, while tracking SMS notifications require an Enterprise subscription.

Public tracking links can be sent via email and SMS notifications.  You do not need to use your email or mobile number to send recipient notifications. Geo2 system will send them for you. You can configure Public tracking settings in Settings → Environment → Public tracking.

| **Setting** | **Description** |
| --- | --- |
| Disclose calculated ETA | On Public tracking page, when an order has not been delivered/collected yet, show a calculated ETA based on the planned stop delivery/collection time +- delivery ETA taken from Settings → Environment → Routes.  This will be expressed as a range. |
| Disclose stop position | On Public tracking page, when an order has not been delivered/collected yet, show the last delivered stop on the route, giving the recipient an indication of how far away the delivery vehicle is from them in terms of the number of stops. |
| Disclose vehicle position | On Public tracking page, when an order has not been delivered/collected yet, show the last known vehicle position on the map (requires the vehicle driver to have started load tracking in the mobile app). |
| Tracking email/SMS enabled on | Send an email/SMS notification to the recipient, in which you can include the tracking page address, to enable them to track the order prior to delivery/collection.  The possible triggers are: <br/> `None` - Do not send emails. <br/> `Registered` - When the order is created (via the Hub, mobile app, or API). <br/> `Planning` - When the order is assigned to a route in planning. <br/> `Planned` - When the order is assigned to a planned route. <br/> `Released` - When the order is assigned to a released route. <br/> `In Transit` - When the route, to which the order has been assigned, has been started.  For this trigger, it is important that drivers explicitly start tracking routes in the mobile app. |
| Sender name | Sender name for the notification email.  Not available for an SMS notification. |
| Subject | Subject for the notification email.  Not available for an SMS notification.  You can use these tokens for Public tracking emails: <br/> **`{CONTACT_NAME}`** - recipient name <br/> **`{ORDER_KEY}`** - order key <br/> **`{COMPANY_NAME}`** - сompany name <br/> **`{ENVIRONMENT_NAME}`** - environment name |
| Body | Body of the notification email/SMS.  Ensure that the wording of the email is appropriate for the trigger you have configured.  You can use the next tokens for an email/SMS notification: <br/> **`{CONTACT_NAME}`** - recipient name <br/> **`{ORDER_KEY}`** - order key <br/> **`{PUBLIC_TRACKING}`** - public tracking link <br/> **`{COMPANY_NAME}`** - company name <br/> **`{ENVIRONMENT_NAME}`** - environment name <br/> **`{DELIVERY_ETA}`** - estimated time of arrival <br/> Without the token PUBLIC\_POD, the public POD link will not be included in an SMS notification. <br/> The limit for an SMS notification is **120 symbols**. |

![Screenshot 2026-04-07 at 15.40.45.png](/Documentation/attachments/fb3ee274-304e-4c1d-a2c4-90e98d0a8be1.png)![Screenshot 2026-04-07 at 15.40.53.png](/Documentation/attachments/b15fcbe3-ebca-4982-81dc-6a3e67a3d529.png)

Once the route status changes to the configured value (e.g. In Transit), an email/SMS notification with a public tracking link will be sent to the recipient's email address/mobile phone number.  For this to work, it is important that the recipient’s contact details (email address and mobile phone number) are specified in the order.

Here is an example of the public tracking email:

![Screenshot 2026-04-07 at 15.44.53.png](/Documentation/attachments/6aeef591-3c69-4206-8aa5-6bd39767f3a2.png)

By pressing the `Check` button or following the pasted link, a recipient will see tracking details.

![Screenshot 2026-04-07 at 15.47.21.png](/Documentation/attachments/1a8a14f5-660c-4231-a0bf-03b9bf188768.png)

---
slug: /web-based-hub/hub-environment-settings/hub-proof-of-delivery-settings
sidebar_label: Proof of Delivery Settings
sidebar_position: 9
description: By default, a proof of delivery (POD) recording is enabled in every
  newly created environment.
---
# Hub: Proof of Delivery Settings

By default, a proof of delivery (POD) recording is enabled in every newly created environment. If you don’t need this feature, you can easily disable it in Hub under Settings → Environment → Proof of Delivery. In addition to enabling or disabling POD capture, you can also configure which details are required — such as contact name, remarks, signature, and photos — for each delivery outcome: successful, partially successful, or failed.

If POD recording is turned off, the mobile app hides the `Create POD` button for drivers.

![Screenshot 2026-08-31 at 13.54.11.png](/Documentation/attachments/mth6l39z-tv20yubl.png)

A recipient can be sent an email with an order POD (proof of delivery) - both automatically when the POD is recorded and manually at any time from Geo2 Hub. While recording a POD is available for all level users, POD notifications are available only with Advanced or Enterprise subscription level.

The sender address of email notifications is [noreply@geo2.com](mailto:noreply@geo2.com) if there is no indicated Sender name.  Here are the configurable settings in Settings → Environment → POD notification in Hub:


| **Setting** | **Description** |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Sender name | The display name that will accompany the sender address, for example, your company name. |
| Successful and Partially successful/Failed | Settings from the relevant section will be used in the event of a successful and partially successful/failed delivery/collection. |
| Automatic enabled | If selected, POD messages will be sent automatically to a recipient email address and fixed emails (for partially successful/failed POD emails) when a POD is registered in Hub. |
| Manual enabled | If selected, Hub users have the option to trigger the sending of the POD manually. Press the `Email to recipient` button on the Proof of Delivery page inside of an order in Hub or on the POD dialog when clicking on the POD icon on an order card or stop card on the Route view page in Hub. |
| Fixed recipient | For failure notifications only, a fixed email recipient for the notifications. Partially successful/failed delivery emails can be sent to multiple fixed recipients, for example, to managers who are responsible for failed deliveries. Multiple email addresses can be entered, separated by a semi-colon (;) or by pressing `Enter`. To edit the entered email address, press it. |
| Subject | Subject line of notifications. You can use these tokens for POD emails: `**{CONTACT_NAME}**` - recipient name `**{ORDER_KEY}**` - order key `**{COMPANY_NAME}**` - сompany name `**{ENVIRONMENT_NAME}**` - environment name |
| Body | Body of notifications. You can use these tokens for POD emails: `**{CONTACT_NAME}**` - recipient name `**{ORDER_KEY}**` - order key `**{PUBLIC_POD}**` - POD tracking link `**{COMPANY_NAME}**` - сompany name `**{ENVIRONMENT_NAME}**` - environment name |


Once all information is provided, click the `Update` button to save changes.

![Screenshot 2026-08-31 at 13.54.32.png](/Documentation/attachments/mth6nrr5-b2ls46jv.png)

When the POD is created and an order has a recipient email address, the POD notification email will be sent (if it was enabled in settings).  Example:

![Screenshot 2026-04-07 at 15.28.15.png](/Documentation/attachments/68ef7115-a0af-420d-a852-6e098279d506.png)

By pressing the `Check` button or following the pasted link, a recipient will see POD details.

![Screenshot 2026-04-07 at 15.29.33.png](/Documentation/attachments/247f1bc7-90e8-4736-9b09-4deaafe3fadc.png)

By pressing the `Download` button on public POD page, a recipient can download a POD PDF.

![Screenshot 2026-04-07 at 15.31.57.png](/Documentation/attachments/afaae003-6341-4070-aea7-d20a51adf03c.png)![Screenshot 2026-04-07 at 15.32.51.png](/Documentation/attachments/7bccdaf4-1539-4328-8753-7fc5c86c2277.png)![Screenshot 2026-04-07 at 15.32.58.png](/Documentation/attachments/b88759ee-2054-4b84-81d8-04934e426f09.png)
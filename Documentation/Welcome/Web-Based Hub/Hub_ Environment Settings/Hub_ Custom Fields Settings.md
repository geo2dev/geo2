---
slug: /web-based-hub/hub-environment-settings/hub-custom-fields-settings
sidebar_label: Custom Fields Settings
sidebar_position: 11
description: Custom fields let you collect and report on additional information
  in POD's and vehicle checks.
---
# Hub: Custom Fields Settings

Custom fields let you collect and report on additional information in POD's and vehicle checks. Custom fields are available with Enterprise subscription only.

To add a new custom field, press the `Add` button in Settings → Environment → Custom fields in Hub.

![Screenshot 2026-08-31 at 14.07.48.png](/Documentation/attachments/mth727jr-c9wpu9j6.png)

![Screenshot 2026-08-31 at 14.07.55.png](/Documentation/attachments/mth72aun-pzza9y61.png)

A new row will be shown in the table for you to specify the details of the new custom field. The properties of a custom field are:


| **Property** | **Description** |
| ------------ | ---------------------------------------------------------------------------------------------------------- |
| Page | `POD` or `Vehicle check` |
| Type | The options are: - String, i.e. text - Number - Date - Date/Time - Time - Boolean, i.e. yes/no - Dropdown |
| Key | Low-level/technical field identifier. This becomes significant when using the API. |
| Label | Field description visible to mobile app users. |
| Options | Options for the dropdown field type. At least one option must be provided. |
| Required | If selected, the field value cannot be left blank when recording a POD or vehicle check in the mobile app. |


Press the `Update` button to save changes.

![Screenshot 2026-08-31 at 14.09.08.png](/Documentation/attachments/mth73wvb-ddza6jrg.png)

If you want to edit properties of an existing custom field, click the pencil icon on the right-hand side of the relevant row, edit the values as appropriate press the `Update` button.

![Screenshot 2026-08-31 at 14.09.39.png](/Documentation/attachments/mth74di9-dux1f6eh.png)

You can select a field to `Delete` it.  For data integrity, it is best to not delete a field once it has started to be used.

![Screenshot 2026-08-31 at 14.09.15.png](/Documentation/attachments/mth74k3u-y9u0c7kw.png)

Once custom fields are added, they will be displayed either on POD or vehicle check pages (depending on the page you added them) in the mobile app and Hub:

![Mob custom fields (1).png](/Documentation/attachments/ca67b696-b053-4e16-881c-4492dcaea266.png)![Screenshot 2026-04-07 at 15.57.26.png](/Documentation/attachments/1e3efff7-338b-45c2-8d28-ab9052b2e46a.png)
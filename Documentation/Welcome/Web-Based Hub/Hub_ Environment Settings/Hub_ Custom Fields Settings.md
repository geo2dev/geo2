---
slug: /web-based-hub/hub-environment-settings/hub-custom-fields-settings
sidebar_label: Custom Fields Settings
sidebar_position: 12
description: Custom fields let you collect and report on additional information
  in POD's and vehicle checks.
---
# Hub: Custom Fields Settings

Custom fields let you collect and report on additional information in POD's and vehicle checks. Custom fields are available with Enterprise subscription only.

To add a new custom field, press the `Add` button in Settings → Environment → Custom fields in Hub.

![Screenshot 2026-11-10 at 16.01.33.png](/Documentation/attachments/mwatj95s-6mv4tud0.png)

![Screenshot 2026-11-10 at 16.01.42.png](/Documentation/attachments/mwatjcfj-ton9pjpp.png)

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

![Screenshot 2026-11-10 at 16.04.13.png](/Documentation/attachments/mwatmhes-vpk1xnyi.png)

If you want to edit properties of an existing custom field, click the pencil icon on the right-hand side of the relevant row, edit the values as appropriate press the `Update` button.

![Screenshot 2026-11-10 at 16.04.40.png](/Documentation/attachments/mwatmwqq-ev892995.png)

You can select a field to `Delete` it.  For data integrity, it is best to not delete a field once it has started to be used.

![Screenshot 2026-11-10 at 16.05.03.png](/Documentation/attachments/mwatndbd-0qnte5kk.png)

Once custom fields are added, they will be displayed either on POD or vehicle check pages (depending on the page you added them) in the mobile app and Hub:

![20261110_1.png](/Documentation/attachments/mwatqj1f-4sjjvi2l.png)

![Screenshot 2026-11-10 at 16.09.48.png](/Documentation/attachments/mwattjs1-ft9yiasr.png)


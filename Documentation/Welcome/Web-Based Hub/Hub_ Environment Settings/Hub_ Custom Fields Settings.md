---
slug: "/web-based-hub/hub-environment-settings/hub-custom-fields-settings"
sidebar_label: "Custom Fields Settings"
sidebar_position: 11
---


# Hub: Custom Fields Settings

Custom fields let you collect and report on additional information in POD's and vehicle checks.  Custom fields are available with Enterprise subscription only.

To add a new custom field, press the `Add` button in Settings → Environment → Custom fields in Hub.

![Screenshot 2026-04-07 at 15.49.58.png](/Documentation/attachments/21b7bd9c-af6b-423d-8e03-de46402cf9d7.png)

A new row will be shown in the table for you to specify the details of the new custom field.  The properties of a custom field are:

| **Property** | **Description** |
| --- | --- |
| Page | `POD` or `Vehicle check` |
| Type | The options are: <br/>- String, i.e. text <br>- Number <br>- Date <br>- Date/Time <br>- Time <br>- Boolean, i.e. yes/no <br>- Dropdown |
| Key | Low-level/technical field identifier.  This becomes significant when using the API. |
| Label | Field description visible to mobile app users. |
| Options | Options for the dropdown field type.  At least one option must be provided. |
| Required | If selected, the field value cannot be left blank when recording a POD or vehicle check in the mobile app. |

Press the `Update` button to save changes.

![Screenshot 2026-04-07 at 15.50.30.png](/Documentation/attachments/1fe8de04-4ef6-4c19-a437-9bb42a163642.png)

If you want to edit properties of an existing custom field, click the pencil icon on the right-hand side of the relevant row, edit the values as appropriate press the `Update` button.

![Screenshot 2026-04-07 at 15.51.22.png](/Documentation/attachments/30febab8-552b-4709-b74c-009396dec344.png)

You can select a field to `Delete` it.  For data integrity, it is best to not delete a field once it has started to be used.

![Screenshot 2026-04-07 at 15.51.27.png](/Documentation/attachments/34d1e544-4899-4591-bbb4-611eeb1513e8.png)

Once custom fields are added, they will be displayed either on POD or vehicle check pages (depending on the page you added them) in the mobile app and Hub:

![Mob custom fields (1).png](/Documentation/attachments/ca67b696-b053-4e16-881c-4492dcaea266.png)![Screenshot 2026-04-07 at 15.57.26.png](/Documentation/attachments/1e3efff7-338b-45c2-8d28-ab9052b2e46a.png)

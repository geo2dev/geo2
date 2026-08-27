---
slug: /web-based-hub/hub-organization-settings
sidebar_label: Organization Settings
sidebar_position: 6
description: "Organizations are groups of Geo2 users who share a subscription
  and collaborate on data in one or more Hub: Environment Settings."
---
# Hub: Organization Settings

## Introduction

Organizations are groups of Geo2 users who share a subscription and collaborate on data in one or more [Hub: Environment Settings](Hub_%20Environment%20Settings/index.md).

## Organization Settings

During the registration of a new account and [Hub: Set Up Organization](Hub_%20Set%20Up%20Organization.md), the address entered will be saved as the organization’s address as well.  If you are invited to the organization and you have [Organization Admin Role](../User%20Roles.md)**,** you can reach organization settings by pressing the Settings option in the menu.

![Screenshot 2026-08-27 at 13.50.49.png](/Documentation/attachments/mtbejwjt-3spxme5q.png)

## Organization Name

You can change your organization name by hovering over the organization name on Settings page and pressing the `Edit (pencil)` icon. Provide a new organization name and press the `Tick` icon to save changes.

![Screenshot 2026-08-27 at 13.51.41.png](/Documentation/attachments/mtbekya0-rmuu71yh.png)

![Screenshot 2026-08-27 at 13.51.48.png](/Documentation/attachments/mtbel3sd-obj9y8ck.png)

## Billing address

If creating a new organization, you need to provide the Organization name and its billing address (Address line 1, City and Country fields); all other fields are optional.  The tax registration number will be shown on the combined invoice/receipt after successful payments.

To enter the address, you can start typing it into Address line 1 and selecting it from the drop-down which appears.  If no suitable match is found, continue entering the address in the relevant address fields manually.

![Screenshot 2026-08-27 at 12.47.00.png](/Documentation/attachments/mtbelwi3-elj86yau.png)

Press the `Create` button to create an organization. Once your organization is created, you will be redirected to Settings → Organization → Billing address.

![Screenshot 2026-08-27 at 12.55.07.png](/Documentation/attachments/mtbemyur-9ycxd9l9.png)

To edit organization settings later, you can press Settings option in the menu.  To save changes in the already created organization, press `Update`.

![Screenshot 2026-08-27 at 12.55.14.png](/Documentation/attachments/mtbemi2k-v3jv6czi.png)

### Company Logo

You can add your own logo to give your organization a distinct visual identity in Hub in Settings -> Billing address. 

The logo is shown in the Organization selector in the menu in Hub as well as in the mobile app when selecting an organization to work in.

![Screenshot 2026-08-27 at 13.54.19.png](/Documentation/attachments/mtbeodf2-wl6lkbqw.png)

## Users

You can invite other users to your organization.  As a part of **a FREE 7-day trial of Advanced or Enterprise subscription level**, you can add four additional users to your organization.  If you want to add more users, you can do it after taking a free trial by pressing the `Add users` button on Subscriptions page. Free and Pro subscriptions do not allow adding more users to your organization.

You can invite users either one-by-one, by pressing the `Invite` button, or all at once, by pressing the `Import` button in Settings → Organization → Users page. The counter at the top of the page shows how many users you can still invite to your organization. If you are on a Free or Pro subscription level, you will see only your user.

![Screenshot 2026-08-27 at 13.58.47.png](/Documentation/attachments/mtbettzc-5zs42rue.png)

### Add Users

Press `Invite` to create an invitation for the new user.

![Screenshot 2026-08-27 at 14.00.14.png](/Documentation/attachments/mtbevo70-n1jxvtb0.png)

You will see the dialog prompting you for an email address or mobile number, full name, first and last name.  Full name is required; first and last names are optional.

![Screenshot 2026-08-27 at 14.00.34.png](/Documentation/attachments/mtbew4gt-wdegbplr.png)

A newly invited user can be registered using email address or mobile number. Make sure that the email address/mobile number is valid and email address can receive incoming messages. If you select an email for invitation, instructions for the invited user are in the invitation email message and [Hub: Accept Invitation](Hub_%20Accept%20Invitation.md).   If you select a mobile phone number for invitation, the user can accept it only via Accept invitation page in Hub or the mobile app after log in using the same mobile number; no SMS with a link will be sent.

The properties of each user are:


| **Property** | **Description** | **Mandatory** |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| Email | The email address for invitation and login to Hub and the mobile app must be valid — [recipient@domainname.domainsuffix.](#) For example, [john.doe@gmail.com.](mailto:janedoe@gmail.com) | Yes, if selecting an email for user invitation |
| Mobile number | The mobile phone number used for invitation and login to Hub and the mobile app must follow a valid format, including country code and digits, e.g., +1 234567890. | Yes, if selecting a mobile number for user invitation |
| Full name | For example, Driver John Doe. It is used for displaying users for route assignment, POD, and vehicle check creation. | Yes |
| First name | For example, John. For internal usage only. | No |
| Last name | For example, Doe. For internal usage only. | No |
| Organization role | Role is a set of permissions for the user in the organization. Each user can either have the role of User, which does not enable them to modify the organization, or Admin, which gives them control over the organization, including the ability to create environments. For organization user roles and their permissions, see [User Roles](../User%20Roles.md). | Yes |


**To enable the use of the Geo2 product, an Organization Admin needs to assign a subscription to a newly invited user.** The counter at the top of the `Users` tab informs you about your current organization subscription and the number of users can invite yet to your organization.

You also need to choose the environment(s) to which a user will have access and their role in each of them.  For environment user roles and their permissions, see [User Roles](../User%20Roles.md).

![Screenshot 2026-08-27 at 14.04.19.png](/Documentation/attachments/mtbf1anl-sjzzeavu.png)

The `Status` value against the user shows you if the invitation has been accepted.

![Screenshot 2026-08-27 at 14.03.09.png](/Documentation/attachments/mtbf02tw-zeawdoqy.png)

You can select one or more users using the checkbox leading each row.  Pressing `Delete` will remove the selected users from the organization.  When `Deleted are hidden` is enabled, both active and deleted users are shown.  Previously deleted users can be recovered, i.e. made active again.

Deleting a user frees up that user's subscription.  After a user is recovered, a subscription needs to be assigned to them to become functional.

Product news emails are enabled by default.  To turn off the emails, the Organization Admin can unset the `Product news email` toggle and press `Update` to save changes.  A user will receive product news emails if they are enabled in at least one of the organizations they belong to.  It is also possible to turn off the emails in profile settings.

### Import Users

By pressing the `Import` button in Settings → Organization → Users in Hub, you can import user data into Geo2 Hub using two methods:

- Upload your spreadsheet file with column mapping
- Manually paste or type your data into the table.

You cannot use mobile phone numbers to invite users during import; only emails are accepted.

![Screenshot 2026-08-27 at 14.07.21.png](/Documentation/attachments/mtbf4u16-ahik8gbu.png)

**Upload Spreadsheet File with Column Mapping**

Press the `Upload data from file` button at the top of the Import users spreadsheet in Hub. Upload a .csv, .tsv, .xls, .xlxs, .xml, or .txt file. After uploading, the Map your data columns dialog will be displayed where you can match your spreadsheet columns to Hub’s data fields. Required fields are marked with an asterisk ( * ) but you can skip them at this step and add data later.

On the dialog, you will see 4 columns:


| **Column Heading** | **Description** |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Your file column | Displays the column headers from your uploaded file that the system will attempt to match with known fields. |
| Your sample data | Shows a preview of the data in each column from your uploaded file to help with identifying what each field contains. |
| Destination column | Lets you select or confirm which system field the uploaded column should map to. |
| Matching result | Indicates how well the system matched each column, including match strength and confidence percentage. |


![Screenshot 2026-08-27 at 14.13.05.png](/Documentation/attachments/mtbfcxbg-kjq2y7mj.png)

The system will attempt to auto-match fields like Email address, First name, Last name, etc. Matches are clearly marked with a green tick for perfect or high matches, while unmatched columns are shown with a yellow warning icon. You can adjust matches or choose to skip fields, including required ones, these can be added later.

![Screenshot 2026-08-27 at 14.14.00.png](/Documentation/attachments/mtbfdm9u-muhbsnkj.png)

Tooltips are available to help clarify each data point.

![Screenshot 2026-08-27 at 14.14.09.png](/Documentation/attachments/mtbfdrws-qfqsaaj2.png)

Once everything is mapped correctly, click `Apply`. Your data will appear in the table, where you can review, edit, or fix any errors before finalizing.

![Screenshot 2026-08-27 at 14.14.49.png](/Documentation/attachments/mtbff161-h7vz78c1.png)

**Manually Type or Paste Data**

The spreadsheet interface column headings guide you on the type of data expected in each column.  Hover over a column title to see a tooltip with additional details and explanations.

![Screenshot 2026-08-27 at 14.15.44.png](/Documentation/attachments/mtbfflyj-qlaqsdk5.png)

If you have prepared the data in another spreadsheet, you can copy and paste them in.

The limit for the import of users is **50**.  You cannot paste more than that into the spreadsheet.


| **Column Heading** | **Data Type** | **Details** | **Mandatory** |
| ------------------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Email address | String | The email address for invitation and login to Hub and the mobile app must be valid — [recipient@domainname.domainsuffix.](#) For example, [john.doe@gmail.com.](mailto:janedoe@gmail.com) | Y |
| Full name | String | For example, Driver John Doe. It is used for displaying users for route assignment, POD, and vehicle check creation. | Y |
| First name | String | For example, John. For internal usage. | N |
| Last name | String | For example, Doe. For internal usage. | N |
| Organization role | String | Role is a set of permissions for a user in the organization. Each user can either have the role of User, which does not enable them to modify the organization, or Admin, which gives them control over the organization, including the ability to create environments. For organization user roles and their permissions, see [User Roles](../User%20Roles.md). | Y |


Once information is provided, press:

- `Close` to exit the spreadsheet interface with no action
- `Reset` to clear the spreadsheet
- `Import` to start the data import

##### **Import Options**

![Screenshot 2026-08-27 at 14.16.21.png](/Documentation/attachments/mtbfhak3-w3dkno4c.png)

To enable the use of the Geo2 product, an Organization Admin needs to assign a subscription to a newly invited user.

You also need to choose the environment(s) to which the user will have access and their role in each of them.  For environment user roles and their permissions, see [User Roles](../User%20Roles.md).  When importing multiple users, the same settings are applied to all of them.

Click the `Import` button to import users.  The import process feeds back any errors that it encounters.

Users will be imported and displayed in the Users list in Organization and Environment settings.  Emails with invitations will be sent to all imported users.  Learn how users can [Hub: Accept Invitation](Hub_%20Accept%20Invitation.md).

##### Spreadsheet Example

You can download an example spreadsheet with typed-in information for user import.

[Workbook.xlsx](/Documentation/attachments/4ccda8d2-0c8e-47f8-a789-6e3ad3b78969.xlsx)

## Delete Organization

To delete your organization, go to Settings → Organization in Hub and press the `Delete organization` button. You will be asked to confirm the deletion, as all route, order, POD, vehicle check, and user data will be removed. Press `Delete` to confirm. The organization and its environment(s) will be deleted.

![Screenshot 2026-01-27 at 13.14.10.png](/Documentation/attachments/badac75a-edcc-447a-9227-19599dd5b912.png)


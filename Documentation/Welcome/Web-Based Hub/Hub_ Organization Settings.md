
[Web-Based Hub](../Web-Based%20Hub.md)

# Hub: Organization Settings

- [Introduction](#introduction)
- [Organization Settings](#organization-settings)
  - [Organization Name](#organization-name)
  - [Billing address](#billing-address)
    - [Company Logo](#company-logo)
  - [Users](#users)
    - [Add Users](#add-users)
    - [Import Users](#import-users)
      - [Upload Spreadsheet File with Column Mapping](#upload-spreadsheet-file-with-column-mapping)
      - [Manually Type or Paste Data](#manually-type-or-paste-data)
      - [Import Options](#import-options)
      - [Spreadsheet Example](#spreadsheet-example)
- [Delete Organization](#delete-organization)

# Introduction

Organizations are groups of Geo2 users who share a subscription and collaborate on data in one or more [Hub: Environment Settings](Hub_%20Environment%20Settings.md).

# Organization Settings

During the registration of a new account and [Hub: Set Up Organization](Hub_%20Set%20Up%20Organization.md), the address entered will be saved as the organization’s address as well.  If you are invited to the organization and you have [User Roles](../User%20Roles.md)**,** you can reach organization settings by pressing the Settings option in the menu.

![Screenshot 2026-03-30 at 14.32.38.png](../../attachments/d53dd670-b833-434a-8e9a-5bcd82e78011.png)

## Organization Name

You can change your organization name by hovering over the organization name on Settings page and pressing the `Edit (pencil)` icon. Provide a new organization name and press the `Tick` icon to save changes.

![Screenshot 2026-03-30 at 14.33.56.png](../../attachments/5a690088-2e8d-4460-a19a-1dbae97b4fd2.png)

## Billing address

If creating a new organization, you need to provide the Organization name and its billing address (Address line 1, City and Country fields); all other fields are optional.  The tax registration number will be shown on the combined invoice/receipt after successful payments.

To enter the address, you can start typing it into Address line 1 and selecting it from the drop-down which appears.  If no suitable match is found, continue entering the address in the relevant address fields manually.

![Screenshot 2026-03-30 at 14.01.48.png](../../attachments/c52ea609-22be-4f60-8e9a-af7df94ef905.png)

Press the `Create` button to create an organization. Once your organization is created, you will be redirected to Settings → Organization → Billing address.

![Screenshot 2026-03-30 at 14.03.06.png](../../attachments/c2a87e40-2241-49e0-9105-a695976b24f7.png)

To edit organization settings later, you can press Settings option in the menu.  To save changes in the already created organization, press `Update`.

![Screenshot 2026-03-30 at 14.04.08.png](../../attachments/00ef332b-cabe-4698-a99f-a7e248f7f0fd.png)

### Company Logo

You can add your own logo to give your organization a distinct visual identity.

The logo is shown in the Organization selector in the menu as well as in the mobile app when selecting an organization to work in.

![Screenshot 2026-03-30 at 14.36.56.png](../../attachments/33ed1a52-a717-479b-be7f-fdbc6cd42466.png)![Screenshot 2026-03-30 at 14.37.15.png](../../attachments/c78f58d5-47ae-4f27-8fda-5c5a7bcca945.png)

## Users

You can invite other users to your organization.  As a part of **a FREE 7-day trial of Advanced or Enterprise subscription level**, you can add four additional users to your organization.  If you want to add more users, you can do it after taking a free trial by pressing the `Add users` button on Subscriptions page. Free and Pro subscriptions do not allow adding more users to your organization.

You can invite users either one-by-one, by pressing the `Add` button, or all at once, by pressing the `Import` button in Settings → Organization → Users page. The counter at the top of the page shows how many users you can still invite to your organization. If you are on a Free or Pro subscription level, you will see only your user.

![Screenshot 2026-03-30 at 14.41.02.png](../../attachments/b5b7f94f-96fa-4c37-ae83-7a2b7a7cf3ef.png)

### Add Users

Press `Invite` to create an invitation for the new user.

![Screenshot 2026-03-30 at 14.42.55.png](../../attachments/9e843cd5-904d-4310-9327-aa249ea597e3.png)

You will see the dialog prompting you for an email address or mobile number, full name, first and last name.  Full name is required; first and last names are optional.

![Screenshot 2026-03-30 at 14.42.41.png](../../attachments/814f2b17-0e63-4228-bffc-ba19ed449884.png)

A newly invited user can be registered using email address or mobile number. Make sure that the email address/mobile number is valid and email address can receive incoming messages. If you select an email for invitation, instructions for the invited user are in the invitation email message and [Hub: Accept Invitation](Hub_%20Accept%20Invitation.md).   If you select a mobile phone number for invitation, the user can accept it only via Accept invitation page in Hub or the mobile app; no SMS with a link will be sent.

The properties of each user are:

|  **Property**     |  **Description**                                                                                                                                                                                                                                                                                                                                                     |  **Mandatory**                                        |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|
| Email             | The email address for invitation and login to Hub and the mobile app must be valid —[recipient@domain\_name.domain\_suffix.](#recipient-domain-name-domain-suffix) For example, [john.doe@gmail.com.](mailto:janedoe@gmail.com)                                                                                                                                      | Yes, if selecting an email for user invitation        |
| Mobile number     | The mobile phone number used for invitation and login to Hub and the mobile app must follow a valid format, including country code and digits, e.g., +1 234567890.                                                                                                                                                                                                   | Yes, if selecting a mobile number for user invitation |
| Full name         | For example, Driver John Doe.  It is used for displaying users for route assignment, POD, and vehicle check creation.                                                                                                                                                                                                                                                | Yes                                                   |
| First name        | For example, John. For internal usage only.                                                                                                                                                                                                                                                                                                                          | No                                                    |
| Last name         | For example, Doe. For internal usage only.                                                                                                                                                                                                                                                                                                                           | No                                                    |
| Organization role | Role is a set of permissions for the user in the organization.  Each user can either have the role of User, which does not enable them to modify the organization, or Admin, which gives them control over the organization, including the ability to create environments.  For organization user roles and their permissions, see [User Roles](../User%20Roles.md). |                                                       |

**To enable the use of the Geo2 product, an Organization Admin needs to assign a subscription to a newly invited user.**The counter at the top of the `Users` tab informs you about your current organization subscription and the number of users can invite yet to your organization.

You also need to choose the environment(s) to which a user will have access and their role in each of them.  For environment user roles and their permissions, see [User Roles](../User%20Roles.md).

![Screenshot 2026-03-30 at 15.33.48.png](../../attachments/c78e0919-cf7f-47e7-af9c-a8da9ce55f04.png)

The `Status` value against the user shows you if the invitation has been accepted.

![Screenshot 2026-03-30 at 15.35.28.png](../../attachments/a2714032-a15f-422d-8a8b-9be6be5456c6.png)

You can select one or more users using the checkbox leading each row.  Pressing `Delete` will remove the selected users from the organization.  When `Deleted are hidden` is enabled, both active and deleted users are shown.  Previously deleted users can be recovered, i.e. made active again.

Deleting a user frees up that user's subscription.  After a user is recovered, a subscription needs to be assigned to them to become functional.

Product news emails are enabled by default.  To turn off the emails, the Organization Admin can unset the `Product news email` toggle and press `Update` to save changes.  A user will receive product news emails if they are enabled in at least one of the organizations they belong to.  It is also possible to turn off the emails in profile settings.

### Import Users

By pressing the `Import` button in Settings → Organization → Users, you can import user data into Geo2 Hub using two methods:

- Upload your spreadsheet file with column mapping
- Manually paste or type your data into the table.

You cannot use mobile phone numbers to invite users during import; only emails are accepted.

![Screenshot 2026-03-30 at 15.38.45.png](../../attachments/74115688-f61e-4d7b-a1b7-44b3ba41f4c1.png)

#### Upload Spreadsheet File with Column Mapping

Press the `Upload data from file` button at the top of the Import spreadsheet in Hub. Upload a .csv, .tsv, .xls, .xlxs, .xml, or .txt file. After uploading, the Map your data columns dialog will be displayed where you can match your spreadsheet columns to Hub’s data fields. Required fields are marked with an asterisk ( \* ) but you can skip them at this step and add data later.

On the dialog, you will see 4 columns:

|  **Column Heading**    |  **Description**                                                                                                      |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------|
| Your file column       | Displays the column headers from your uploaded file that the system will attempt to match with known fields.          |
| Your sample data       | Shows a preview of the data in each column from your uploaded file to help with identifying what each field contains. |
| Destination column     | Lets you select or confirm which system field the uploaded column should map to.                                      |
| Matching result        | Indicates how well the system matched each column, including match strength and confidence percentage.                |

![Screenshot 2026-03-30 at 15.46.55.png](../../attachments/07dab9fc-adde-4175-90f5-4df4a7f27f67.png)

The system will attempt to auto-match fields like Email address, First name, Last name, etc. Matches are clearly marked with a green tick for perfect or high matches, while unmatched columns are shown with a yellow warning icon. You can adjust matches or choose to skip fields, including required ones, these can be added later.

![Screenshot 2026-03-30 at 15.47.48.png](../../attachments/b3bd7cfd-82b6-4f2d-b31b-7e4a13a5f2de.png)

Tooltips are available to help clarify each data point.

Once everything is mapped correctly, click `Apply`. Your data will appear in the table, where you can review, edit, or fix any errors before finalizing.

![Screenshot 2026-03-30 at 15.51.17.png](../../attachments/31ed62f1-9f32-41f2-a59a-4e32d7674105.png)

#### Manually Type or Paste Data

The spreadsheet interface column headings guide you on the type of data expected in each column.  Hover over a column title to see a tooltip with additional details and explanations.

![Screenshot 2026-03-30 at 15.52.00.png](../../attachments/3fe2c053-aa25-4588-ba0f-484671990143.png)

If you have prepared the data in another spreadsheet, you can copy and paste them in.

The limit for the import of users is **50**.  You cannot paste more than that into the spreadsheet.

|  **Column Heading**    |  **Data Type**    |  **Details**                                                                                                                                                                                                                                                                                                                                                     |  **Mandatory**    |
|:-----------------------|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|
| Email address          | String            | The email address for invitation and login to Hub and the mobile app must be valid —[recipient@domain\_name.domain\_suffix.](#recipient-domain-name-domain-suffix) For example, [john.doe@gmail.com.](mailto:janedoe@gmail.com)                                                                                                                                  | Y                 |
| Full name              | String            | For example, Driver John Doe.  It is used for displaying users for route assignment, POD, and vehicle check creation.                                                                                                                                                                                                                                            | Y                 |
| First name             | String            | For example, John. For internal usage.                                                                                                                                                                                                                                                                                                                           | N                 |
| Last name              | String            | For example, Doe. For internal usage.                                                                                                                                                                                                                                                                                                                            | N                 |
| Organization role      | String            | Role is a set of permissions for a user in the organization. Each user can either have the role of User, which does not enable them to modify the organization, or Admin, which gives them control over the organization, including the ability to create environments. For organization user roles and their permissions, see [User Roles](../User%20Roles.md). | Y                 |

Once information is provided, press:

- `Close` to exit the spreadsheet interface with no action
- `Reset` to clear the spreadsheet
- `Import` to start the data import

#### Import Options

![Screenshot 2026-03-30 at 15.54.25.png](../../attachments/877d62bc-1ec6-4d60-85d2-2b459683d22b.png)

To enable the use of the Geo2 product, an Organization Admin needs to assign a subscription to a newly invited user.

You also need to choose the environment(s) to which the user will have access and their role in each of them.  For environment user roles and their permissions, see [User Roles](../User%20Roles.md).  When importing multiple users, the same settings are applied to all of them.

Click the `Import` button to import users.  The import process feeds back any errors that it encounters.

Users will be imported and displayed in the Users list in Organization and Environment settings.  Emails with invitations will be sent to all imported users.  Learn how users can [Hub: Accept Invitation](Hub_%20Accept%20Invitation.md).

#### Spreadsheet Example

You can download an example spreadsheet with typed-in information for user import.

[Workbook.xlsx](../../attachments/4ccda8d2-0c8e-47f8-a789-6e3ad3b78969.xlsx)

# Delete Organization

To delete your organization, go to Settings → Organization and press the `Delete organization` button. You will be asked to confirm the deletion, as all route, order, POD, vehicle check, and user data will be removed. Press `Delete` to confirm. The organization and its environment(s) will be deleted.

![Screenshot 2026-01-27 at 13.14.10.png](../../attachments/badac75a-edcc-447a-9227-19599dd5b912.png)

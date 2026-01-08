
[Web-Based Hub](../Web-Based%20Hub.md)

# Hub: Environment Settings

- [Introduction](#introduction)
- [Environment Settings](#environment-settings)
  - [Display Preferences](#display-preferences)
  - [Users](#users)
  - [Depots](#depots)
    - [Add Depots](#add-depots)
    - [Import Depots](#import-depots)
      - [Upload Spreadsheet File with Column Mapping](#upload-spreadsheet-file-with-column-mapping)
      - [Manually Type or Paste Data](#manually-type-or-paste-data)
      - [Import Options](#import-options)
      - [Spreadsheet Example](#spreadsheet-example)
  - [Vehicles](#vehicles)
    - [Add Vehicles](#add-vehicles)
    - [Import Vehicles](#import-vehicles)
      - [Upload Spreadsheet File with Column Mapping](#upload-spreadsheet-file-with-column-mapping)
      - [Manually Type or Paste Data](#manually-type-or-paste-data)
      - [Import Options](#import-options)
      - [Spreadsheet Example](#spreadsheet-example)
  - [Vehicle categories](#vehicle-categories)
  - [Geo Coding](#geo-coding)
  - [Routes](#routes)
  - [Failure Reason Codes](#failure-reason-codes)
  - [POD Notification](#pod-notification)
  - [Public tracking](#public-tracking)
  - [Custom Fields](#custom-fields)
  - [Areas](#areas)
  - [Channels](#channels)
  - [Devices](#devices)
  - [Reporting](#reporting)
- [Create Environment](#create-environment)

# Introduction

Environments let you represent teams within a single company or provide separate spaces for testing and productive use.  An organization can contain one or more environments.  See [Concepts](../Concepts.md) for the different uses to which you may want to put environments.

# Environment Settings

During the registration of a new account and [Hub: Set Up Organization](Hub_%20Set%20Up%20Organization.md), the address entered will be saved as the environment’s address as well.  If you create an organization manually, its first default environment is created automatically.  By default, the name of a new environment is Default environment.  You can change the name by hovering over the environment name on Settings page and pressing the `Edit (pencil)` icon. 

![Screenshot 2025-11-04 at 16.19.35.png](../../attachments/3c5b32da-7072-406f-afa2-bce10f63cfe0.png)

Press the `Tick` icon to save changes.

![Screenshot 2025-11-04 at 16.19.44.png](../../attachments/febf5a5a-5136-4648-bcd8-a15a79ff59a2.png)

If you are invited to the environment and you have [Hub: User Roles](Hub_%20User%20Roles.md), you can reach environment settings by opening the menu and pressing the Environment selector.  You can also create a new environment if you have Enterprise subscription level.

![Screenshot 2025-11-04 at 16.31.36.png](../../attachments/49c241cb-c5a7-41c1-81dc-7a9a6a89f2e6.png)

## Display Preferences

Display preferences determine the visual aspects of the user interface:

|  **Setting**                   |  **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|:-------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Default address country format | Address format to use when addresses are formatted as blocks of text, on-screen, and in PDF layouts.  If the country inside an order matches with the default address country format in Environment settings, we do not show the country field on the next pages: <br/><ul><li><p>Order card on Orders page</p></li><li><p>Stop card on Route plan page</p></li><li><p>POD PDF (POD PDF, POD email PDF). </p></li></ul>                                              |
| Default phone country code     | Default country code for phone number entry.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Default timezone               | You can select the timezone, according to a specific country/city.                                                                                                                                                                                                                                                                                                                                                                                                   |
| Default length unit            | You can select whether lengths are shown in metric or imperial units.                                                                                                                                                                                                                                                                                                                                                                                                |
| Default distance unit          | You can select whether distances are shown in metric or imperial units.                                                                                                                                                                                                                                                                                                                                                                                              |
| Default weight unit            | You can select whether weight is shown in metric or imperial units.                                                                                                                                                                                                                                                                                                                                                                                                  |
| Default volume unit            | You can select whether volume is shown in metric or imperial units.                                                                                                                                                                                                                                                                                                                                                                                                  |
| Consider weight                | When selected, weight is shown and can be edited for orders and routes.                                                                                                                                                                                                                                                                                                                                                                                              |
| Consider volume                | When selected, volume is shown and can be edited for orders and routes.                                                                                                                                                                                                                                                                                                                                                                                              |
| Environment address            | Your organization address will be populated to the environment address once it is created.  The environment address is used in documents created in the environment, such as POD's.  Required fields are Address line 1, City, and Country.  You can provide the address manually by typing it into Address line 1 and selecting the relevant address.  If there is no variant you were looking for, just provide your data to the address form and we will save it. |
| Logo                           | The logo gives the environment a distinct visual identity when selecting an environment in the user interface and in PDF layouts.                                                                                                                                                                                                                                                                                                                                    |

![Screenshot 2025-08-26 at 15.16.26.png](../../attachments/387e2319-0cc6-4a5c-8688-558fb48df037.png)![Screenshot 2025-08-26 at 15.17.22.png](../../attachments/500cffdf-f722-4d58-a81f-5a9f05ecea8b.png)

Remember to press the `Update` button to save changes.

## Users

You can manage the users who have access to the environment and set their roles.  You can add users from your organization using the `Add` button. 

![Screenshot 2025-08-26 at 15.20.03.png](../../attachments/04ea0233-bf8a-48c6-af6a-2f5e1caef1fb.png)

The Add users dialog will appear with 3 fields - Users, Role, and Vehicle categories.  By clicking on the User field, you can choose multiple users for adding them to the environment, assigning them [Hub: User Roles](Hub_%20User%20Roles.md) and vehicle categories.  The role will apply to all the selected users.  It is not possible to add users to the environment who are not defined in [Hub: Organization Settings](Hub_%20Organization%20Settings.md).  If all organization users are added to the environment already, the Add button will be disabled.  You need to add users to your organization first.

The vehicle categories will apply to all selected users. See [**Vehicle categories**](https://balloonone.atlassian.net/wiki/spaces/BALDEVGEO/pages/edit-v2/23101850#Vehicle-caterogories) for more information about vehicle categories and their usage.

![Screenshot 2025-08-26 at 15.20.11.png](../../attachments/13511b43-ac18-48ff-8cb3-b35a9ca08e26.png)![Screenshot 2025-08-26 at 15.20.25.png](../../attachments/b1e2a873-bb4c-4d74-8545-314f9e6c0945.png)

By pressing the `Add` button, users will be added to the environment.

![Screenshot 2025-08-26 at 15.21.47.png](../../attachments/29452393-3854-4e0e-94ad-4de15ce513f5.png)

Once a new user is added, you will see it in the table with the next columns: name, email, status, role, vehicle categories and subscription.

|  **Property**      |  **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name               | Full name of the user's Geo2 account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Email              | Email of the user's Geo2 account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Status             | <ul><li><p><code>Invited</code></p></li><li><p><code>Accepted</code></p></li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Role               | <ul><li><p><code>User</code> - most applicable to mobile app users, who only access data assigned to them.</p></li><li><p><code>Manager</code> - access to all data, but not able to modify environment settings.</p></li><li><p><code>User Admin</code> - in addition to Manager, able to manage environment users.</p></li><li><p><code>Admin</code> - full access to the environment data and its settings.</p></li></ul> See [Hub: User Roles](Hub_%20User%20Roles.md) for more information about environment user roles. |
| Vehicle categories | Categories that let you match users and vehicles for a load assignment. By default, standard driving categories (A, B, C, etc.) are listed. You can edit or delete them and create custom categories for your environment. <br/> See [**Vehicle categories**](https://balloonone.atlassian.net/wiki/spaces/BALDEVGEO/pages/edit-v2/23101850#Vehicle-caterogories) for more information about vehicle categories and their usage.                                                                                              |
| Subscription       | A subscription assigned to a user by an Organization Admin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

When you modify a user setting such as `Role`, you can save the change using the `Update` button.

When you select one or more users and press the `Delete` button, the users are removed from the environment, i.e. lose access to it. 

![Screenshot 2025-08-26 at 15.22.43.png](../../attachments/c1f400d3-ecfe-48ca-acad-d45605c201e1.png)

When `Deleted are hidden` is selected, there is an option to restore a deleted user to give them access once again.  You cannot remove your own user from the environment.

## Depots

Depots can be optionally selected as the start and end points for routes.  During the registration of a new account, your first depot is created automatically with the address you provided.  You can add more depots either one by one by pressing the `Add` button or all at once by pressing the `Import` button. 

### Add Depots

To add a depot, press the `Add` button.  You will see a dialog where you have to provide the next information - key, name, and address (Address line 1, City and Country fields).  All other fields are optional.  You can provide the address manually by typing it into Address line 1 and selecting the relevant address.  If there is no variant you were looking for, just provide your data to the address form and we will save it.  For routes, it is important that depot addresses are geo-coded accurately.  

The properties of each depot are:

|  **Property**       |  **Description**                                                                                                                                                                                                                                                                                          |
|:--------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Key                 | Depot identifier which is required to be unique within the environment.  For example, Depot 1.                                                                                                                                                                                                            |
| Name                | User-definable depot name to describe a depot, for example, Storage for materials.  It is for internal usage only.                                                                                                                                                                                        |
| Сontact name        | Contact name of a person responsible for a depot.  For example, Jane Doe.                                                                                                                                                                                                                                 |
| Email               | Email address of a person responsible for a depot.  It must be in a valid email format - [recipient@domain\_name.domain\_suffix.](mailto:recipient@domain_name.domain_suffix.)![](https://project.balloonone.com/images/icons/mail_small.gif) For example, [janedoe@gmail.com](mailto:janedoe@gmail.com). |
| Phone               | Phone number of a person responsible for a depot.  It must start with "+" and have from 5 to 16 digits.  No spaces, brackets, or other special symbols.  For example, +123456789.                                                                                                                         |
| Mobile phone        | Mobile phone number of a person responsible for a depot.  It must start with "+" and have from 5 to 16 digits.  No spaces, brackets, or other special symbols.  For example, +123456789.                                                                                                                  |
| Company name        | Company name as a part of a depot address.  For example, BalloonOne.                                                                                                                                                                                                                                      |
| Address lines 1,2,3 | Address lines 1,2,3 as a part of a depot address.  For example, 1221 Grand Blvd.                                                                                                                                                                                                                          |
| City                | City as a part of a depot address.  For example, Kansas City.                                                                                                                                                                                                                                             |
| Postal code         | Postal code as a part of a depot address.  For example, MO 64106.                                                                                                                                                                                                                                         |
| Region              | Region as a part of a depot address.                                                                                                                                                                                                                                                                      |
| State               | State as a part of a depot address.                                                                                                                                                                                                                                                                       |
| Country             | Country as a part of a depot address.  It must be provided as the two-letter ISO country code, for example, US for the United States.                                                                                                                                                                     |

![Screenshot 2025-08-26 at 15.38.27.png](../../attachments/0d533299-25ec-43f2-9341-4cd776ea5de0.png)![Screenshot 2025-08-26 at 15.38.34.png](../../attachments/9293ac3a-6b6f-4eb5-9ded-bc701063d617.png)

Once information is provided, press the `Create` button and a depot will be created.

![Screenshot 2025-08-26 at 15.39.55.png](../../attachments/6c30d81a-e5d0-42c7-8528-fa9cda127a9f.png)

Optionally, you can select it as a default one. The default depot will be used for route creation but it can be changed.  Learn more about [Hub: Routes](Hub_%20Routes.md). The default depot will be used for order import if the Depot field is blank. Learn more about [Hub: Order Import](Hub_%20Orders/Hub_%20Order%20Import.md).

In the Depots table, you will see information from the key fields.  Values of other fields can be shown and edited by clicking the `Edit` icon.  Remember to press the `Save` button to save changes.

![Screenshot 2025-08-26 at 15.40.53.png](../../attachments/1854836b-7933-4c6f-9e3c-531272e4caf1.png)

You can `Delete` a depot, though this is only recommended before it has started to be used.

![Screenshot 2025-08-26 at 15.41.16.png](../../attachments/4b4a1080-1234-4500-a774-bed243a2c4f9.png)

### Import Depots

You can import depot data into Geo2 Hub using two methods:

- Upload your spreadsheet file with column mapping
- Manually paste or type your data into the table.

![Screenshot 2025-08-26 at 15.41.57.png](../../attachments/5c4d169e-2237-46d3-b978-b0a5125ae528.png)

#### Upload Spreadsheet File with Column Mapping

Press the `Upload data from file` button at the top of the Import spreadsheet in Hub. Upload a .csv, .tsv, .xls, .xlxs, .xml, or .txt file. After uploading, the Map your data columns dialog will be displayed where you can match your spreadsheet columns to Hub’s data fields. Required fields are marked with an asterisk ( \* ) but you can skip them at this step and add data later.

On the dialog, you will see 4 columns:

|  **Column Heading**    |  **Description**                                                                                                      |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------|
| Your file column       | Displays the column headers from your uploaded file that the system will attempt to match with known fields.          |
| Your sample data       | Shows a preview of the data in each column from your uploaded file to help with identifying what each field contains. |
| Destination column     | Lets the user select or confirm which system field the uploaded column should map to.                                 |
| Matching result        | Indicates how well the system matched each column, including match strength and confidence percentage.                |

![Screenshot 2025-08-26 at 15.43.36.png](../../attachments/1f011cd3-e409-4c6f-8978-839e256330b1.png)

The system will attempt to auto-match fields like Address line 1, Postal code, Country, etc. Matches are clearly marked with a green tick for perfect or high matches, while unmatched columns are shown with a yellow warning icon. You can adjust matches or choose to skip fields, including required ones, these can be added later.

![Screenshot 2025-08-26 at 15.43.42.png](../../attachments/89c8e237-3f32-421d-8f3e-0ad377b56a5c.png)

Tooltips are available to help clarify each data point.

![Screenshot 2025-08-26 at 15.43.49.png](../../attachments/70f00bc0-e528-4c13-bcb0-d108d0f4be98.png)

Once everything is mapped correctly, click `Apply`. Your data will appear in the table, where you can review, edit, or fix any errors before finalizing.

![Screenshot 2025-08-26 at 15.44.04.png](../../attachments/6670d972-f317-4d9b-b4c1-0405fcb2b79c.png)

#### Manually Type or Paste Data

The spreadsheet interface column headings guide you on the type of data expected in each column.  Hover over a column title to see a tooltip with additional details and explanations.

![Screenshot 2025-08-26 at 15.45.34.png](../../attachments/9ece566c-35ce-4291-a029-f912c4fc6a9b.png)

If you have prepared the data in another spreadsheet, you can copy and paste them in.  It is also possible to import a file from your device without column mapping by pressing the `folder` icon.

![Screenshot 2025-08-26 at 15.45.55.png](../../attachments/6f27eee3-f22e-4636-ab27-561a01460899.png)

The limit for the import of depots is **500**.  You cannot paste more into the spreadsheet.

|  **Column Heading**    |  **Data Type**    |  **Details**                                                                                                                                                                                                                                                                                              |  **Mandatory**    |
|:-----------------------|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|
| Depot key              | String            | Depot identifier unique within the environment, for example, Depot 01.  It is used for displaying depots for route and order assignment and vehicle check creation.  If the key already exists in the environment, the matching depot can optionally be updated.                                          | Y                 |
| Depot name             | String            | User-definable depot name to describe a depot, for example, Storage for materials.  It is for internal usage only.                                                                                                                                                                                        | Y                 |
| Contact name           | String            | Contact name of a person responsible for a depot.  For example, Jane Doe.                                                                                                                                                                                                                                 | N                 |
| Email                  | String            | Email address of a person responsible for a depot.  It must be in a valid email format - [recipient@domain\_name.domain\_suffix.](mailto:recipient@domain_name.domain_suffix.)![](https://project.balloonone.com/images/icons/mail_small.gif) For example, [janedoe@gmail.com](mailto:janedoe@gmail.com). | N                 |
| Phone                  | String            | Phone number of a person responsible for a depot.  It must start with "+" and have from 5 to 16 digits.  No spaces, brackets, or other special symbols.  For example, +123456789.                                                                                                                         | N                 |
| Mobile phone           | String            | Mobile phone number of a person responsible for a depot.  It must start with "+" and have from 5 to 16 digits.  No spaces, brackets, or other special symbols.  For example, +123456789.                                                                                                                  | N                 |
| Company name           | String            | Company name as a part of a depot address.  For example, BalloonOne.                                                                                                                                                                                                                                      | N                 |
| Address line 1         | String            | Address line 1 as a part of a depot address.  For example, 1221 Grand Blvd..                                                                                                                                                                                                                              | Y                 |
| Address line 2         | String            | Address line 2 as a part of a depot address.                                                                                                                                                                                                                                                              | N                 |
| Address line 3         | String            | Address line 3 as a part of a depot address.                                                                                                                                                                                                                                                              | N                 |
| City                   | String            | City as a part of a depot address.  For example, Kansas City.                                                                                                                                                                                                                                             | Y                 |
| Postal code            | String            | Postal code as a part of a depot address.  For example, MO 64106.                                                                                                                                                                                                                                         | N                 |
| Region                 | String            | Region as a part of a depot address.                                                                                                                                                                                                                                                                      | N                 |
| State                  | String            | State as a part of a depot address.                                                                                                                                                                                                                                                                       | N                 |
| Country                | String            | Country as a part of a depot address.  It must be provided as the two-letter ISO country code, for example, US for the United States.                                                                                                                                                                     | Y                 |

Once information is provided, press:

- `Close` to exit the spreadsheet interface with no action
- `Reset` to clear the spreadsheet
- `Import` to start the data import

#### Import Options

The import options are:

|  **Option**                                            |  **Functionality**                                                                                                                                                                                                          |
|:-------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Existing depots will be updated (if any)               | If a depot with the same key already exists, update its data with those in the spreadsheet.  If not selected, attempting to import a depot with an existing key will fail.                                                  |
| Empty fields will clear existing depot property values | If updating a depot and a field value in the spreadsheet is empty, blank the existing depot property even though it has some data in it.  If not selected, an empty field value will not overwrite an existing depot value. |
| Save these options as default                          | Remember this configuration of options for subsequent imports.                                                                                                                                                              |

![](../../attachments/4cf0a518-3e41-4c7e-b269-679d63525385.png)

Click the `Import` button to import depots.  The import process feeds back any errors that it encounters.

Depots will be imported and displayed in the Depots list in Environment settings.

#### Spreadsheet Example

You can also download the example of the spreadsheet with typed-in information for a depot import.

[Depot imports.xlsx](../../attachments/3cc63736-ff17-4c64-9733-abcf8ca68117.xlsx)

## Vehicles

Vehicles are assigned to deliver routes with orders.  You can add vehicles either one by one by pressing the `Add` button or all at once by pressing the `Import` button. 

### Add Vehicles

You will see the dialog to fill in the information.  Required fields are Key, Type, Depot, and Speed factor.  All other fields are optional. Hovering over the `Question` on a field will display a prompt explaining its meaning and the expected data to put there.

![Screenshot 2025-08-26 at 16.04.21.png](../../attachments/f0e04285-6957-4d02-9ab7-7f07fb3c0de0.png)

By pressing the `Measures` button, you will see additional fields like Weight and Volume capacity, Gross weight, Height, Width, Length, Emission factor, and Speed factor.

![Screenshot 2025-08-26 at 16.05.47.png](../../attachments/91a3f517-3dd4-42d7-8f12-9d7e5efb28e6.png)

The properties of each vehicle are:

|  **Property**                                                 |  **Description**                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:--------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Key                                                           | Your unique identifier for the vehicle in this environment, for example, Van 1. It is used for displaying vehicles for route assignment and vehicle check creation.                                                                                                                                                                                                                                                               |
| Registration                                                  | Vehicle registration number to help identify your vehicle, for example, ABCD012.                                                                                                                                                                                                                                                                                                                                                  |
| Type                                                          | Vehicle type used to consider average speed for route optimization and planned timing adjustments - truck, van, car, motorbike, bicycle. For each type, the speed factor is pre-defined but you can change it by pressing `Measures` and editing the Speed factor field.                                                                                                                                                          |
| [Hub: Environment Settings](Hub_%20Environment%20Settings.md) | Depot to which the vehicle is assigned. This determines which loads the vehicle can be assigned to, based on the route depot. Press [Hub: Environment Settings](Hub_%20Environment%20Settings.md)to add more depots to your environment.                                                                                                                                                                                          |
| Vehicle categories                                            | Categories that let you match users and vehicles for a route assignment. By default, standard driving categories (A, B, C, etc.) are listed. You can edit or delete them and create custom categories for your environment. <br/> See [**Vehicle categories**](https://balloonone.atlassian.net/wiki/spaces/BALDEVGEO/pages/edit-v2/23101850#Vehicle-caterogories) for more information about vehicle categories and their usage. |
| Description                                                   | Free text notes to describe the vehicle. For example, DAF 2800 ATI DKSE.                                                                                                                                                                                                                                                                                                                                                          |
| Available for route building                                  | Vehicle availability for [Hub: AI Route Building](Hub_%20Orders/Hub_%20AI%20Route%20Building.md) functionality.                                                                                                                                                                                                                                                                                                                   |
| Weight capacity                                               | Number to specify the total vehicle weight capacity in the weight units specified in [Hub: Environment Settings](Hub_%20Environment%20Settings.md), for example, 22000. It is used for calculating the feasibility of a route to which the vehicle is assigned.                                                                                                                                                                   |
| Volume capacity                                               | Number to specify the total vehicle volume capacity in the volume units specified in [Hub: Environment Settings](Hub_%20Environment%20Settings.md), for example, 10000. It is used for calculating the feasibility of a route to which the vehicle is assigned.                                                                                                                                                                   |
| Gross weight                                                  | Number to specify the maximum vehicle weight in the weight units specified in [Hub: Environment Settings](Hub_%20Environment%20Settings.md), for example, 22000. It is considered for route optimization and calibration with vehicle restrictions.                                                                                                                                                                               |
| Height                                                        | Number to specify the maximum vehicle height based on the length units specified in [Hub: Environment Settings](Hub_%20Environment%20Settings.md), for example, 9. This is considered for route optimization and calibration with vehicle restrictions. <br/> For metric environment settings (cm), the value is in metres. <br/> For imperial environment settings (in), the value is in feet.                                   |
| Width                                                         | Number to specify the maximum vehicle width based on the length units specified in [Hub: Environment Settings](Hub_%20Environment%20Settings.md), for example, 9. This is considered for route optimization and calibration with vehicle restrictions. <br/> For metric environment settings (cm), the value is in metres. <br/> For imperial environment settings (in), the value is in feet.                                    |
| Length                                                        | Number to specify the maximum vehicle length based on the length units specified in [Hub: Environment Settings](Hub_%20Environment%20Settings.md), for example, 12. This is considered for route optimization and calibration with vehicle restrictions. <br/> For metric environment settings (cm), the value is in metres. <br/> For imperial environment settings (in), the value is in feet.                                  |
| Emission factor                                               | Factor to denote environment impact of your vehicle - CO2 emissions in grams/kilometre or mile depending on the distance unit selected in [Hub: Environment Settings](Hub_%20Environment%20Settings.md).                                                                                                                                                                                                                          |
| Speed factor                                                  | Average speed as a multiple of an average car.  For realistic route timings, this is typically set below 1 for heavier vehicles, such as vans and lorries.                                                                                                                                                                                                                                                                        |

Once information is provided, press the `Create` button to save changes.  You can edit vehicle properties by clicking the `Edit` icon.  Remember to press the `Save` button to save changes.

![Screenshot 2025-08-26 at 16.08.45.png](../../attachments/3ac8a053-5f10-46e6-8168-193970cc1035.png)![Screenshot 2025-08-26 at 16.09.08.png](../../attachments/2321ceb3-994e-4216-8c08-f5577b7e6558.png)

You can select a vehicle to `Delete` it.  For data integrity, it is best to not delete a vehicle once it has started to be used. 

![Screenshot 2025-08-26 at 16.10.20.png](../../attachments/4d1caf4a-d419-425f-bb4e-2482cbbd802d.png)

### Import Vehicles

You can import vehicle data into Geo2 Hub using two methods:

- Upload your spreadsheet file with column mapping
- Manually paste or type your data into the table.

![Screenshot 2025-08-26 at 16.10.52.png](../../attachments/c420fcef-59a6-4dd6-a9b4-520bfa8ba790.png)

#### Upload Spreadsheet File with Column Mapping

Press the `Upload data from file` button at the top of the Import spreadsheet in Hub. Upload a .csv, .tsv, .xls, .xlxs, .xml, or .txt file. After uploading, the Map your data columns dialog will be displayed where you can match your spreadsheet columns to Hub’s data fields. Required fields are marked with an asterisk ( \* ) but you can skip them at this step and add data later.

On the dialog, you will see 4 columns:

|  **Column Heading**    |  **Description**                                                                                                      |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------|
| Your file column       | Displays the column headers from your uploaded file that the system will attempt to match with known fields.          |
| Your sample data       | Shows a preview of the data in each column from your uploaded file to help with identifying what each field contains. |
| Destination column     | Lets the user select or confirm which system field the uploaded column should map to.                                 |
| Matching result        | Indicates how well the system matched each column, including match strength and confidence percentage.                |

![Screenshot 2025-08-26 at 16.11.08.png](../../attachments/e55420d0-0eb7-4266-836f-8eaeed44ca50.png)

The system will attempt to auto-match fields like Type, Depot, Weight capacity, etc. Matches are clearly marked with a green tick for perfect or high matches, while unmatched columns are shown with a yellow warning icon. You can adjust matches or choose to skip fields, including required ones, these can be added later.

![Screenshot 2025-08-26 at 16.11.15.png](../../attachments/768a6d52-4f68-4ba9-90ca-8e9024b079a1.png)

Tooltips are available to help clarify each data point.

![Screenshot 2025-08-26 at 16.11.22.png](../../attachments/a0b39433-1eb1-492e-a185-9814260bbeea.png)

Once everything is mapped correctly, click `Apply`. Your data will appear in the table, where you can review, edit, or fix any errors before finalizing.

![Screenshot 2025-08-26 at 16.11.37.png](../../attachments/1815419a-8f51-45c1-80a7-5106e7408bda.png)

#### Manually Type or Paste Data

The spreadsheet interface column headings guide you on the type of data expected in each column.  Hover over a column title to see a tooltip with additional details and explanations.

![Screenshot 2025-08-26 at 16.13.26.png](../../attachments/095ab8d2-7282-4fce-a423-b79dd077d7a6.png)

If you have prepared the data in another spreadsheet, you can copy and paste them in.  It's also possible to import a file from your device without column mapping by pressing the `folder` icon.

![Screenshot 2025-08-26 at 16.13.47.png](../../attachments/5d70bd1f-d62f-4c51-9d11-af38073a19ce.png)

The limit for the import of vehicles is **500**.  You cannot paste more into the spreadsheet.

|  **Column Heading**    |  **Data Type**            |  **Details**                                                                                                                                                                                                                                                                                                                                                                                     |  **Mandatory**    |
|:-----------------------|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|
| Vehicle key            | String                    | Vehicle identifier unique within the environment, for example, Van 1. It is used for displaying vehicles for route assignment and vehicle check creation.  If the key already exists in the environment, the matching vehicle can optionally be updated.                                                                                                                                         | Y                 |
| Registration           | String                    | Vehicle registration number to help identify the vehicle, for example, ABCD 012.                                                                                                                                                                                                                                                                                                                 | N                 |
| Type                   | Pre-defined string option | Vehicle type used to consider average speed for route optimization and planned timing adjustments - truck, van, car, motorbike, bicycle. For each type, the speed factor is pre-defined but you can change it by providing your own value in the Speed factor column.                                                                                                                            | Y                 |
| Depot                  | String unique identifier  | Depot to which the vehicle is assigned.  This determines which routes the vehicle can be assigned to, based on the route depot.  Provide the depot key already existing in Environment settings -> Depots.                                                                                                                                                                                       | Y                 |
| Description            | String                    | Free text notes to describe the vehicle.  For example, DAF 2800 ATI DKSE.                                                                                                                                                                                                                                                                                                                        | N                 |
| Route building         | Pre-defined string option | Vehicle availability for AI route building functionality. Put "Yes" if the vehicle is available for route building, put "No" if the vehicle is not available.                                                                                                                                                                                                                                    | Y                 |
| Weight capacity        | Numerical                 | Number to specify the total vehicle weight capacity in the weight units specified in [Hub: Environment Settings](Hub_%20Environment%20Settings.md).  For example, 22000.                                                                                                                                                                                                                         | N                 |
| Volume capacity        | Numerical                 | Number to specify the total vehicle volume capacity in the volume units specified in [Hub: Environment Settings](Hub_%20Environment%20Settings.md).  For example, 10000.                                                                                                                                                                                                                         | N                 |
| Gross weight           | Numerical                 | Number to specify the maximum vehicle weight in the weight units specified in [Hub: Environment Settings](Hub_%20Environment%20Settings.md), for example, 22000. It is considered for route optimization and calibration with vehicle restrictions.                                                                                                                                              | N                 |
| Height                 | Numerical                 | Number to specify the maximum vehicle height based on the length units specified in [Hub: Environment Settings](Hub_%20Environment%20Settings.md), for example, 9. This is considered for route optimization and calibration with vehicle restrictions. <br/> For metric environment settings (cm), the value is in metres. <br/> For imperial environment settings (in), the value is in feet.  | N                 |
| Width                  | Numerical                 | Number to specify the maximum vehicle width based on the length units specified in [Hub: Environment Settings](Hub_%20Environment%20Settings.md), for example, 9. This is considered for route optimization and calibration with vehicle restrictions. <br/> For metric environment settings (cm), the value is in metres. <br/> For imperial environment settings (in), the value is in feet.   | N                 |
| Length                 | Numerical                 | Number to specify the maximum vehicle length based on the length units specified in [Hub: Environment Settings](Hub_%20Environment%20Settings.md), for example, 12. This is considered for route optimization and calibration with vehicle restrictions. <br/> For metric environment settings (cm), the value is in metres. <br/> For imperial environment settings (in), the value is in feet. | N                 |
| Emission factor        | Numerical                 | CO2 equivalent emissions in grams/kilometre or mile depending on [Hub: Environment Settings](Hub_%20Environment%20Settings.md).  For example, 5.                                                                                                                                                                                                                                                 | N                 |
| Speed factor           | Numerical                 | Average speed as a multiple of an average car.  For realistic route timings, this is typically set below 1 for heavier vehicles, such as vans and lorries, for example, 0.6. If you do not provide a value for this field, it will be populated from the type you have selected.                                                                                                                 | Y                 |

Once information is provided, press:

- `Close` to exit the spreadsheet interface with no action
- `Reset` to clear the spreadsheet
- `Import` to start the data import

#### Import Options

The import options are:

|  **Option**                                              |  **Functionality**                                                                                                                                                                                                                |
|:---------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Existing vehicles will be updated (if any)               | If a vehicle with the same key already exists, update its data with those in the spreadsheet.  If not selected, attempting to import a vehicle with an existing key will fail.                                                    |
| Empty fields will clear existing vehicle property values | If updating a vehicle and a field value in the spreadsheet is empty, blank the existing vehicle property even though it has some data in it.  If not selected, an empty field value will not overwrite an existing vehicle value. |
| Save these options as default                            | Remember this configuration of options for subsequent imports.                                                                                                                                                                    |

![](../../attachments/6b4ddb05-1e3c-4334-ba97-35f31f0e8739.png)

Click the `Import` button to import vehicles.  The import process feeds back any errors that it encounters.

Vehicles will be imported and displayed in the Vehicles list in Environment settings.

#### Spreadsheet Example

You can also download the example of the spreadsheet with typed-in information for a vehicle import.

[Vehicle imports.xlsx](../../attachments/e4935f0a-a298-4d8f-9c40-1e0579e26d6e.xlsx)

## Vehicle categories

Vehicle categories let you match users and vehicles for a route assignment. By default, standard driving categories (A, B, C, etc.) are listed. You can edit or delete them and create custom categories for your environment.

![Screenshot 2025-08-26 at 16.25.08.png](../../attachments/e9b533a0-9e79-4aca-8071-6542ffef8308.png)

These categories can then be assigned to vehicles (via [Hub: Environment Settings](Hub_%20Environment%20Settings.md)) and users (via [Hub: Environment Settings](Hub_%20Environment%20Settings.md)). It is possible to select multiple categories.

Assigning categories to users:

![Screenshot 2025-08-26 at 16.27.57.png](../../attachments/0fcc2623-437e-4909-abda-7f7e2ebba691.png)![Screenshot 2025-08-26 at 16.28.11.png](../../attachments/7a8e1759-3881-459b-abc7-1e95b9a8b1c2.png)

Remember to press `Update` to save changes.

Assigning categories to Vehicles:

![Screenshot 2025-08-26 at 16.38.04.png](../../attachments/82a0f4eb-0d94-414a-b004-d099dd70b066.png)![Screenshot 2025-08-26 at 16.38.17.png](../../attachments/81105db6-52f5-4195-b7a9-acef2f47ebeb.png)![Screenshot 2025-08-26 at 16.38.24.png](../../attachments/40036642-0d33-48e4-9115-f525b82c8e78.png)

Remember to press `Save` to save changes.

When planning a route on [Hub: Routes](Hub_%20Routes.md)in Hub or via Geo2 API, the system will match the user’s and vehicle’s categories. Users without categories can only be assigned to vehicles without categories. Vehicles without categories can be assigned to any user.

## Geo Coding

Geo2 geo-codes determine the geographical location of different types of addresses:

- Organization and environment addresses
- Depot addresses
- Route start/end addresses
- Order addresses

These settings let you control which address elements are used during geo-coding.  The first geo-coding attempt is made using `Default` settings.  If this does not lead to an accurate location, `Auto retry` settings are used instead.

Typical settings would be:

|  **Default**    |  **Auto retry**    |
|:----------------|:-------------------|
| Address line 1  | Address line 1     |
| Address line 2  | Postal code        |
| Address line 3  |                    |
| City            |                    |
| Country         |                    |
| Postal code     |                    |

![Screenshot 2025-08-26 at 16.47.51.png](../../attachments/6de220e4-7c64-4267-bff8-32843d03058f.png)

Press `Update` to save the settings.

## Routes

Route defaults are applied to routes when they are first created.

|  **Setting**                                       |  **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|:---------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Stop duration                                      | The default amount of time the delivery vehicle is expected to remain at a route stop.  This is used when orders are first brought into a route and, together with drive times, stop durations are intended to lead to route durations that are more realistic than if only drive time was considered.                                                                                                                                                                                                                                                                                                                                |
| Start time                                         | Default route start time, i.e. the time when a vehicle sets off from the depot.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Delivery ETA tolerance                             | A time range in which an agreed/committed arrival time is considered to be met.  For example, if an order is committed to be delivered at 13:00 and the tolerance is set to 20 minutes, arrival in the range of 12:40-13:20 is considered acceptable.  When the mobile app detects that a later arrival is likely, the mobile app user is alerted. <br/> Also, if the planned time doesn’t match the committed or required time, it will be highlighted with an orange or red colour depending on the difference, if it’s more than the delivery ETA tolerance, it will be highlighted with a red colour, if less - an orange colour. |
| Maximum driving hours                              | The default amount of maximum driving hours used during route building.  This value will be displayed on the Route building dialog whenever you click the Route building button.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Allow depot change for routes with assigned orders | Allow changing a route depot even if it differs from the orders depot assigned to the route.  It is best to keep this setting turned off.  Otherwise, it can cause some inaccuracies during route planning.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Vehicle check on route start                       | Activate vehicle check in the mobile app when the route is being started.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Vehicle check on route completion                  | Activate vehicle check in the mobile app when the route is being completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

![Screenshot 2025-11-04 at 16.35.51.png](../../attachments/957a77ce-be93-44d4-9b9b-c8ae391452f7.png)

`Stop card layout` settings allow you to customize the stop card information displayed on Route and Map view pages. You can preview how stop cards look in collapsed or expanded views and for medium or large screen sizes. Default options apply for all environments but you can change them. There are two columns:

- Available fields - all possible data options,
- Displayed fields - selected fields for display that let you manage which details are shown).

Fields can be moved between the lists by drag-and-drop or clicking, reordered within the displayed list, or cleared entirely with one click.

The number of fields shown depends on the selected view and screen size (6 for collapsed medium, 8 for collapsed large, and 9 for expanded views). Some longer fields, like Recipient address, Planning instructions, and Delivery instructions, count as 2 fields and take up 2 rows in the collapsed view. When limits are reached, unavailable fields are greyed out. The configuration automatically syncs with how stop cards appear on Route and Map view, updating in real time. Thus, you have complete control and flexibility to display only the most relevant stop information for your operations. You can select what information is displayed separately for medium and large screen sizes, both in the collapsed and expanded view. Depending on your and other users in your environment device screens, the system will automatically display the configured information.

To save changes, remember to press the `Update` button.

## Failure Reason Codes

Failure reason codes let you classify reasons for failed deliveries/collections and are available to drivers in the mobile app when recording a POD.  Once an environment is created, the first 8 default failure reason codes are added automatically.  Thus, you can create a proof of delivery in the mobile app in a failed or partially successful status.

![Screenshot 2025-08-26 at 16.50.50.png](../../attachments/0721083f-811a-4f4f-be08-3a2be52f6f04.png)

To add a failure reason code, press the `Add` button.  A new row will be shown in the table for you to specify the details of the new failure reason code.  Both fields are required.  To save changes, press the `Update` button.

![Screenshot 2025-08-26 at 16.51.24.png](../../attachments/eba0bd97-1580-4a3d-a040-5bbb4c88ee58.png)

To edit a reason code, click the `Edit (pencil)` icon.   Remember to press the `Update` button to save any changes.

![Screenshot 2025-08-26 at 16.51.53.png](../../attachments/5f2ce807-48dc-4df9-9bdd-009d4b7226a4.png)

You can select a reason code to `Delete` it.  For data integrity, it is best to not delete a reason code once it has started to be used. It is not possible to delete all reason codes as it will impact a POD creation. Your environment needs at least 1 added failure reason code.

![Screenshot 2025-08-26 at 16.52.20.png](../../attachments/f2bd7277-642c-4973-ba19-0c9914326eb4.png)

## POD Notification

A recipient can be sent an email with an order POD - both automatically when the POD is recorded and manually at any time from Geo2 Hub. The sender address of email notifications is [noreply@geo2.com](mailto:noreply@geo2.com) if there is no indicated Sender name.  Here are the configurable settings:

|  **Setting**      |  **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sender name       | The display name that will accompany the sender address, for example, your company name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Success/Failed    | Settings from the relevant section will be used in the event of a successful/partially successful/failed delivery/collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Automatic enabled | If selected, POD messages will be sent automatically to a recipient email address and fixed emails (for failed POD emails) when a POD is registered in Hub.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Manual enabled    | If selected, Hub users have the option to trigger the sending of the POD manually.  Press the `Email to recipient` button on the Proof of Delivery page inside of an order or on the POD dialog when clicking on the POD icon on an order card or stop card on the Route plan page.                                                                                                                                                                                                                                                                                                               |
| Attach PDF        | Attach a PDF document with POD details to the message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Fixed recipient   | For failure notifications only, a fixed email recipient for the notifications.  Failed delivery emails can be sent to multiple fixed recipients, for example, to managers who are responsible for failed deliveries.  Multiple email addresses can be entered, separated by a semi-colon (;) or by pressing `Enter`.  To edit the entered email address, press it. <br/> For Partially successful POD emails, a Failed template will be used. If fixed recipients are provided, Partially successful POD emails will be sent to them as well (even though they are turned off on an order level). |
| Subject           | Subject line of notifications.  You can use these tokens for POD emails: <br/> **{CONTACT\_NAME}** - recipient name <br/> **{ORDER\_KEY}** - order key <br/> **{COMPANY\_NAME}** - сompany name <br/> **{ENVIRONMENT\_NAME}**- environment name                                                                                                                                                                                                                                                                                                                                                   |
| Body              | Body of notifications.  You can use these tokens for POD emails: <br/> **{CONTACT\_NAME}** - recipient name <br/> **{ORDER\_KEY}** - order key <br/> **{PUBLIC\_POD}** - POD tracking link <br/> **{COMPANY\_NAME}** - сompany name <br/> **{ENVIRONMENT\_NAME}**- environment name                                                                                                                                                                                                                                                                                                               |

Once all information is provided, click the `Update` button to save changes.

![Screenshot 2025-08-27 at 14.35.54.png](../../attachments/ceeb0bb9-a091-41bb-885b-8f95046458e7.png)

When the POD is created and an order has a recipient email address, the POD notification email will be sent (if it was enabled in Environment settings).  Example:

![Screenshot 2025-08-27 at 15.29.00.png](../../attachments/0a150098-b6ac-4fe5-b388-b2a463182f59.png)

By pressing the Check button, a recipient will see POD details.

![POD 20250827_1.png](../../attachments/02f5d429-885d-43d1-bd07-420035722007.png)

If the "Attach PDF" option is enabled, the POD PDF will be attached to the POD email.

![POD 20250827_2.png](../../attachments/8eacd885-8cca-4f12-95da-073d696e6d7b.png)

## Public tracking

It's possible for external users such as recipients to optionally track the progress of their orders on a public web page.  Public tracking links can be sent via email and SMS notifications. 

|  **Setting**                  |  **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|:------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Disclose calculated ETA       | On Public tracking page, when an order has not been delivered/collected yet, show a calculated ETA based on the last known vehicle position.  This can be expressed as a range.  The calculated ETA is likely to fluctuate as the route progresses and you may find it too volatile for practical use.  When the option is not enabled or when tracking data for the route is not available, the committed time for the order is displayed instead, if set.                                                                                                                                                                                                                                                                         |
| Disclose stop position        | On Public tracking page, when an order has not been delivered/collected yet, show the last delivered stop on the route, giving the recipient an indication of how far away the delivery vehicle is from them in terms of the number of stops.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Disclose vehicle position     | On Public tracking page, when an order has not been delivered/collected yet, show the last known vehicle position on the map (requires the vehicle driver to have started load tracking in the mobile app).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Tracking email/SMS enabled on | Send an email/SMS notification to the recipient, in which you can include the tracking page address, to enable them to track the order prior to delivery/collection.  The possible triggers are: <br/> `None` - Do not send emails. <br/> `Registered` - When the order is created (via the Hub, mobile app, or API).  <br/> `Planning` - When the order is assigned to a route in planning.  <br/> `Planned` - When the order is assigned to a planned route.  <br/> `Released` - When the order is assigned to a released route. <br/> `In Transit` - When the route, to which the order has been assigned, has been started.  For this trigger, it is important that drivers explicitly start tracking routes in the mobile app. |
| Sender name                   | Sender name for the notification email.  Not available for an SMS notification.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Subject                       | Subject for the notification email.  Not available for an SMS notification.  You can use these tokens for Public tracking emails: <br/> **{CONTACT\_NAME}** - recipient name <br/> **{ORDER\_KEY}** - order key  <br/> **{COMPANY\_NAME}** - сompany name <br/> **{ENVIRONMENT\_NAME}** - environment name                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Body                          | Body of the notification email/SMS.  Ensure that the wording of the email is appropriate for the trigger you have configured.  You can use the next tokens for an email/SMS notification:  <br/> **{CONTACT\_NAME}** - recipient name <br/> **{ORDER\_KEY}** - order key  <br/> **{PUBLIC\_TRACKING}** - public tracking link <br/> **{COMPANY\_NAME}** - company name <br/> **{ENVIRONMENT\_NAME}** - environment name <br/> **{DELIVERY\_ETA}** - estimated time of arrival <br/> Without the token PUBLIC\_POD, the public POD link will not be included in an SMS notification.  <br/> The limit for an SMS notification is **120 symbols**.                                                                                    |

![Screenshot 2025-08-27 at 15.37.43.png](../../attachments/5907ed88-e1ef-40fa-9983-e34af2503a9d.png)![Screenshot 2025-08-27 at 15.38.47.png](../../attachments/fa61f0a6-f7d6-400c-9273-dedacad06d89.png)

Once the route status changes to the configured value (e.g. In Transit), an email/SMS notification with a public tracking link will be sent to the recipient's email address/mobile phone number.  For this to work, it is important that the recipient’s contact details (email address and mobile phone number) are specified in the order.

Here is an example of the public tracking email: 

![Screenshot 2025-08-27 at 15.42.31.png](../../attachments/908300c9-ad6b-44a1-bf54-151d0bd5fd70.png)

By pressing the Check button, a recipient will see tracking details. 

![Screenshot 2025-08-27 at 15.43.36.png](../../attachments/088d6b59-77d7-46b7-9bd2-83accec284c4.png)

## Custom Fields

Custom fields let you collect and report on additional information in POD's and vehicle checks.  To add a new custom field, press the `Add` button.  A new row will be shown in the table for you to specify the details of the new custom field.  The properties of a custom field are:

|  **Property**    |  **Description**                                                                                                                                                                                                    |
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Page             | `POD` or `Vehicle check`                                                                                                                                                                                            |
| Type             | The options are: <br/><ul><li><p>String, i.e. text</p></li><li><p>Number</p></li><li><p>Date</p></li><li><p>Date/Time</p></li><li><p>Time</p></li><li><p>Boolean, i.e. yes/no</p></li><li><p>Dropdown</p></li></ul> |
| Key              | Low-level/technical field identifier.  This becomes significant when using the API.                                                                                                                                 |
| Label            | Field description visible to mobile app users.                                                                                                                                                                      |
| Options          | Options for the dropdown field type.  At least one option must be provided.                                                                                                                                         |
| Required         | If selected, the field value cannot be left blank.                                                                                                                                                                  |

Press the `Update` button to save changes.

![Screenshot 2025-08-27 at 15.57.45.png](../../attachments/bfd86205-7873-4847-80e3-49227692312b.png)

If you want to edit properties of an existing custom field, click the pencil icon on the right-hand side of the relevant row, edit the values as appropriate press the `Update` button.

![Screenshot 2025-08-27 at 15.58.19.png](../../attachments/2d9739dd-e1f0-4323-8fab-21cdff26c5bc.png)

You can select a field to `Delete` it.  For data integrity, it is best to not delete a field once it has started to be used.

![Screenshot 2025-08-27 at 15.59.01.png](../../attachments/a0a6dfa3-f677-44f0-9776-a8dd292b7419.png)

Once custom fields are added, they will be displayed either on POD or vehicle check pages (depending on the page you added them) in the mobile app and Hub:

![POD 20250827_3.png](../../attachments/0e92081c-7e8a-4518-a7b5-7bb300485d0e.png)

## Areas

Areas let you tag depots and routes by user-defined geographical regions.  To add an area, press the `Add` button.

You will see the form to fill in the information.  Key and Name are required fields, others are optional.   

|  **Property**    |  **Description**                                                                                                                                                  |
|:-----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Key              | Key is an area identifier which is required to be unique within the environment, e.g. Area ABC.                                                                   |
| Name             | Name is a user-definable name that is used to display areas for an order or route creation, e.g. Rural KC.                                                        |
| Default user     | Default user set for the Driver field on Create route page when selecting an area if another value for this field is not selected.                                |
| Default vehicle  | Default vehicle set for the Vehicle field on Create route page when selecting an area if another value for this field is not selected.                            |
| Active from/to   | Set up the Active from and Active to dates to provide the expiry dates for an area.  Expired areas will not be possible to select for an order or route creation. |

Press the `Update` button to save your edits.

![Screenshot 2025-08-26 at 16.45.03.png](../../attachments/709b6989-debf-43a5-8f21-8d8547ba80e8.png)

To edit area information, click the `Edit (pencil)` icon by hovering over the area row.  Remember to press the `Update` button.

![Screenshot 2025-08-26 at 16.45.13.png](../../attachments/07435373-8c83-4eb1-84fd-ff66a0ebedbb.png)

You can select an area to `Delete` it.  For data integrity, it is best to not delete an area once it has started to be used.

![Screenshot 2025-08-26 at 16.45.20.png](../../attachments/87b29524-8117-477b-aa29-a1ea34f8d6d7.png)

## Channels

Channels are lightweight tags that let you classify delivery methods.  They are reserved for future use.  To add a channel, press the `Add` button.  You will see the form to fill in the information.  Key and Name fields are required.

|  **Property**    |  **Description**                                                                                  |
|:-----------------|:--------------------------------------------------------------------------------------------------|
| Key              | Channel identifier that is required to be unique within the environment, e.g. Channel 1.          |
| Name             | User-definable name that is used to display channels for an order creation, e.g. Own fleet.       |
| Active from/to   | Set up Active from/to dates if you want to limit the period during which the channel can be used. |

 A blank value for one of these fields means no limit.  Press the `Update` button to save changes.

![Screenshot 2025-08-26 at 16.57.00.png](../../attachments/ed308816-e8d3-48e2-b396-a66dc77098fb.png)

To edit channel information, click the `Edit (pencil)` icon in the channel row.  Remember to press the `Update` button.

![Screenshot 2025-08-26 at 16.57.06.png](../../attachments/2ec13abe-f4c8-4986-849f-e51eac36e055.png)

You can select a channel to `Delete` it.  For data integrity, it is best to not delete a channel once it has started to be used.

![Screenshot 2025-08-26 at 16.57.12.png](../../attachments/9d29bbe3-f39d-4983-a89b-5b2798d3e364.png)

## Devices

Device settings control the behaviour of the mobile app.

You can define the minimum and maximum numbers of photos for POD's and vehicle checks recorded on the mobile app.  With the default value of zero for the minimum, photos are optional, but when the value is greater, the driver will be required to record photos.  You can also remove the possibility of adding photos for a POD or a vehicle check by setting both the minimum and maximum to zero.

To run auto-deletion of photos recorded during a POD or vehicle check creation, you can select the number of days after which photos will be deleted.  By default, 30 days is selected.  If you want to save these photos, select the None value in the Delete photos olden than field.

`Permit multiple POD’s per order per route` means that multiple POD's per order are allowed within the same route.  When the option is disabled, it is not possible to create more than one POD per order in the same route, but it is possible for a POD for the order to be created once it is in another route.  By default, this setting is enabled.

`Allow order creation from POD` makes it possible to create a POD referencing an order key that does not yet exist - a skeleton order will be created in Hub to match the POD.  By default, this setting is enabled.  When disabled, it is only possible to create a POD for an order key that already exists in the environment.

`Record time at stop` enables the mobile app’s feature to record the actual time spent at a stop by a driver. Learn more about [Mobile App: Routes and Stops](../Mobile%20App/Mobile%20App_%20Routes%20and%20Stops.md).

![Screenshot 2025-08-26 at 16.58.44.png](../../attachments/829c1f47-f64a-47cc-837f-c3a8498d4ccd.png)

To save changes, press the `Update` button.

## Reporting

Reporting settings let you define target values for analytics charts displayed on Analytics page.

Target % of on-time orders means the target value for % of total orders to be on-time, by default, it's 80% but you can change it.  You can track the actual % of on-time orders on the “% On-Time Orders” analytics chart on Analytics page.

![Screenshot 2025-08-26 at 16.59.16.png](../../attachments/8cf3d161-7bdb-481e-8c55-4db740b41adc.png)

# Create Environment

If you want to create one more environment in your organization, press the environment selector in the menu bar and press `Create environment`.  This option is available only with Enterprise subscription level. You will be redirected to Create environment page where you will have the option to clone settings and users from an existing environment.

![Screenshot 2025-08-27 at 16.05.09.png](../../attachments/031510c1-0f50-43ad-ac5d-30de70b1f16f.png)

It is up to you whether you decide to clone settings or users or start an entirely fresh environment definition.

![Screenshot 2025-08-27 at 16.06.22.png](../../attachments/d270b402-48b1-44b3-ad32-4f9650fc0c81.png)

If cloning settings and/or users from an existing environment, you will need to select an environment to clone them from.

![Screenshot 2025-08-27 at 16.06.56.png](../../attachments/3fcb66b9-d681-4d74-9602-26a4115b8ca2.png)

By pressing the `Create` button, a new environment will be created.  You will be redirected to the settings of the newly created environment.

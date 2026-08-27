---
slug: /web-based-hub/hub-environment-settings/hub-users-settings
sidebar_label: Users Settings
sidebar_position: 2
description: You can manage the users who have access to the environment and set
  their roles in Settings → Environment → Users.
---
# Hub: Users Settings

You can manage the users who have access to the environment and set their roles in Settings → Environment → Users in Hub.  You can add users from your organization using the `Add` button.  Only Environment Admin or Environment User Admin can add, update, or delete users in the environment.

![Screenshot 2026-08-27 at 15.48.24.png](/Documentation/attachments/mtbir2fk-ehgsyhbe.png)

The Add users dialog will appear with 3 fields - Users, Role, and Vehicle categories.  By clicking on the User field, you can choose multiple users for adding them to the environment, assigning them [User Roles](../../User%20Roles.md) and vehicle categories.  The role will apply to all the selected users.  It is not possible to add users to the environment who are not defined in [Hub: Organization Settings](../Hub_%20Organization%20Settings.md).  If all organization users are added to the environment already, the Add button will be disabled.  You need to add users to your organization first.

The vehicle categories will apply to all selected users. See [Hub: Vehicle Categories Settings](Hub_%20Vehicle%20Categories%20Settings.md) for more information about vehicle categories and their usage.

![Screenshot 2026-08-27 at 15.52.17.png](/Documentation/attachments/mtbiwe3s-y7bu6g0m.png)

![Screenshot 2026-08-27 at 15.52.26.png](/Documentation/attachments/mtbiwn4h-7ph5dw6h.png)

![Screenshot 2026-08-27 at 15.52.33.png](/Documentation/attachments/mtbiwrh3-v3wybrtf.png)

By pressing the `Add` button, users will be added to the environment.

Once a new user is added, you will see it in the table with the next columns: name, email/mobile number, status, role, vehicle categories, subscriptions and cost per hour (currency). 


| **Property** | **Description** |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name | Full name of the user's Geo2 account. |
| Email/Mobile number | Email or mobile number of the user's Geo2 account. |
| Status | - `Invited` - `Accepted` |
| Role | - `User` - most applicable to mobile app users, who only access data assigned to them. - `Manager` - access to all data, but not able to modify environment settings. - `User Admin` - access to manage environment users. - `Admin` - full access to the environment data and its settings. See [User Roles](../../User%20Roles.md) for more information about environment user roles. |
| Vehicle categories | Categories that let you match users and vehicles for a load assignment. By default, standard driving categories (A, B, C, etc.) are listed. You can edit or delete them and create custom categories for your environment. See [Hub: Vehicle Categories Settings](Hub_%20Vehicle%20Categories%20Settings.md) for more information about vehicle categories and their usage. |
| Subscriptions | A subscription assigned to a user by an Organization Admin. |
| Cost per hour (currency) | Hourly operating cost of a driver or vehicle, shown in the currency selected under Settings → Environment → Display preferences. It is used to calculate planned and actual costs based on route duration. Cost calculations are displayed on Route view page. |


When you modify a user setting such as `Role`, you can save the change using the `Update` button.

When you select one or more users and press the `Delete` button, the users are removed from the environment, i.e. lose access to it.

When `Deleted are hidden` is selected, there is an option to restore a deleted user to give them access once again.  You cannot remove your own user from the environment.
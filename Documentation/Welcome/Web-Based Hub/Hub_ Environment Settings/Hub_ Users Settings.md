
# Hub: Users Settings

You can manage the users who have access to the environment and set their roles in Settings → Environment → Users.  You can add users from your organization using the `Add` button.  Only Environment Admin or Environment User Admin can add, update, or delete users in the environment.

![Screenshot 2026-04-01 at 12.16.46.png](../../../attachments/8e140c1a-67ad-492e-b862-2896a47fa7a7.png)

The Add users dialog will appear with 3 fields - Users, Role, and Vehicle categories.  By clicking on the User field, you can choose multiple users for adding them to the environment, assigning them [User Roles](../../User%20Roles.md) and vehicle categories.  The role will apply to all the selected users.  It is not possible to add users to the environment who are not defined in [Hub: Organization Settings](../Hub_%20Organization%20Settings.md).  If all organization users are added to the environment already, the Add button will be disabled.  You need to add users to your organization first.

The vehicle categories will apply to all selected users. See [Hub: Vehicle Categories Settings](Hub_%20Vehicle%20Categories%20Settings.md) for more information about vehicle categories and their usage.

![Screenshot 2026-04-01 at 12.17.55.png](../../../attachments/f7f32188-47c8-45c9-a379-233e6c3d8184.png)![Screenshot 2026-04-01 at 12.18.20.png](../../../attachments/25772d87-d950-4758-aa0a-02aa050023be.png)

By pressing the `Add` button, users will be added to the environment.

![Screenshot 2026-04-01 at 12.18.55.png](../../../attachments/04115524-dc32-4449-9b34-d36713e35ea6.png)

Once a new user is added, you will see it in the table with the next columns: name, email, status, role, vehicle categories and subscriptions.

| **Property** | **Description** |
| --- | --- |
| Name | Full name of the user's Geo2 account. |
| Email | Email of the user's Geo2 account. |
| Status | - `Invited` <br>- `Accepted` |
| Role | - `User` - most applicable to mobile app users, who only access data assigned to them. <br>- `Manager` - access to all data, but not able to modify environment settings. <br>- `User Admin` - access to manage environment users. <br>- `Admin` - full access to the environment data and its settings.  See [User Roles](../../User%20Roles.md) for more information about environment user roles. |
| Vehicle categories | Categories that let you match users and vehicles for a load assignment. By default, standard driving categories (A, B, C, etc.) are listed. You can edit or delete them and create custom categories for your environment. <br/> See [Hub: Vehicle Categories Settings](Hub_%20Vehicle%20Categories%20Settings.md) for more information about vehicle categories and their usage. |
| Subscriptions | A subscription assigned to a user by an Organization Admin. |

When you modify a user setting such as `Role`, you can save the change using the `Update` button.

When you select one or more users and press the `Delete` button, the users are removed from the environment, i.e. lose access to it.

![Screenshot 2026-04-01 at 12.20.49.png](../../../attachments/a55efa15-b8c6-44bb-8984-5e699cfd2ecd.png)

When `Deleted are hidden` is selected, there is an option to restore a deleted user to give them access once again.  You cannot remove your own user from the environment.

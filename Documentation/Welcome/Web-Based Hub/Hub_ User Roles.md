
[Web-Based Hub](../Web-Based%20Hub.md)

# Hub: User Roles

- [Organization Roles](#organization-roles)
- [Environment Roles](#environment-roles)

# Organization Roles

When you create an organization, you automatically have an Organization Admin role. Then depending on your subscription level, you can invite other users to your organization and assign roles for them. Each user can either have the role of `User`, which does not enable them to modify the organization, or `Admin`, which gives them control over the organization, including the ability to create environments.

|  **Permission**                                                                                                                                                                                 |  **Admin**    |  **User**    |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:-------------|
| Access to the list of created organizations (e.g. the selector in the header toolbar or Organizations tab in Profile settings)                                                                  | Yes           | Yes          |
| Access to the list of created environments (e.g. the selector in the header toolbar or Environments tab in Profile settings), possibility to switch between environments under the organization | Yes           | Yes          |
| Access to the organization settings                                                                                                                                                             | Yes           | No           |
| Possibility to change organization settings                                                                                                                                                     | Yes           | No           |
| Possibility to change subscription level in an organization                                                                                                                                     | Yes           | No           |
| Possibility to add subscriptions to an organization                                                                                                                                             | Yes           | No           |
| Access to the combined invoice/receipt                                                                                                                                                          | Yes           | No           |
| Possibility to delete or recover an organization                                                                                                                                                | Yes           | No           |
| Access to the list of users in an organization                                                                                                                                                  | Yes           | No           |
| Possibility to invite users to an organization                                                                                                                                                  | Yes           | No           |
| Possibility to create a new invironment in an organization                                                                                                                                      | Yes           | No           |
| Access to the list of users in an environment of an organization                                                                                                                                | Yes           | No           |
| Possibility to recover environments of an organization                                                                                                                                          | Yes           | No           |

# Environment Roles

When you create an environment, you automatically have an Environment Admin role. Then depending on your subscription level, you can invite other users to your environment and assign roles for them.

|  **Permissions**                                                                                                             |  **Admin**    |  **Manager**    |  **User Admin**    |  **User**    |
|:-----------------------------------------------------------------------------------------------------------------------------|:--------------|:----------------|:-------------------|:-------------|
| Access to the list of created environments (e.g. the selector in the header toolbar or Environments tab in Profile settings) | Yes           | Yes             | Yes                | Yes          |
| Possibility to delete an environment                                                                                         | Yes           | No              | No                 | No           |
| Access to the environment settings                                                                                           | Yes           | Yes             | No                 | No           |
| Possibility to change environment settings                                                                                   | Yes           | No              | No                 | No           |
| Access to the list of environment users and their roles in it                                                                | Yes           | Yes             | Yes                | No           |
| Possibility to add and delete users to an environment (users must be linked to the containing organization)                  | Yes           | No              | Yes                | No           |
| Possibility to view routes                                                                                                   | Yes           | Yes             | No                 | Yes          |
| Possibility to create, update, or delete routes                                                                              | Yes           | Yes             | No                 | No           |
| Possibility to view orders                                                                                                   | Yes           | Yes             | No                 | Yes          |
| Possibility to create, update, or delete orders                                                                              | Yes           | Yes             | No                 | No           |


[Release Notes](../Release%20Notes.md)

# Release Notes 2.33

# Release Date

Hub and API:

2025-01-30

Bug fixes.

Mobile app: 

2025-02-12

Bug fixes. 

# New Features

|  **Key**     |  **Summary**                                                                                                |  **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|:-------------|:------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IBALDEV-6144 | Hub: Use "Failed" template for POD emails sent for Partially successful POD status                          | Previously, the "Successful" email template was used when sending an email for a POD with a "Partially successful" status. This has now been updated to use the "Failed" email template instead. If you create a POD with a "Partially successful" status and have enabled sending POD emails in your Environment settings, the "Failed" email template will be applied. To make changes to your email templates, navigate to [Page not accessible](../../../../../../../../Page%20not%20accessible/Page%20not%20accessible.md). |
| IBALDEV-6143 | Hub: Display greyed out users/vehicles in load assignment list even if they do not match vehicle categories | In version 2.32, custom vehicle categories have been introduced. On Create/Edit load and Load plan pages, the Driver/Vehicle fields check if the selected driver and vehicle match the assigned categories. The full list of drivers and vehicles is still displayed, but any mismatched driver or vehicle will be greyed out while remaining visible in the list. <br/> Learn more about [Page not accessible](../../../../../../../../Page%20not%20accessible/Page%20not%20accessible.md).                                     |
| IBALDEV-5796 | Hub: Remove icons from buttons                                                                              | Icons have been removed from buttons in Hub for a cleaner interface.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| IBALDEV-6339 | Mobile app: POD - pre-populate last consignment data when removing a consignment key                        | When adding multiple consignment keys for [Page not accessible](../../../../../../../../Page%20not%20accessible/Page%20not%20accessible.md), the POD fields are automatically pre-filled with data from the last entered consignment. If a consignment key was added by mistake or needs to be changed, it can be removed. Now, when a key is removed, the fields will be automatically updated with data from the previously entered consignment key.                                                                           |
| IBALDEV-5812 | Mobile app: Change layout for Activate email page                                                           | [Page not accessible](../../../../../../../../Page%20not%20accessible/Page%20not%20accessible.md) is essential when registering with an email and password. We have made some layout improvements to make the process clearer and easier for you.                                                                                                                                                                                                                                                                                |

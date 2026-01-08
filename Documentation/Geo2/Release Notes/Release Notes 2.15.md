
[Release Notes](../Release%20Notes.md)

# Release Notes 2.15

# Release Date

2024-01-19

Bug fixes.

# New Features

|  **Key**     |  **Summary**                                                 |  **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|:-------------|:-------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IBALDEV-4122 | Web UI: Map view - Modify loads                              | With one of the previous releases, added the possibility to visualise multiple loads with a list of consignments in them on the Map view page. Now, you can modify loads directly on this page by clicking the Actions button. The same options as on the Load plan page are available: optimize, calibrate, update committed ETA, reverse stops, and move to load. Thus, you can modify multiple loads simultaneously and view changes for all of them on the same page with the map. |
| IBALDEV-3803 | Web UI: Planned/Actual POD Time chart                        | Added a new Planned/Actual POD time analytics chart on the Dashboard page. This chart will allow you to analyze the overall drivers' performance by comparing the difference in minutes between planned and actual POD time. Delivery ETA tolerance taken from your environment settings will help you to identify whether the difference matches your target.                                                                                                                         |
| IBALDEV-3816 | Web UI: % On-Time Consignments chart                         | Added a new % On-Time Consignments analytics chart on the Dashboard page. Consignments will be categorized as on-time, taking into consideration the time spent at stops and delivery ETA tolerance. You can set up the target value in your environment settings for % of on-time consignments for drivers. Using the new chart, you can track how close you are to your target and analyze each driver's impact on it.                                                               |
| IBALDEV-3817 | Web UI: Environment settings - target % on-time consignments | Added the new Reporting page in the Environment settings where you can specify the target % of on-time consignments for drivers. This value will be used then for the On-Time Consignments chart on the Dashboard page.                                                                                                                                                                                                                                                                |

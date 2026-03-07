
[Release Notes](../Release%20Notes.md)

# Release Notes 2.17

# Release Date

2024-02-16

Bug fixes and refactoring. 

# New Features

|  **Key**     |  **Summary**                                          |  **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|:-------------|:------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IBALDEV-4252 | Web UI: Map view - Add loads                          | Added the Add loads button on the Map view page. The Map view page makes it easy for you to plan and modify multiple loads simultaneously alongside the map. To visualize loads, you are currently able to select them from the Loads list. You will now have the ability to directly add more loads on the Map view page by clicking the "Add loads" button in the header. A dialogue will then appear, enabling you to select additional loads to drag-and-drop. |
| IBALDEV-4258 | Web UI: Map view - Export button                      | Added the Export button on every load card on the Map view page. After completing all modifications and planning multiple loads, you can click the Export button on each load card. This will directly synchronise the changes made in Geo2 to the other systems you have integrated via Geo2's API, such as your ERP or WMS.                                                                                                                                      |
| IBALDEV-3825 | Web UI: Undelivered Consignments by Reason Code chart | Added the new Undelivered Consignments by Reason Code analytics chart on the Dashboard page. With this new chart, you will be able to track undelivered consignments by different failure reason codes. This allows for detailed analysis of delivery issues. To calculate the number of undelivered consignments, we take into consideration consignments that have a planned date with failed PODs and those that have not been delivered yet.                   |

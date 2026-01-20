
[Release Notes](../Release%20Notes.md)

# Release Notes 2.11

# Release Date

2023-11-17

Bug fixes.

# New Features

|  **Key**     |  **Summary**                                           |  **Description**                                                                                                                                                                                                                                                                                                                                                          |
|:-------------|:-------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IBALDEV-3818 | Web UI: Load building log                              | Improved the work of the Load Building functionality.  After running the Load Building, on the last step, you will now be able to see the list of loads that have been created by the system, with the number of consignments, the assigned depot, and the assigned vehicle.  See [Page not accessible (ID: 39289003)]                                                    |
| IBALDEV-4067 | Web UI: Select consignments for load building          | Provided the possibility to select consignments to send for a Load Building.  See [Page not accessible (ID: 39289003)].                                                                                                                                                                                                                                                   |
| IBALDEV-4005 | Web UI: Display results of load building with map      | Added the ability to click on the Map view button on the last step of the Load building to visualise the created loads on the map. It offers a dynamic and interactive way to visualise the distribution and allocation of consignments, optimizing your overall operational efficiency.  See [Page not accessible (ID: 23101839)].                                       |
| IBALDEV-4088 | Web UI: Selecting loads for map view                   | Added the ability to select multiple loads on the Loads page and visualise them on the map via the Map View button. In future Geo2 releases,  you will be able to move consignments on the map between different loads, calibrate and optimize them. This will increase the ease and effiiciency of the load building process.  See [Page not accessible (ID: 23101839)]. |
| IBALDEV-4078 | API: Add Planned packages field for consignment entity | Added the Planned packages field for a consignment entity when creating consignments via the API.  See [Consignment](../API/Consignment.md).                                                                                                                                                                                                                              |
| IBALDEV-4138 | API, Web UI, App: Make Address.postalCode optional     | Made the Postal code field optional for a consignment creation.  See [Page not accessible (ID: 23101833)].                                                                                                                                                                                                                                                                |

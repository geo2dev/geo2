
[Web-Based Hub](../Web-Based%20Hub.md)

# Hub: Analytics

- [Introduction](#introduction)
- [Toolbar](#toolbar)
- [Charts](#charts)
  - [Routes by Status](#routes-by-status)
  - [Routes by Vehicle](#routes-by-vehicle)
  - [Routes by Area](#routes-by-area)
  - [Started Route Driver Position](#started-route-driver-position)
  - [CO2 Emissions](#co2-emissions)
  - [CO2 Emissions per Order](#co2-emissions-per-order)
  - [Delivered Orders](#delivered-orders)
  - [Undelivered Orders](#undelivered-orders)
  - [Undelivered Orders by Reason Code](#undelivered-orders-by-reason-code)
  - [Orders by Route Assignment](#orders-by-route-assignment)
  - [Orders by Area](#orders-by-area)
  - [Areas Overview](#areas-overview)
  - [On-Time Orders by Driver](#on-time-orders-by-driver)
  - [Planned/Actual POD time](#planned-actual-pod-time)
  - [% On-Time Orders](#on-time-orders)
  - [On-Time Performance](#on-time-performance)
  - [Peak Vehicle Weight Capacity](#peak-vehicle-weight-capacity)
  - [Peak Vehicle Volume Capacity](#peak-vehicle-volume-capacity)
  - [Peak Vehicle Weight](#peak-vehicle-weight)
  - [Peak Vehicle Volume](#peak-vehicle-volume)

# Introduction

The Dashboard is the first page you see after you successfully sign in.  You can get back to this by pressing `Menu → Analytics`.

![Screenshot 2025-09-01 at 10.29.43.png](../../attachments/7b1e7813-4b76-4a1c-92b4-11f1e6c5ab38.png)

# Toolbar

The navigation elements in the top toolbar are:

- Notifications
- [Support](../Support.md) - click to access documentation, contact Customer Support, request a new feature, or run a user guide on the specific page.
- [Hub: Profile](Hub_%20Profile.md) - click to view your user profile, manage your personal API access tokens, and sign out.

# Charts

On Dashboard page, you will see summarised information from the current environment using different analytics charts.  Charts can be dragged-and-dropped.  By default, depending on your display size, you will see one chart per row on small displays (e.g. phones), two charts per row on medium-sized displays (e.g. laptops and small computers), and three charts per row on wide displays.  The layout of the charts is personal to you and does not affect other users in the environment.

These charts are shown by default:

- Routes by Status
- Routes by Vehicle
- Started Route Driver Position
- CO2 Emissions charts.

To add more charts, press one of the buttons under the heading `New chart to be added`.  To delete charts, hover over the chart and click on the delete icon at the top right corner of the chart tile.

![Analytics 42.png](../../attachments/2e9544a5-ab9b-478d-a9ad-dd8e38f1a89c.png)

## Routes by Status

This chart shows the number of routes by planned date, with a breakdown by status: Planning, Planned, Released, Started, and Completed.

![Analytics 44.png](../../attachments/76f2934d-76a9-4593-9be3-8a3134f23f4b.png)

With the drop-down in the top-right corner of the chart, you can select the period to which the displayed routes relate - Today, Yesterday, Tomorrow, Last 7 days, Next 7 days, Last 30 days.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button. 

![](../../attachments/03c6345b-6e6e-4bd5-8b64-b49ebccf4aa6.png)

## Routes by Vehicle

This chart shows the percentage share of routes assigned to each vehicle, in the selected range of planned dates.

All route statuses are included - Planning, Planned, Released, Started, Completed.  The chart is scrollable to accommodate longer lists of vehicles.

![Analytics 45.png](../../attachments/87b1c69c-fb2d-4d51-b605-90fea0c9ab31.png)

With the drop-down in the top-right corner of the chart, you can select the period to which the displayed routes relate - Today, Yesterday, Tomorrow, Last 7 days, Next 7 days, Last 30 days.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button.

![](../../attachments/9e68c7eb-0707-4964-abcb-47d78167e43e.png)

## Routes by Area

This chart shows the percentage share of routes assigned to each area, in the selected range of planned dates.

All route statuses are included - Planning, Planned, Released, Started, Completed.  The chart is scrollable to accommodate longer lists of areas.

![Analytics 46.png](../../attachments/5839fe44-55c4-4ce5-81d6-3a91a49c66d0.png)

You can select the period to which the data relate - Today, Yesterday, Tomorrow, Last 7 days, Next 7 days, Last 30 days.  The filtering is by the route planned date.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button. 

![](../../attachments/f13c314f-8854-49f4-8a80-0e990e4ca499.png)

## Started Route Driver Position

This map shows your depots and the positions of drivers who have routes in the Started status.  Clicking each object on the map reveals further details.

![Analytics 48.png](../../attachments/083d35cf-7a28-44f6-a2e6-684e6b3e31f8.png)

The legend for colour-coding of the objects on the map is shown below the map:

- Moving: green
- Stopped: red
- Grey: stopped for more than 2 hours

You can pan and zoom the map and toggle a full-screen view.

## CO<sub>2</sub> Emissions

CO<sub>2</sub> emissions are calculated from the actual distance, as recorded via device tracking for each completed route, multiplied by the emission factor of the vehicle assigned to the route.  To receive reliable data, it is important that location tracking is enabled on devices and that routes are marked as started/completed at the beginning/end of each route. The units shown depend on the environment settings.  If a route is completed in the mobile app, actual distance is read-only.  For routes completed from Hub or via the API, the actual distance travelled for the route can be edited.

![](../../attachments/1d75511f-9b95-4348-bac3-6647df6e407f.png)

With the drop-down in the top-right corner of the chart, you can select the range of route actual start dates to which the data relate - Today, Yesterday, Last 7 days, Last 30 days, Last year, No data limit.  For the No data limit option, dates start from the environment creation date.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button.

![](../../attachments/bc93687a-67c3-464f-866e-ecc7d16df7d3.png)

## CO<sub>2</sub> Emissions per Order

CO<sub>2</sub> emissions for an order are calculated from the total emissions for each order, divided by the number of orders on the route.  Only completed routes are considered, because their emissions are taken as final. The units shown depend on the environment settings.  If a route is completed in the mobile app, actual distance is read-only.  For routes completed from Hub or via the API, the actual distance travelled for the route can be edited.

![Analytics 47.png](../../attachments/07a023f3-ec81-4d9e-b38e-508ad703a761.png)

With the drop-down in the top-right corner of the chart, you can select the range of route actual start dates to which the data relate - Today, Yesterday, Last 7 days, Last 30 days, Last year, No data limit.  For the No data limit option, dates start from the environment creation date.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button.

![](../../attachments/bd58eaa6-8b37-44ea-8175-f99483e1bfde.png)

## Delivered Orders

Delivered orders are those with successful PODs, both orders appearing in routes and those created from ad-hoc POD's, and orders without POD's but on completed routes.  Total orders are taken from all completed routes.  The chart shows delivered orders for each user as a percentage of all orders assigned to the user.  On the left-hand side of each bar in the chart, you will see the display name of each user; the delivered orders percentage is shown on the right of each bar.  Users are sorted from the highest percentage (dark) to the lowest (light).  An internal scroll bar is added if the data do not fit into the chart tile.  The total number of orders across all users is shown under the bar graph.

![Analytics 49.png](../../attachments/84a75357-dc62-4a26-a4b7-91993e04af6d.png)

You can select the period to which the data relate - Today, Yesterday, Last 7 days, Last 30 days.  The filtering is by the date of order completion - success POD date creation or route completion date for orders without a POD.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button. 

![](../../attachments/1fe29cb6-bc9d-46cb-9c21-335bd9b07406.png)

## Undelivered Orders

The calculation of undelivered orders starts with the total number of orders in a given planned date/time period, whether or not an order is part of a route.  The following routes are subtracted:

1. Orders with a successful POD, even if there is a failed POD too.
2. Orders without a POD but on a route whose status is Completed.

The remainder of orders are considered undelivered.  The chart shows undelivered orders for each user as a percentage of all orders assigned to the user.  On the left-hand side of each bar in the chart, you will see the display name of each user; the undelivered orders percentage is shown on the right of each bar.  Users are sorted from the highest percentage (dark) to the lowest (light).  An internal scroll bar is added if the data do not fit into the chart tile.  The total number of orders across all users is shown at the bottom of the chart.

![Analytics 42.png](../../attachments/2e9544a5-ab9b-478d-a9ad-dd8e38f1a89c.png)

You can select the period to which the data relate - Today, Yesterday, Last 7 days, Last 30 days.  The filtering is by the order planned date, typically set by route calibration/optimisation.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button. 

![](../../attachments/1fe29cb6-bc9d-46cb-9c21-335bd9b07406.png)

## Undelivered Orders by Reason Code

The chart shows undelivered orders for each user by failure reason code specified during a POD creation. 

The calculation of undelivered orders starts with the total number of orders in a given planned date/time period, whether or not an order is part of a route.  The following orders are subtracted:

1. Orders with a successful POD, even if there is a failed POD too.
2. Orders without a POD but on a route whose status is Completed.

The remainder of orders are considered undelivered.  In the Driver column, you will see the display name of each user.  In the Undelivered orders column, you will see the total number of undelivered orders by user.  In the Failure reason code column, you will see the total number of undelivered orders by failure reason code specified during a POD creation, and its percentage of the total number of undelivered orders by driver.  An internal scroll bar is added if the data do not fit into the chart tile.  The total number and % of undelivered orders with no POD are displayed in the No POD column by driver.

![Analytics 50.png](../../attachments/4ad208d9-6d7f-4975-9648-1f0c8b094a71.png)

You can select the period to which the data relate - Today, Yesterday, Last 7 days, Last 30 days.  The filtering is by the order planned date, typically set by route calibration/optimisation.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button. 

![](../../attachments/9784ea38-f9a3-4be9-a62a-347aabd704f4.png)

## Orders by Route Assignment

This chart shows orders assigned to a route versus those not assigned to a route, in a given order required date range.

The total number of orders considered is shown at the bottom of the chart. 

![Analytics 52.png](../../attachments/f1a78355-3dee-4aff-abb9-b7ff4f4e3f97.png)

You can select the period to which the data relate - Today, Yesterday, Tomorrow, Last 7 days, Next 7 days, Last 30 days.  The filtering is by the order required date.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button.

![](../../attachments/977df25d-6b54-436d-9965-1795aa1f0446.png)

## Orders by Area

This chart shows the percentage share of orders assigned to each area, in the selected range of planned dates. 

If an order doesn't have an assigned area but is added to a route with an assigned area, an area value is taken from the route.  In all other cases, the area value is taken directly from the order.  The chart is scrollable to accommodate longer lists of areas.

![Analytics 51.png](../../attachments/65eb9c9f-c033-4df9-bcdc-343960ca08f6.png)

You can select the period to which the data relate - Today, Yesterday, Tomorrow, Last 7 days, Next 7 days, Last 30 days.  The filtering is by the order planned date.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button. 

![](../../attachments/de7d223b-1e4a-4fcf-b147-8e32ce9cff93.png)

## Areas Overview

Areas Overview chart helps you to analyze the overall effectiveness of deliveries to different areas by categorizing them into on-time, late, and early deliveries. 

To calculate the number of on-time orders, both orders that are in a route with POD's and orders created by ad-hoc POD's are taken into account so you can use this chart even if you don't have a full route planning process.  Orders are categorized taking into consideration the time spent at stops and delivery ETA tolerance to calculate a POD's planned date/time, and areas to which they are assigned.  A POD's planned date/time is then compared with a POD's actual time of creation.  If an order doesn't have an assigned area, it is taken from its route.  The chart is scrollable to accommodate longer lists of areas.  The sorting is by the largest number of late orders. 

The total number of early, on-time, and late orders across all areas is shown at the bottom of the chart.

![](../../attachments/7f361320-8bdc-4ea7-bd5d-0abe1aaab5dc.png)

You can select the period to which the data relate - Today, Yesterday, Last 7 days, Last 30 days.  The filtering is by the POD planned date.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button. 

![](../../attachments/99e0eeb2-b027-46df-aaff-fa3b8e98bad0.png)

## On-Time Orders by Driver

The chart allows you to analyze the overall performance of drivers based on the on-time, late, and early deliveries they achieve. 

To calculate the number of on-time orders, both orders that are in a route with POD's and orders created by ad-hoc POD's are taken into account so you can use this chart even if you don't have a full route planning process.  Orders are categorized as early, on-time, or late, taking into consideration the order planned date/time, the time spent at stops, and delivery ETA tolerance (POD planned date/time) and comparing it with a POD's actual time of creation.  The chart is scrollable to accommodate longer lists of users.  The sorting is by the largest number of late orders. 

The total number of early, on-time, and late orders across all users is shown at the bottom of the chart.

![Analytics 53.png](../../attachments/b53d5b46-8a00-4639-b623-f0620d7c1a6b.png)

You can select the period to which the data relate - Today, Yesterday, Last 7 days, Last 30 days.  The filtering is by the POD planned date.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button. 

![](../../attachments/5065fef4-fcb2-49bc-9bf5-35b756c6aa88.png)

## Planned/Actual POD time

The chart allows you to analyze the drivers' overall performance by comparing the difference in minutes between the planned time a POD was expected to be created, against the actual time the POD was created. 

To calculate the average variance, only in-route orders with POD's are taken into account.  The planned POD time is calculated based on an in-route order planned time and its time-at-stop. The actual POD time is the actual time of a POD creation.  The chart is scrollable to accommodate longer lists of users.  The sorting is by the largest number of late orders. 

Delivery ETA tolerance can be configured specifically for your environment and will be applied to this setting.

The global average variance between POD planned and actual time across all users is shown at the bottom of the chart.

![](../../attachments/f8e0714b-2836-496c-9002-d5bcc8700265.png)

You can select the period to which the data relate - Today, Yesterday, Last 7 days, Last 30 days.  The filtering is by the POD planned date.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button. 

![](../../attachments/bfbb8f91-5008-41ed-80ed-807809166b9a.png)

## % On-Time Orders

To calculate the number of on-time orders, both orders that are in a route with POD's and orders created by ad-hoc POD's are taken into account so you can use this chart even if you don't have a full route planning process.  The chart on the left side helps you to track how close you are to your target % of on-time orders while the chart on the right side helps you to analyze each driver's impact on it.  The target value is 80% by default for all environments but you can change it in your `Environment settings → Reporting`. 

Orders are considered on-time taking into account the order planned date/time, the time spent at stops, and delivery ETA tolerance (POD planned date/time) and comparing it with a POD's actual time of creation.  

The right chart is scrollable to accommodate longer lists of users.  The sorting is by the largest % of on-time orders. 

![Analytics 54.png](../../attachments/46e98480-2aae-4139-9082-179f6567916e.png)

You can select the period to which the data relate - Today, Yesterday, Last 7 days, Last 30 days.  The filtering is by the POD planned date.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button. 

![](../../attachments/bfbb8f91-5008-41ed-80ed-807809166b9a.png)

## On-Time Performance

This chart allows you to track the overall performance for all drivers based on early, on-time, late, and undelivered orders. 

You can check either the summarised information in the pie chart, or day-by-day data using the line chart.  To calculate the number of on-time orders, both orders that are in a route and orders created by ad-hoc POD's are taken into account, so you can use this chart even if you don't have a full route planning process.  Orders are categorized as early, on-time, or late, taking into consideration the order planned date/time, the time spent at stops, and delivery ETA tolerance (POD planned date/time) and comparing it with a POD's actual time of creation.  To calculate the number of undelivered orders, we take into consideration orders with failed POD's and those not yet delivered.

![Analytics 54 (1).png](../../attachments/8e0654d6-3876-454b-b07e-d6ef8267e8bf.png)

You can select the period to which the data relate - Today, Yesterday, Last 7 days, Last 30 days.  The filtering for the early/on-time/late orders is by the POD planned date. The filtering for undelivered orders is by the orders planned date.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button. 

![](../../attachments/1680f61e-df26-4f64-8d4a-7448ff0eb875.png)

## Peak Vehicle Weight Capacity

The bar chart shows the average peak weight for all routes by assigned vehicle. 

The units on the horizontal axis as in environment weight units (kilogram, pound, or tonne), with the maximum determined by the largest weight capacity from among the vehicles.  The bar chart for every vehicle consists of two segments: used and available capacity.  

The vehicle keys are shown on the vertical axis.  Sorting is from largest used peak vehicle weight capacity to the smallest.  The chart is scrollable to accommodate longer lists of vehicles.

![](../../attachments/84ae9cb1-3580-4b72-b0b1-2fa3e103a175.png)

You can select the period to which the data relate - Today, Yesterday, Tomorrow, Last 7 days, Next 7 days, Last 30 days.  The filtering is by the route planned date.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button. 

![](../../attachments/acda6e97-812a-4371-985f-76b844235491.png)

## Peak Vehicle Volume Capacity

The bar chart shows the average peak volume for all routes by assigned vehicle. 

The units on the horizontal axis as in environment volume units (cubic metre or cubic foot), with the maximum determined by the largest volume capacity from among the vehicles.  The bar chart for every vehicle consists of two segments: used and available capacity.  

The vehicle keys are shown on the vertical axis.  Sorting is from largest used peak vehicle volume capacity to the smallest.  The chart is scrollable to accommodate longer lists of vehicles.

![](../../attachments/ea783281-eaaa-4551-99fd-7c9369cf784a.png)

You can select the period to which the data relate - Today, Yesterday, Tomorrow, Last 7 days, Next 7 days, Last 30 days.  The filtering is by the route planned date.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button. 

![](../../attachments/acda6e97-812a-4371-985f-76b844235491.png)

## Peak Vehicle Weight

The line chart shows the average peak weight for all routes day-by-day by assigned vehicle.

It's possible to select a vehicle using the selector at the top of the chart.  The units on the vertical axis are environment weight units (kilogram, pound, or tonne).  

![](../../attachments/8a50a0f2-d885-41af-aa57-a8b87c41abe6.png)

You can select the period to which the data relate - Today, Yesterday, Tomorrow, Last 7 days, Next 7 days, Last 30 days.  The filtering is by the route planned date.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button. 

![](../../attachments/67913857-97da-43d8-9e46-5d7895b69e5e.png)

## Peak Vehicle Volume

The line chart shows the average peak volume for all routes day-by-day by assigned vehicle.

It's possible to select a vehicle using the selector at the top of the chart.  The units on the vertical axis are environment volume units (cubic metre or cubic foot).  

![](../../attachments/a1ba9995-b530-4958-a43a-20524a1b3de0.png)

You can select the period to which the data relate - Today, Yesterday, Tomorrow, Last 7 days, Next 7 days, Last 30 days.  The filtering is by the route planned date.  The selected days are highlighted in green.  To apply the filter, press the `Apply` button. 

![](../../attachments/67913857-97da-43d8-9e46-5d7895b69e5e.png)

---
slug: "/web-based-hub/hub-orders"
sidebar_label: "Orders"
sidebar_position: 9
description: "Orders are records of deliveries/collections to be handled by a driver, typically as part of a route, a group of orders."
---


# Hub: Orders

Orders are records of deliveries/collections to be handled by a driver, typically as part of a route, a group of orders.

# Orders Page

To list orders in the environment, select `Orders` from the menu. By default, orders created in the last 7 days are listed.  You can select the other two tabs to show orders created in the last 30 days or list all orders in the environment.  Full filtering and sorting criteria are only available for the 7-day and 30-day tabs.

![Screenshot 2025-08-29 at 12.41.53.png](/Documentation/attachments/21aca646-4bae-43dd-9401-381bd25cd83a.png)

## Filters

To narrow down the list of orders, you can use the Filters on Orders page.  The following filters are available: 

| **Filter** | **Operation** | **Details** |
| --- | --- | --- |
| Created | From/To | Order creation date |
| Key | Contains | Order key |
| Route | Contains | Key of route to which the order is assigned |
| Route assignment | Select | Choose order: <br/>- Assigned to a route <br>- Without a route |
| Depot | Select | Key of depot to which the order is assigned |
| Type | Select | Order type: <br/>- Delivery <br>- Collection |
| Channel | Select | Order channel |
| Area | Select | Order area |
| Weight | From/To | Order weight |
| Volume | From/To | Order volume |
| Required from | From/To | Order required from date/time |
| Required to | From/To | Order required to date/time |
| Committed | From/To | Order committed date/time |
| Planned | From/To | Order planned date/time |
| POD status | Select | Status of POD linked to the order: <br/>- Success <br>- Failed <br>- Without POD |
| Order instructions | Contains | Order driver instructions |
| Planning instructions | Contains | Order planner instructions |
| Recipient code | Contains |  |
| Recipient contact name | Contains |  |
| Email | Contains | Recipient email |
| Phone | Start with | Recipient phone |
| Mobile phone | Start with | Recipient mobile phone |
| Company name | Contains | Recipient company name |
| Address line 1, 2, 3 | Contains | Recipient address - lines 1, 2, 3 |
| City | Contains | Recipient address - city |
| Postal code | Contains | Recipient address - postal code |
| Region | Contains | Recipient address - region |
| State | Contains | Recipient address - state |
| Country | Is | Recipient address - country |

## POD Status

Where a POD has been recorded for the order, it is indicated with a status icon in the top row of each order card.  A failed POD is red:

![Screenshot 2025-08-29 at 12.51.07.png](/Documentation/attachments/5d675bb6-8ee5-4dc4-9448-2d913d1d5e7b.png)

A successful POD is shown green:

![Screenshot 2025-08-29 at 12.59.12.png](/Documentation/attachments/82ffe102-35ac-4b2b-8e10-bdb51abe8d68.png)

A partially successful POD is orange:

![Screenshot 2025-08-29 at 12.47.59.png](/Documentation/attachments/cefea09e-5bca-4602-81a2-d90bade73c11.png)

You can press the POD icon to open the recorded POD.  If an order has several recorded POD's, they will be displayed in separate tabs as Pod 1, Pod 2, etc.

![Screenshot 2025-03-11 at 16.34.47.png](/Documentation/attachments/76570299-4142-47cb-b73b-ab04bf079200.png)

Read more about:

- [Hub: Order Creation and Editing](Hub_%20Order%20Creation%20and%20Editing.md)
- [Hub: Order Import](Hub_%20Order%20Import.md)
- [Hub: AI Route Building](Hub_%20AI%20Route%20Building.md)
- [Hub: Order Proof of Delivery](Hub_%20Order%20Proof%20of%20Delivery.md)
- [Hub: Order Notification History](Hub_%20Order%20Notification%20History.md)
- [Hub: Order Export](Hub_%20Order%20Export.md)

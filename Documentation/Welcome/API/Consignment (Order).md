
[API](../API.md)

# Consignment (Order)

- [Introduction](#introduction)
- [Create Consignment (Order)](#create-consignment-order)
- [Update Consignment (Order)](#update-consignment-order)
- [Get Consignment (Order) Data](#get-consignment-order-data)
- [Delete Consignment (Order)](#delete-consignment-order)
- [Export All Consignments](#export-all-consignments)
- [Remove Consignments From Export](#remove-consignments-from-export)

# Introduction

Using Geo2 API, you can:

- Create consignment (POST /consignment)
- Get consignment data (GET /consignment and GET /consignment/{consignmentId})
- Delete consignment (DELETE /consignment and DELETE /consignment/{consignmentId})
- Update consignment (PATCH /consignment and PATCH /consignment/{consignmentId})
- Export all consignments (GET /export/consignments)
- Remove consignments from export (DELETE /export/consignments and DELETE /export/consignment/{consignmentID})

For each of the actions above we have [**examples of how it works**](https://api.geo2.com/v1/docs/html/), which data you need to put in the request body, and what a result would be.

# Create Consignment (Order)

To create a consignment you need to send a POST request with the following parameters:

|  **Parameters**                 |                     |             |  **Type**           |  **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |  **Required**    |
|:--------------------------------|:--------------------|:------------|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------|
| key                             |                     |             | string              | Unique consignment key within the environment, for example, an order number 1, 2, 3, 4, etc.                                                                                                                                                                                                                                                                                                                                                                                                                        | Yes              |
| type                            |                     |             | string              | Type of consignment with one of the following values: <br/><ul local-id="6964c73337f5"><li local-id="5c3fba379784"><p local-id="a145ca0c688a">delivery</p></li><li local-id="fa8072ba9c3d"><p local-id="21a405373800">collection</p></li></ul>                                                                                                                                                                                                                                                                      | Yes              |
| channelKey                      |                     |             | string              | Tag that lets you classify delivery methods.  Provide a channel key from options defined in Settings → Environment → [Hub: Channels Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings/Hub_%20Channels%20Settings.md).                                                                                                                                                                                                                                                                                      | No               |
| areaKey                         |                     |             | string              | Tag that lets you identify depots, order and routes by user-defined geographical regions.  Provide an area key from options defined in Settings → Environment → [Hub: Areas Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings/Hub_%20Areas%20Settings.md).                                                                                                                                                                                                                                                 | No               |
| depotKey                        |                     |             | string              | Depot key where or from where the consignment should be delivered/collected. Provide a depot key from options defined in Settings → Environment → [Hub: Depots Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings/Hub_%20Depots%20Settings.md).                                                                                                                                                                                                                                                             | No               |
| loadId                          |                     |             | uniqueID            | Unique load ID to which the consignment has been assigned.  **If a route starts or ends at a depot, orders with depots must match**: the delivery depot must align with the start, and the collection depot with the end. Orders without assigned depots can be added to any route, and if a route does not use a depot as its start or end point, any order, with or without a depot, can be added.                                                                                                                | No               |
| requiredFrom                    |                     |             | YYYY-MM-DD HH:mm:ss | Date/time from when the customer requires the order to be delivered/collected.                                                                                                                                                                                                                                                                                                                                                                                                                                      | No               |
| requiredTo                      |                     |             | YYYY-MM-DD HH:mm:ss | Date/time till when the customer requires the order to be delivered/collected.                                                                                                                                                                                                                                                                                                                                                                                                                                      | No               |
| planned                         |                     |             | YYYY-MM-DD HH:mm:ss | Date/time when the consignment is planned to be delivered/collected.  Expected to be no later than required to meet recipient’s expectations.                                                                                                                                                                                                                                                                                                                                                                       | No               |
| committed                       |                     |             | YYYY-MM-DD HH:mm:ss | Date/time that has been agreed with the customer for delivery/collection.                                                                                                                                                                                                                                                                                                                                                                                                                                           | No               |
| timeAtStop                      |                     |             | unsigned int        | The amount of time the delivery vehicle is expected to remain at a route stop.  This is used when orders are first brought into a route and, together with drive times, stop durations are intended to lead to route durations that are more realistic than if only drive time was considered. Should be provided in **minutes.** <br/> If no value is provided, the default Stop duration time is taken from [Hub: Routes Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings/Hub_%20Routes%20Settings.md). | No               |
| weight                          |                     |             | unsigned double     | Number to specify the total order weight in the weight unit specified in Settings → Environment -> [Hub: Display Preferences Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings/Hub_%20Display%20Preferences%20Settings.md).  One of the uses is the calculation of the peak load weight for a route.                                                                                                                                                                                                       | No               |
| volume                          |                     |             | unsigned double     | Number to specify the total order volume in the volume unit specified in Settings → Environment -> [Hub: Display Preferences Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings/Hub_%20Display%20Preferences%20Settings.md).  One of the uses is the calculation of the peak load volume for a route.                                                                                                                                                                                                       | No               |
| plannedPackages                 |                     |             | unsigned int        | Number of packages expected as part of the consignment.  For example, 2.                                                                                                                                                                                                                                                                                                                                                                                                                                            | No               |
| consigneeCode                   |                     |             | string              | Value to provide a link to a consignee (customer) record in e.g. the organization's accounting system.  For example, customer\_001.                                                                                                                                                                                                                                                                                                                                                                                 | No               |
| consignmentInstructions         |                     |             | string              | Optional notes for drivers that are shown in the mobile app. For example, "leave with reception".                                                                                                                                                                                                                                                                                                                                                                                                                   | No               |
| plannningInstructions           |                     |             | string              | Optional notes for transport planners that are shown in the stop card in the Route plan page in Hub and not shown in the mobile app. For example, "must be delivered by 11:00".                                                                                                                                                                                                                                                                                                                                     | No               |
| consignmentNotificationsEnabled |                     |             | boolean             | Allow POD notifications on the consignment level.  Even if they are allowed in [Hub: POD Notification Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings/Hub_%20POD%20Notification%20Settings.md), you can disable them for an individual order and notifications will not be sent to the recipient.  If you set up fixed recipients for failed and partially successful POD notifications, emails will be sent even if they are turned off on an order level.                                              | No               |
| publicTrackingEnabled           |                     |             | boolean             | Allow Public tracking notifications on the consignment level.  Even if they are allowed in [Hub: Public Tracking Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings/Hub_%20Public%20Tracking%20Settings.md), you can disable them for an individual order and notifications will not be sent to the recipient.                                                                                                                                                                                              | No               |
| consigneeContact                |                     |             |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 | personName          |             | string              | Contact name, e.g. "John Doe"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | No               |
|                                 | email               |             | string              | Email address of the consignee.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 | phone               |             |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                  |
|                                 |                     | code        | string              | Code of country, like "GB".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | No               |
|                                 |                     | countryCode | unsigned int        | E.g. 44 for the GB.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | No               |
|                                 |                     | localNumber | unsigned int        | The remainder of the number, without a leading zero.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | No               |
|                                 | mobile              |             |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                  |
|                                 |                     | code        | string              | Code of country, like "GB".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | No               |
|                                 |                     | countryCode | unsigned int        | E.g. 44 for the GB.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | No               |
|                                 |                     | localNumber | unsigned int        | The remainder of the number, without a leading zero.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | No               |
| consigneeAddress                |                     |             |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Yes              |
|                                 | name                |             | string              | User-defined description useful if addresses are shown as an address book.                                                                                                                                                                                                                                                                                                                                                                                                                                          | No               |
|                                 | company             |             | string              | Consignee company name, e.g. "Springboard Applications Ltd".                                                                                                                                                                                                                                                                                                                                                                                                                                                        | No               |
|                                 | line1               |             | string              | Consignee address line, typically street, e.g. "1000 Great West Road".                                                                                                                                                                                                                                                                                                                                                                                                                                              | Yes              |
|                                 | line2               |             | string              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 | line3               |             | string              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 | city                |             | string              | City of a consignee, e.g. "Brentford".                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Yes              |
|                                 | region              |             | string              | Region of a consignee.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | No               |
|                                 | postalCode          |             | string              | Postal code of a consignee.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Yes              |
|                                 | state               |             | string              | Name of state of a consignee.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | No               |
|                                 | country             |             | string              | Must be set, 2-letter ISO code. Country of a consignee.                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Yes              |
|                                 | geoLocation         |             | geopoint            | Geo-location of a geo-coded address.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | No               |
|                                 |                     | latitude    |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 |                     | longtitude  |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 | geoLocationAccuracy |             | unsigned int        | Google equivalents: <br/> 1 - ROOFTOP <br/> 2 - RANGE\_INTERPOLATED, GEOMETRIC\_CENTER <br/> 3 - APPROXIMATE                                                                                                                                                                                                                                                                                                                                                                                                        | No               |
|                                 | placeId             |             | string              | Google Places API Place ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | No               |
| consignorContact                |                     |             |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 | personName          |             | string              | Contact name, e.g. "John Doe"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | No               |
|                                 | email               |             | string              | Email address of the consignee.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 | phone               |             |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                  |
|                                 |                     | code        | string              | Code of country, like "GB".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | No               |
|                                 |                     | countryCode | unsigned int        | E.g. 44 for the GB.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | No               |
|                                 |                     | localNumber | unsigned int        | The remainder of the number, without a leading zero.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | No               |
|                                 | mobile              |             |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                  |
|                                 |                     | code        | string              | Code of country, like "GB".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | No               |
|                                 |                     | countryCode | unsigned int        | E.g. 44 for the GB.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | No               |
|                                 |                     | localNumber | unsigned int        | The remainder of the number, without a leading zero.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | No               |
| consignorAddress                |                     |             |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 | name                |             | string              | User-defined description useful if addresses are shown as an address book.                                                                                                                                                                                                                                                                                                                                                                                                                                          | No               |
|                                 | company             |             | string              | Consignor company name, e.g. "Springboard Applications Ltd".                                                                                                                                                                                                                                                                                                                                                                                                                                                        | No               |
|                                 | line1               |             | string              | Consignor address line, typically street, e.g. "1000 Great West Road".                                                                                                                                                                                                                                                                                                                                                                                                                                              | Yes              |
|                                 | line2               |             | string              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 | line3               |             | string              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 | city                |             | string              | City of a consignor, e.g. "Brentford".                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | No               |
|                                 | region              |             | string              | Region of a consignor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | No               |
|                                 | postalCode          |             | string              | Postal code of a consignor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Yes              |
|                                 | state               |             | string              | Name of state of a consignor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | No               |
|                                 | country             |             | string              | Must be set, 2-letter ISO code.  Country of a consignor.                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Yes              |
|                                 | geoLocation         |             | geopoint            | Geo-location of a geo-coded address.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | No               |
|                                 |                     | latitude    |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 |                     | longtitude  |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 | geoLocationAccuracy |             | unsigned int        | Google equivalents: <br/> 1 - ROOFTOP <br/> 2 - RANGE\_INTERPOLATED, GEOMETRIC\_CENTER <br/> 3 - APPROXIMATE                                                                                                                                                                                                                                                                                                                                                                                                        | No               |
|                                 | placeId             |             | string              | Google Places API Place ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | No               |
| packages                        |                     |             |                     | Optional package details - barcode, height, width, depth, volume, weight.                                                                                                                                                                                                                                                                                                                                                                                                                                           | No               |
|                                 | packageId           |             | uniqueId            | Unique package ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Yes              |
|                                 | barcode             |             | string              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 | height              |             | unsigned double     | Unit: cm.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | No               |
|                                 | depth               |             | unsigned double     | Unit: cm.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | No               |
|                                 | width               |             | unsigned double     | Unit: cm.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | No               |
|                                 | volume              |             | unsigned double     | Unit: m3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | No               |
|                                 | weight              |             | unsigned double     | Unit: kg.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | No               |
| productLines                    |                     |             |                     | Optional details of products in the consignment - product code, commodity code, barcode, description, quantity, currency, unit price, unit tax, tax rate, country of origin.                                                                                                                                                                                                                                                                                                                                        | No               |
|                                 | productLineId       |             | uniqueId            | Unique product line ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Yes              |
|                                 | productCode         |             | string              | Customer-defined product identifier.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Yes              |
|                                 | commodityCode       |             | string              | Recognised code such as UNSPC used in international trade.                                                                                                                                                                                                                                                                                                                                                                                                                                                          | No               |
|                                 | barcode             |             | string              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 | description         |             | string              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 | quantity            |             | unsigned double     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 | currency            |             | currency            | Currency of price and tax values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Yes              |
|                                 | unitPrice           |             | float               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 | unitTax             |             | float               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |
|                                 | taxRate             |             | float               | Percentage of unitPrice that makes unitTax.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | No               |
|                                 | countryOfOrigin     |             | string              | 2-letter ISO code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | No               |
|                                 | unitWeight          |             | unsigned double     | Unit: kg.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | No               |
| packageProducts                 |                     |             |                     | Packages can optionally specify the products and quantities they contain.                                                                                                                                                                                                                                                                                                                                                                                                                                           | No               |
|                                 | packageId           |             | uniqueID            | Unique package ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Yes              |
|                                 | productLineId       |             | uniqueID            | Unique product line ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Yes              |
|                                 | quantity            |             | unsigned double     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | No               |

Example of a POST request to create a consignment:

##### **Code Block**

```bash
curl -X 'POST' \
  'https://api.geo2.com/v1/consignment?timezone=Europe%2FLondon' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM' \
  -H 'Content-Type: application/json' \
  -d '{
  "key": "001_1212",
  "type": "delivery",
  "depotKey": "depot_001",
  "loadId": "6yhKIioCJDTtaImFiJpD",
  "requiredFrom": "2026-03-05 12:00:00",
  "requiredTo": "2026-03-05 16:00:00",
  "planned": "2026-03-05 16:15:00",
  "weight": 10,
  "volume": 20,
  "consigneeCode": "NIKE",
  "consignmentInstructions": "Leave with neighbour",
  "planningInstructions": "Must be delivered by 17:00",
  "consigneeContact": {
    "personName": "Nick",
    "email": "nick@balloonone.com",
    "phone": {
      "code": "GB",
      "countryCode": "44",
      "localNumber": "2088199071"
    },
    "mobile": {
      "code": "GB",
      "countryCode": "44",
      "localNumber": "2088199071"
    }
  },
  "consigneeAddress": {
    "name": "Office",
    "company": "Balloonone",
    "line1": "The Mille",
    "line2": "Great West Rd",
    "line3": "",
    "city": "Brentford",
    "region": "",
    "postalCode": "TW8 9DW",
    "state": "",
    "country": "GB",
    "geoLocation": {
      "lat": 51.488922406204296,
      "lng": -0.3134162798480503
    },
    "geoLocationAccuracy": 1,
    "placeId": "ChIJUfCccbwNdkgRZun6nuRQ1tY"
  },
  "consignorContact": {
    "personName": "Nick",
    "email": "nick@balloonone.com",
    "phone": {
      "code": "GB",
      "countryCode": "44",
      "localNumber": "2088199071"
    },
    "mobile": {
      "code": "GB",
      "countryCode": "44",
      "localNumber": "2088199071"
    }
  },
  "consignorAddress": {
    "name": "Office",
    "company": "Balloonone",
    "line1": "The Mille",
    "line2": "Great West Rd",
    "line3": "",
    "city": "Brentford",
    "region": "",
    "postalCode": "TW8 9DW",
    "state": "",
    "country": "GB",
    "geoLocation": {
      "lat": 51.488922406204296,
      "lng": -0.3134162798480503
    },
    "geoLocationAccuracy": 1,
    "placeId": "ChIJUfCccbwNdkgRZun6nuRQ1tY"
  },
  "packages": [
    {
      "packageId": "9b88b664-8623-46f0-a7af-9671d42d9b53",
      "barcode": "001",
      "height": 10,
      "depth": 20,
      "width": 30,
      "volume": 0.006,
      "weight": 1.2
    }
  ],
  "productLines": [
    {
      "productLineId": "a6464eba-5759-4135-aa96-c31148ad92c6",
      "productCode": "001",
      "commodityCode": "43191501",
      "barcode": "001",
      "description": "Mobile phone",
      "height": 10,
      "quantity": 1,
      "currency": "GBP",
      "unitPrice": 20,
      "unitTax": 30,
      "taxRate": 0.006,
      "countryOfOrigin": "GB",
      "unitWeight": 1.2
    }
  ],
  "packageProducts": [
    {
      "packageId": "9b88b664-8623-46f0-a7af-9671d42d9b53",
      "productLineId": "a6464eba-5759-4135-aa96-c31148ad92c6",
      "quantity": 1
    }
  ]
}'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "data": {
    "consignmentId": "bPnar5IshZpJ0YAJOszI",
    "packageIds": [
      "2ac67141-a340-4a56-b417-d976e2f3e6de"
    ],
    "productLineIds": [
      "23173774-e885-4d8e-b302-eb6d4215def9"
    ]
  },
  "status": "OK"
}
```

If a response status is OK, a consignment is created. It is also shown on [Hub: Orders](../Web-Based%20Hub/Hub_%20Orders.md) page in the [**web-based Hub**](https://hub.geo2.com/en-GB/auth/signin).

# Update Consignment (Order)

To partly or fully update a consignment, you can use a consignment key (a unique consignment key generated by you) or ID (a unique consignment ID generated by us, visible in response after sending a request to create a consignment).  After filling in a consignment key or consignment ID, you need to send a PATCH request with the parameters you want to change.  Example:

##### **Code Block**

```bash
curl -X 'PATCH' \
  'https://api.geo2.com/v1/consignment?id=bPnar5IshZpJ0YAJOszI&timezone=Europe%2FLondon' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM' \
  -H 'Content-Type: application/json' \
  -d '{
  "key": "001_1212",
  "type": "delivery",
  "depotKey": "depot_001",
  "loadId": "6yhKIioCJDTtaImFiJpD",
  "requiredFrom": "2026-03-05T12:00:00Z",
  "requiredTo": "2026-03-05T16:00:00Z",
  "planned": "2026-03-05T16:15:00Z",
  "committed": "2026-03-05T16:15:00Z",
  "weight": 20,
  "volume": 15,
  "consigneeCode": "NIKE",
  "consignmentInstructions": "Leave with neighbour",
  "planningInstructions": "Do not leave without signature",
  "consigneeContact": {
    "personName": "Nick",
    "email": "nick@balloonone.com",
    "phone": {
      "code": "GB",
      "countryCode": "44",
      "localNumber": "2088199071"
    },
    "mobile": {
      "code": "GB",
      "countryCode": "44",
      "localNumber": "2088199071"
    }
  },
  "consigneeAddress": {
    "name": "Office",
    "company": "Balloonone",
    "line1": "The Mille",
    "line2": "Great West Rd",
    "line3": "",
    "city": "Brentford",
    "region": "",
    "postalCode": "TW8 9DW",
    "state": "",
    "country": "GB",
    "geoLocation": {
      "lat": 51.488922406204296,
      "lng": -0.3134162798480503
    },
    "geoLocationAccuracy": 1,
    "placeId": "ChIJUfCccbwNdkgRZun6nuRQ1tY"
  },
  "consignorContact": {
    "personName": "Nick",
    "email": "nick@balloonone.com",
    "phone": {
      "code": "GB",
      "countryCode": "44",
      "localNumber": "2088199071"
    },
    "mobile": {
      "code": "GB",
      "countryCode": "44",
      "localNumber": "2088199071"
    }
  },
  "consignorAddress": {
    "name": "Office",
    "company": "Balloonone",
    "line1": "The Mille",
    "line2": "Great West Rd",
    "line3": "",
    "city": "Brentford",
    "region": "",
    "postalCode": "TW8 9DW",
    "state": "",
    "country": "GB",
    "geoLocation": {
      "lat": 51.488922406204296,
      "lng": -0.3134162798480503
    },
    "geoLocationAccuracy": 1,
    "placeId": "ChIJUfCccbwNdkgRZun6nuRQ1tY"
  },
  "packages": [
    {
      "packageId": "9b88b664-8623-46f0-a7af-9671d42d9b53",
      "barcode": "BARCODE_001",
      "height": 10,
      "depth": 20,
      "width": 30,
      "volume": 0.006,
      "weight": 1.2
    }
  ],
  "productLines": [
    {
      "productLineId": "a6464eba-5759-4135-aa96-c31148ad92c6",
      "productCode": "CODE_001",
      "commodityCode": "43191501",
      "barcode": "BARCODE_001",
      "description": "Mobile phone",
      "height": 10,
      "quantity": 1,
      "currency": "GBP",
      "unitPrice": 20,
      "unitTax": 30,
      "taxRate": 0.006,
      "countryOfOrigin": "GB",
      "unitWeight": 1.2
    }
  ],
  "packageProducts": [
    {
      "packageId": "9b88b664-8623-46f0-a7af-9671d42d9b53",
      "productLineId": "a6464eba-5759-4135-aa96-c31148ad92c6",
      "quantity": 1
    }
  ]
}'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "status": "OK"
}
```

# Get Consignment (Order) Data

To get consignment data you can use a consignment key (a unique consignment key generated by you) or ID (a unique consignment ID generated by us, visible in response after sending a request to create a consignment).

After filling in a consignment key or consignment ID, you need to send a GET request.  Example:

##### **Code Block**

```bash
curl -X 'GET' \
  'https://api.geo2.com/v1/consignment?id=bPnar5IshZpJ0YAJOszI&timezone=Europe%2FLondon' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "data": {
    "requiredFrom": "2026-03-05T12:00:00Z",
    "requiredTo": "2026-03-05T16:00:00Z",
    "planned": "2026-03-05T16:15:00Z",
    "committed": null,
    "created": "2026-03-05T11:00:00Z",
    "updated": "2026-03-05T12:25:00Z",
    "consignmentId": "bPnar5IshZpJ0YAJOszI",
    "stopPosition": 1,
    "packages": [
      {
        "barcode": "001",
        "packageId": "2ac67141-a340-4a56-b417-d976e2f3e6de",
        "volume": 0.006,
        "weight": 1.2,
        "height": 10,
        "width": 30,
        "depth": 20
      }
    ],
    "productLines": [
      {
        "unitPrice": 20,
        "unitWeight": 1.2,
        "quantity": 1,
        "description": "Mobile phone",
        "unitTax": 30,
        "taxRate": 0.006,
        "productCode": "001",
        "commodityCode": "43191501",
        "currency": "GBP",
        "countryOfOrigin": "GB",
        "barcode": "BARCODE_001",
        "height": 10,
        "productLineId": "23173774-e885-4d8e-b302-eb6d4215def9"
      }
    ],
    "packageProducts": [
      {
        "quantity": 1,
        "packageId": "2ac67141-a340-4a56-b417-d976e2f3e6de",
        "productLineId": "23173774-e885-4d8e-b302-eb6d4215def9"
      }
    ],
    "depot": {
      "address": {
        "country": "GB",
        "geoLocation": {
          "lng": -0.6589784,
          "lat": 51.9068365
        },
        "city": "Leighton Buzzard",
        "postalCode": "LU7 4WG",
        "placeId": "ChIJCahEnDBRdkgRTgjGG9r84M8",
        "company": "test",
        "geoLocationAccuracy": 1,
        "region": "Bedfordshire",
        "line2": "Chartmoor Rd",
        "line1": "Unit 7"
      },
      "contact": {
        "personName": "John",
        "phone": {
          "code": "GB",
          "countryCode": "44",
          "localNumber": "1234567890"
        },
        "mobile": {
          "code": "GB",
          "countryCode": "44",
          "localNumber": "1234567890"
        },
        "email": "john.doe@gmailc.com"
      },
      "name": "depot_001",
      "key": "depot_001"
    },
    "volume": 20,
    "weight": 10,
    "consigneeContact": {
      "personName": "Nick",
      "phone": {
        "code": "GB",
        "countryCode": "44",
        "localNumber": "2088199071"
      },
      "mobile": {
        "code": "GB",
        "countryCode": "44",
        "localNumber": "2088199071"
      },
      "email": "nick@balloonone.com"
    },
    "type": "delivery",
    "version": 1,
    "planningInstructions": "Must be delivered by 17:00",
    "consignmentInstructions": "Leave with neighbour",
    "environmentId": "5SYdrm9xLj42guuh6sVT",
    "loadId": "6yhKIioCJDTtaImFiJpD",
    "consignorAddress": {
      "country": "GB",
      "city": "Brentford",
      "postalCode": "TW8 9DW",
      "placeId": "ChIJUfCccbwNdkgRZun6nuRQ1tY",
      "geoLocationAccuracy": 1,
      "geoLocation": {
        "lng": -0.3134162798480503,
        "lat": 51.488922406204296
      },
      "name": "Office",
      "company": "Balloonone",
      "state": "",
      "line3": "",
      "region": "",
      "line2": "Great West Rd",
      "line1": "The Mille"
    },
    "consigneeCode": "NIKE",
    "consignorContact": {
      "personName": "Nick",
      "phone": {
        "code": "GB",
        "countryCode": "44",
        "localNumber": "2088199071"
      },
      "mobile": {
        "code": "GB",
        "countryCode": "44",
        "localNumber": "2088199071"
      },
      "email": "nick@balloonone.com"
    },
    "key": "CONS_0012",
    "consigneeAddress": {
      "country": "GB",
      "city": "Brentford",
      "postalCode": "TW8 9DW",
      "placeId": "ChIJUfCccbwNdkgRZun6nuRQ1tY",
      "geoLocationAccuracy": 1,
      "geoLocation": {
        "lng": -0.3134162798480503,
        "lat": 51.488922406204296
      },
      "name": "Office",
      "company": "Balloonone",
      "state": "",
      "line3": "",
      "region": "",
      "line2": "Great West Rd",
      "line1": "The Mille"
    }
  },
  "status": "OK"
}
```

# Delete Consignment (Order)

To delete a consignment you can use a consignment key (a unique consignment key generated by you) or ID (a unique consignment ID generated by us, visible in response after sending a request to create a consignment).  After filling in a consignment key or consignment ID, you need to send a DELETE request.  Example:

##### **Code Block**

```bash
curl -X 'DELETE' \
  'https://api.geo2.com/v1/consignment?id=bPnar5IshZpJ0YAJOszI' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "status": "OK"
}
```

A consignment will be deleted from Hub as well.

# Export All Consignments

To return exported consignments ID`s of all exported consignments, you need to send a GET/export/consignments request.  Example:

##### **Code Block**

```bash
curl -X 'GET' \
  'https://api.geo2.com/v1/export/consignments' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "data": [
    "8OAk85y1GIT0tdRwZle5"
  ],
  "status": "OK"
}
```

# Remove Consignments From Export

To remove all consignments from export, you need to send a DELETE/export/consignments request.  Example:

##### **Code BLock**

```bash
curl -X 'DELETE' \
  'https://api.geo2.com/v1/export/consignments' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "status": "OK"
}
```


[API](../API.md)

# Load (Route)

- [Introduction](#introduction)
- [Create Load (Route)](#create-load-route)
- [Update Load (Route)](#update-load-route)
- [Get Load (Route) Data](#get-load-route-data)
- [Delete Load (Route)](#delete-load-route)

# Introduction

Using Geo2 API, you can:

- Create load (POST /load)
- Update load (PATCH /load and PATCH/load/{loadId})
- Get load data (GET /load and GET/load/{loadId})
- Delete load (DELETE /load and DELETE/load/{loadId})

For each of the actions above we have [**examples of how it works**](https://api.geo2.com/v1/docs/html/), which data you need to put in the request body, and what a result would be.

# Create Load (Route)

To create a load, send a POST request with the following parameters:

|  **Parameter**    |       |  **Type**                                  |  **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |  **Required**    |
|:------------------|:------|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------|
| key               |       | string                                     | Unique identifier for the load in this environment. Use a route number (e.g., 1, 2, 3) or the current date and time (e.g., 20260505\_\_1212).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Yes              |
| status            |       | string                                     | Status of the load with one of the following values: <br/><ul local-id="fcc8a5c863f5"><li local-id="d184f575a664"><p local-id="a341a780abc0">planning - actively being planned</p></li><li local-id="5dec67f8dbde"><p local-id="6911f6b22332">planned - planning is completed, but route has not yet been released to a driver</p></li><li local-id="3d3c3dec58a9"><p local-id="bfe7e00bc94a">released - released to a driver, so that they can work with it in the mobile app</p></li><li local-id="d1e16e8da114"><p local-id="f17f291e63c8">started - indicates the route has left the start point</p></li><li local-id="7a493b14d00c"><p local-id="4ea9dae03e41">completed - all work on the route has been completed; for example, the vehicle has returned to the end point</p></li></ul> | Yes              |
| trip              |       | unsigned int                               | A number indicating the route sequence for a vehicle on a given day, starting at 1 for the first route, 2 for the next, and so on. Use trip numbers to distinguish multiple loads on the same day for a fixed route or area: 1, 2, 3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Yes              |
| userID            |       | uniqueId                                   | Unique user ID that is assigned to a load as a driver. Once released, the assigned user sees the route in the mobile app. If you use [Hub: Vehicle Categories Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings/Hub_%20Vehicle%20Categories%20Settings.md) functionality, the system can match the user’s and vehicle’s categories. Users without categories can only be assigned to vehicles without categories. Vehicles without categories can be assigned to any user.  Assigning categories to users and vehicles is optional.                                                                                                                                                                                                                                                   | No               |
| participants      |       | uniqueId                                   | Up to 2 additional users' IDs assigned to the route. Once released, the assigned participant sees the route in the mobile app. While the driver retains the ability to start and complete a route, participants will have access to a route to check the list of stops and create POD's for them. <br/> A user cannot be assigned as both driver and participant.                                                                                                                                                                                                                                                                                                                                                                                                                              | No               |
| startStop         |       |                                            | The starting point for your load: a depot (from the depot list in [Hub: Depots Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings/Hub_%20Depots%20Settings.md)), the first stop’s address, or any address.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Yes              |
|                   | type  | oneOf: <br/> depot | startStop | address   | If you select type “depot”, provide the depot key from your depot list in Settings in the “value” field. Other values are rejected. <br/> If you select type “startStop”, set the “value” field to null. The first stop also serves as the load’s start point. <br/> If you select type “address”, provide the load’s start address in the “value” field.                                                                                                                                                                                                                                                                                                                                                                                                                                      | Yes              |
|                   | value | oneOf: <br/> null | string | addressObject |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Yes              |
| endStop           |       |                                            | The end point for your load: a depot (from the depot list in [Hub: Depots Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings/Hub_%20Depots%20Settings.md)), the last stop’s address, or any address.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Yes              |
|                   | type  | oneOf: <br/> depot | endStop | address     | If you select type “depot”, provide the depot key from your depot list in Settings in the “value” field. Other values are rejected. <br/> If you select type “endStop”, set the “value” field to null. The last stop also serves as the load’s end point. <br/> If you select type “address”, provide the load’s end address in the “value” field.                                                                                                                                                                                                                                                                                                                                                                                                                                             | Yes              |
|                   | value | oneOf: <br/> null | string | addressObject |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Yes              |
| vehicleKey        |       | string                                     | Vehicle key assigned to the load taken from your existing vehicle list in [Hub: Environment Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings.md).  If you use [Hub: Environment Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings.md) functionality, the system can match the user’s and vehicle’s categories. Users without categories can only be assigned to vehicles without categories. Vehicles without categories can be assigned to any user.  Assigning categories to users and vehicles is optional.                                                                                                                                                                                                                                                              | No               |
| areaKey           |       | string                                     | Area key of a user-defined geographical region taken from your existing area list in [Hub: Environment Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | No               |
| plannedStart      |       | YYYY-MM-DD HH:mm:ss                        | Expected dispatch date/time of the load from the load start.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Yes              |
| plannedEnd        |       | YYYY-MM-DD HH:mm:ss                        | Expected load end date and time - the return of the vehicle to the load end.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | No               |
| plannedDuration   |       | unsigned int                               | Duration between Planned start and Planned end. Should be provided in **seconds.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | No               |
| plannedDistance   |       | unsigned int                               | Planned distance of a load in **kilometres**, even if your default unit is feet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | No               |

Example of a POST request to create a load with a depot as load start and end points:

##### **Code Block**

```bash
curl -X 'POST' \
  'https://api.geo2.com/v1/load?timezone=Europe%2FLondon' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJHTnk5NTk4d3h2VlZSSUJpSnhSVnNvUmg1ajUyIiwidG9rZW5JZCI6Ii1PbXhzeWxWSnNOenlzY2xDUFRTIiwiaWF0IjoxNzcyNzEyMzU2LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6IkdOeTk1OTh3eHZWVlJJQmlKeFJWc29SaDVqNTIiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoyMDg4MDcyMzU2fQ.yF9cf6noL_lFtgf1YQwjYc75D3bC4aY0n5_ZqVx6OZ4' \
  -H 'Content-Type: application/json' \
  -d '{
  "key": "001_1",
  "status": "planned",
  "trip": 1,
  "userId": "GNy9598wxvVVRIBiJxRVsoRh5j52",
  "startStop": {
    "type": "depot",
    "value": "depot_001"
  },
  "endStop": {
    "type": "depot",
    "value": "depot_001"
  },
  "vehicleKey": "van_001",
  "areaKey": "area_001",
  "plannedStart": "2026-03-05 10:00:00"
}'
```

Example of a POST request to create a load with an address as load start and end points:

##### **Code Block**

```bash
curl -X 'POST' \
  'https://api.geo2.com/v1/load?timezone=Europe%2FLondon' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJHTnk5NTk4d3h2VlZSSUJpSnhSVnNvUmg1ajUyIiwidG9rZW5JZCI6Ii1PbXhzeWxWSnNOenlzY2xDUFRTIiwiaWF0IjoxNzcyNzEyMzU2LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6IkdOeTk1OTh3eHZWVlJJQmlKeFJWc29SaDVqNTIiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoyMDg4MDcyMzU2fQ.yF9cf6noL_lFtgf1YQwjYc75D3bC4aY0n5_ZqVx6OZ4' \
  -H 'Content-Type: application/json' \
  -d '{
  "key": "001_2",
  "status": "planned",
  "trip": 2,
  "userId": "GNy9598wxvVVRIBiJxRVsoRh5j52",
  "startStop": {
    "type": "address",
    "value": {
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
    }
  },
  "endStop": {
    "type": "address",
    "value": {
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
  }
  },
  "vehicleKey": "van_001",
  "areaKey": "area_001",
  "plannedStart": "2026-03-05T12:00:00Z"
}'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "data": {
    "loadId": "2zj72ewNTv90QskneJLv"
  },
  "status": "OK"
}
```

If a response status is OK, a load is created. It is also shown on [Hub: Routes](../Web-Based%20Hub/Hub_%20Routes.md) page in Hub.

# Update Load (Route)

To partly or fully update a load, you can use a load key (a unique load key generated by you) or load ID (a unique load ID generated by us, visible in response after sending a request to create a load).  After filling in a load key or load ID, you need to send a PATCH request with the parameters you want to change.  Example:

##### **Code Block**

```bash
curl -X 'PATCH' \
  'https://api.geo2.com/v1/load?id=2zj72ewNTv90QskneJLv&timezone=Europe%2FLondon' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJHTnk5NTk4d3h2VlZSSUJpSnhSVnNvUmg1ajUyIiwidG9rZW5JZCI6Ii1PbXhzeWxWSnNOenlzY2xDUFRTIiwiaWF0IjoxNzcyNzEyMzU2LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6IkdOeTk1OTh3eHZWVlJJQmlKeFJWc29SaDVqNTIiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoyMDg4MDcyMzU2fQ.yF9cf6noL_lFtgf1YQwjYc75D3bC4aY0n5_ZqVx6OZ4' \
  -H 'Content-Type: application/json' \
  -d '{
  "key": "001_1",
  "status": "released",
  "trip": 1,
  "userId": "GNy9598wxvVVRIBiJxRVsoRh5j52",
  "startStop": {
    "type": "depot",
    "value": "depot_001"
  },
  "endStop": {
    "type": "depot",
    "value": "depot_001"
  },
  "vehicleKey": "van_001",
  "areaKey": "area_001",
  "plannedStart": "2026-03-05 10:00:00"
}'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "status": "OK"
}
```

# Get Load (Route) Data

To get load data you can use a load key (a unique load key generated by you) or ID (a unique load ID generated by us, visible in response after sending a request to create a load).

After filling in a load key or load ID, you need to send a GET request.  Example:

##### **Code Block**

```bash
curl -X 'GET' \
  'https://api.geo2.com/v1/load?id=2zj72ewNTv90QskneJLv&timezone=Europe%2FLondon' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJHTnk5NTk4d3h2VlZSSUJpSnhSVnNvUmg1ajUyIiwidG9rZW5JZCI6Ii1PbXhzeWxWSnNOenlzY2xDUFRTIiwiaWF0IjoxNzcyNzEyMzU2LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6IkdOeTk1OTh3eHZWVlJJQmlKeFJWc29SaDVqNTIiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoyMDg4MDcyMzU2fQ.yF9cf6noL_lFtgf1YQwjYc75D3bC4aY0n5_ZqVx6OZ4'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "data": {
    "peakWeight": 0,
    "peakVolume": 0,
    "key": "001_1",
    "status": "planned",
    "trip": 1,
    "environmentId": "TpVxgqiaErAecqBSff7y",
    "countConsignment": 0,
    "vehicleCheckOnStart": true,
    "vehicleCheckOnComplete": true,
    "isRouteOn": false,
    "version": 1,
    "origin": "API",
    "plannedStart": "2026-03-05T10:00:00Z",
    "plannedEnd": null,
    "actualStart": null,
    "actualEnd": null,
    "created": "2026-03-05T12:19:16Z",
    "updated": "2026-03-05T12:19:16Z",
    "area": {
      "activeTo": null,
      "activeFrom": null,
      "name": "area_001",
      "key": "area_001"
    },
    "vehicle": {
      "key": "van_001",
      "registration": "ABC123",
      "type": "van",
      "speedFactor": 0.9,
      "description": "",
      "loadBuildingAvailable": true,
      "vehicleCategories": [],
      "origin": "WEB",
      "weightCapacity": 2000,
      "volumeCapacity": 100,
      "emissionFactor": null,
      "grossWeight": null,
      "height": null,
      "width": null,
      "length": null
    },
    "loadUserFirstName": "Jane",
    "loadUserLastName": "Doe",
    "loadUserDisplayName": "Driver Jane Doe",
    "startStop": {
      "type": "depot",
      "value": "depot_001"
    },
    "endStop": {
      "type": "depot",
      "value": "depot_001"
    },
    "loadId": "2zj72ewNTv90QskneJLv"
  },
  "status": "OK"
}
```

# Delete Load (Route)

To delete a load you can use a load key (a unique load key generated by you) or load ID (a unique load ID generated by us, visible in response after sending a request to create a load).  After filling in a load key or load ID, you need to send a DELETE request.  Example:

##### **Code Block**

```bash
curl -X 'DELETE' \
  'https://api.geo2.com/v1/load?id=2zj72ewNTv90QskneJLv' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJHTnk5NTk4d3h2VlZSSUJpSnhSVnNvUmg1ajUyIiwidG9rZW5JZCI6Ii1PbXhzeWxWSnNOenlzY2xDUFRTIiwiaWF0IjoxNzcyNzEyMzU2LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6IkdOeTk1OTh3eHZWVlJJQmlKeFJWc29SaDVqNTIiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoyMDg4MDcyMzU2fQ.yF9cf6noL_lFtgf1YQwjYc75D3bC4aY0n5_ZqVx6OZ4'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "status": "OK"
}
```

A load will be deleted from the web-based Hub as well.

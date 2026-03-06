
[API](../API.md)

# Vehicle

- [Introduction](#introduction)
- [Create Vehicle](#create-vehicle)
- [Get Vehicle Data](#get-vehicle-data)
- [Delete Vehicle](#delete-vehicle)

# Introduction

Using Geo2 API, you can:

- Create vehicle (POST /vehicle)
- Get vehicle data (GET /vehicle and GET /vehicles)
- Delete vehicle (DELETE /vehicle)

For each of the actions above we have [**examples of how it works**](https://api.geo2.com/v1/docs/html/#/), which data you need to put in the request body, and what a result would be.

# Create Vehicle

To create a vehicle you need to send a POST request with the following parameters:

|  **Parameters**    |  **Type**      |  **Description**                                                                                                                                                                                                              |  **Required**    |
|:-------------------|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------|
| key                | string         | Unique identifier for the vehicle in this environment, for example, Van 1. It is used for displaying vehicles for route assignment and vehicle check creation.                                                                | Yes              |
| registration       | string         | Vehicle registration number, to help identify the vehicle.  "Number plate", e.g. "AB51 LZW" in the UK.                                                                                                                        | No               |
| description        | string         | Free text notes to describe the vehicle. For example, DAF 2800 ATI DKSE.                                                                                                                                                      | No               |
| depotKey           | string         | Key of the depot to which the vehicle is assigned. Provide a depot key from options defined in Settings → Environment → [Hub: Depots Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings/Hub_%20Depots%20Settings.md). | No               |
| weightCapacity     | unsigned int   | In kg. It is used for calculating the feasibility of a route to which the vehicle is assigned.                                                                                                                                | No               |
| volumeCapacity     | unsigned int   | In m3. It is used for calculating the feasibility of a route to which the vehicle is assigned.                                                                                                                                | No               |
| speedFactor        | unsigned float | Average speed as a multiple of an average car. For realistic route timings, this is typically set below 1 for heavier vehicles, such as vans and lorries. Has to be greater than zero.                                        | Yes              |

Example of a POST request to create a vehicle:

##### **Code Block**

```bash
curl -X 'POST' \
  'https://api.geo2.com/v1/vehicle' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM' \
  -H 'Content-Type: application/json' \
  -d '{
  "key": "truck_001",
  "registration": "ABC123",
  "description": "DAF 2800 ATI DKSE",
  "weightCapacity": 5000,
  "volumeCapacity": 300,
  "speedFactor": 0.7
}'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "status": "OK"
}
```

If a response status is OK, a vehicle is created. It is also shown in the [Hub: Vehicles Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings/Hub_%20Vehicles%20Settings.md) tab in Settings in Hub.

# Get Vehicle Data

To return all vehicles for an environment, you need to send a GET/vehicles request.  Example:

##### **Code Block**

```bash
curl -X 'GET' \
  'https://api.geo2.com/v1/vehicles' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "data": [
    {
      "weightCapacity": 300,
      "volumeCapacity": 70,
      "description": "Renault",
      "registration": "ABC123",
      "speedFactor": 1,
      "emissionFactor": 10,
      "key": "van_001",
      "depotKey": null
    },
    {
      "weightCapacity": 5000,
      "volumeCapacity": 300,
      "description": "DAF 2800 ATI DKSE",
      "registration": "CDE123",
      "speedFactor": 0.7,
      "key": "truck_001",
      "depotKey": null
    }
  ],
  "status": "OK"
}
```

To get data about only one certain vehicle, you need to send a GET/vehicle request.  You can use a vehicle key.  Example:

##### **Code Block**

```bash
curl -X 'GET' \
  'https://api.geo2.com/v1/vehicle?key=VEHICLE_001' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "data": {
    "weightCapacity": 5000,
    "volumeCapacity": 300,
    "description": "DAF 2800 ATI DKSE",
    "registration": "ABC123",
    "speedFactor": 0.7,
    "key": "VEHICLE_001",
    "depotKey": null
  },
  "status": "OK"
}
```

# Delete Vehicle

To delete a vehicle you can use a vehicle key.  After filling in a vehicle key, you need to send a DELETE request.  Example:

##### **Code Block**

```bash
curl -X 'DELETE' \
  'https://api.geo2.com/v1/vehicle?key=VEHICLE_001' \
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

A vehicle will be deleted from Hub as well. 

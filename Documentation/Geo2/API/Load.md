
[API](../API.md)

# Load

Using Geo2 API, you can:

- Create load (POST /load)
- Get load data (GET /load and GET/load/{loadId})
- Delete load (DELETE /load and DELETE/load/{loadId})
- Update load (PATCH /load and PATCH/load/{loadId})

For each of the actions above we have [examples of how it works](https://api.geo2.com/v1/api-docs/), which data you need to put in the request body, and what a result would be.

# Create load

To create a load you need to send a POST request with the next parameters:

|  **Parameters**    |  **Type**           |  **Description**                                                                                                                                                                                            |  **Required**    |
|:-------------------|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------|
| key                | string              | Unique load key within the environment.                                                                                                                                                                     | Yes              |
| status             | string              | Status of a load with one of the next values: <br/><ul><li><p>planning </p></li><li><p>planned  </p></li><li><p>released </p></li><li><p>started </p></li><li><p>completed </p></li></ul>                   | Yes              |
| trip               | unsigned int        | Order of loads. Especially for a load that corresponds to a fixed path/geographical area, multiple loads may occur on the same day, in which case they can be distinguished by trip numbers - 1, 2, 3, etc. | Yes              |
| userID             | uniqueId            | Unique user ID that is assigned to a load as a driver.                                                                                                                                                      | No               |
| depotKey           | string              | Depot key from where the load starts and where ends.                                                                                                                                                        | Yes              |
| vehicleKey         | string              | Vehicle key assigned to the load.                                                                                                                                                                           | No               |
| areaKey            | string              | User-defined geographical region.                                                                                                                                                                           | No               |
| plannedStart       | YYYY-MM-DD HH:mm:ss | Planned start date and time of a load.                                                                                                                                                                      | Yes              |
| plannedEnd         | YYYY-MM-DD HH:mm:ss | Planned end date and time of a load.                                                                                                                                                                        | No               |
| plannedDuration    | unsigned int        | Planned duration of a load in seconds.                                                                                                                                                                      | No               |
| plannedDistance    | unsigned int        | Planned distance of a load in metres.                                                                                                                                                                       | No               |

Example of a POST request to create a load:

##### **Code Block**

```bash
curl -X 'POST' \
  'https://api.geo2.com/v1/load?timezone=Europe%2FLondon' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM' \
  -H 'Content-Type: application/json' \
  -d '{
  "key": "LOAD_2003202312",
  "status": "planned",
  "trip": 1,
  "userId": "mS8tZH1FVkabLOSKKOXCJ6Rj3yo2",
  "depotKey": "test",
  "vehicleKey": "test",
  "areaKey": "Europe",
  "plannedStart": "2022-03-20 19:00:00",
  "plannedEnd": "2022-03-20 19:00:00",
  "plannedDuration": 60,
  "plannedDistance": 1000
}'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "data": {
    "loadId": "Ma8h5HgwarL5FDGfgeCS"
  },
  "status": "OK"
}
```

If a response status is OK, a load is created. It is also shown on the Loads page in the Hub user interface.

# Get load data

To get load data you can use a load key (a unique load key generated by you) or ID (a unique load ID generated by us, visible in response after sending a request to create a load).

After filling in a load key or load ID, you need to send a GET request.  Example:

##### **Code Block**

```bash
curl -X 'GET' \
  'https://api.geo2.com/v1/load?id=Ma8h5HgwarL5FDGfgeCS&timezone=Europe%2FLondon' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "data": {
    "vehicleCheckOnComplete": true,
    "countConsignment": 0,
    "version": 1,
    "vehicleCheckOnStart": true,
    "trip": 1,
    "environmentId": "5SYdrm9xLj42guuh6sVT",
    "plannedDistance": 1000,
    "plannedDuration": 60,
    "key": "LOAD_2003202312",
    "status": "planned",
    "plannedStart": "2022-03-20T19:00:00Z",
    "plannedEnd": "2022-03-20T19:00:00Z",
    "actualStart": null,
    "actualEnd": null,
    "created": "2023-03-20T10:47:46Z",
    "updated": "2023-03-20T10:47:46Z",
    "area": {
      "activeTo": "2023-01-30T16:00:00Z",
      "activeFrom": "2023-01-16T16:00:00Z",
      "name": "Europe"
    },
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
        "personName": "test",
        "phone": {
          "code": "UA",
          "countryCode": "380",
          "localNumber": "684906293"
        },
        "mobile": {
          "code": "",
          "countryCode": "",
          "localNumber": ""
        },
        "email": ""
      },
      "name": "test",
      "key": "test"
    },
    "vehicle": {
      "weightCapacity": 100,
      "volumeCapacity": 100,
      "description": "jfjdnfkndf",
      "registration": "AB5954AK",
      "speedFactor": 100,
      "emissionFactor": 100,
      "key": "test"
    },
    "loadUserFirstName": "Evgeniy",
    "loadUserLastName": "Derkachenko ",
    "loadId": "Ma8h5HgwarL5FDGfgeCS"
  },
  "status": "OK"
}
```

# Delete load

To delete a load you can use a load key or load ID.  After filling in a load key or load ID, you need to send a DELETE request.  Example:

##### **Code Block**

```bash
curl -X 'DELETE' \
  'https://api.geo2.com/v1/load?id=Ma8h5HgwarL5FDGfgeCS' \
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

A load will be deleted from the Hub user interface as well.

# Update load

To partly or fully update a load, you can use a load key or load ID.  After filling in a load key or load ID, you need to send a PATCH request with the parameters you want to change.  Example:

##### **Code Block**

```bash
curl -X 'PATCH' \
  'https://api.geo2.com/v1/load?key=LOAD_200320231&timezone=Europe%2FLondon' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM' \
  -H 'Content-Type: application/json' \
  -d '{
  "key": "LOAD_200320231",
  "status": "released",
  "trip": 1,
  "depotKey": "test",
  "vehicleKey": "test",
  "plannedStart": "2023-03-21 18:00:00",
  "plannedDuration": 60,
  "plannedDistance": 1000
}'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "status": "OK"
}
```


[API](../API.md)

# Vehicle

Using Geo2 API, you can:

- Create vehicle (POST /vehicle)
- Get vehicle data (GET /vehicle and GET /vehicles)
- Delete vehicle (DELETE /vehicle)

For each of the actions above we have [examples of how it works](https://api.geo2.com/v1/api-docs/), which data you need to put in the request body, and what a result would be.

# Create vehicle

To create a vehicle you need to send a POST request with the next parameters:

|  **Parameters**    |  **Type**      |  **Description**                                                                                       |  **Required**    |
|:-------------------|:---------------|:-------------------------------------------------------------------------------------------------------|:-----------------|
| key                | string         | Vehicle key from the environment settings.                                                             | Yes              |
| registration       | string         | Vehicle registration number, to help identify the vehicle.  "Number plate", e.g. "AB51 LZW" in the UK. | No               |
| description        | string         | Free text notes.                                                                                       | No               |
| weightCapacity     | unsigned int   | In kg. Relevant for the feasibility of a load to which the vehicle is assigned.                        | No               |
| volumeCapacity     | unsigned int   | In m3. Relevant for the feasibility of a load to which the vehicle is assigned.                        | No               |
| speedFactor        | unsigned float | Average speed as a multiple of an average car. Has to be greater than zero.                            | Yes              |

Example of a POST request to create a vehicle:

##### **Code Block**

```bash
curl -X 'POST' \
  'https://api.geo2.com/v1/vehicle' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM' \
  -H 'Content-Type: application/json' \
  -d '{
  "key": "VEHICLE_001",
  "registration": "AK1234KA",
  "description": "Volvo",
  "weightCapacity": 5,
  "volumeCapacity": 10,
  "speedFactor": 1.1
}'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "status": "OK"
}
```

If a response status is OK, a vehicle is created. It is also shown in the Vehicles tab in the Environment settings in the Hub user interface.

# Get vehicle data

To return all vehicles for an environment, you need to send a GET /vehicles request.  Example:

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
      "weightCapacity": 100,
      "volumeCapacity": 100,
      "description": "Renault",
      "registration": "AB5954AK",
      "speedFactor": 100,
      "emissionFactor": 100,
      "key": "test",
      "depotKey": null
    },
    {
      "weightCapacity": 5,
      "volumeCapacity": 10,
      "description": "Volvo",
      "registration": "AK1234KA",
      "speedFactor": 1.1,
      "key": "VEHICLE_001",
      "depotKey": null
    }
  ],
  "status": "OK"
}
```

To get data about only one certain vehicle, you need to send a GET /vehicle request.  You can use a vehicle key.  Example:

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
    "weightCapacity": 5,
    "volumeCapacity": 10,
    "description": "Volvo",
    "registration": "AK1234KA",
    "speedFactor": 1.1,
    "key": "VEHICLE_001",
    "depotKey": null
  },
  "status": "OK"
}
```

# Delete vehicle

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

A vehicle will be deleted from the Hub user interface as well. 

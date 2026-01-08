
[API](../API.md)

# Depot

Using Geo2 API, you can:

- Create depot (POST /depot)
- Get depot data (GET /depot and GET /depots)
- Delete load (DELETE /depot)

For each of the actions above we have [examples of how it works](https://api.geo2.com/v1/api-docs/), which data you need to put in the request body, and what a result would be.

# Create depot

To create a depot you need to send a POST request with the next parameters:

|  **Parameters**    |                     |             |  **Type**    |  **Description**                                                                                             |  **Required**    |
|:-------------------|:--------------------|:------------|:-------------|:-------------------------------------------------------------------------------------------------------------|:-----------------|
| key                |                     |             | string       | Depot key from the environment settings.                                                                     | Yes              |
| name               |                     |             | string       | User-definable depot name.                                                                                   | Yes              |
| address            |                     |             |              |                                                                                                              | Yes              |
|                    | name                |             | string       | User-defined description useful if addresses are shown as an address book.                                   | No               |
|                    | company             |             | string       | Depot company name, e.g. "Springboard Applications Ltd".                                                     | No               |
|                    | line1               |             | string       | Depot address line, typically street, e.g. "1000 Great West Road".                                           | Yes              |
|                    | line2               |             | string       |                                                                                                              | No               |
|                    | line3               |             | string       |                                                                                                              | No               |
|                    | city                |             | string       | City of a depot, e.g. "Brentford".                                                                           | Yes              |
|                    | region              |             | string       | Region of a depot.                                                                                           | No               |
|                    | postalCode          |             | string       | Postal code of a depot.                                                                                      | Yes              |
|                    | state               |             | string       | Name of state of a depot.                                                                                    | No               |
|                    | country             |             | string       | Must be set, 2-letter ISO code.  Country of a depot.                                                         | Yes              |
|                    | geoLocation         |             | geopoint     | Geo-location of a geo-coded address.                                                                         | No               |
|                    |                     | latitude    |              |                                                                                                              | No               |
|                    |                     | longtitude  |              |                                                                                                              | No               |
|                    | geoLocationAccuracy |             | unsigned int | Google equivalents: <br/> 1 - ROOFTOP <br/> 2 - RANGE\_INTERPOLATED, GEOMETRIC\_CENTER <br/> 3 - APPROXIMATE | No               |
|                    | placeId             |             | string       | Google Places API Place ID                                                                                   | No               |
| contact            |                     |             |              |                                                                                                              | No               |
|                    | personName          |             | string       | Contact name, e.g. "Andrii Lazariev"                                                                         | No               |
|                    | email               |             | string       | Email address of the depot.                                                                                  | No               |
|                    | phone               |             |              |                                                                                                              |                  |
|                    |                     | code        | string       | Code of country, like "GB".                                                                                  | No               |
|                    |                     | countryCode | unsigned int | E.g. 44 for the GB.                                                                                          | No               |
|                    |                     | localNumber | unsigned int | The remainder of the number, without a leading zero.                                                         | No               |
|                    | mobile              |             |              |                                                                                                              |                  |
|                    |                     | code        | string       | Code of country, like "GB".                                                                                  | No               |
|                    |                     | countryCode | unsigned int | E.g. 44 for the GB.                                                                                          | No               |
|                    |                     | localNumber | unsigned int | The remainder of the number, without a leading zero.                                                         | No               |

Example of a POST request to create a depot:

##### **Code Block**

```bash
curl -X 'POST' \
  'https://api.geo2.com/v1/depot' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM' \
  -H 'Content-Type: application/json' \
  -d '{
  "key": "DEPOT_test",
  "name": "TEST DEPOT",
  "address": {
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
  "contact": {
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
  }
}'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "status": "OK"
}
```

If a response status is OK, a depot is created. It is also shown in the Depots tab in the Environment settings in the Hub user interface.

# Get depot data

To return all depots for an environment, you need to send a GET /depots request.  Example:

##### **Code Block**

```bash
curl -X 'GET' \
  'https://api.geo2.com/v1/depots' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "data": [
    {
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
    {
      "address": {
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
      "contact": {
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
      "name": "TEST DEPOT",
      "key": "DEPOT_test"
    }
  ],
  "status": "OK"
}
```

To get data about only one certain depot, you need to send a GET /depot request.  You can use a depot key.  Example:

##### **Code Block**

```bash
curl -X 'GET' \
  'https://api.geo2.com/v1/depot?key=test' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "data": {
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
  "status": "OK"
}
```

# Delete depot

To delete a depot you can use a depot key.  After filling in a depot key, you need to send a DELETE request.  Example:

##### **Code Block**

```bash
curl -X 'DELETE' \
  'https://api.geo2.com/v1/depot?key=test' \
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

A depot will be deleted from the Hub user interface as well. 

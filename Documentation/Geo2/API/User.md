
[API](../API.md)

# User

Using Geo2 API, you can:

- Get user data (GET /users and GET /user/{userId})

For each of the actions above we have [examples of how it works](https://api.geo2.com/v1/api-docs/), which data you need to put in the request body, and what a result would be.

# Get user data

To return all users for an environment, you need to send a GET request.  Example:

##### **Code Block**

```bash
curl -X 'GET' \
  'https://api.geo2.com/v1/users' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "data": [
    {
      "userId": "microsoft:3ea8ea82-93fd-46ca-9782-68d7318889a3",
      "email": "krystyna.obertynska@balloonone.com",
      "displayName": "Krystyna Obertynska",
      "firstName": "Krystyna",
      "lastName": "Obertynska",
      "locale": "en-GB"
    },
    {
      "userId": "mS8tZH1FVkabLOSKKOXCJ6Rj3yo2",
      "email": "yevheniid@balloonone.com",
      "displayName": "Evgenii",
      "firstName": "Evgeniy",
      "lastName": "Derkachenko ",
      "locale": "en-GB",
      "photoURL": "https://lh3.googleusercontent.com/a/AItbvmlyeae6dU8TMjaOf_5P1JRtdvicQAnhJFL2lK16=s96-c"
    },
    {
      "userId": "2rWfH0qHO7WW3o9GZoCbvJbj8zC2",
      "email": "yevhenii@balloonone.com",
      "displayName": "Yevhenii D",
      "firstName": "ee",
      "lastName": "vv",
      "locale": "en-GB",
      "photoURL": "https://lh3.googleusercontent.com/a/AATXAJzoixzogEZtRXp9hwi1oqyejHr6-URqATfgc1oF=s96-c"
    }
  ],
  "status": "OK"
}
```

To get user data by user ID, you need to use a user ID and send a GET request.  Example:

##### **Code Block**

```bash
curl -X 'GET' \
  'https://api.geo2.com/v1/user/2rWfH0qHO7WW3o9GZoCbvJbj8zC2' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJtaWNyb3NvZnQ6M2VhOGVhODItOTNmZC00NmNhLTk3ODItNjhkNzMxODg4OWEzIiwidG9rZW5JZCI6Ii1OUXlFa1pTWm9Ic3Y5OEg1RlIyIiwiaWF0IjoxNjc5MzAyNzg5LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqLXByby1iYWxkZXYtZ2VvMiIsInN1YiI6Im1pY3Jvc29mdDozZWE4ZWE4Mi05M2ZkLTQ2Y2EtOTc4Mi02OGQ3MzE4ODg5YTMiLCJhdWQiOiJwcmotcHJvLWJhbGRldi1nZW8yIiwiZXhwIjoxOTk0NjYyNzg5fQ.G3LaRxJJJhYlG-m1GHvP9ZgB39Sxh0H98m5AHI2hfDM'
```

Example of a response after sending a request:

##### **Code Block**

```bash
{
  "data": {
    "userId": "2rWfH0qHO7WW3o9GZoCbvJbj8zC2",
    "email": "yevhenii@balloonone.com",
    "displayName": "Yevhenii D",
    "firstName": "ee",
    "lastName": "vv",
    "locale": "en-GB",
    "photoURL": "https://lh3.googleusercontent.com/a/AATXAJzoixzogEZtRXp9hwi1oqyejHr6-URqATfgc1oF=s96-c"
  },
  "status": "OK"
}
```

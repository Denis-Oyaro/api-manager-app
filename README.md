# api-manager-app

An app for fetching data using dependency injection pattern

In this app, there is:

-   ApiManager class which implements ApiCall interface with one method fetchData. This class depends on TodoClient to fetch data
-   TodoClientImpl class which implements TodoClient interface with one method getTodos. This class handles making a rest call to https://jsonplaceholder.typicode.com/todos
-   Domain data model Todo which models the data returned from the rest call
-   A jest unit test for the client that mocks the http call
-   An integration test which validates client is injected properly

# How can I run it?

You can clone it using:

```
$ git clone https://github.com/Denis-Oyaro/api-manager-app.git
```

Install some dependencies:

```
$ cd api-manager-app
$ npm install
```

To run unit and integration tests:

```
$ npm run test
```

To run the app, first compile the TypeScript code into JavaScript code:

```
$ npm run build
```

The generated code is available at the `build` directory.

At this point you are ready to run the app:

```
$ node build/src/main.js
```

You should see in the console the response from the rest call of the form:

```
[
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
    },
    {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
    },
    ...
]
```

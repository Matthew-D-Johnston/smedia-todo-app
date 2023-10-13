## Description

Backend API for Todo application.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Endpoints 

Server is running on localhost port 3000: `http://localhost:3000`

The API exposes the following endpoints:

##### GET /todos

* Get a list of all todos.

##### GET /todos/completed

* Get a list of all completed todos.

##### GET /todos/incomplete

* Get a list of all todos that have not yet been completed.

##### GET /todos/:id

* Get a single todo based on the todo's id.

##### POST /todos

* Create a single todo.
* Must supply a body with the following properties: title (string), description (string), completed (boolean).

##### PUT /todos/:id

* Update a single todo based on a given id.
* Must supply a body, optionally providing the following properties: title (string), description (string), completed (boolean).

##### DELETE /todos/:id

* Delete a single todo based on a given id.

## Database

All data is stored in memory using a `data` object created in a `data.ts` file. In the future, the app should configured to connect to an actual database in order to persist data over the longterm.

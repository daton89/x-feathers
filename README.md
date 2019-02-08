# x-feathers

> 

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/x-feathers; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Changes

### Generated service 'me' ###

We created a new endpoint generating a new service running: 

`feathers generate service``

Name of the service: me
Path of the service: /me
Database connection string: nedb://../data

The generated files:

- src/services/messages/messages.service.js - The service setup file which registers the service in a configure function
- src/services/messages/messages.hooks.js - A file that returns an object with all hooks that should be registered on the service.
- src/models/messages.model.js - The model for our messages. Since we are using NeDB, this will simply instantiate the filesystem database.
- test/services/messages.test.js - A Mocha test for the service. Initially, it only tests that the service exists.

### Generated authentication ###

We added authentication to our application running:

`feathers generate authentication`

Using all defaults options, we set up passport local auth, with a users service stored with NeDB.

#### Create a user ####

We will create a new user with the following data:

```json 
{
  "email": "feathers@example.com",
  "password": "secret"
}
```

Generate the user with: 

`curl 'http://localhost:3030/users/' -H 'Content-Type: application/json' --data-binary '{ "email": "feathers@example.com", "password": "secret" }'``

#### Get a token ####

To create a JWT, we can now post the login information to the authentication service, with the desired strategy (local):

```json
{
  "strategy": "local",
  "email": "feathers@example.com",
  "password": "secret"
}
```

Via CURL:

`curl 'http://localhost:3030/authentication/' -H 'Content-Type: application/json' --data-binary '{ "strategy": "local", "email": "feathers@example.com", "password": "secret" '`

The returned token can then be used to authenticate this specific user, by adding it to the Authorization header of new HTTP requests. Since we will also use Feathers on the client when creating a frontend, we don't have to worry about manually creating and using the token for this guide. For more information for authenticating REST API calls see the [REST client API documentation](https://docs.feathersjs.com/api/client/rest.html#authentication).

#### Securing the me service ####

Let's restrict our messages service to authenticated users.

Add the content below to `me.hooks.js` file to use make auth required to access this route 

```js
const { authenticate } = require('@feathersjs/authentication').hooks;


module.exports = {
  before: {
    all: [ authenticate('jwt') ],
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).

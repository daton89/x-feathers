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

``

feathers generate authentication

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).

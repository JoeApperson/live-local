# Live Local
This is a sample application developed using Angular 4, Bootstrap, and @ngrx/store. It was devised mostly as a learning experience. It is currently undergoing active development, so expect frequent updates.

The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

You can find a usable demo instance of this app [here](http://livlocl.heroku.com)

## API Server

Run `yarn start` to build the app and start the dev API Server. This is a simple Express.js app used to proxy requests to the Live Music Archive. The API server runs on port 8065. It can be overridden by setting the PORT environment variable.  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts are stored in the `dist/` directory.

Run `ng build:prod` to build the project for a production server (-prod -aot). The build artifacts are stored in the `dist/` directory..

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

**NOTE:** The e2e tests are not yet implemented. 

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

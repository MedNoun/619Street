# TunisienStreet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

# Importants Notes for Developers
The architecture is the following :

1 - When adding a new feature ( e.g homepage or product page) add it as a module then then we will handle the imports and the exports all of its internal components should be placed in them ( take as an example the homepage module )

2 - Their is a shared module : this module contains all the shared components that we wanna use in the future in multiple other modules whenever adding a potential shared component add it in that module 

3 - Core modules : separate the configuration layer from the rest of our application. declare all of our features and shared modules inside our CoreModule and then provide the CoreModule to the AppModule.
With a following configuration we will be able to put all of our configuration in the appmodule and keep it clean and readable.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

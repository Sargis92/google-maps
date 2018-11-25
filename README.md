# google-maps
Make a ToGo list by using Google Maps, and let the user save places the user wants to visit.

## Development server
To go toi the project root,
 1) npm install (install node modules)
 2) Run `ng serve` for a dev server. Navigate to `http://127.0.0.1:4200/#`. The app will automatically reload if you change any of the source files.



## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Project description

This project was implemented by angular 7.

In first step create api key for the google maps.
In second step install "@agm/core" module for show the google maps .



In third step have created 3 separate components:

  1) `ToGoList` component (whrer the user could see his selected places)
  2) `MapView` component (where is located google maps)
  3) `Popup`  component (where the user could enter the name of selected place)

 were created filter pipe(for filter list view) and service (share data between components )


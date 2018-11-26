# google-maps
Make a ToGo list by using Google Maps, and let the user save places the user wants to visit.

## Development server
To go to the project root,
 1) npm install (install node modules)
 2) Run `ng serve` for a dev server. Navigate to `http://127.0.0.1:4200/#`. The app will automatically reload if you change any of the source files.



## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Project description

This project was implemented using angular 7.

In the first step api key was created for the google maps.
In the second step "@agm/core" module was installed  in order to show the google maps .



In the third step have created 3 separate components:

  1) `ToGoList` component (where the user can see his selected places)
  2) `MapView` component (where is located google maps)
  3) `Popup`  component (where the user can enter the name of the selected place)

Were created filter pipe(for filtering list view) and service which can share data between components.


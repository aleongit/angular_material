## Introduction

Checkpoints:

- Angular 16 to 17
- Angular Material 16 to 17
- NgModule to standalone



## Requeriments / Prerequisites

🖥️ node -v
→ v20.11.1

🖥️ npm -v
→ 10.5.0



## Dependencies

- angular 17
- ng add @angular/material [17.2.1]



## Get Started

- git clone https://github.com/aleongit/angular_material.git
- cd angular_material
- npm install
- ng serve
- http://localhost:4200/



## Dev environment

- node v20.11.1
- npm 10.5.0
- Visual Studio Code 1.87.0
- git version 2.38.0.windows.1
- Microsoft Windows [Versión 10.0.19045.4046]




## Run

- cd angular_material
- ng serve
- http://localhost:4200/




## Project Steps

- create new angular app `ng new angular_material`
```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS
```
- add material `ng add @angular/material`
```
The package @angular/material@16.2.12 will be installed and executed.
Would you like to proceed? Yes
? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink
? Set up global Angular Material typography styles? Yes
? Include the Angular animations module? Include and enable animations
```


### update to Angular 17 / Material 17
- update node and npm `https://nodejs.org/en`
- update angular `https://update.angular.io/?v=16.0-17.0`
- clean old modules in npm `npm uninstall *`
- update angular CLI `npm install -g @angular/cli`
- or `npm install -g @angular/cli@latest`
- update Angular `ng update`
- `ng update @angular/cdk`
- `ng update @angular/cli`
- `ng update @angular/core`
- `ng update @angular/material`
- check Angular version `ng version`



### test material components
- card `<mat-card>`
- toolbar `<mat-toolbar>`
- menu `<mat-menu>`
- toolbar `<mat-toolbar>`
- icon `<mat-icon>`
- button `<mat-button>`
- slide toggle `<mat-slide-toggle>`
- chips `<mat-chip>`
- tabs `<mat-tab>`
- table `<mat-table>`
- stepper `<mat-stepper>`
- datepicker `<mat-datepicker>`
- autocomplete `<mat-autocomplete>`




## Doc

### Angular Material
- https://material.angular.io/
- https://material.angular.io/guide/getting-started


### Material - Theming
- https://material.angular.io/guide/theming
- https://material.angular.io/guide/theming#defining-a-theme
- https://material.angular.io/guide/theming-your-components
- https://material.angular.io/guide/theming#multiple-themes-in-one-file
- https://stackoverflow.com/questions/46760306/get-angular-material-theme-color-scheme-palette-for-other-elements
- https://octoperf.com/blog/2021/01/08/angular-material-multiple-themes/#prerequisites
- https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md



### Material - Components 
- https://material.angular.io/components/card/overview
- https://material.angular.io/components/menu/overview
- https://material.angular.io/components/toolbar/overview
- https://material.angular.io/components/icon/overview
- https://material.angular.io/components/button/overview
- https://material.angular.io/components/divider/overview
- https://material.angular.io/components/slide-toggle/overview
- https://material.angular.io/components/chips/overview
- https://material.angular.io/components/tabs/overview
- https://material.angular.io/components/table/overview
- https://material.angular.io/components/stepper/overview
- https://material.angular.io/components/datepicker/overview
- https://material.angular.io/components/autocomplete/overview



### Material - Colors / Palettes
- https://m2.material.io/design/color/the-color-system.html
- https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors
- https://fireflysemantics.medium.com/understanding-the-angular-material-define-palette-sass-function-406696e74a98
- https://levelup.gitconnected.com/defining-your-own-theme-in-angular-material-8a4a6ffad400
- https://angular-material.dev/courses/m2-ng-components/m2-ng-components/create-custom-theme


### Material - Icons
- https://developers.google.com/fonts/docs/material_icons
- https://fonts.google.com/icons
- https://medium.com/ngconf/how-to-use-angular-materials-mat-icon-with-local-svg-images-b479134701af



### Material - Typography
- https://material.angular.io/guide/typography
- https://angular-material.dev/courses/m2-ng-components/m2-ng-components/modify-typography
- https://stackoverflow.com/questions/43747518/angular-material-and-changing-fonts



### @media prefers-color-scheme
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme



### CSS Variables
- https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8



### light / dark
- https://www.ditdot.hr/en/dark-mode-website-tutorial
- https://svenbudak.medium.com/how-to-implement-dark-light-mode-in-angular-mateiral-with-prefers-color-scheme-ce3e980e2ea5
- https://blog.angulartraining.com/how-to-implement-a-dark-theme-with-css-and-angular-2cfd98b9455d
- https://pkief.medium.com/automatic-dark-mode-detection-in-angular-material-8342917885a0
- https://dev.to/pahanperera/implement-light-dark-mode-in-angular-42ff
- https://dev.to/facurodriguez/dark-theme-en-angular-con-css-facil-3pp1
- https://codebeyondlimits.com/articles/angular-theming-how-to-create-a-dynamic-theme-switcher-for-light-and-dark-mode
- https://dev.to/pahanperera/implement-light-dark-mode-in-angular-42ff



### Angular - DOCUMENT
- https://dev.to/ngconf/how-to-inject-document-in-angular-3d1m
- https://stackoverflow.com/questions/37521298/how-to-inject-document-in-service
- https://codigoencasa.com/10-funciones-utiles-de-angular-que-probablemente-nunca-hayas-utilizado/



### Angular - ViewChild
- https://angular.io/api/core/ViewChild
- https://www.digitalocean.com/community/tutorials/angular-viewchild-access-component-es
- https://medium.com/@shravanvishwakarma5/how-to-use-viewchild-in-angular-fb020a9db030



### Angular - OnInit
- https://angular.io/api/core/OnInit



### Angular Material Autocomplete with API Example
- https://pkief.medium.com/automatic-dark-mode-detection-in-angular-material-8342917885a0



### How can I solve typescript error 'x' has no initializer and is not definitely assigned in the constructor?
- https://stackoverflow.com/questions/66176831/how-can-i-solve-typescript-error-x-has-no-initializer-and-is-not-definitely-as


### How To Read Local JSON Files In Angular: Different Ways To Do
- https://www.thirdrocktechkno.com/blog/how-to-read-local-json-files-in-angular/



### Angular- RouterLinkActive
- https://angular.io/api/router/RouterLinkActive


### How to setup 404 page in angular routing ?
- https://www.geeksforgeeks.org/how-to-setup-404-page-in-angular-routing/


### How can I console.log the value of a observable?
- https://stackoverflow.com/questions/39044156/how-can-i-console-log-the-value-of-a-observable


### Angular - Enabling the animations module
- https://angular.io/guide/animations


### MatDatePicker start week on monday
- https://stackoverflow.com/questions/45019317/matdatepicker-start-week-on-monday
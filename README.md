## Introduction

TODO:
- Test Angular Material 16



## Requeriments / Prerequisites

🖥️ node -v
→ v18.16.0

🖥️ npm -v
→ 9.8.1



## Dependencies

- angular 16
- ng add @angular/material [16.2.12]



## Get Started

- git clone https://github.com/aleongit/angular_material.git
- cd angular_material
- npm install
- ng serve
- http://localhost:4200/



## Dev environment

- node v18.16.0
- npm 9.8.0
- Visual Studio Code 1.85.1
- git version 2.38.0.windows.1
- Microsoft Windows [Versión 10.0.19045.3803]




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

### test material components
- card `<mat-card>`
- toolbar `<mat-toolbar>`
- menu `<mat-menu>`
- toolbar `<mat-toolbar>`
- icon `<mat-icon>`
- button `<mat-button>`
- slide toggle `<mat-slide-toggle>`


### angular components created
- `ng generate component card`
- `ng generate component card-media`
- `ng generate component menu`
- `ng generate component toolbar`
- `ng generate component icon`
- `ng generate component button`
- `ng generate component slide-toggle`

- `ng generate component navigation`
- `ng generate component theme-switch`



## Doc

### Angular Material
- https://v16.material.angular.io/
- https://v16.material.angular.io/guide/getting-started


### Material - Theming [16]
- https://v16.material.angular.io/guide/theming
- https://v16.material.angular.io/guide/theming#defining-a-theme
- https://v16.material.angular.io/guide/theming-your-components
- https://v16.material.angular.io/guide/theming#multiple-themes-in-one-file
- https://stackoverflow.com/questions/46760306/get-angular-material-theme-color-scheme-palette-for-other-elements
- https://octoperf.com/blog/2021/01/08/angular-material-multiple-themes/#prerequisites
- https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md



### Material - Colours
- https://m2.material.io/design/color/the-color-system.html



### Material - Components 
- https://v16.material.angular.io/components/card/overview
- https://v16.material.angular.io/components/menu/overview
- https://v16.material.angular.io/components/toolbar/overview
- https://v16.material.angular.io/components/icon/overview
- https://v16.material.angular.io/components/button/overview
- https://v16.material.angular.io/components/divider/overview
- https://v16.material.angular.io/components/slide-toggle/overview



### Material - Icons
- https://developers.google.com/fonts/docs/material_icons
- https://fonts.google.com/icons
- https://medium.com/ngconf/how-to-use-angular-materials-mat-icon-with-local-svg-images-b479134701af



### @media prefers-color-scheme
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme


## light / dark
- https://www.ditdot.hr/en/dark-mode-website-tutorial
- https://svenbudak.medium.com/how-to-implement-dark-light-mode-in-angular-mateiral-with-prefers-color-scheme-ce3e980e2ea5
- https://blog.angulartraining.com/how-to-implement-a-dark-theme-with-css-and-angular-2cfd98b9455d
- https://pkief.medium.com/automatic-dark-mode-detection-in-angular-material-8342917885a0
- https://dev.to/pahanperera/implement-light-dark-mode-in-angular-42ff
- https://dev.to/facurodriguez/dark-theme-en-angular-con-css-facil-3pp1
- https://codebeyondlimits.com/articles/angular-theming-how-to-create-a-dynamic-theme-switcher-for-light-and-dark-mode
- https://dev.to/pahanperera/implement-light-dark-mode-in-angular-42ff



## CSS Variables
- https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8



## DOCUMENT
- https://dev.to/ngconf/how-to-inject-document-in-angular-3d1m
- https://stackoverflow.com/questions/37521298/how-to-inject-document-in-service
- https://codigoencasa.com/10-funciones-utiles-de-angular-que-probablemente-nunca-hayas-utilizado/



## Angular Material Autocomplete with API Example
- https://pkief.medium.com/automatic-dark-mode-detection-in-angular-material-8342917885a0
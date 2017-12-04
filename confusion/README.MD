#SETUP
## Generate new project 
### using Angular cli
* version check
```
ng --version
ng -v
```

```
ng new projectName --style=scss
```
1. Run npm install
2. test app
    ```
    ng serve --open
    ```
3. Install additional dependencies
```
npm install @angular/material@2.0.0-beta.12 --save
npm install @angular/cdk@2.0.0-beta.12 --save
npm install --save @angular/animations 
npm install --save hammerjs 
npm install --save @angular/flex-layout@latest 
```


4. ENTRY POINT FOR THE APP
    * src/app.component.ts is the entry point file 

    5. Create a new module.ts file to import material components
    Prior to Angular Material 2 Beta 3, there was a global MaterialModule that could be imported in the app module to make the components available. The downside to that is that tree-shaking is not efficient enough to remove all the unused code.

MaterialModule has therefore been deprecated in favor of defining a project-specific custom material module where you import and export only the needed components. Here’s what our module can look like:


## Generating new components with ANGULAR CLI
```
ng generate component componentName
 * ng generate component componentName
 or just ...
 * ng g component componentName
```
    * note if there is more than one module in the app folder then you will specify the module name to import to.
```
ng generate component componentName --module=app.module
```
*  anotehr option is to add a new folder, like app/shared and paste your material.module.ts in it.

## creating  new components
### Component
1. Import Dependencies
    * When creating a new component, it needs the dependency  Component the dependency from @angular/core
```
import { Component} from '@angular/core
```
2. Export Component
    * Export the component name 
```
export class MenuComponent implements OnInit
```
### Register Component
1. Then register/import the component in the main module 'app.module.ts.
```
import { NewComponent } from './new/new.component';
```
2. It also needs to be declared in @NgModule
```
@NgModule({
  declarations: [
    ...
    NewComponent,
    ...
  ],...
```
3. Now we can drop our component where needed
## creating a new class in a module
1. create a top level variable in the component
```
const DISHES: Dish[] = [
  {
    name: 'Uthappizza',
    image: '/assets/images/uthappizza.png',
    category: 'mains',
    price: '4.99',
  },{name:......}
]
```
2. export the variable in the line 'export class nameComponent implements OnInit{}'
```
export class MenuComponent implements OnInit {
  dishes: Dish[] = DISHES;
  ...
}
```

## Creating shared classes 
1. create a new file fileName.ts in the shared folder
2. Remember that Typescript enforces declaring var and property types. 
```
export class Dish {
    name: string;
    image: string;
    category: string;
    label:string;
    price:string;
    description:string;
}
```
3. Now we can import class into another component .
```
import { Dish } from '../shared/dish';
```

## DataBinding in Angular


##  Dependency Injection
* DI involves four roles
1. The service
2. The client
3. The interfaces
4. The injector

* THe Angular injector subsystem is responsible for 
1. creating components
2. resolving their dependencies
3. providing them to other components

## Creating Services
1. ng generate service services/dish
2. in name.service.ts file. create appropriate methods
```
export class DishService {...
  getDishes(): Dish[]{
    return DISHES;
  }
..
}
```
3. inject the service in app.module.ts providers[]
```
providers: [DishService],
'''
```
4. Now bring in the service to the component
```
import {DishService} from '../services/dish'
```
5. Then inject the service in the component constructor to make it available to the component
```
constructor(private dishService:DishService) { }
```
6. fetch information on init
```
ngOnInit() { 
    this.dishes = this.dishService.getDishes();
  }
```

## ANGULAR ROUTING
* Create new module for routing
* Create paths and routes for components
* Config the routing module
* Configure app.module.ts 
* Use routing in our root and templates

### CREATE ROUTING MODULE
1. Create a new module that will handle routing for our app
```
ng g module app-routing
```
### CREATE ROUTES FOR COMPONENTS>>routes.ts
1. Create a new file in our app-routing folder called routes.ts

2. Import needed dependency for configuring routes
```
import { Routes } from '@angular/router';
```
3. Bring in the components that we will create the routes for
```
import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
etc.....
```
3. Now create paths and export the routes that will be used for these components. Additionally we will create a default route for when no url or an incorrect one is entered
```
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
];
```
### CONFIG ROUTING MODULE>> app-routing.module.ts 

1. import needed dependencies 
```
  import { RouterModule, Routes} from '@angular/router';
```
2. import our routes
```
import { routes } from './routes'
```
3. add RouterModule to our decorator 
```
@NgModule({
  imports: [
    RouterModule
  ]
```
4. configure the RouterModule.forRoot() to use our routes. RouterModule takes a parameter for the forRoot method. we will pass in the routes configuration. 
```
   RouterModule.forRoot(routes)
   ], 
 ...
```

5. create and export or our RouterModule so our app.module.ts can use it . We use the exports property in our @NGmoudle decoratorNow we can import the routes to our app.module.ts
```
  RouterModule.forRoot(routes)
   ], 
  exports: [ RouterModule ], 
```

### CONFIGURE app.module.ts
1. Import the routing module
```
import { AppRoutingModule } from './app-routing/app-routing.module';
```
2. Add it to the decorator
```
@NgModule({
  ...
    imports: [
    BrowserModule,
    ...,
    AppRoutingModule
    ]
```

### Configure app.component.html
1. Use the router module provided directive called <router-outlet> this will be where the corresponding view gets inserted. This would be similar to our ui-view="content" in angular 1.6.6

2. 
```
<app-header></app-header>
<router-outlet></router-outlet>
<app-footer></app-footer>
```
Note: the default view is home so we should expect /home

### How to change views
1. we will use an attribute called routerLink that will let us change the routes

2. In the header navbar will add router link to the <a> tag so when clicked they will change the view appropriately.
```
<a mat-button routerLink="/home"><span class="fa fa-home fa-lg"></span> Home</a>
```
Now when that link is clicked it will change the view.
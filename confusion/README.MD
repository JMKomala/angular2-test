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

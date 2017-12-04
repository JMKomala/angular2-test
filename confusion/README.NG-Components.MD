
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
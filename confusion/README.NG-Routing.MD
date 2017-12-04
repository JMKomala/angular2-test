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
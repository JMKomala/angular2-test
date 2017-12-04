import { Routes } from '@angular/router';

//where are the list of all the components in the app.module
//import the components that you will route to.

import { MenuComponent } from '../menu/menu.component';
import { DishDetailComponent } from '../dish-detail/dish-detail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

//then export the Routes. when you specify the routes you speficify the path.
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },//default URL when no path is provided
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contactus', component: ContactComponent }
];
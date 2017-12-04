import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
   ], //RouterModule takes a parameter for the forRoot method. we will pass in the routes configuration.
  exports: [ RouterModule ], //Export the router module to our app module. So it can use it. We use the exports property in our @NGmoudle decorator
  declarations: []
})
export class AppRoutingModule { }
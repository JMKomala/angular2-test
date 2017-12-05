import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatCheckboxModule,
  MatGridListModule,
  MatDialogModule,
  MatInputModule,
  MatSlideToggleModule,
  MatOptionModule,
  MatSelectModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    MatSlideToggleModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    MatSlideToggleModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule
    
    
  ]
})
export class MaterialModule { }
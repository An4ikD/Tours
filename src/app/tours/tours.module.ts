import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { ToursComponent } from './tours.component';
import { TourComponent } from './tour/tour.component';
import { ToursListComponent } from './tours-list/tours-list.component';

import { TourService } from './shared/tour.service';

import { ToursRoutingModule } from './tours-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ToursRoutingModule
  ],
  declarations: [
    ToursComponent,
    TourComponent,
    ToursListComponent
  ],
  providers: [ TourService ]
})
export class ToursModule { }

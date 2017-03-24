import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToursListComponent } from './tours-list/tours-list.component';
import { TourComponent } from './tour/tour.component';
import { ToursComponent } from './tours.component';

const toursRoutes: Routes = [
  { 
    path: '',
    component: ToursComponent,
    children: [
      {
        path: '',
        component: ToursListComponent,
      },
      {
        path: ':id',
        component: TourComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(toursRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ToursRoutingModule {}
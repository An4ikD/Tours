import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToursComponent } from './tours/tours.component';

const routes: Routes = [
  { path: '', redirectTo: '/tours', pathMatch: 'full' },
  { path: 'tours',  component: ToursComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
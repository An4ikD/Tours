import { NgModule }             from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ToursComponent } from './tours/tours.component';
import { TourComponent } from './tours/tour/tour.component';

const appRoutes: Routes = [
  { path: 'tours', loadChildren: 'app/tours/tours.module#ToursModule' },
  { path: '', redirectTo: '/tours', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
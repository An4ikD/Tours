import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { SharedService } from './shared/shared.service';

import { ToursModule } from './tours/tours.module';

import { AppComponent } from './app.component';

var Backendless = require('backendless');
var APP_ID:string = 'A19DE8C5-C6B2-3E7C-FF77-751ED56B8500';
var APP_KEY:string = '7381862F-44DB-33B8-FFFC-56909F58D200';
var APP_VER:string = 'v1';

Backendless.initApp(APP_ID, APP_KEY, APP_VER);
Backendless.enablePromises();

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

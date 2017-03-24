import { Injectable } from '@angular/core';

import { Category } from './category.model';
import { Location } from './location.model';

var Backendless = require('backendless');

@Injectable()
export class SharedService {

  constructor() { }
  
  getCategories(): Promise<Object> {
    return Backendless.Persistence.of(Category).find();
  }

  getCategory(id: string): Promise<Category> {
    return Backendless.Persistence.of(Category).findById(id);
  }
  
  getLocations(): Promise<Object> {
    return Backendless.Persistence.of(Location).find();
  }

  getLocation(id: string): Promise<Location> {
    return Backendless.Persistence.of(Location).findById(id);
  }
}

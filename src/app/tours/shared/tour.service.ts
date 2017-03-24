import { Injectable } from '@angular/core';

import { Tour } from './tour.model';
import { TourPhoto } from './tour-photo.model';
import { TOURS } from './mock-tours';

var Backendless = require('backendless');

@Injectable()
export class TourService {
  
  getTours(): Promise<Object> {
    return Backendless.Persistence.of(Tour).find();
  }
  
  getTour(id: string): Promise<Tour> {
    return Backendless.Persistence.of(Tour).findById(id);
  }
  
  getTourPhotos(id: string): Promise<Object> {
    var query = new Backendless.DataQuery();
    return Backendless.Persistence.of(TourPhoto).find({
      condition: "tour.objectId='" + id + "'"
    });
  }
}

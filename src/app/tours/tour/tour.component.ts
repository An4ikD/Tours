import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Tour } from '../shared/tour.model';
import { TourPhoto } from '../shared/tour-photo.model';
import { TourService } from '../shared/tour.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  tour: Tour;
  tours: Tour[];
  tour_photos: TourPhoto[];
  
  constructor(
    private tourService: TourService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.tourService.getTour(params['id']))
      .subscribe((tour) => {
        this.tour = tour;
        this.tourService.getTourPhotos(tour.objectId)
          .then((object) => { 
            this.tour_photos = object['data']; console.log(this.tour_photos);
          });
      });
    this.tourService.getTours()
                    .then((object) => this.tours = object['data'].slice(1, 3));
  }
  
}

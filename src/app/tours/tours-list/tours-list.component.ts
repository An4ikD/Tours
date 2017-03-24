import { Component, OnInit } from '@angular/core';

import { Tour } from '../shared/tour.model';
import { TourService } from '../shared/tour.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.scss']
})
export class ToursListComponent implements OnInit {

  selected_category: string;
  tours_collection: Object;
  tours: Tour[] = [];
  
  constructor(
    private tourService: TourService,
  ) { }

  ngOnInit(): void { 
    this.tourService.getTours()
                    .then((object) => { this.tours_collection = object; this.tours = object['data']; console.log(this.tours[0]) })
                    .catch(err => console.log(err));
  }
}

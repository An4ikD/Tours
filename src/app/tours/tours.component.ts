import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../shared/category.model';
import { Location } from '../shared/location.model';

import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {

  constructor(private router: Router, private sharedService: SharedService) { }
  
  categories: Category[] = [];
  
  locations: Location[] = [];

  ngOnInit() {
    this.sharedService.getCategories()
                      .then((object) => this.categories = object['data']);
    this.sharedService.getLocations()
                      .then((object) => this.locations = object['data']);
  }

}

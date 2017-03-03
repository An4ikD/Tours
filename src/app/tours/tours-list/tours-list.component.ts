import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.scss']
})
export class ToursListComponent implements OnInit {

  selected_category: string;
  categories = [
    {id: 0, name: "Экстрим"},
    {id: 1, name: "Семейный"},
    {id: 2, name: "Детский"}
  ];
  
  locations = [
    {id: 0, name: "Алматы"},
    {id: 1, name: "Каркаралинск"},
    {id: 2, name: "Боровое"},
    {id: 3, name: "Балхаш"},
  ]
  
  constructor() { }

  ngOnInit() {
  }

}

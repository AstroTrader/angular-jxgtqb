import { Component, OnInit } from '@angular/core';
import {Car} from '../car.ts'

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  car: Car = {
    id: 1,
    name: 'Toyota'
  };
  constructor() { }

  ngOnInit() {
  }

}
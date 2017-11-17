import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarsComponent {
  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bently'];
  dates = [
    new Date(2015, 3, 4).toDateString(),
    new Date(2016, 6, 10).toDateString(),
    new Date(2017, 1, 2).toDateString(),
    new Date(2017, 2, 2).toDateString(),
  ];

  constructor () {}

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
}

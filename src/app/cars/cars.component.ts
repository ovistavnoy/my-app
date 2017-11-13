import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarsComponent {

  addCarStatus : string = '';
  inputText : string = '';

  constructor () {

  }

  addCar() {
    this.addCarStatus = 'Машина добавлена!';
  }

  onKeyUp(event) {
    if(event.code === "Enter") {
      this.inputText = event.target.value;
    }

  }

}

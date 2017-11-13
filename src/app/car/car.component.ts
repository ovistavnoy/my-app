import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarComponent {
  carName: string = 'Ford';
  carYear: number = 2015;

  getName(): string {
    return this.carName;
  }
}

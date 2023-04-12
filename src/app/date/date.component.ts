import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  minDate : Date;

  constructor(){
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getUTCMonth() + 1;
    const currentDay = new Date().getUTCDate() - 1;

    this.minDate = new Date(currentYear, currentMonth, currentDay);
  }
}

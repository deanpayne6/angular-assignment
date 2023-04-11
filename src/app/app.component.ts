import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface Department {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  minDate : Date;

  constructor(){
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getUTCMonth() + 1;
    const currentDay = new Date().getUTCDate() - 1;

    this.minDate = new Date(currentYear, currentMonth, currentDay);
  }

  departments: Department[] = [
    {value: 'HR-0', viewValue: 'Human Resources'},
    {value: 'SD-1', viewValue: 'Software Development'},
    {value: 'M-2', viewValue: 'Marketing'},
  ];

  staffRequest = new FormGroup({
    userDate : new FormControl(''),
    userJobTitle : new FormControl(''),
    userDepartment : new FormControl(''),
    userHiringManagerName : new FormControl(''),
    userHiringMangerEmail : new FormControl(''),
  })
}

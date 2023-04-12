import { Component, Output, EventEmitter } from '@angular/core';

interface Department {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  departments: Department[] = [
    {value: 'HR-1', viewValue: 'Human Resources'},
    {value: 'SD-2', viewValue: 'Software Development'},
    {value: 'M-3', viewValue: 'Marketing'},
  ];

}

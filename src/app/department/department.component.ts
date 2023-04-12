import { Component } from '@angular/core';

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
    {value: 'HR-0', viewValue: 'Human Resources'},
    {value: 'SD-1', viewValue: 'Software Development'},
    {value: 'M-2', viewValue: 'Marketing'},
  ];
}

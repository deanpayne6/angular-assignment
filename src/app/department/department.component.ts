import { Component, Input, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  @Input() staffRequest: FormGroup;

  departments: Department[] = [
    {value: 'Human Resources', viewValue: 'Human Resources'},
    {value: 'Software Development', viewValue: 'Software Development'},
    {value: 'Marketing', viewValue: 'Marketing'},
  ];

}

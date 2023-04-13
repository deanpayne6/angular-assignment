import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-staff-request-form',
  templateUrl: './staff-request-form.component.html',
  styleUrls: ['./staff-request-form.component.css'],
})
export class StaffRequestFormComponent implements OnInit{
  
  userDataArray: any[] = [];

  staffRequest: FormGroup;

  constructor(private fb: FormBuilder){ }

  ngOnInit(): void {
    this.staffRequest = this.fb.group({
      userDate: [''],
      userJobTitle: [''],
      userDepartment: [''],
      userHiringManagerName: [''],
      userHiringManagerEmail: ['']
    });

    this.staffRequest.valueChanges.subscribe(newVal => console.log(newVal))
  }
  
  onSubmit(){

    this.userDataArray.push({
      userDate: this.staffRequest.value.userDate, 
      userJobTitle: this.staffRequest.value.userJobTitle,
      userDepartment: this.staffRequest.value.userDepartment,
      userHiringManagerName: this.staffRequest.value.userHiringManagerName,
      userHiringManagerEmail: this.staffRequest.value.userHiringManagerEmail
    });

    console.log(this.userDataArray);

  }
}

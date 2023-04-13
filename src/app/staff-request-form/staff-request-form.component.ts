import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-staff-request-form',
  templateUrl: './staff-request-form.component.html',
  styleUrls: ['./staff-request-form.component.css'],
})
export class StaffRequestFormComponent implements OnInit{
  
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
    console.warn(this.staffRequest.value);
  }
}

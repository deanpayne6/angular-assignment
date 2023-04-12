import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-staff-request-form',
  templateUrl: './staff-request-form.component.html',
  styleUrls: ['./staff-request-form.component.css'],
})
export class StaffRequestFormComponent implements OnInit{
  
  ngOnInit(): void {
    
  }
  // staffRequest = new FormGroup({
  //   userDate : new FormControl(''),
  //   userJobTitle : new FormControl(''),
  //   userDepartment : new FormControl(''),
  //   userHiringManagerName : new FormControl(''),
  //   userHiringManagerEmail : new FormControl(''),
  // })
  
  onSubmit(){
    
  }
}

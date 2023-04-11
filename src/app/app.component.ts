import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  staffRequest = new FormGroup({
    todaysDate: new FormControl(''),
    jobTitle: new FormControl(''),
    department: new FormControl(''),
    hiringManagerName: new FormControl(''),
    hiringManagerEmail: new FormControl('')
  })
}

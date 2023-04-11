import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  
  
  //getting the current date to set as the MIN value of the date selector
  TodayDate : any;
  minDate : any;
  date1 = new Date();

  // variables to store current year, month, day
  currentYear = this.date1.getUTCFullYear();
  currentMonth = this.date1.getUTCMonth() + 1;
  currentDay = this.date1.getUTCDate() - 1;

  FinalMonth: any;
  FinalDay: any;

  date = new FormControl('');
  

  //initializing to format todays current date correctly
  ngOnInit() : void {
    if(this.currentMonth < 10){
      this.FinalMonth = "0" + this.currentMonth;
    }else{
      this.FinalMonth = this.currentMonth;
    }

    if(this.currentDay < 10){
      this.FinalDay ="0" + this.currentDay;
    }else{
      this.FinalDay = this.currentDay;
    }

    this.TodayDate = this.currentYear + "-" + this.FinalMonth + "-" + this.FinalDay;
    console.log(this.TodayDate);
    this.minDate = this.TodayDate;
  }
}

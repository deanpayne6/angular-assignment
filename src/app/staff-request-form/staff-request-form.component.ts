import { Component } from '@angular/core';
import { DateComponent } from '../date/date.component';
import { DepartmentComponent } from '../department/department.component';
import { JobTitleComponent } from '../job-title/job-title.component';
import { HiringManagerEmailComponent } from '../hiring-manager-email/hiring-manager-email.component';
import { HiringManagerNameComponent } from '../hiring-manager-name/hiring-manager-name.component';
import { SubmitButtonComponent } from '../submit-button/submit-button.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-staff-request-form',
  templateUrl: './staff-request-form.component.html',
  styleUrls: ['./staff-request-form.component.css'],
})
export class StaffRequestFormComponent {
  staffRequest = new FormGroup({
    userDate : new FormControl(''),
    userJobTitle : new FormControl(''),
    userDepartment : new FormControl(''),
    userHiringManagerName : new FormControl(''),
    userHiringManagerEmail : new FormControl(''),
  })

  staffData: any[] = [];
  
  onSubmit(){
    const userDate1 = this.staffRequest.get('userDate')?.value;
    const userJobTitle1 = this.staffRequest.get('userJobTitle')?.value;
    const userDepartment1 = this.staffRequest.get('userDepartment')?.value;
    const userHiringManagerName1 = this.staffRequest.get('userHiringManagerName')?.value;
    const userHiringManagerEmail1 = this.staffRequest.get('userHiringManagerEmail')?.value;

    this.staffData.push({ userDate1, userJobTitle1, userDepartment1, userHiringManagerName1, userHiringManagerEmail1 });

    this.staffRequest.reset();
  }
}

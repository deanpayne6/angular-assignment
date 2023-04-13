import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { DateComponent } from './date/date.component';
import { JobTitleComponent } from './job-title/job-title.component';
import { DepartmentComponent } from './department/department.component';
import { HiringManagerNameComponent } from './hiring-manager-name/hiring-manager-name.component';
import { HiringManagerEmailComponent } from './hiring-manager-email/hiring-manager-email.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StaffRequestFormComponent } from './staff-request-form/staff-request-form.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    JobTitleComponent,
    DepartmentComponent,
    HiringManagerNameComponent,
    HiringManagerEmailComponent,
    SubmitButtonComponent,
    ToolbarComponent,
    StaffRequestFormComponent,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

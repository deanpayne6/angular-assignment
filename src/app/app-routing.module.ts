import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffRequestFormComponent } from './staff-request-form/staff-request-form.component';

const routes: Routes = [
  {path: '', component: StaffRequestFormComponent }, // Define default route to ParentComponent
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

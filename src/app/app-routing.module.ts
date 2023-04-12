import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StaffRequestFormComponent } from './staff-request-form/staff-request-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'staffRequestForm', pathMatch: 'full' }, // Define default route to ParentComponent
  {path: 'staffRequestForm', component: StaffRequestFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

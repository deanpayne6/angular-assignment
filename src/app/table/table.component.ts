import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { TableData } from '../table-data.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  displayedColumns: string[] = ['Date', 'Job Title', 'Department', 'Hiring Manager Name', 'Hiring Manager Email'];

  
  @Input() userDataArray: any[];

  userDate: Date;
  userJobTitle: string;
  userDepartment: string;
  userHiringManagerName: string;
  userHiringManagerEmail: string;

  
}

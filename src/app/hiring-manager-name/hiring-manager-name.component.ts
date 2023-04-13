import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hiring-manager-name',
  templateUrl: './hiring-manager-name.component.html',
  styleUrls: ['./hiring-manager-name.component.css']
})
export class HiringManagerNameComponent {
  @Input() staffRequest: FormGroup;
}

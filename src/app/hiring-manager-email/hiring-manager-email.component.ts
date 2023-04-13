import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hiring-manager-email',
  templateUrl: './hiring-manager-email.component.html',
  styleUrls: ['./hiring-manager-email.component.css']
})
export class HiringManagerEmailComponent {
  @Input() staffRequest: FormGroup
}

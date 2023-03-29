import { Component } from '@angular/core';
import { GlobalServviceService } from '../global-servvice.service';
@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css'],
})
export class CreateaccountComponent {
  constructor(public image: GlobalServviceService) {}
}

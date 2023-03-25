import { Component } from '@angular/core';
import { GlobalServviceService } from '../global-servvice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(public pdp:GlobalServviceService){}

}

import { Component } from '@angular/core';
import { GlobalServviceService } from '../global-servvice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public image: GlobalServviceService) {}
}

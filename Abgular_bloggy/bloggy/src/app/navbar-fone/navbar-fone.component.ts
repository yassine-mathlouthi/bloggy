import { Component } from '@angular/core';
import { GlobalServviceService } from '../global-servvice.service';

@Component({
  selector: 'app-navbar-fone',
  templateUrl: './navbar-fone.component.html',
  styleUrls: ['./navbar-fone.component.css']
})
export class NavbarFoneComponent {
  constructor(public res:GlobalServviceService){}
}

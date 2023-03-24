import { Component } from '@angular/core';
import { GlobalServviceService } from '../global-servvice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  
  constructor(public logo:GlobalServviceService){}
}

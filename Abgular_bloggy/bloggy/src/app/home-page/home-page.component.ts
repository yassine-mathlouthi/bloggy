import { Component } from '@angular/core';
import { GlobalServviceService } from '../global-servvice.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(public logo:GlobalServviceService){}
}

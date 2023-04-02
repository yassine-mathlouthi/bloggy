import { Component } from '@angular/core';
import { GlobalServviceService } from '../global-servvice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(public logo:GlobalServviceService ){}
}

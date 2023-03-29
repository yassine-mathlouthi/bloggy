import { Component } from '@angular/core';
import { GlobalServviceService } from '../global-servvice.service';

@Component({
  selector: 'app-bloggylogo',
  templateUrl: './bloggylogo.component.html',
  styleUrls: ['./bloggylogo.component.css'],
})
export class BloggylogoComponent {
  constructor(public image: GlobalServviceService) {}
}

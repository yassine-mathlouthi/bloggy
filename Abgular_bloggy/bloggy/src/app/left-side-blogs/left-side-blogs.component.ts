import { Component } from '@angular/core';
import { GlobalServviceService } from '../global-servvice.service';

@Component({
  selector: 'app-left-side-blogs',
  templateUrl: './left-side-blogs.component.html',
  styleUrls: ['./left-side-blogs.component.css']
})
export class LeftSideBlogsComponent {
  constructor(public logo:GlobalServviceService){}

}

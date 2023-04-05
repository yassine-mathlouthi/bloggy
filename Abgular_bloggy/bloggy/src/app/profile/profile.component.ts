import { GlobalServviceService } from '../global-servvice.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  username: string = '';
  ngOnInit() {
    this.username = localStorage.getItem('username') ?? '';
    console.log('tesst', this.username);
  }
  constructor(public pdp: GlobalServviceService, private router: Router) {}
}

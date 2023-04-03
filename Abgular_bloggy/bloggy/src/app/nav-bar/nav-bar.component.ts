import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { GlobalServviceService } from '../global-servvice.service';
import { CheckuserService } from '../checkuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, OnChanges {
  username: string = '';

  constructor(
    public logo: GlobalServviceService,
    public checked: CheckuserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.username = localStorage.getItem('username') ?? '';
    console.log('tesst', this.username);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['username']) {
      // Handle the change in the username property here
    }
  }

  isLoggedIn(): boolean {
    return this.checked.isSessionActive();
  }

  getUsername(): string {
    const username = localStorage.getItem('username');
    console.log('teeeeest', username);
    return username ? username : '';
  }
  use = this.logo.username;
}

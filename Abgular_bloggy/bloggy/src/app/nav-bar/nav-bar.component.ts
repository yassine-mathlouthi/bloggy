import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { GlobalServviceService } from '../global-servvice.service';
import { CheckuserService } from '../checkuser.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

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
    private router: Router,
    private http: HttpClient,
    private checkuserService: CheckuserService
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

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.checkuserService.startSessionTimeout(1, () => {
      // This code will run after 1 second
      console.log('Session ended');
      // Do any other necessary cleanup here
      this.router.navigate(['']);
    });
  }
}

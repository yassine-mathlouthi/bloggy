import { Component, OnInit } from '@angular/core';
import { GlobalServviceService } from '../global-servvice.service';
import { CheckuserService } from '../checkuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(
    public logo: GlobalServviceService,
    public checked: CheckuserService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.checked.isSessionActive()) {
      this.router.navigate(['']);
    } else {
      this.checked.startSessionTimeout(5, () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      });
    }
  }
}

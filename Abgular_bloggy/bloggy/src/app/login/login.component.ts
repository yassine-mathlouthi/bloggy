import { Component } from '@angular/core';
import { GlobalServviceService } from '../global-servvice.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CheckuserService } from '../checkuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  data2 = {
    user: '',
    cin: '',
    pass: '',
  };
  userExists: boolean = true;

  constructor(
    private router: Router,
    public image: GlobalServviceService,
    private http: HttpClient,
    public checked: CheckuserService,
    private globalService: GlobalServviceService
  ) {}

  check() {
    const url = 'http://localhost/bloggy/checkuser.php';
    const params = new HttpParams()
      .set('name', this.data2.user.toString())
      .append('cin', this.data2.cin.toString())
      .append('pass', this.data2.pass.toString());

    this.http.get<boolean>(url, { params }).subscribe((response) => {
      if (response) {
        // User exists
        console.log(response);
        console.log('User exists');
        console.log(this.data2.user);

        localStorage.setItem('username', this.data2.user);
        console.log('Username saved:', this.data2.user);
        this.globalService.username = this.data2.user;

        localStorage.setItem('token', 'valid_token'); // Store the session token in local storage
        this.checked.startSessionTimeout(600, () => {
          localStorage.setItem('username', this.data2.user);
          localStorage.setItem('cin', this.data2.cin);
          this.globalService.username = this.data2.user;
          console.log('Username saved:', this.globalService.username);
          this.router.navigate(['']);
          localStorage.removeItem('token'); // Remove the session token from local storage when the session times out
        });
        this.router.navigate(['']);
      } else {
        // User does not exist
        console.log(response);
        console.log('User does not exist');
        this.userExists = false;
      }
    });
  }

  clearError() {
    this.userExists = true;
  }
}

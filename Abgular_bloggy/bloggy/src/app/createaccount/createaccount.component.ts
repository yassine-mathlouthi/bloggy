import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { GlobalServviceService } from '../global-servvice.service';
import { shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CheckuserService } from '../checkuser.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css'],
})
export class CreateaccountComponent {
  data = {
    user: '',
    pass: '',
    cin: '',
    age: '',
  };
  ch = this.data.user;
  message = '';
  test = false;

  isValidEmail(email: string): boolean {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  ajout() {
    if (!this.isValidEmail(this.data.cin)) {
      this.test = true;
      this.message = 'Invalid email format';
      return;
    }
    var url = 'http://localhost/bloggy/adduser.php';

    const params = new HttpParams()
      .set('name', this.data.user.toString())
      .append('pass', this.data.pass.toString())
      .append('cin', this.data.cin.toString())
      .append('age', this.data.age.toString());

    console.log('Sending HTTP POST request...');
    console.log('Params:', params.toString()); // Log the request parameters

    this.http
      .post(url, {}, { params })
      .pipe(shareReplay())
      .subscribe(
        (response) => {
          const jsonStr = JSON.stringify(response);
          const jsonObj = JSON.parse(jsonStr);
          console.log('Response:', jsonObj); // Log the response object
          localStorage.setItem('username', this.data.user);
          localStorage.setItem('cin', this.data.cin);
          /*console.log('edhiya el cin ya aziz', localStorage.getItem('cin'));*/
          if (jsonObj === 1) {
            this.test = true;
            this.message = 'address mail already used';
          } else {
            this.globalService.username = this.data.user;
            localStorage.setItem('token', 'valid_token'); // Store the session token in local storage
            this.checked.startSessionTimeout(600, () => {
              localStorage.setItem('username', this.data.user);
              this.globalService.username = this.data.user;
              console.log('Username saved:', this.globalService.username);
            });
            this.router.navigate(['']);
          }
        },
        (error) => {
          console.log('HTTP POST error:', error); // Log any errors
        }
      );
  }
  clearError() {
    this.message = '';
  }
  constructor(
    public image: GlobalServviceService,
    private http: HttpClient,
    private router: Router,
    public checked: CheckuserService,
    private globalService: GlobalServviceService
  ) {}
}

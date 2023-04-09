import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdduserService } from '../adduser.service';
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

  ajout() {
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
          if (jsonObj === 1) {
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

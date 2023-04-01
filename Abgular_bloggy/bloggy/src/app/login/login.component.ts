import { Component } from '@angular/core';
import { GlobalServviceService } from '../global-servvice.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CheckuserService } from '../checkuser.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  data2 = {
    user: '',
    pass: '',
  };

  check() {
    var url = 'http://localhost/bloggy/checkuser.php';

    const params = new HttpParams()
      .set('name', this.data2.user.toString())
      .append('pass', this.data2.pass.toString());

    console.log(this.data2.user);

    this.http.get(url, { params }).subscribe((response) => {
      console.log(response);
    });
  }

  constructor(
    public image: GlobalServviceService,
    private http: HttpClient,
    public checked: CheckuserService
  ) {}
}

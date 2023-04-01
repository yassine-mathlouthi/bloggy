import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdduserService } from '../adduser.service';
import { GlobalServviceService } from '../global-servvice.service';
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
  /*ajout2() {
    console.log('Data:', this.data); // Check the values of your object
    var jsonData = JSON.stringify(this.data);
    console.log('JSON:', jsonData); // Check the JSON string
    this.add.adduser(jsonData);
  }*/
  ajout() {
    var url = 'http://localhost/bloggy/adduser.php';

    const params = new HttpParams()
      .set('name', this.data.user.toString())
      .append('pass', this.data.pass.toString())
      .append('cin', this.data.cin.toString())
      .append('age', this.data.age.toString());

    console.log(this.data.user);

    this.http.post(url, {}, { params }).subscribe((response) => {
      const jsonStr = JSON.stringify(response);
      const jsonObj = JSON.parse(jsonStr);
      console.log(jsonObj);
    });
  }

  constructor(
    public image: GlobalServviceService,

    private http: HttpClient
  ) {}
}

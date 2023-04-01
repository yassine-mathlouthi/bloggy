import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AdduserService {
  constructor(private http: HttpClient) {}
  adduser(jsonData: any) {
    console.log('JSON 222222:', jsonData);
    return this.http
      .post('http://localhost/bloggy/adduser.php', jsonData)
      .subscribe((response) => {
        console.log(response);
      });
  }
}

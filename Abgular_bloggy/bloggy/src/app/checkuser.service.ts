import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckuserService {

  private timeoutId: any;

  constructor() {}

  startSessionTimeout(timeoutSeconds: number, onTimeout: () => void) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(onTimeout, timeoutSeconds * 1000);
  }

  clearSessionTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  isSessionActive(): boolean {
    const token = localStorage.getItem('token');
    return !!token && token === 'valid_token';
  }

  /* constructor(private http: HttpClient) {}
  checkuser(ch: any) {
    return this.http
      .post('http://localhost/bloggy/checkuser.php', ch)
      .subscribe((response) => {
        console.log(response);
      });
  } */

}

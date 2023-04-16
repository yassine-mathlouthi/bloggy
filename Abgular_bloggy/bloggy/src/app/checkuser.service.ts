import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckuserService {
  private timeoutId: any;
  oh: string = '';
  admin = false;

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
  verif(): boolean {
    this.oh = localStorage.getItem('cin') ?? '';
    if (this.oh === 'bloggyteam@gmail.com') {
      this.admin = true;
    } else {
      this.admin = false;
    }
    return this.admin;
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

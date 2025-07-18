import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GetblogsService {
  id: any;

  constructor(private http: HttpClient) {}
  getBlogs() {
    return this.http.get('http://localhost/bloggy/select_blogs.php');
  }
  getBlog(id: any) {
    const url = 'http://localhost/bloggy/displayBlog.php';
    const params = new HttpParams().set('idBlog', id.toString());
    return this.http.post(url, {}, { params });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetblogsService {

  constructor(private http: HttpClient) { }
  getBlogs(){
    return this.http.get("http://localhost/bloggy/select_blogs.php")
  }
}

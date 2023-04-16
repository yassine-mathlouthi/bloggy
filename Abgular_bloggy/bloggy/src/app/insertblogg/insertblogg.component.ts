import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-insertblogg',
  templateUrl: './insertblogg.component.html',
  styleUrls: ['./insertblogg.component.css'],
})
export class InsertbloggComponent {
  blogg = {
    title: '',
    shortdescription: '',
    description: '',
    category: '',
    img: '',
  };

  constructor(private http: HttpClient, private router: Router) {}
  onSubmit() {
    var url = 'http://localhost/bloggy/insert_blog.php';
    const params = new HttpParams()
      .set('title', this.blogg.title.toString())
      .append('shortdescription', this.blogg.shortdescription.toString())
      .append('description', this.blogg.description.toString())
      .append('category', this.blogg.category.toString())
      .append('img', this.blogg.img.toString());
    console.log('result1', this.blogg);
    this.http.post(url, {}, { params }).subscribe((response) => {
      console.log(response);
      if (response === 1) {
        this.router.navigate(['']);
      } else {
        console.log('test2');
      }
    });
  }
}

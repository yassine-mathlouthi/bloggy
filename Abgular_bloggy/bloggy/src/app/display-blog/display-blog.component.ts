import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetblogsService } from '../getblogs.service';
import { GlobalServviceService } from '../global-servvice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  styleUrls: ['./display-blog.component.css']
})
export class DisplayBlogComponent   {
  constructor(private route: ActivatedRoute ,public res:GlobalServviceService , public http: HttpClient, private blogs:GetblogsService ){}
  post_id=''
  blog_data: any=[];  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogs.getBlog(id).subscribe((value: Object) => {
      const res = value as any;
      this.blog_data = res;
      console.log("data",res);
    },
    error => {
      console.log("errer",error);
    });
  
      
  }
  like=true ;
  incrementLikes(event : MouseEvent, post_id: number) {
    event.preventDefault();
    event.stopPropagation();
    if(this.like==true)
    {
      var url = 'http://localhost/bloggy/likes_incc.php';
      const params = new HttpParams().set('test', post_id.toString());
      this.http.post(url, {}, { params }).subscribe(response => {
      console.log(response);
      });
      this.like=!this.like ;
    }
    else 
    {
      var url = 'http://localhost/bloggy/unlike_incc.php';
      const params = new HttpParams().set('test', post_id.toString());
      this.http.post(url, {}, { params }).subscribe(response => {
      console.log(response);
      });
      this.like=!this.like ;
    }
  }      
}

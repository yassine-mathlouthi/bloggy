import { HttpClient, HttpParams } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { GetblogsService } from '../getblogs.service';
import { GlobalServviceService } from '../global-servvice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  constructor(private router: Router , private http:HttpClient , public logo:GlobalServviceService ,private blogs:GetblogsService) { } 
  blogs_data: any=[];  
  ngOnInit() : void {
      this.blogs.getBlogs().subscribe((value: Object) => {
      const res = value as any;
      this.blogs_data=res ;
      console.log(res);
    },
    error => {
      console.log(error);
    }
  );
    } 
    like=true
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
    displayBlog(idBlog : any)
    {
      this.logo.id_blog=idBlog ; 
    }
    goToBlog(id: number) {
      this.router.navigate(['/blog', id]);
    }
}
    


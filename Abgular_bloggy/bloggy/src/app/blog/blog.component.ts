import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { GetblogsService } from '../getblogs.service';
import { GlobalServviceService } from '../global-servvice.service';
/* interface Blog {
  id: number;
  blog_name: string;
  content: string;
} */

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  k=1 ;
  x(){
    this.k= -1*this.k

  }
  

 
  constructor(private http:HttpClient , public logo:GlobalServviceService ,private blogs:GetblogsService) { } 
  
  blogs_data: any=[]; 
   
  ngOnInit() : void {
    this.blogs.getBlogs().subscribe((value: Object) => {
      const res = value as any; // cast 'value' to 'Blog[]'
      this.blogs_data=res ;
      console.log(res);
    },
    error => {
      console.log(error);
    }
  );
    } 
   
    incrementLikes(post_id: number) {
      var url = 'http://localhost/bloggy/likes_incc.php';
      console.log(post_id);
      var data = { test: post_id };
      this.http.post(url, data).subscribe(response => {
        console.log(response);
      });
    }
}
    


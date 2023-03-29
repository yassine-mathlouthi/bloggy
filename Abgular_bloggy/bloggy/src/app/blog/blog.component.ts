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


  
  blogs_data: any=[]; 
  constructor(public logo:GlobalServviceService ,private blogs:GetblogsService) { }  
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
}
    


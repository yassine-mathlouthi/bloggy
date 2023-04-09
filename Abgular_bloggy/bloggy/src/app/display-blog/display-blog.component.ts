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
  like=false ;
  nbLike=0
  incrementLikes(post_id: number, nbLike: number) {
    if (this.like == false) {
        nbLike = nbLike + 1; // increment nbLike by 1
        this.like = !this.like;
    } else {
        nbLike = nbLike - 1; // decrement nbLike by 1
        this.like = !this.like;
    }
    var url = 'http://localhost/bloggy/likes_incc.php';
    const params = new HttpParams().set('id', post_id.toString()).append('nbLike', nbLike.toString());
    console.log(" le nombre de react ", nbLike)
    this.http.post(url, {}, { params }).subscribe(response => {
        console.log(response);
    });
}

  }      

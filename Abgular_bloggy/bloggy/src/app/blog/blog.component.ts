import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetblogsService } from '../getblogs.service';
import { GlobalServviceService } from '../global-servvice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    public logo: GlobalServviceService,
    private blogs: GetblogsService
  ) {}
  blogs_data: any = [];
  ngOnInit(): void {
    this.blogs.getBlogs().subscribe(
      (value: Object) => {
        const res = value as any;
        this.blogs_data = res;
        console.log(res);
        // initialize like counts for each blog post
        for (let blog of this.blogs_data) {
          this.likeCounts[blog.id] = blog.nb_like;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /*like = true;
  incrementLikes(event: MouseEvent, post_id: number) {
    event.preventDefault();
    event.stopPropagation();
    if (this.like == true) {
      var url = 'http://localhost/bloggy/likes_incc.php';
      const params = new HttpParams().set('test', post_id.toString());
      this.http.post(url, {}, { params }).subscribe((response) => {
        console.log(response);
      });
    } 
  }*/

  likeCounts: { [postId: number]: number } = {};
  isLiked: { [postId: number]: boolean } = {};

  incrementLikes(event: MouseEvent, postId: number) {
    event.preventDefault();
    event.stopPropagation();

    const liked = this.isLiked[postId];
    let likeCount = this.likeCounts[postId] ?? 0; // Use let instead of const

    console.log('likeCount before if statement', likeCount);

    if (!liked) {
      this.isLiked[postId] = true;
      likeCount++; // Increment likeCount variable here

      var url = 'http://localhost/bloggy/likes_incc.php';
      const params = new HttpParams().set('id', postId.toString());

      console.log('result1', this.isLiked[postId]);

      this.http.post(url, {}, { params }).subscribe((response) => {
        console.log(response);

        // Update nb_like in blogs_data array
        const blogIndex = this.blogs_data.findIndex(
          (blog: { id: number }) => blog.id === postId
        );

        if (blogIndex > -1) {
          console.log('aaaaa', likeCount);
          this.blogs_data[blogIndex].nb_like = likeCount;
        }
        const heartIcon = document.querySelector(
          `[name="id_post"][value="${postId}"] + label svg`
        );
        if (heartIcon) {
          heartIcon.classList.add('cheek');
        }
      });

      this.likeCounts[postId] = likeCount; // Update likeCounts array here
    } else {
      this.isLiked[postId] = false;
      likeCount--; // Decrement likeCount variable here
      this.likeCounts[postId] = likeCount; // Update likeCounts array here

      console.log('result2', this.isLiked[postId]);
      var url = 'http://localhost/bloggy/unlike.php';
      const params = new HttpParams().set('id', postId.toString());

      this.http.post(url, {}, { params }).subscribe((response) => {
        console.log(response);

        // Update nb_like in blogs_data array
        const blogIndex = this.blogs_data.findIndex(
          (blog: { id: number }) => blog.id === postId
        );

        if (blogIndex > -1) {
          this.blogs_data[blogIndex].nb_like = likeCount;

          // Update CSS class of heart icon
          const heartIcon = document.querySelector(
            `[name="id_post"][value="${postId}"] + label svg`
          );
          if (heartIcon) {
            heartIcon.classList.remove('cheek');
          }
        }
      });
    }
  }

  displayBlog(idBlog: any) {
    this.logo.id_blog = idBlog;
  }
  goToBlog(id: number) {
    this.router.navigate(['/blog', id]);
  }
}

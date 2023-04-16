import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetblogsService } from '../getblogs.service';
import { GlobalServviceService } from '../global-servvice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  styleUrls: ['./display-blog.component.css'],
})
export class DisplayBlogComponent {
  constructor(
    private route: ActivatedRoute,
    public res: GlobalServviceService,
    public http: HttpClient,
    private blogs: GetblogsService
  ) {}
  post_id = '';
  blog_data: any = [];
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogs.getBlog(id).subscribe(
      (value: Object) => {
        const res = value as any;
        this.blog_data = res;
        console.log('data', res);
      },
      (error) => {
        console.log('errer', error);
      }
    );
  }

  likeCounts: { [postId: number]: number } = {};
  isLiked: { [postId: number]: boolean } = {};
  incrementLikes(event: MouseEvent, post_id: number, nbLike: number) {
    const liked = this.isLiked[post_id];
    let likeCount = this.blog_data[0].nb_like ?? 0;
    console.log('likeCount before if statement', likeCount);
    if (!liked) {
      nbLike = nbLike + 1;
      var url = 'http://localhost/bloggy/likes_incc.php';
      const params = new HttpParams()
        .set('id', post_id.toString())
        .append('nbLike', nbLike.toString());
      console.log(' le nombre de react ', nbLike);
      this.http.post(url, {}, { params }).subscribe((response) => {
        console.log(response);
        this.likeCounts[post_id] = nbLike;
        this.isLiked[post_id] = true;
        this.blog_data[0].nb_like = +this.blog_data[0].nb_like + 1;
        const heartIcon = document.querySelector(
          `[name="id_post"][value="${post_id}"] + label svg`
        );
        if (heartIcon) {
          heartIcon.classList.add('cheek');
        }
      });
    } else {
      nbLike = nbLike - 1;
      var url = 'http://localhost/bloggy/unlike.php';
      const params = new HttpParams()
        .set('id', post_id.toString())
        .append('nbLike', nbLike.toString());
      console.log(' le nombre de react ', nbLike);
      this.http.post(url, {}, { params }).subscribe((response) => {
        this.likeCounts[post_id] = nbLike;
        this.isLiked[post_id] = false;
        this.blog_data[0].nb_like = +this.blog_data[0].nb_like - 1;
        const heartIcon = document.querySelector(
          `[name="id_post"][value="${post_id}"] + label svg`
        );
        if (heartIcon) {
          heartIcon.classList.remove('cheek');
        }
      });
    }
  }
}

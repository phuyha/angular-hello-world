import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {
    // // Get data from server
    // http.get(this.url)
    //   .subscribe((response) => {
    //     this.posts = response.json();
    //   });
   }

  ngOnInit() {
    // Get data from server
    this.service.getPosts()
      .subscribe((response) => {
        this.posts = response.json();
      },  error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }

  // Create post
  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe((response) => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      }, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }

  // Update post
  updatePost(post) {
    // this.http.put(this.url, JSON.stringify(post));
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      }, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }

  // Delete post
  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }
}

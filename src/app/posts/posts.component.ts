import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

class Post {
  constructor(
    public title: string,
    public body: string,
    public id: number,
    public userId: number,
  ) { }
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent implements OnInit {

  posts: Post[] = [];
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.http.get("https://jsonplaceholder.typicode.com/posts/")
      .subscribe(user => {
        this.posts = user as Post[];
      });
  }

}

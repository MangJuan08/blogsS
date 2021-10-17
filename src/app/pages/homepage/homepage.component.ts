import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public posts: any;

  constructor(private srvPosts: PostsService) { }

  ngOnInit(): void {
    this.posts = {
      userId: 0,
      id: 0,
      title: ''
    }

    this.srvPosts.getAllPosts().subscribe((res) => {
      this.posts = Object.assign(res);

    })
  }

}

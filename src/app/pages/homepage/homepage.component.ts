import { Component, OnInit, ViewChild } from '@angular/core';
import { IPosts } from 'src/app/model/posts';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  public posts: any;
  public title = "Homepage";
  public dataSource: any;

  constructor(private srvPosts: PostsService) {
  }

  ngOnInit(): void {
    this.srvPosts.getAllPosts().subscribe((res) => {
      this.posts = <IPosts>res;
    })
  }




}

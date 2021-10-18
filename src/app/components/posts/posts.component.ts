import { Component, Input, OnInit } from '@angular/core';
import { IPosts } from 'src/app/model/posts';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() postObjects: any = [];

  constructor() {

  }

  ngOnInit(): void {

  }

}

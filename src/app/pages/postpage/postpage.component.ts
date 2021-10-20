import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComments } from 'src/app/model/comments';
import { IPostDetails } from 'src/app/model/postDetail';
import { CommentsService } from 'src/app/services/comments.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-postpage',
  templateUrl: './postpage.component.html',
  styleUrls: ['./postpage.component.css']
})
export class PostpageComponent implements OnInit {
  postPage = "postpage works!";
  public id: any;
  public aPost: any;
  public comments: any;
  constructor(private route: ActivatedRoute, private srvPost: PostsService, private srvComm: CommentsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)

    this.srvPost.getPost(this.id).subscribe((res) => {
      this.aPost = <IPostDetails>res;
      console.log(this.aPost);
    })

    this.srvComm.getComments(this.id).subscribe((res) => {
      this.comments = <IComments>res;
      console.log(this.comments);
    })
  }

}

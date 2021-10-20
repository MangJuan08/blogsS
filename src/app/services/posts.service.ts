import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPostDetails } from '../model/postDetail';
import { IPosts } from '../model/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<IPosts> {
    return this.http.get<IPosts>("https://jsonplaceholder.typicode.com/posts");
  }

  getPost(dataParam: number): Observable<IPostDetails> {
    return this.http.get<IPostDetails>("https://jsonplaceholder.typicode.com/posts/" + dataParam);
  }

}

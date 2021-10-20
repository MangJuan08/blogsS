import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComments } from '../model/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getComments(dataParam: number): Observable<IComments> {
    return this.http.get<IComments>("https://jsonplaceholder.typicode.com/posts/" + dataParam + "/comments");
  }
}

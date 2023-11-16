import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  posts: Observable<any>[] = [];

  constructor(public http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPostsList(): Observable<any>[] {
    this.getPosts().subscribe(post => 
      {
        this.posts.push(post)
      });
    return this.posts;
  }
}

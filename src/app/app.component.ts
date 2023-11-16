import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptor-request-time';

  posts: Observable<any>[] = [];

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    
  }

  logPosts() {
    this.apiService.getPosts()
    .subscribe(post => {
      this.posts.push(post);
    });
    console.log(this.posts);
    this.posts = [];
  }
}

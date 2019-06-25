import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class PostsService {

  constructor(private http: HttpClient) {

  }

  createAndStorePost(title: string, content: string) {
    // Send Http request
    const postData: Post
    this.http
      .post(
        'https://ngrecipebook-22412.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  fetchPosts() {
    this.http
    .get('https://ng-complete-guide-c56d3.firebaseio.com/posts.json')
    .pipe(map(responseData => {
      const postsArray = [];

      for(const key in responseData) {
        if(responseData.hasOwnProperty(key)) {
          postsArray.push({ ...responseData[key], id: key});
        }
      }

      return postsArray;
    }))
    .subscribe(posts => console.log(posts));
  }
}

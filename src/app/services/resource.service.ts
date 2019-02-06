import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  constructor(private http: HttpClient) {}

  getBlogArticles() {
    return this.http.get(
      'https://api.rss2json.com/v1/api.json' +
        '?rss_url=https://medium.com/feed/amruth-pillai'
    );
  }

  getInstagramFeed() {
    return this.http.get(
      'https://api.instagram.com/v1/users/self/media/recent/' +
        '?access_token=279179176.79a91cd.d72470259cd0463c8294ac5aa52c3a96' +
        '&count=8'
    );
  }
}

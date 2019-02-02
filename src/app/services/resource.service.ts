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
}

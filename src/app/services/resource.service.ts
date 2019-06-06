import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  constructor(private http: HttpClient) { }

  getBlogArticles() {
    return this.http.get(
      'https://api.rss2json.com/v1/api.json' +
      '?rss_url=https://medium.com/feed/@amruthpillai'
    );
  }

  getInstagramFeed() {
    return this.http.get(
      'https://api.instagram.com/v1/users/self/media/recent/' +
      '?access_token=279179176.79a91cd.12de8495c87b4876977f4775430a4a6b' +
      '&count=8'
    );
  }

  sendEmail(name: String, email: String, message: String) {
    return this.http.post(
      'https://us-central1-amruthpillai-resumeontheweb.cloudfunctions.net/sendEmail',
      { name, email, message },
      { responseType: 'text' }
    );
  }
}

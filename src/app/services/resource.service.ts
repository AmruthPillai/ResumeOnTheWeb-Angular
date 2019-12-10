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
    return this.http.get('https://www.instagram.com/amruthpillai/?__a=1');
  }

  sendEmail(name: String, email: String, message: String) {
    return this.http.post(
      'https://us-central1-amruthpillai-resumeontheweb.cloudfunctions.net/sendEmail',
      { name, email, message },
      { responseType: 'text' }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';
import { Url } from 'url';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  articles: Array<Object>;

  constructor(private resource: ResourceService) { }

  ngOnInit() {
    this.resource.getBlogArticles()
      .subscribe(data => {
        this.articles = data['items'];
        this.articles = this.articles.slice(0, 4);

        console.log(this.articles);
      });
  }

  onClick(link: string) {
    window.open(link, '_blank');
  }

}

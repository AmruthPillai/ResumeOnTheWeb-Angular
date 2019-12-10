import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';
import anime from 'node_modules/animejs/lib/anime.es.js';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt;

  articles: Array<any>[5];

  constructor(private resource: ResourceService) { }

  ngOnInit() {
    this.resource.getBlogArticles().subscribe(data => {
      this.articles = data['items'].filter((item) => {
        return item.thumbnail.endsWith('.png');
      });
      this.articles = this.articles.slice(0, 5);
    });
  }

  onClick(link: string) {
    window.open(link, '_blank');
  }

  animate(inViewport: Boolean) {
    if (inViewport) {
      anime({
        targets: '.article',
        opacity: 1,
        easing: 'easeInOutExpo',
        delay: anime.stagger(80)
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';
import anime from 'animejs/lib/anime.es.js';

interface Feed {
  image: String;
  link: String;
}

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss']
})
export class InstagramFeedComponent implements OnInit {

  instaFeed: Array<Feed>;

  constructor(private resource: ResourceService) {
    this.instaFeed = new Array<Feed>();
  }

  ngOnInit() {
    this.resource.getInstagramFeed().subscribe(data => {
      if (data['meta']['code'] !== 200) {
        return;
      }

      data['data'].forEach((post) => {
        this.instaFeed.push({
          image: post['images']['standard_resolution']['url'],
          link: post['link'],
        });
      });
    });
  }

  animate(inViewport: Boolean) {
    if (inViewport) {
      anime({
        targets: '.photo',
        opacity: 1,
        easing: 'easeInOutExpo',
        delay: anime.stagger(80)
      });
    }
  }

}

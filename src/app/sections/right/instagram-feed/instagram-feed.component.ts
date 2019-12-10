import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import anime from 'node_modules/animejs/lib/anime.es.js';

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
  faInstagram = faInstagram;

  constructor(private resource: ResourceService) {
    this.instaFeed = new Array<Feed>();
  }

  ngOnInit() {
    this.resource.getInstagramFeed().subscribe(data => {
      data['graphql']['user']['edge_owner_to_timeline_media']['edges'].forEach((edge) => {
        this.instaFeed.push({
          image: edge['node']['display_url'],
          link: `https://www.instagram.com/p/${edge['node']['shortcode']}/`
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

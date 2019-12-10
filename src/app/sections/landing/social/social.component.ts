import { Component, OnInit } from '@angular/core';
import anime from 'node_modules/animejs/lib/anime.es.js';

import {
  faInstagram,
  faLinkedinIn,
  faGithubAlt,
  faDribbble,
  faTwitter,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkedAlt
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent implements OnInit {
  faInstagram = faInstagram;
  faLinkedinIn = faLinkedinIn;
  faGithubAlt = faGithubAlt;
  faDribbble = faDribbble;
  faTwitter = faTwitter;
  faMapMarkedAlt = faMapMarkedAlt;
  faFacebookF = faFacebookF;

  constructor() {}

  ngOnInit() {
    const tl = anime.timeline({
      easing: 'easeInOutExpo',
      duration: 300,
    });

    tl.add({
      targets: '.instagram',
      opacity: 1,
    })
      .add({
        targets: '.linkedin',
        opacity: 1,
      })
      .add({
        targets: '.github',
        opacity: 1,
      })
      .add({
        targets: '.dribbble',
        opacity: 1,
      })
      .add({
        targets: '.twitter',
        opacity: 1,
      })
      .add({
        targets: '.googlemaps',
        opacity: 1,
      })
      .add({
        targets: '.facebook',
        opacity: 1,
      });
  }
}

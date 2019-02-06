import { Component, OnInit } from '@angular/core';
import anime from 'node_modules/animejs/lib/anime.es.js';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const tl = anime.timeline({
      easing: 'easeInOutExpo',
      duration: 300
    });

    tl
    .add({
      targets: '.facebook',
      opacity: 1,
    })
    .add({
      targets: '.instagram',
      opacity: 1,
    })
    .add({
      targets: '.twitter',
      opacity: 1,
    })
    .add({
      targets: '.github',
      opacity: 1,
    })
    .add({
      targets: '.googleplus',
      opacity: 1,
    })
    .add({
      targets: '.dribbble',
      opacity: 1,
    })
    .add({
      targets: '.linkedin',
      opacity: 1,
    })
    .add({
      targets: '.googlemaps',
      opacity: 1,
    });
  }

}

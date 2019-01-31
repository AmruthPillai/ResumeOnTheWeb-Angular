import { Component, OnInit } from '@angular/core';
import anime from 'node_modules/animejs/lib/anime.es.js';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    anime({
      targets: 'nav',
      translateY: '100',
      delay: 1000,
      easing: 'easeInOutQuad'
    });
  }

}

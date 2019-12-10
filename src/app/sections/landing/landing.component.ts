import { Component, OnInit } from '@angular/core';
import anime from 'node_modules/animejs/lib/anime.es.js';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  faChevronDown = faChevronDown;

  constructor() { }

  ngOnInit() {
    anime({
      targets: '#scroll-to-content',
      translateY: '50',
      opacity: 1,
      delay: 1500,
      easing: 'easeInOutExpo'
    });
  }

  scrollTo() {
    const el = document.querySelector('#resume');
    el.scrollIntoView();
  }

}

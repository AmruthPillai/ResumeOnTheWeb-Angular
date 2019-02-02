import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  animate(inViewport: Boolean) {
    if (inViewport) {
      anime({
        targets: '.skill',
        translateX: '20',
        opacity: 1,
        easing: 'easeInOutExpo',
        delay: anime.stagger(100)
      });
    }
  }

}

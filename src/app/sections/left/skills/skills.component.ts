import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = [
    {
      icon: 'web',
      name: 'Web Design & Development',
      tech: 'HTML/CSS/Javascript',
    },
    {
      icon: 'angular',
      name: 'Frontend Javascript Frameworks',
      tech: 'AngularJS/Angular 7/React/Vue.js',
    },
    {
      icon: 'nodejs',
      name: 'Backend Javascript Frameworks',
      tech: 'Node.js/Express.js/MongoDB',
    },
    {
      icon: 'android',
      name: 'Android App Development',
      tech: 'Android Studio/Java + Kotlin/XML',
    },
    {
      icon: 'sketch',
      name: 'UI/UX Design',
      tech: 'Adobe Photoshop/Illustrator/XD & Sketch',
    },
    {
      icon: 'python',
      name: 'Machine Learning',
      tech: 'Python/R/TensorFlow',
    },
    {
      icon: 'seo',
      name: 'Search Engine Optimization',
      tech: 'PageRank/Backlinks/Google Analytics',
    },
    {
      icon: 'photography',
      name: 'Photography & Cinematography',
      tech: 'Adobe Photoshop Lightroom',
    },
    {
      icon: 'fcpx',
      name: 'Photo & Video Post-Processing',
      tech: 'Adobe After Effects/Final Cut Pro X',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  animate(inViewport: Boolean) {
    if (inViewport) {
      anime({
        targets: '.skill',
        opacity: 1,
        easing: 'easeInOutExpo',
        delay: anime.stagger(80)
      });
    }
  }

}

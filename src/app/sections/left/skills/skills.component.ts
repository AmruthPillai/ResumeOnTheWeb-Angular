import { Component, OnInit } from '@angular/core';
import anime from 'node_modules/animejs/lib/anime.es.js';

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
      tech: 'Node.js/Express.js/Mongoose',
    },
    {
      icon: 'flutter',
      name: 'Cross Platform App Development',
      tech: 'Dart/Flutter/Firebase',
    },
    {
      icon: 'python',
      name: 'Python Scripting',
      tech: 'Python 3/BeautifulSoup/PyMongo',
    },
    {
      icon: 'database',
      name: 'Database Management System',
      tech: 'MySQL/Postgres/MongoDB',
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
      icon: 'tensorflow',
      name: 'Machine Learning',
      tech: 'Scikit-Learn/TensorFlow/Keras',
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

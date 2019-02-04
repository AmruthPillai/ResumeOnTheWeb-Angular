import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  workExperience = [
    {
      logo: '/assets/work/betsol.png',
      title: 'Betsol Software (India) Pvt. Ltd.',
      position: 'Web Developer Intern',
      specialization: 'Full Stack Javascript, AngularJS, Node, MongoDB',
      period: 'Jan \'18 - Mar \'18',
    },
    {
      logo: '/assets/work/grabhouse.png',
      title: 'Grabhouse Pvt. Ltd.',
      position: 'Web Developer Intern',
      specialization: 'Python Scripting, Yii Framework (PHP), WordPress',
      period: 'Jan \'16 - Feb \'16',
    },
    {
      logo: '/assets/work/cognitiveclouds.png',
      title: 'Cognitive Clouds Pvt. Ltd.',
      position: 'Visual Designer Intern',
      specialization: 'Adobe Photoshop CC, Adobe Illustrator CC',
      period: 'Jan \'14 - Feb \'14',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

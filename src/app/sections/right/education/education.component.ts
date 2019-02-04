import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  education = [
    {
      icon: '/assets/education/dsi.png',
      title: 'Dayananda Sagar College of Engineering',
      period: '2015 - 2018',
      major: 'Bachelor of Engineering in Computer Science & Engineering',
      grade: '62%'
    },
    {
      icon: '/assets/education/dsi.png',
      title: 'Dayananda Sagar Intitute of Technology',
      period: '2012 - 2015',
      major: 'Diploma in Computer Science & Engineering',
      grade: '80%'
    },
    {
      icon: '/assets/education/jvvp.png',
      title: 'Jnana Vijnana Vidyapeetha',
      period: '2008 - 2011',
      major: 'High School, CBSE',
      grade: '7.2 CGPA'
    },
    {
      icon: '/assets/education/sams.png',
      title: 'Sri Aurobindo Memorial School',
      period: '2000 - 2008',
      major: 'Elementary & Primary School, CBSE',
      grade: ''
    }
  ];

  constructor() {}

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  certifications = [
    {
      title: 'Applied CS with Android',
      issuer: 'Google',
      link: 'https://drive.google.com/open?id=0B_jhT3IlN2-2VEtXYXFzQW9Oam8',
    },
    {
      title: 'Data Science & Machine Learning using Python',
      issuer: 'Udemy',
      link: 'https://www.udemy.com/certificate/UC-F86GHHXF/',
    },
    {
      title: 'Java - Level 1 & 2',
      issuer: 'Cambridge Certification Authority',
      link: 'https://drive.google.com/open?id=0B_jhT3IlN2-2UGdXNGo1QkdBUEU',
    },
    {
      title: 'Dynamic Skills Integrated Program',
      issuer: 'DSI - Center for Innovation and Leadership (CIL)',
    }
  ];

  constructor() {}

  ngOnInit() {
  }

}

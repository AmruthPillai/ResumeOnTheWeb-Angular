import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  languages = [
    {
      name: 'English',
      percent: 95
    },
    {
      name: 'Tamil (தமிழ்)',
      percent: 85
    },
    {
      name: 'Kannada (ಕನ್ನಡ)',
      percent: 80
    },
    {
      name: 'Hindi (हिंदी)',
      percent: 40
    },
    {
      name: 'German',
      percent: 10
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

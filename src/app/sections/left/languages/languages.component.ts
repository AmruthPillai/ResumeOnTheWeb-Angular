import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  faCheck = faCheck;

  languages = [
    {
      name: 'English',
      read: true,
      write: true,
      speak: true
    },
    {
      name: 'Tamil (தமிழ்)',
      read: true,
      write: true,
      speak: true
    },
    {
      name: 'Kannada (ಕನ್ನಡ)',
      read: true,
      write: true,
      speak: true
    },
    {
      name: 'Hindi (हिंदी)',
      read: true,
      write: true,
      speak: false
    },
    {
      name: 'German',
      read: true,
      write: false,
      speak: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

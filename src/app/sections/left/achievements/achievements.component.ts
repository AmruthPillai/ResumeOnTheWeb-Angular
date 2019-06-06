import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  achievements = [
    {
      title: 'International Flutter Hackathon \'19 <small>(BLR Hub)</small>',
      position: '1st Place'
    },
    {
      title: 'Venturesity Banyan Hack \'16',
      position: '1st Place'
    },
    {
      title: 'eGovernments Foundation Hackathon \'17',
      position: '1st Place'
    },
    {
      title: 'Smart India Hackathon \'17 <small>(National Level)</small>',
      position: '1st Place'
    },
    {
      title: 'NIT Trichy - Pragyan Hackathon \'16',
      position: '3rd Place'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

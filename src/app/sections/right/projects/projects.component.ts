import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  badgeColors: Array<string> = ['badge-primary', 'badge-success', 'badge-info'];

  constructor() {}

  ngOnInit() {
  }

  getRandomColor(): string {
    return this.badgeColors[Math.floor(Math.random() * this.badgeColors.length)];
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() icon;
  @Input() name;
  @Input() tech;

  iconUrl: String;

  constructor() { }

  ngOnInit() {
    this.iconUrl = '/assets/skills/' + this.icon + '.png';
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  @Input() name;
  @Input() percent;

  constructor() { }

  ngOnInit() {
  }

}

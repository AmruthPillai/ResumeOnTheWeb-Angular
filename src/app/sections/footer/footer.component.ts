import { Component, OnInit } from '@angular/core';
import { faCaretUp, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faCaretUp = faCaretUp;
  faExternalLinkAlt = faExternalLinkAlt;

  currentYear: Number;

  constructor() {
    this.currentYear = (new Date()).getFullYear();
  }

  ngOnInit() {
  }

}

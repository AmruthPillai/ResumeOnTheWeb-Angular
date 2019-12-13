import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkMode: boolean;

  constructor() {
    this.darkMode = false;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}

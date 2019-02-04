import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faGithub,
  faGithubAlt,
  faGooglePlusG,
  faDribbble,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import {
  faChevronDown,
  faChevronRight,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IconsModule {
  constructor() {
    library.add(
      faFacebookF,
      faInstagram,
      faTwitter,
      faGithub,
      faGithubAlt,
      faGooglePlusG,
      faDribbble,
      faLinkedinIn
    );
    library.add(
      faChevronDown,
      faChevronRight,
      faExternalLinkAlt
    );
  }
}

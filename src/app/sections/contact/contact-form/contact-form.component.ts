import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import anime from 'animejs/lib/anime.es.js';

export interface FormModel {
  name?: String;
  email?: String;
  message?: String;
  captcha?: String;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  buttonText: String;
  siteKey: String;
  public formModel: FormModel = {};

  constructor() {
    this.buttonText = 'Send';
    this.siteKey = environment.recaptchaSiteKey;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.buttonText = 'Sent!';

    anime({
      targets: '.paper-plane',
      translateX: 100,
      translateY: -100,
      opacity: 0,
      easing: 'easeInOutExpo',
    });

    anime({
      targets: '.button-text',
      scaleX: 1.3,
      scaleY: 1.3,
      translateY: -8,
      delay: 150,
      easing: 'easeInOutExpo',
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResourceService } from 'src/app/services/resource.service';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import anime from 'node_modules/animejs/lib/anime.es.js';

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
  faPaperPlane = faPaperPlane;

  buttonText: String;
  siteKey: String;
  public formModel: FormModel = {};

  constructor(private resource: ResourceService) {
    this.buttonText = 'Send';
    this.siteKey = environment.recaptchaSiteKey;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.resource.sendEmail(
      this.formModel.name,
      this.formModel.email,
      this.formModel.message,
    ).subscribe((data) => {
      this.success();
    });
  }

  success() {
    anime({
      targets: '.paper-plane',
      translateX: 100,
      translateY: -100,
      opacity: 0,
      easing: 'easeInOutExpo',
    });

    anime({
      targets: '.button-text',
      scaleX: 1.2,
      scaleY: 1.2,
      translateY: -8,
      delay: 150,
      easing: 'easeInOutExpo',
    });

    this.buttonText = 'Sent!';
  }

}

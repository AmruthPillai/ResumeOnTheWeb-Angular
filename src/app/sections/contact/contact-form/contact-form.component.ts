import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

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

  siteKey: String;
  public formModel: FormModel = {};

  constructor() {
    this.siteKey = environment.recaptchaSiteKey;
  }

  ngOnInit() {
  }

}

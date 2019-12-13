import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FaConfig, FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

import { LightboxModule } from 'ngx-lightbox';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SectionComponent } from './components/section/section.component';
import { BootstrapModule } from './modules/bootstrap.module';
import { ContactFormComponent } from './sections/contact/contact-form/contact-form.component';
import { ContactComponent } from './sections/contact/contact.component';
import { LocationComponent } from './sections/contact/location/location.component';
import { FooterComponent } from './sections/footer/footer.component';

import { LandingComponent } from './sections/landing/landing.component';
import { SocialComponent } from './sections/landing/social/social.component';
import { AboutMeComponent } from './sections/left/about-me/about-me.component';
import { AchievementsComponent } from './sections/left/achievements/achievements.component';
import { BlogComponent } from './sections/left/blog/blog.component';
import { CertificationsComponent } from './sections/left/certifications/certifications.component';
import { HobbiesComponent } from './sections/left/hobbies/hobbies.component';
import { LanguagesComponent } from './sections/left/languages/languages.component';
import { LeftComponent } from './sections/left/left.component';
import { PersonalStatementComponent } from './sections/left/personal-statement/personal-statement.component';
import { SkillComponent } from './sections/left/skills/skill/skill.component';
import { SkillsComponent } from './sections/left/skills/skills.component';
import { VolunteerWorkComponent } from './sections/left/volunteer-work/volunteer-work.component';
import { NavigationComponent } from './sections/navigation/navigation.component';
import { PdfDownloadComponent } from './sections/pdf-download/pdf-download.component';
import { DesignProjectsComponent } from './sections/right/design-projects/design-projects.component';
import { DevelopmentProjectsComponent } from './sections/right/development-projects/development-projects.component';
import { EducationComponent } from './sections/right/education/education.component';
import { InstagramFeedComponent } from './sections/right/instagram-feed/instagram-feed.component';
import { PhotographyShowcaseComponent } from './sections/right/photography-showcase/photography-showcase.component';
import { RightComponent } from './sections/right/right.component';
import { WorkExperienceComponent } from './sections/right/work-experience/work-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    SocialComponent,
    LeftComponent,
    RightComponent,
    AboutMeComponent,
    PersonalStatementComponent,
    SectionComponent,
    SkillsComponent,
    SkillComponent,
    LanguagesComponent,
    BlogComponent,
    HobbiesComponent,
    VolunteerWorkComponent,
    AchievementsComponent,
    CertificationsComponent,
    EducationComponent,
    WorkExperienceComponent,
    DevelopmentProjectsComponent,
    PhotographyShowcaseComponent,
    DesignProjectsComponent,
    InstagramFeedComponent,
    PdfDownloadComponent,
    ContactComponent,
    LocationComponent,
    ContactFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InViewportModule,
    BootstrapModule,
    HttpClientModule,
    FontAwesomeModule,
    LightboxModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [
    FaConfig,
    FaIconLibrary,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}

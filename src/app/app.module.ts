import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { LightboxModule } from 'ngx-lightbox';
import { RecaptchaModule } from 'ng-recaptcha';
import { FormsModule } from '@angular/forms';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { BootstrapModule } from './modules/bootstrap.module';
import { IconsModule } from './modules/icons.module';

import { LandingComponent } from './sections/landing/landing.component';
import { HexagonComponent } from './sections/landing/hexagon/hexagon.component';
import { NavigationComponent } from './sections/navigation/navigation.component';
import { SocialComponent } from './sections/landing/social/social.component';
import { LeftComponent } from './sections/left/left.component';
import { RightComponent } from './sections/right/right.component';
import { AboutMeComponent } from './sections/left/about-me/about-me.component';
import { PersonalStatementComponent } from './sections/left/personal-statement/personal-statement.component';
import { SectionComponent } from './components/section/section.component';
import { SkillsComponent } from './sections/left/skills/skills.component';
import { SkillComponent } from './sections/left/skills/skill/skill.component';
import { LanguagesComponent } from './sections/left/languages/languages.component';
import { LanguageComponent } from './sections/left/languages/language/language.component';
import { BlogComponent } from './sections/left/blog/blog.component';
import { HobbiesComponent } from './sections/left/hobbies/hobbies.component';
import { VolunteerWorkComponent } from './sections/left/volunteer-work/volunteer-work.component';
import { AchievementsComponent } from './sections/left/achievements/achievements.component';
import { CertificationsComponent } from './sections/left/certifications/certifications.component';
import { EducationComponent } from './sections/right/education/education.component';
import { WorkExperienceComponent } from './sections/right/work-experience/work-experience.component';
import { DevelopmentProjectsComponent } from './sections/right/development-projects/development-projects.component';
import { PhotographyShowcaseComponent } from './sections/right/photography-showcase/photography-showcase.component';
import { DesignProjectsComponent } from './sections/right/design-projects/design-projects.component';
import { InstagramFeedComponent } from './sections/right/instagram-feed/instagram-feed.component';
import { PdfDownloadComponent } from './sections/pdf-download/pdf-download.component';
import { ContactComponent } from './sections/contact/contact.component';
import { LocationComponent } from './sections/contact/location/location.component';
import { ContactFormComponent } from './sections/contact/contact-form/contact-form.component';
import { FooterComponent } from './sections/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HexagonComponent,
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
    LanguageComponent,
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InViewportModule,
    BootstrapModule,
    HttpClientModule,
    IconsModule,
    LightboxModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { BootstrapModule } from './modules/bootstrap.module';
import { IconsModule } from './modules/icons.module';

import { LandingComponent } from './sections/landing/landing.component';
import { HexagonComponent } from './sections/landing/hexagon/hexagon.component';
import { NavigationComponent } from './sections/navigation/navigation.component';
import { SocialComponent } from './sections/landing/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HexagonComponent,
    NavigationComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModule,
    IconsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

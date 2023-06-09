import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profiles/components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilmModule } from './film/film.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './core/components/header/header.component';
import { ProfilesModule } from './profiles/profiles.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FilmModule,
    CoreModule,
    AuthModule,
    ProfilesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

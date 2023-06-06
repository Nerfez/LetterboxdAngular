import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { SingleProfileComponent } from './components/single-profile/single-profile.component';
import { ProfilesRouting } from './profiles.routing';
import { ListeProfileComponent } from './components/liste-profile/liste-profile.component';



@NgModule({
  declarations: [
    ProfileComponent,
    SingleProfileComponent,
    ListeProfileComponent
  ],
  imports: [
    CommonModule,
    ProfilesRouting
  ], exports: [
    ProfileComponent,
    SingleProfileComponent,
    ListeProfileComponent
  ]
})
export class ProfilesModule { }

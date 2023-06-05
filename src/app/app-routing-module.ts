import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./film/components/home/home.component";
import { SingleFilmComponent } from "./film/components/single-film/single-film.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ProfileComponent } from "./profile/profile.component";
import { NewFilmComponent } from "./film/components/new-film/new-film.component";

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'profile', component:ProfileComponent},
  {path:'profile/:id', component:ProfileComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SingleFilmComponent } from "./single-film/single-film.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ProfileComponent } from "./profile/profile.component";
import { NewFilmComponent } from "./new-film/new-film.component";

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'search', component:HomeComponent},
  {path: 'search/:searchTerm', component:HomeComponent},
  {path:'films', component: HomeComponent},
  {path:'films/:id', component: SingleFilmComponent},
  {path:'ajouter', component: NewFilmComponent},
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

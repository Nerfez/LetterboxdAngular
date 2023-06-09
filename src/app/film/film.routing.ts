import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SingleFilmComponent } from './components/single-film/single-film.component';
import { AuthGuard } from '../core/guards/auth.guards';
import { NewFilmComponent } from './components/new-film/new-film.component';
import { ModifFilmComponent } from './components/modif-film/modif-film.component';

const routes: Routes = [
  {path:'search', component:HomeComponent, canActivate: [AuthGuard]},
  {path: 'search/:searchTerm', component:HomeComponent, canActivate: [AuthGuard]},
  {path:'films', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'films/:id', component: SingleFilmComponent, canActivate: [AuthGuard]},
  {path:'ajouterFilm', component: NewFilmComponent, canActivate: [AuthGuard]},
  {path:'modifierFilm', component: ModifFilmComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRouting {}

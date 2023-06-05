import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SingleFilmComponent } from './components/single-film/single-film.component';
import { NewFilmComponent } from './components/new-film/new-film.component';
import { AuthGuard } from '../core/guards/auth.guards';

const routes: Routes = [
  {path:'search', component:HomeComponent, canActivate: [AuthGuard]},
  {path: 'search/:searchTerm', component:HomeComponent, canActivate: [AuthGuard]},
  {path:'films', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'films/:id', component: SingleFilmComponent, canActivate: [AuthGuard]},
  {path:'films/ajouter', component: NewFilmComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRouting {}

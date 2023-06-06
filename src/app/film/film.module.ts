import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NewFilmComponent } from './components/new-film/new-film.component';
import { SingleFilmComponent } from './components/single-film/single-film.component';
import { FilmRouting } from './film.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    NewFilmComponent,
    SingleFilmComponent
  ],
  imports: [
    CommonModule,
    FilmRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
   exports:[
    HomeComponent,
    NewFilmComponent,
    SingleFilmComponent
   ],
   providers: [
     //ajout date en fr
     {
       provide: LOCALE_ID, useValue: 'fr-FR'
     }
   ]
})
export class FilmModule {
  //Ajout date en fr
  constructor(){
    registerLocaleData(fr.default);
  }
}

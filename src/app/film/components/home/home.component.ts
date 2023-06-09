import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, concatMap, filter, map } from 'rxjs';
import { Film } from 'src/app/models/Film';
import { FilmsService } from 'src/app/services/films-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  films$!: Observable<Film[]>;
  dropDownData: string[] = ['croissant', 'décroissant', 'noteLow', 'noteUp'];

  constructor(private filmsService: FilmsService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.films$ = this.filmsService.getAllFilmsFromDB().pipe(
          map(films => films.filter(film => film.title.toLowerCase().includes(params['searchTerm'].toLowerCase()))
          ));
      }
      else {
        this.films$ = this.filmsService.getAllFilmsFromDB();
      }
    });
  }

  ngOnInit(): void {
    this.films$ = this.filmsService.getAllFilmsFromDB();
  }

  onOptionsSelected(value: string) {
    if (value === 'croissant')
      this.films$ = this.filmsService.getAllFilmsByNewest();
    else if (value === 'décroissant')
      this.films$ = this.filmsService.getAllFilmsByOldest();
    else if (value === 'noteLow')
      this.films$ = this.filmsService.getAllFilmsByNoteToLower();
    else if (value === 'noteUp')
      this.films$ = this.filmsService.getAllFilmsByNoteToUpper();
  }

}

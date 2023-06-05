import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/Film';
import { FilmsService } from 'src/app/services/films-service';

@Component({
  selector: 'app-single-film',
  templateUrl: './single-film.component.html',
  styleUrls: ['./single-film.component.scss']
})
export class SingleFilmComponent implements OnInit{
  film!: Film;

  constructor(private filmService: FilmsService,
              private route: ActivatedRoute) {}

                ngOnInit(): void {
                  const filmId = +this.route.snapshot.params['id'];
                this.film = this.filmService.getFilmById(filmId);
                }

}

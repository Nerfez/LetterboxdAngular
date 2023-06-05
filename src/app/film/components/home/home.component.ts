import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/Film';
import { FilmsService } from 'src/app/services/films-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  films:Film[]=[];
  dropDownData: string[] = ['croissant', 'décroissant', 'noteLow', 'noteUp'];

  constructor(private filmsService:FilmsService, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params) => {
      if(params['searchTerm'])
      this.films = this.filmsService.getAllFilmsBySearchTerm(params['searchTerm']);
      else
      this.films = this.filmsService.getAllFilms();
    });
}

  ngOnInit(): void {

  }

  onOptionsSelected(value:string){
    if(value === 'croissant')
    this.filmsService.getAllFilmsByNewest();
    else if(value === 'décroissant')
    this.filmsService.getAllFilmsByOldest();
    else if(value === 'noteLow')
    this.filmsService.getAllFilmsByNoteToLower();
    else if(value === 'noteUp')
    this.filmsService.getAllFilmsByNoteToUpper();
}

}
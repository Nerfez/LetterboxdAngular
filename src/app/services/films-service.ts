import { Injectable } from '@angular/core';
import { Film } from '../models/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

films: Film[]= [ {
  id: 1,
  title:'A Moment of Romance',
real: 'Benny Chan',
description:'During a bank heist, the getaway driver Wah took a young woman Jo Jo hostage. After preventing her from getting killed by his accomplices, they began a forbidden relationship causing mayhem and chaos for their friends and family.',
createdDate: new Date("1990-05-04"),
stars: 4,
imageUrl: 'https://www.themoviedb.org/t/p/original/uO6TjYi6vWKRhjmBFScbjh4ja86.jpg',
buttonText: 'Like!',
price: 10.99
},
{
  id: 2,
  title: 'Blade Runner',
real: 'Ridley Scott',
description: 'Un agent d une unité spéciale, un blade runner, doit poursuivre et éliminer les quatre répliquant qui ont volé un navire dans l espace et sont retournés sur Terre pour trouver leur créateur.',
createdDate: new Date("1982-07-15"),
stars: 3,
imageUrl: 'https://www.cinemaffiche.fr/625-tm_large_default/blade-runner.jpg',
buttonText: 'Like!',
price: 25.99,
location: "Etats-Unis"
},
{
  id: 3,
  title: 'Hard Boiled',
  real: 'John Woo',
  description: 'Hard Boiled (Chinese: 辣手神探) is a 1992 Hong Kong action thriller film directed by John Woo from a screenplay by Gordon Chan and Barry Wong. The film stars Chow Yun-fat as Inspector "Tequila" Yuen, Tony Leung Chiu-wai as Alan, an undercover cop, and Anthony Wong as Johnny Wong, a leader of the criminal triads.',
  createdDate: new Date("1992-02-11"),
  stars: 5,
  imageUrl: 'https://i.etsystatic.com/18943293/r/il/b2cfa8/2896477679/il_570xN.2896477679_2231.jpg',
  buttonText: 'Unlike!',
  price: 20.99,
  location: "Hong-kong"
},
{
  id: 4,
  title: 'Raise the red lantern',
  real: 'Zhan Yimou',
  description: 'Une jeune femme devient la quatrième épouse d un riche seigneur et doit apprendre à vivre avec les règles strictes et les tensions du foyer.',
  createdDate: new Date("1991-08-19"),
  stars: 4,
  imageUrl: 'https://m.media-amazon.com/images/M/MV5BNDMxMTc2N2ItMjI5Ny00MGFiLThkOTYtZTIyYTZhMzA2NjIzXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_FMjpg_UX1000_.jpg',
  buttonText: 'Unlike!',
  price: 15.99
}
];

  constructor() {}

    getAllFilms():Film[]{
    return this.films;
    }

    getAllFilmsByNewest():Film[]{
      //Trier par date du plus recent au plus vieux
    this.films.sort((a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime());
    return this.films;
    }

    getAllFilmsByOldest():Film[]{
      //Trier par date du plus vieux au plus récent
    this.films.sort((a, b) => new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime());
    return this.films;
    }

    getAllFilmsByNoteToLower():Film[]{
      //Trier par note meilleure à pire
    this.films.sort((a, b) => new Number(a.stars).valueOf() - new Number(b.stars).valueOf());
    return this.films;
    }

    getAllFilmsByNoteToUpper():Film[]{
      //Trier par note pire à meilleure
    this.films.sort((a, b) => new Number(b.stars).valueOf() - new Number(a.stars).valueOf());
    return this.films;
    }

    getAllFilmsBySearchTerm(searchTerm:string){
      return this.getAllFilms().filter(films => films.title.toLowerCase().includes(searchTerm.toLowerCase()))
    }


    getFilmById(filmId: number): Film {
      const film = this.films.find(film => film.id === filmId);
      if (!film) {
          throw new Error('Film introuvable');
      } else {
          return film;
      }
    }

}

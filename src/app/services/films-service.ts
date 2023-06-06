import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
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
},
{
  id: 5,
  title: "Asteroid City",
real: "Wes Anderson",
  description: "Asteroid City est une ville minuscule, en plein désert, dans le sud-ouest des États-Unis. Nous sommes en 1955. Le site est surtout célèbre pour son gigantesque cratère de météorite et son observatoire astronomique à proximité.",
  imageUrl: "https://fr.web.img6.acsta.net/pictures/23/05/12/12/18/5000360.jpg",
  createdDate: new Date("2023-07-15"),
  stars: 2,
  buttonText: "Like!",
price: 20.99
},
{
  id: 6,
  title: "Le secret des poignards volants",
real: "Zhang Yimou",
  description: "Aucune données pour le film.",
  imageUrl: "https://fr.web.img6.acsta.net/medias/nmedia/18/35/32/32/18397195.jpg",
  createdDate: new Date("2004-09-18"),
  stars: 4,
  buttonText: "Unlike!",
price: 15.99
},
{
  id: 7,
  title: "Kids Return",
real: "Takeshi Kitano",
  description: "Aucune données pour le film.",
  imageUrl: "https://fr.web.img6.acsta.net/pictures/17/07/17/12/38/267316.jpg",
  createdDate: new Date("1996-09-18"),
  stars: 5,
  buttonText: "Unlike!",
price: 15.99
}
];

  constructor(private http:HttpClient) {}

  addFilmToDB(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<Film> {
    return this.getAllFilmsFromDB().pipe(
         map(films => [...films].sort((a,b) => a.id - b.id)),
         map(sortedFilms => sortedFilms[sortedFilms.length - 1]),
         map(previousFilm => ({
            ...formValue,
            real: "test",
            buttonText: "Like!",
            price: 20.99,
            stars: 0,
            createdDate: new Date(),
            id: previousFilm.id + 1
        })),
        switchMap(newFilm => this.http.post<Film>(
            'http://localhost:3000/films',
            newFilm)
        )
    );
  }

  getAllFilmsFromDB(): Observable<Film[]> {
    return this.http.get<Film[]>('http://localhost:3000/films');
  }

  getFilmsByIdFromDB(filmsId: number): Observable<Film> {
    return this.http.get<Film>(`http://localhost:3000/films/${filmsId}`);
  }

  changeFilmByIdFromDB(filmId: number, filmType: 'Like!' | 'Unlike!'): Observable<Film> {
    return this.getFilmsByIdFromDB(filmId).pipe(
        map(films => ({
            ...films,
            films: films.stars + (filmType === 'Like!' ? 1 : -1)
        })),
        switchMap(updatedFilm => this.http.put<Film>(
            `http://localhost:3000/films/${filmId}`,
            updatedFilm)
        )
    );
}

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

    getFilmByName(filmName: string): Film {
      const film = this.films.find(film => film.title === filmName);
      if (!film) {
          throw new Error('Film introuvable');
      } else {
          return film;
      }
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

import { Component, OnInit } from '@angular/core';
import { Profile } from '../../../models/Profile';
import { ProfileService } from '../../../services/profile-service';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../../models/Film';
import { FilmsService } from '../../../services/films-service';
import { Observable, concatMap, filter, map } from 'rxjs';

@Component({
  selector: 'app-single-profile',
  templateUrl: './single-profile.component.html',
  styleUrls: ['./single-profile.component.scss']
})
export class SingleProfileComponent implements OnInit {
  profile!: Profile;
  filmsVu !: number;
  pseudo !: string;
  imageUrl !: string;
  bio !: string;
  film1!: Film;
  film2!: Film;
  film3!: Film;
  film4!: Film;

  constructor(private profileService: ProfileService,
    private route: ActivatedRoute,
    private filmService: FilmsService) { }

  ngOnInit(): void {
    const profileId = +this.route.snapshot.params['id'];

    //RECUPERER PROFILE
    this.profileService.getProfilesByIdFromDB(profileId).pipe(
      filter(profile => profile.id === profileId)

    ).subscribe((response) => {
      this.profile = response;
    });

    //RECUPERER FILMS 1
    this.profileService.getProfilesByIdFromDB(profileId).pipe(
      map(({ filmpref1 }) => filmpref1),

    ).subscribe((response) => {
      (this.filmService.getFilmsByIdFromDB(response).pipe(
        filter(film => film.id === response)

      ).subscribe((reponse) => {
        this.film1 = reponse;
      }));

    });

    //FILM2
    this.profileService.getProfilesByIdFromDB(profileId).pipe(
      map(({ filmpref2 }) => filmpref2),

    ).subscribe((response) => {
      (this.filmService.getFilmsByIdFromDB(response).pipe(
        filter(film => film.id === response)

      ).subscribe((reponse) => {
        this.film2 = reponse;
      }));

    });

    //FILM3
    this.profileService.getProfilesByIdFromDB(profileId).pipe(
      map(({ filmpref3 }) => filmpref3),

    ).subscribe((response) => {
      (this.filmService.getFilmsByIdFromDB(response).pipe(
        filter(film => film.id === response)

      ).subscribe((reponse) => {
        this.film3 = reponse;
      }));

    });


    //FILM4
    this.profileService.getProfilesByIdFromDB(profileId).pipe(
      map(({ filmpref4 }) => filmpref4),

    ).subscribe((response) => {
      (this.filmService.getFilmsByIdFromDB(response).pipe(
        filter(film => film.id === response)

      ).subscribe((reponse) => {
        this.film4 = reponse;
      }));

    });
  }
}

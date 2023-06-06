import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, filter, map } from 'rxjs/operators';
import { Film } from 'src/app/models/Film';
import { Profile } from 'src/app/models/Profile';
import { AuthService } from 'src/app/services/auth-service';
import { FilmsService } from 'src/app/services/films-service';
import { ProfileService } from 'src/app/services/profile-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  profile!: Profile;
  isModif!: boolean;
  profileId!: number;
  filmsVu !: number;
  pseudo !: string;
  imageUrl !: string;
  bio !: string;
  film1!: Film;
  film2!: Film;
  film3!: Film;
  film4!: Film;

  constructor(private profileService: ProfileService,
    private auth:AuthService,
    private filmService: FilmsService) {
//RECUPERER PROFILE
this.profileService.getAllProfilesFromDB().pipe(
  concatMap( pseudo  => pseudo),
  filter(profile => profile.pseudo === this.auth.getPseudo())

).subscribe((response) => {
  this.profile = response;
  this.profileId = response.id;
});
    }

ngOnInit(): void {
  this.isModif = false;

  setTimeout(() =>{

//RECUPERER FILMS 1
this.profileService.getProfilesByIdFromDB(this.profileId).pipe(
  map(({ filmpref1 }) => filmpref1),

).subscribe((response) => {
  (this.filmService.getFilmsByIdFromDB(response).pipe(
    filter(film => film.id === response)

  ).subscribe((reponse) => {
    this.film1 = reponse;
  }));

});

//FILM2
this.profileService.getProfilesByIdFromDB(this.profileId).pipe(
  map(({ filmpref2 }) => filmpref2),

).subscribe((response) => {
  (this.filmService.getFilmsByIdFromDB(response).pipe(
    filter(film => film.id === response)

  ).subscribe((reponse) => {
    this.film2 = reponse;
  }));

});

//FILM3
this.profileService.getProfilesByIdFromDB(this.profileId).pipe(
  map(({ filmpref3 }) => filmpref3),

).subscribe((response) => {
  (this.filmService.getFilmsByIdFromDB(response).pipe(
    filter(film => film.id === response)

  ).subscribe((reponse) => {
    this.film3 = reponse;
  }));

});


//FILM4
this.profileService.getProfilesByIdFromDB(this.profileId).pipe(
  map(({ filmpref4 }) => filmpref4),

).subscribe((response) => {
  (this.filmService.getFilmsByIdFromDB(response).pipe(
    filter(film => film.id === response)

  ).subscribe((reponse) => {
    this.film4 = reponse;
  }));

});
}, 1000);
}//FIN NGONIT

modifierBio():void {
  this.isModif = true;
}

modifierBioChangement(areaInput: string): void {
  this.profile.bio = areaInput;
  this.profileService.changeBioToDB(this.profile);
  console.log("changement : " + areaInput);
  this.isModif = false;
}

get modif(){
  return this.isModif;
}

}

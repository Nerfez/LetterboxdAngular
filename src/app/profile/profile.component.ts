import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile-service';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../models/Profile';
import { AuthService } from '../services/auth-service';
import { Film } from '../models/Film';
import { FilmsService } from '../services/films-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  profile!:Profile;
  films: Film[]=[];

  constructor(private profileService:ProfileService, activatedRoute:ActivatedRoute,
    private auth: AuthService, private filmService: FilmsService){
    activatedRoute.params.subscribe((params) => {
      this.profile = this.profileService.getProfileByPseudo(auth.getPseudo());
      this.films.push(this.filmService.getFilmByName(this.profile.filmpref1));
      this.films.push(this.filmService.getFilmByName(this.profile.filmpref2));
      this.films.push(this.filmService.getFilmByName(this.profile.filmpref3));
      this.films.push(this.filmService.getFilmByName(this.profile.filmpref4));
    });
}


ngOnInit(): void {

}

}

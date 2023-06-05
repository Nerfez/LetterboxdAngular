import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/Profile';
import { ProfileService } from '../services/profile-service';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../models/Film';
import { FilmsService } from '../services/films-service';

@Component({
  selector: 'app-single-profile',
  templateUrl: './single-profile.component.html',
  styleUrls: ['./single-profile.component.scss']
})
export class SingleProfileComponent implements OnInit{
  profile!: Profile;
  films: Film[]=[];

  constructor(private profileService: ProfileService,
              private route: ActivatedRoute,
              private filmService: FilmsService) {}

                ngOnInit(): void {
                  const profileId = +this.route.snapshot.params['id'];
                this.profile = this.profileService.getProfileById(profileId);
                this.films.push(this.filmService.getFilmByName(this.profile.filmpref1));
      this.films.push(this.filmService.getFilmByName(this.profile.filmpref2));
      this.films.push(this.filmService.getFilmByName(this.profile.filmpref3));
      this.films.push(this.filmService.getFilmByName(this.profile.filmpref4));
                }

}

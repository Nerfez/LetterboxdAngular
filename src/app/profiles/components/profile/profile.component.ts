import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  profile!:Profile;
  films: Film[]=[];

  constructor(private profileService:ProfileService, activatedRoute:ActivatedRoute,
    private auth: AuthService, private filmService: FilmsService){
    activatedRoute.params.subscribe((params) => {
      this.profile = this.profileService.getProfileByPseudo(auth.getPseudo());
    });
}


ngOnInit(): void {

}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile-service';

@Component({
  selector: 'app-liste-profile',
  templateUrl: './liste-profile.component.html',
  styleUrls: ['./liste-profile.component.scss']
})
export class ListeProfileComponent implements OnInit{
  //profiles:Profile[]=[];
  profiles$!: Observable<Profile[]>;

  constructor(private profilesService:ProfileService, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params) => {
      this.profiles$ = this.profilesService.getAllProfilesFromDB();

    });
}

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/Profile';
import { ProfileService } from '../services/profile-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  profile:Profile[]=[];

  constructor(private profileService:ProfileService, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params) => {
      this.profile = this.profileService.getAllProfile();
    });
}


ngOnInit(): void {

}

}

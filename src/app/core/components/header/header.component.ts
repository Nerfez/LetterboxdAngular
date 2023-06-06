import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap, filter, map } from 'rxjs';
import { Profile } from 'src/app/models/Profile';
import { AuthService } from 'src/app/services/auth-service';
import { ProfileService } from 'src/app/services/profile-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  searchTerm ='';
  profile!: Profile;

  constructor(activatedRoute:ActivatedRoute,private router:Router,
   private profileService:ProfileService, private auth: AuthService){
    activatedRoute.params.subscribe((params)=>{
      if(params['searchTerm'])
      this.searchTerm = params['searchTerm'];

    });

    //RECUPERER PROFILE
    this.profileService.getAllProfilesFromDB().pipe(
      concatMap( pseudo  => pseudo),
      filter(profile => profile.pseudo === auth.getPseudo())

    ).subscribe((response) => {
      this.profile = response;
    });
  }

  ngOnInit(): void {
//RECUPERER PROFILE
this.profileService.getAllProfilesFromDB().pipe(
  concatMap( pseudo  => pseudo),
  filter(profile => profile.pseudo === this.auth.getPseudo())

).subscribe((response) => {
  this.profile = response;
});
  }

  myProfile(): void {
    this.router.navigateByUrl('/profile/'+this.profile.id);
  }

  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+term);
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('');
  }

  get isAdminLogged(){
    return this.auth.AdminloggedIn;
}

  get isLogged(){
    return this.auth.loggedIn;
}

}

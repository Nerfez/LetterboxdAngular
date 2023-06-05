import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';
import { ProfileService } from 'src/app/services/profile-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  searchTerm ='';

  constructor(activatedRoute:ActivatedRoute,private router:Router,
   private profileService:ProfileService, private auth: AuthService){
    activatedRoute.params.subscribe((params)=>{
      if(params['searchTerm'])
      this.searchTerm = params['searchTerm'];
    });
  }

  ngOnInit(): void {

  }

  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+term);
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('');
  }

}

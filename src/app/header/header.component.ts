import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from '../models/Profile';
import { ProfileService } from '../services/profile-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  searchTerm ='';

  constructor(activatedRoute:ActivatedRoute,private router:Router,
   private profileService:ProfileService){
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

}

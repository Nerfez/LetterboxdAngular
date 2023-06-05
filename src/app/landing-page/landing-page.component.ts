import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(private router:Router){
    document.body.style.backgroundImage = "url('https://3238leblogdemarvelll-1278.kxcdn.com/wp-content/uploads/2016/12/rogue-one-a-star-wars-story-banniere.jpg')";
    document.body.style.backgroundPosition = "center -15px";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }
  ngOnDestroy(){
    document.body.style.backgroundImage = "none";
  }

  connecting(){
    this.router.navigateByUrl('auth/login');
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guards';
import { ProfileComponent } from './components/profile/profile.component';
import { SingleProfileComponent } from './components/single-profile/single-profile.component';
import { ListeProfileComponent } from './components/liste-profile/liste-profile.component';

const routes: Routes = [
  {path:'profile/:id', component:ProfileComponent, canActivate: [AuthGuard]},
  {path:'profiles/:id', component:SingleProfileComponent, canActivate: [AuthGuard]},
  {path:'profiles', component:ListeProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesRouting {}

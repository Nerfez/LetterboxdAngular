import { Injectable } from "@angular/core";
import { Profile } from "../models/Profile";
import { ProfileService } from "./profile-service";
import { concatMap, filter } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private profileService: ProfileService) { }

  login(username: string, password: string): boolean {
    if (username != "Admin" && username != null) {
      this.profileService.getAllProfilesFromDB().pipe(
        concatMap(profile => profile),
        filter(profile => profile.pseudo === username && profile.pass === password)

      ).subscribe((response) => {
        localStorage.setItem('currentUser', username);
      });
      return true;
    }
    else if (username == "Admin" && password == "Admin123") {
      localStorage.setItem('adminUser', 'Admin');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('adminUser');
  }

  public get AdminloggedIn(): boolean {
    return (localStorage.getItem('adminUser') !== null);
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }

  getPseudo(): string | null {
    if (localStorage.getItem('currentUser') != null)
      return (localStorage.getItem('currentUser'));
    else {
      return '';
    }
  }

}

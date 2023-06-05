import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username: string, password: string): boolean{
    if(username == "admin" && password == "Admin123") {
      localStorage.setItem('currentUser', "loggedin");
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }

}

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username: string, password: string): boolean{
    if(username == "Zefren" && password == "Admin123") {
      localStorage.setItem('currentUser', username);
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

  getPseudo(): string | null{
    if(localStorage.getItem('currentUser') != null)
    return (localStorage.getItem('currentUser'));
    else {
      return '';
    }
  }

}

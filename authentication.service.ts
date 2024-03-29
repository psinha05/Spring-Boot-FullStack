import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if(username === "admin" && password === "admin123") {
      sessionStorage.setItem('username', username)
      alert("login successfully!!!");
      return true;
     } else {
      alert("Please check the credentials!");
        return false;
      }
    }
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}

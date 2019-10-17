import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


export class Users {
  constructor(
    public id:number,
    public firstName:string,
    public lastName:string,
    public email:string,
  ) {}
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) 
  {
  }

  getUsers() {
 console.log("Test the calling to the HttpClient Request");
 return this.httpClient.get<User[]>('http://localhost:8080/users');
  }


  public createUser(user) {
    return this.httpClient.post<User>("http://localhost:8080/create", user);
  }





}






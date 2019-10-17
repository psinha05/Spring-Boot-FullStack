import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private baseUrl  =  '/api/v1/users';
  private baseUrl = 'http://localhost:8080/api/users';  
  
  constructor(private http: HttpClient) { }

  getUserList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createUser(user: object): Observable<Object> {
    return this.http.post('${this.baseUrl}', user);
  }
}

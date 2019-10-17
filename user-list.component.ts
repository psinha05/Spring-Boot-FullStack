import { Component, OnInit } from '@angular/core';
import { UserService } from "./../user.service";
import  {  User } from "./../user";
import { Observable } from 'rxjs';
import { HttpClientService, Users } from '../http-client.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //users: Observable<User[]>;
  //users:string[];

  users: Users[];

   constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getUsers().subscribe(response =>{ this.users = response; }
    );
  }
  //handleSuccessResponse(response) {
   //this.users=response;

  //}

}

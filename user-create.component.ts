import { Component, OnInit } from '@angular/core';

import { User } from './../user';
import { UserService } from './../user.service';
import { HttpClientService } from '../http-client.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();
  
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
  }

  createUser(): void {
    this.httpClientService.createUser(this.user).subscribe( data => {
      alert("User Created Successfully");
    }      
   );

  };

}

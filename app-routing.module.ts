import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [

  //{ path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: '', component: UserListComponent },
  { path: 'add', component: UserCreateComponent },
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { IndexComponent } from './index.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path:'',component:IndexComponent,
    children:[
      {
        path:'',redirectTo:'add',pathMatch:'full'
      },
      {
        path:'add',component:AddUserComponent
      },
      {
        path:'list',component:UserListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

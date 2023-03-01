import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full',
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'forgot',component:ForgotComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

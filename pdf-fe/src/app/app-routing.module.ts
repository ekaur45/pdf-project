import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'account',
    loadChildren:()=>import("./account/account.module").then(x=>x.AccountModule)
  },
  {
    path:'',
    loadChildren:()=>import('./main/main.module').then(x=>x.MainModule),canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

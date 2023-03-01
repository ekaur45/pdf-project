import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'account',
    loadChildren:()=>import("./account/account.module").then(x=>x.AccountModule)
  },
  {
    path:'',
    loadChildren:()=>import('./main/main.module').then(x=>x.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

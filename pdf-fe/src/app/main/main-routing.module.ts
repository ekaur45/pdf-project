import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';

const routes: Routes = [
  {
    path:'',component:IndexComponent,
    children:[
      {
        path:'user',loadChildren:()=>import("./users/users.module").then(x=>x.UsersModule)
      },
      {
        path:'booking',loadChildren:()=>import("./booking/booking.module").then(x=>x.BookingModule)
      },
      {
        path:'exchange',loadChildren:()=>import("./exchange/exchange.module").then(x=>x.ExchangeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

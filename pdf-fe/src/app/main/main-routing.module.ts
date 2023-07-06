import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';

const routes: Routes = [
  {
    path:'',component:IndexComponent,
    children:[
      {path:'',component:DashboardComponent},
      {
        path:'user',loadChildren:()=>import("./users/users.module").then(x=>x.UsersModule)
      },
      {
        path:'booking',loadChildren:()=>import("./booking/booking.module").then(x=>x.BookingModule)
      },
      {
        path:'exchange',loadChildren:()=>import("./exchange/exchange.module").then(x=>x.ExchangeModule)
      },
      {
        path:'other',loadChildren:()=>import("./other/other.module").then(x=>x.OtherModule)
      },
      {
        path:'statistics',loadChildren:()=>import("./statistics/statistics.module").then(x=>x.StatisticsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

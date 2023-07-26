import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRateComponent } from './add-rate/add-rate.component';
import { IndexComponent } from './index.component';
import { CurrencyComponent } from './currency/currency.component';

const routes: Routes = [{
  path:'',component:IndexComponent,children:[
    {
      path:'rates',component:AddRateComponent
    },
    {
      path:'currency',component:CurrencyComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRoutingModule { }

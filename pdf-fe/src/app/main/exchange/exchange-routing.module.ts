import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRateComponent } from './add-rate/add-rate.component';
import { IndexComponent } from './index.component';

const routes: Routes = [{
  path:'',component:IndexComponent,children:[
    {
      path:'',component:AddRateComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsLayoutComponent } from './statistics-layout/statistics-layout.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {
    path:'',component:StatisticsLayoutComponent,children:[
      {
        path:'',redirectTo:'stats',pathMatch:'full'
      },
      {
        path:'stats',component:StatisticsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }

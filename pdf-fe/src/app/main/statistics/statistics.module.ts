import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsLayoutComponent } from './statistics-layout/statistics-layout.component';
import { StatisticsComponent } from './statistics/statistics.component';


@NgModule({
  declarations: [
    StatisticsLayoutComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }

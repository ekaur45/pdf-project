import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRoutingModule } from './exchange-routing.module';
import { IndexComponent } from './index.component';
import { AddRateComponent } from './add-rate/add-rate.component';


@NgModule({
  declarations: [
    IndexComponent,
    AddRateComponent
  ],
  imports: [
    CommonModule,
    ExchangeRoutingModule
  ]
})
export class ExchangeModule { }

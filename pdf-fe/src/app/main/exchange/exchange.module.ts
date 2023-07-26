import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRoutingModule } from './exchange-routing.module';
import { IndexComponent } from './index.component';
import { AddRateComponent } from './add-rate/add-rate.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CurrencyComponent } from './currency/currency.component';


@NgModule({
  declarations: [
    IndexComponent,
    AddRateComponent,
    CurrencyComponent
  ],
  imports: [
    CommonModule,
    ExchangeRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ExchangeModule { }

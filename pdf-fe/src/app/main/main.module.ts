import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './index.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgSelect2Module } from 'ng-select2';
import { CCurrencyPipe } from '../pipes/c-currency.pipe';
@NgModule({
  declarations: [
    IndexComponent,
    DashboardComponent,
    CCurrencyPipe
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelect2Module
  ],
  providers:[]
})
export class MainModule { }

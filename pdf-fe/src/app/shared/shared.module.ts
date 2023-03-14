import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { NgSelect2Module } from 'ng-select2';


@NgModule({
  declarations: [
    ConfirmPopupComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    NgSelect2Module,
  ],
  exports:[
    DatePickerComponent,
    NgSelect2Module,
  ]
})
export class SharedModule { }

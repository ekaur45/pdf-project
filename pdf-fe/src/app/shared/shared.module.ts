import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';
import { DatePickerComponent } from './date-picker/date-picker.component';


@NgModule({
  declarations: [
    ConfirmPopupComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],
  exports:[
    DatePickerComponent
  ]
})
export class SharedModule { }

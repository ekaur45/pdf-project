import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';


@NgModule({
  declarations: [
    ConfirmPopupComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }

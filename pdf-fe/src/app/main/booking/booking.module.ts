import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { IndexComponent } from './index.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { NgSelect2Module } from 'ng-select2';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
@NgModule({
  declarations: [
    IndexComponent,
    AddBookingComponent,
    BookingListComponent,
    EditBookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    
    NgbDatepickerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  providers: [  
    MatDatepickerModule,  
  ],
})
export class BookingModule { }

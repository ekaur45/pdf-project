import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsLayoutComponent } from './statistics-layout/statistics-layout.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StatisticsLayoutComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,

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
  providers:[
    MatDatepickerModule
  ]
})
export class StatisticsModule { }

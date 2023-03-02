import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { IndexComponent } from './index.component';
import { AddDestinationComponent } from './add-destination/add-destination.component';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { AddRoomTypeComponent } from './add-room-type/add-room-type.component';
import { RoomTypeListComponent } from './room-type-list/room-type-list.component';


@NgModule({
  declarations: [
    IndexComponent,
    AddDestinationComponent,
    DestinationListComponent,
    AddHotelComponent,
    HotelListComponent,
    AddRoomTypeComponent,
    RoomTypeListComponent
  ],
  imports: [
    CommonModule,
    OtherRoutingModule,
    FormsModule
  ]
})
export class OtherModule { }

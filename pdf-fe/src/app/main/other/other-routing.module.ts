import { AddRoomTypeComponent } from './add-room-type/add-room-type.component';
import { RoomTypeListComponent } from './room-type-list/room-type-list.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { AddDestinationComponent } from './add-destination/add-destination.component';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { FeaturesComponent } from './features/features.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';

const routes: Routes = [
  {
    path:'',component:IndexComponent,children:[
      {
        path:'destinations',component:DestinationListComponent
      },
      {
        path:'add-destination',component:AddDestinationComponent
      },{
        path:'hotels',component:HotelListComponent
      },
      {
        path:'add-hotel',component:AddHotelComponent
      },
      {
        path:'room-types',component:RoomTypeListComponent
      },{
        path:'add-room-type',component:AddRoomTypeComponent
      },
      {
        path:'featurs',component:FeaturesComponent
      },
      {
        path:'terms-and-conditions',component:TermsandconditionsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }

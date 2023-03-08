import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { IndexComponent } from './index.component';

const routes: Routes = [
  {
    path:'',component:IndexComponent,
    children:[
      {
        path:'',redirectTo:'add',pathMatch:'full'
      },
      {
        path:'add',component:AddBookingComponent
      },
      {
        path:'edit/:id',component:EditBookingComponent
      },
      {
        path:'list',component:BookingListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }

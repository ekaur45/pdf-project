import { AddBooking, BookingDestination, BookingFlight, BookingHotel } from './models/add-booking.model';
import { ApiService } from './../../../utils/api.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  hotels:any=[];
  roomTypes:any = [];
  destinationData:any = [];
  model:AddBooking = new AddBooking();
  destinationList:AddBooking[] = [];
  constructor(private api:ApiService) {
    this.model = new AddBooking();
    this.destinationList = [];
   }

  ngOnInit(): void {
    this.getHotels();
    this.getRoomTypes();
    this.getDestination();
  }
  
  onAddDestination(){
    this.destinationList.push({...this.model});
    this.model.destination = new BookingDestination();
    this.model.flight = new BookingFlight();
    this.model.hotel = new BookingHotel();
  }
  getDestination(){
    this.api.get('booking/destination').subscribe(x=>{
      if(x.status == 200) this.destinationData = x.data;
    })
  }
  getHotels(){
    this.api.get('util/hotels').subscribe(x=>{
      if(x.status ==200){
        this.hotels = x.data;
      }
    })
  }
  getRoomTypes(){
    this.api.get('util/roomtypes').subscribe(x=>{
      if(x.status ==200){
        this.roomTypes = x.data;
      }
    })
  }
  onFormSubmit(){
    
    this.api.post('booking/add',{booking:this.model,list:this.destinationList}).subscribe(x=>{
      if(x.status == 200){
        alert("Added");
      }
    })
  }
}

import { Booking } from './../add-booking/models/booking-response.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/utils/api.service';
import { AddBooking } from '../add-booking/models/add-booking.model';
import { BookingDestination, BookingFlight, BookingHotel, EditBooking } from '../add-booking/models/edit-booking.model';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {
  hotels:any=[];
  roomTypes:any = [];
  destinationData:any = [];
  model:EditBooking = new EditBooking();
  destinationList:EditBooking[] = [];
  id: any;
  data: any={};
  constructor(private ar:ActivatedRoute,private api:ApiService) { 
    ar.params.subscribe(x=>{
      if(x["id"]>0){
        this.id = x["id"];
        this.getData();
      }
    })
  }

  ngOnInit(): void {
    this.getHotels();
    this.getRoomTypes();
    this.getDestination();
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
  getData() {
    this.api.get('booking/getbyid?id='+this.id).subscribe(x=>{
      if(x.status == 200){
        var result = x.data as Booking;
        
        this.id=result.id;
        this.model.agentName=result.agentName;
        this.model.staffName=result.staffName;
        this.model.date=result.date;
        this.model.orderNo=result.orderNo;
        this.model.passengers=result.passengers;
        this.model.nights=result.nights;
        this.model.departure=result.departure;
        this.model.arrival=result.arrival;
        this.model.customerName=result.customerName;
        this.model.price=result.price;
        this.model.discount=result.discount;
        this.model.extraCharges=result.extraCharges;
        this.model.totalPrice=result.totalPrice;
        for (let i = 0; i < result.offers.length; i++) {
          const el = result.offers[i];
          var _destination = new BookingDestination();
          _destination.destination = el.destinationName;
          _destination.dateFrom = el.destinationFrom;
          _destination.dateTo = el.destinationTo;

          var _flight = new BookingFlight();
          _flight.dateFrom = el.flightDateFrom;
          _flight.dateTo = el.flightDateTo;
          _flight.from = el.flightFrom;
          _flight.to = el.flightTo;

          var _hotel = new BookingHotel();
          _hotel.bookingNo = el.bookingNo;
          _hotel.hotel = el.hotel;
          _hotel.nights = el.nights;
          _hotel.roomType = el.roomType;
          var _edit = new EditBooking();
          _edit.destination = _destination;
          _edit.flight=_flight;
          _edit.hotel=_hotel;
          this.destinationList.push({..._edit});
        }
        //this.destinationList = x.data.offers as any;
      }
    })
  }
  onAddDestination(){
    this.destinationList.push({...this.model});
    this.model.destination = new BookingDestination();
    this.model.flight = new BookingFlight();
    this.model.hotel = new BookingHotel();
  }
  onFormSubmit(){

  }
 
}


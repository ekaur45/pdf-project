import { AddBooking, BookingDestination, BookingFlight, BookingHotel } from './models/add-booking.model';
import { ApiService } from './../../../utils/api.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
declare const $:any;
@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  agentControl = new FormControl('');
  hotels:any=[];
  roomTypes:any = [];
  destinationData:any = [];
  model:AddBooking = new AddBooking();
  destinationList:AddBooking[] = [];
  agents: any = [];
  staffs: any = [];
  features: any [] = [];
  constructor(private api:ApiService) {
    this.model = new AddBooking();
    this.destinationList = [];
   }

  ngOnInit(): void {
    this.getFeatures();
    //this.getHotels();
    this.getRoomTypes();
    this.getDestination();
    this.getAgents();
    this.getStaffs();
    //$("select").select2();
    // $(document).ready(function(){
    //   setTimeout(() => {
    //     $(".flatpickr-minimum").datepicker();
    //   }, 1000);
    // })
  }
  
  onAddDestination(){
    this.destinationList.push({...this.model});
    this.model.destination = new BookingDestination();
    this.model.flight = new BookingFlight();
    this.model.hotel = new BookingHotel();
  }
  getDestination(){
    this.api.get('booking/destination').subscribe(x=>{
      if(x.status == 200) this.destinationData = x.data.map((c:any)=>{ return {id:c.id,text:c.display}});
    })
  }
  getHotels(id:any){
    this.api.get('util/hotels?id='+id).subscribe(x=>{
      if(x.status ==200){
        this.hotels = x.data.map((c:any)=>{ return {id:c.id,text:c.name}});
      }
    })
  }
  getStaffs(){
    this.api.get('util/staffs').subscribe(x=>{
      if(x.status ==200){
        this.staffs = x.data.map((c:any)=>{ return {id:c.id,text:c.firstName}});
      }
    })
  }
  getAgents(){
    this.api.get('util/agents').subscribe(x=>{
      if(x.status ==200){
        this.agents = x.data.map((c:any)=>{ return {id:c.id,text:c.firstName}});
      }
    })
  }
  getRoomTypes(){
    this.api.get('util/roomtypes').subscribe(x=>{
      if(x.status ==200){
        this.roomTypes = x.data.map((c:any)=>{ return {id:c.id,text:c.display}});
      }
    })
  }

  getFeatures(){
    this.api.get('util/feature').subscribe((x:any)=>{
      if(x.status == 200){
        this.features = x.data;
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
  onPriceChange(){
    let price = this.model.price;
    let discount = this.model.discount;
    let xCharges =  this.model.extraCharges;
    this.model.totalPrice = (price + xCharges) - (discount * price)/100 ;
  }
  onDateChange(e:any){
    
  }
  removeRow(ndx:number){
    this.destinationList.splice(ndx,1);
  }
  onDestinationChange(e:any){
    this.getHotels(e)
//console.log(e);
  }
}

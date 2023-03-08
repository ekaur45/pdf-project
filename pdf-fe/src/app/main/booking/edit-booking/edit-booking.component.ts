import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/utils/api.service';
import { AddBooking } from '../add-booking/models/add-booking.model';
import { EditBooking } from '../add-booking/models/edit-booking.model';

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
  }
  getData() {
    this.api.get('booking/getbyid?id='+this.id).subscribe(x=>{
      if(x.status == 200){
        debugger
        this.model = x.data as EditBooking;
        this.destinationList = x.data.offers as any;
      }
    })
  }

  onFormSubmit(){

  }
  onAddDestination(){

  }
}


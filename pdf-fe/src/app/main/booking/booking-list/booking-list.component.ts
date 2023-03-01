import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/utils/api.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  list:any[] = [];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getBookings();
  }
  getBookings(){
    this.api.get('booking/all').subscribe(x=>{
      this.list = x.data as any[];
    })
  }
}

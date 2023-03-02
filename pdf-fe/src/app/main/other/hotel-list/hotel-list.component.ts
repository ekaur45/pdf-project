import { ApiService } from 'src/app/utils/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  name:string = "";
  data:any;
  constructor(private api:ApiService) { 

    this.data = [];
  }

  ngOnInit(): void {
    this.get();
  }
  add(){
    this.api.post('booking/hotel',{name:this.name}).subscribe(x=>{
      this.name ="";
      if(x.status == 200) this.get();
    })
  }
  get(){
    this.api.get('booking/hotel').subscribe(x=>{
      if(x.status == 200) this.data = x.data;
    })
  }
}

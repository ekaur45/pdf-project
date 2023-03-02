import { ApiService } from 'src/app/utils/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-type-list',
  templateUrl: './room-type-list.component.html',
  styleUrls: ['./room-type-list.component.css']
})
export class RoomTypeListComponent implements OnInit {

  name:string = "";
  data:any;
  constructor(private api:ApiService) { 

    this.data = [];
  }

  ngOnInit(): void {
    this.get();
  }
  add(){
    this.api.post('booking/room-types',{name:this.name}).subscribe(x=>{
      this.name ="";
      if(x.status == 200) this.get();
    })
  }
  get(){
    this.api.get('booking/room-types').subscribe(x=>{
      if(x.status == 200) this.data = x.data;
    })
  }
}

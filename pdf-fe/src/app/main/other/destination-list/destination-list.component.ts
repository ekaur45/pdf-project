import { ApiService } from 'src/app/utils/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {
  name:string = "";
  data:any;
  constructor(private api:ApiService) { 

    this.data = [];
  }

  ngOnInit(): void {
    this.get();
  }
  add(){
    this.api.post('booking/destination',{name:this.name}).subscribe(x=>{
      this.name ="";
      if(x.status == 200) this.get();
    })
  }
  get(){
    this.api.get('booking/destination').subscribe(x=>{
      if(x.status == 200) this.data = x.data;
    })
  }

}

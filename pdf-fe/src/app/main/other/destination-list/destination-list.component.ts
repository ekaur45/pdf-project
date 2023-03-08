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
  isEdit:boolean = false;
  editData:any ={};
  constructor(private api:ApiService) { 

    this.data = [];
  }

  ngOnInit(): void {
    this.get();
  }
  add(){
    if(this.isEdit) return this.update();
    this.api.post('booking/destination',{name:this.name}).subscribe(x=>{
      this.name ="";
      if(x.status == 200) this.get();
    })
  }
  update(){
    this.api.post('util/update-destination',{id:this.editData.id,name:this.name}).subscribe(x=>{
      this.name ="";
      this.cancel();
      if(x.status == 200) this.get();
    })
  }
  get(){
    this.api.get('booking/destination').subscribe(x=>{
      if(x.status == 200) this.data = x.data;
    })
  }
  onDelete (id:number){
    this.api.get('util/delete-destination?id='+id).subscribe(x=>{
      if(x.status == 200) this.get();
    })
  }
  onEdit(r:any){
    this.editData = r;
    this.name = r.display;
    this.isEdit = true;
  }
  cancel(){
    this.editData = {};
    this.name = "";
    this.isEdit =false;
  }
}

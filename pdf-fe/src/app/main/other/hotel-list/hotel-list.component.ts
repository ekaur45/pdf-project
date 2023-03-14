import { ApiService } from 'src/app/utils/api.service';
import { Component, OnInit } from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  name:string = "";
  data:any;
  isEdit:boolean = false;
  editData:any ={};
  deleteobj:any ={};
  destinationData:any[] = [];
  destination:number = 0;
  destinationName:string  = "";
  constructor(private api:ApiService) { 

    this.data = [];
  }

  ngOnInit(): void {
    this.getDestination();
    this.get();
  }
  getDestination(){
    this.api.get('booking/destination').subscribe(x=>{
      if(x.status == 200) this.destinationData = x.data.map((c:any)=>{ return {id:c.id,text:c.display}});
    })
  }
  add(){
    if(this.isEdit) return this.update();
    this.api.post('booking/hotel',{name:this.name,destination:this.destination}).subscribe(x=>{
      this.name ="";
      if(x.status == 200) this.get();
    })
  }
  update(){
    this.api.post('util/update-hotel',{id:this.editData.id,name:this.name,destination:this.destination}).subscribe(x=>{
      this.name ="";
      this.cancel();
      if(x.status == 200) this.get();
    })
  }
  get(){
    this.api.get('booking/hotel').subscribe(x=>{
      if(x.status == 200) this.data = x.data;
    })
  }
  onDeleteConfirm(id:number){
    this.api.get('util/delete-hotel?id='+id).subscribe(x=>{
      if(x.status == 200) this.get();
    })
  }
  onDelete (id:any){
    this.deleteobj = id;
    $("#modal-info-confirmed").modal("show")
  }
  onEdit(r:any){
    this.editData = r;
    this.name = r.name;
    this.isEdit = true;
  }
  cancel(){
    this.editData = {};
    this.name = "";
    this.isEdit =false;
  }
  displayDestination(e:string){
    if(this.destinationData.length>0)
    return this.destinationData.filter((x:any)=>x.id == e)[0].text;
    else return "";
  }

  showAddDestinationModal(){
    $("#modal-add-destination").modal("show");
  }

  addDestination(){
    this.api.post('booking/destination',{name:this.destinationName}).subscribe(x=>{
      this.name ="";
      if(x.status == 200) {
        this.getDestination();
        this.get();
      }
    })
  }
}

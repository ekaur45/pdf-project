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
  roomTypeName: string = "";
  roomTypes: any[]=[];
  constructor(private api:ApiService) { 

    this.data = [];
  }

  ngOnInit(): void {
    this.getDestination();
    this.getRoomType();
    this.get();
  }
  getDestination(){
    this.api.get('booking/destination').subscribe(x=>{
      if(x.status == 200) this.destinationData = x.data.map((c:any)=>{ return {id:c.id,text:c.display}});
    })
  }
  add(){
    if(this.isEdit) return this.update();
    let _roomTypes = this.roomTypes.filter(x=>x.checked == true).map(x=>x.id);
    this.api.post('booking/hotel',{name:this.name,destination:this.destination,roomTypes:_roomTypes}).subscribe(x=>{
      this.name ="";
      if(x.status == 200) this.get();
    })
  }
  update(){
    let _roomTypes = this.roomTypes.filter(x=>x.checked == true).map(x=>x.id);
    this.api.post('util/update-hotel',{id:this.editData.id,name:this.name,destination:this.destination,roomTypes:_roomTypes}).subscribe(x=>{
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
    this.destination = r.location;
   this.roomTypes = this.roomTypes.map(x=>{
      let ids = r.roomTypes.map((c:any)=>c.id);
      if(ids.includes(x.id)) x.checked = true;
      return x;
    })
    this.isEdit = true;
  }
  cancel(){
    this.editData = {};
    this.name = "";
    this.destination = 0;

    this.roomTypes = this.roomTypes.map(x=>{
      x.checked = false;
      return x;
    })
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
  showAddRoomTypeModal(){
    $("#modal-add-roomType").modal("show");
  }

  addDestination(){
    this.api.post('booking/destination',{name:this.destinationName}).subscribe(x=>{
      this.destinationName ="";
      if(x.status == 200) {
        this.getDestination();
        this.get();
      }
    })
  }

  addRoomType(){
    if(this.isEdit) return this.update();
    this.api.post('booking/room-types',{name:this.roomTypeName}).subscribe(x=>{
      this.roomTypeName ="";
      if(x.status == 200) {
        this.getRoomType();
      }
    })
  }
  getRoomType(){
    this.api.get('booking/room-types').subscribe(x=>{
      if(x.status == 200) this.roomTypes = x.data;
    })
  }








}

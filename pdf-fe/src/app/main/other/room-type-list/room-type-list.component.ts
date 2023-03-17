import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/utils/api.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
declare const $:any;
@Component({
  selector: 'app-room-type-list',
  templateUrl: './room-type-list.component.html',
  styleUrls: ['./room-type-list.component.css']
})
export class RoomTypeListComponent implements OnInit {
  url = environment.baseUrl;
  name:string = "";
  data:any;
  isEdit:boolean = false;
  editData:any ={};
  deleteobj:any ={};
  file: any;
  constructor(private api:ApiService) { 

    this.data = [];
  }

  ngOnInit(): void {
    this.get();
  }
  add(){
    if(this.isEdit) return this.update();
    var form = new FormData();
    form.append("name",this.name);
    form.append("file",this.file);
    this.api.multiForm('booking/room-types',form).subscribe(x=>{
      this.name ="";
      Swal.fire('Success',x.message);
      if(x.status == 200) this.get();
    })
  }
  update(){
    this.api.post('util/update-room-type',{id:this.editData.id,name:this.name}).subscribe(x=>{
      this.name ="";
      this.cancel();
      Swal.fire('Success',x.message);
      if(x.status == 200) this.get();
    })
  }
  get(){
    this.api.get('booking/room-types').subscribe(x=>{
      if(x.status == 200) this.data = x.data;
    })
  }
  onDeleteConfirm(id:number){
    this.api.get('util/delete-room-type?id='+id).subscribe(x=>{
      Swal.fire('Success',x.message);
      if(x.status == 200) this.get();
    })
  }
  onDelete (id:any){
    this.deleteobj = id;
    $("#modal-info-confirmed").modal("show")
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
  onFileChange(e:any){
    this.file = e.target.files[0];
  }
  
}

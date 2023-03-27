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
  Toast = Swal.mixin({
    customClass:"z1050",
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,    
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }    
  })
  url = environment.baseUrl;
  name:string = "";
  data:any;
  isEdit:boolean = false;
  editData:any ={};
  deleteobj:any ={};
  file: any;
  description:string = "";
  isLoadingList:boolean = false;
  isAdding:boolean = false;
  constructor(private api:ApiService) { 

    this.data = [];
  }

  ngOnInit(): void {
    this.get();
  }
  add(){
    if(!(this.name&&this.description)){
      this.Toast.fire({
        icon:"error",
        text:"All fields are required."
      })
      return;
    }
    if(this.isEdit) return this.update();
    if(!(this.file)){
      this.Toast.fire({
        icon:"error",
        text:"File is required."
      })
      return;
    }
    this.isAdding = true;
    var form = new FormData();
    form.append("name",this.name);
    form.append("file",this.file);
    form.append("description",this.description);
    this.api.multiForm('booking/room-types',form).subscribe(x=>{
      this.isAdding = false;
      this.name ="";
      Swal.fire('Success',x.message);
      if(x.status == 200) this.get();
    })
  }
  update(){
    this.isAdding = true;
    this.api.post('util/update-room-type',{id:this.editData.id,name:this.name,description:this.description}).subscribe(x=>{
      this.isAdding = false;
      this.name ="";
      this.cancel();
      Swal.fire('Success',x.message);
      if(x.status == 200) this.get();
    })
  }
  get(){
    this.isLoadingList = true;
    this.api.get('booking/room-types').subscribe(x=>{
      this.isLoadingList = false;
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
    this.description = r.description;
    this.isEdit = true;
  }
  cancel(){
    this.editData = {};
    this.name = "";
    this.description = "";
    this.isEdit =false;
  }
  onFileChange(e:any){
    this.file = e.target.files[0];
  }
  
}

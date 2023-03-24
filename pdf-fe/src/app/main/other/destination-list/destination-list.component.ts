import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/utils/api.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
declare const $:any;
@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {
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
  file:any;
  constructor(private api:ApiService) { 

    this.data = [];
  }

  ngOnInit(): void {
    this.get();
  }
  add(){
    if(!(this.name)){
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
    var form = new FormData();
    form.append("name",this.name);
    form.append("file",this.file);
    this.api.multiForm('booking/destination',form).subscribe(x=>{
      this.name ="";
      this.file = null;
      if(x.status == 200) this.get();
    })
  }
  update(){
    this.api.post('util/update-destination',{id:this.editData.id,name:this.name}).subscribe(x=>{
      this.name ="";
      this.cancel();
      Swal.fire('Success',x.message);
      if(x.status == 200) this.get();
    })
  }
  get(){
    this.api.get('booking/destination').subscribe(x=>{
      if(x.status == 200) this.data = x.data;
    })
  }
  onDeleteConfirm(id:number){
    this.api.get('util/delete-destination?id='+id).subscribe(x=>{
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

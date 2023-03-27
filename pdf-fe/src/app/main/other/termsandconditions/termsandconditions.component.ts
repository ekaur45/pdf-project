import { ApiService } from './../../../utils/api.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
declare const $:any;
@Component({
  selector: 'app-termsandconditions',
  templateUrl: './termsandconditions.component.html',
  styleUrls: ['./termsandconditions.component.css']
})
export class TermsandconditionsComponent implements OnInit {
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
  name:string = "";
  data:any;
  isEdit:boolean = false;
  editData:any ={};
  deleteobj:any ={};
  isLoadingList:boolean = false;
  isAdding:boolean = false;
  constructor(private api:ApiService) { 

    this.data = [];
  }

  ngOnInit(): void {
    this.get();
  }
  add(){
    
    if(!this.name){
      this.Toast.fire({
        icon:"error",
        text:"All fields are required."
      })
      return 
    }
    if(this.isEdit) return this.update();
    this.isAdding = true;
    this.api.post('util/toc',{display:this.name}).subscribe(x=>{
      this.isAdding = false;
      this.name ="";
      Swal.fire('Success',x.message);
      if(x.status == 200) this.get();
    })
  }
  update(){
    this.isAdding = true;
    this.api.post('util/edit-toc',{id:this.editData.id,display:this.name}).subscribe(x=>{
      this.isAdding = false;
      this.name ="";
      this.cancel();
      Swal.fire('Success',x.message);
      if(x.status == 200) this.get();
    })
  }
  get(){
    this.isLoadingList = true;
    this.api.get('util/toc').subscribe(x=>{
      this.isLoadingList = false;
      if(x.status == 200) this.data = x.data;
    })
  }
  onDeleteConfirm(id:number){
    this.api.get('util/delete-toc?id='+id).subscribe(x=>{
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
}

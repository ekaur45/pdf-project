import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/utils/api.service';
import Swal from 'sweetalert2';
declare const $:any;
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  name:string = "";
  data:any;
  isEdit:boolean = false;
  editData:any ={};
  deleteobj:any ={};
  constructor(private api:ApiService) { 

    this.data = [];
  }

  ngOnInit(): void {
    this.get();
  }
  add(){
    if(this.isEdit) return this.update();
    this.api.post('util/feature',{display:this.name}).subscribe(x=>{
      this.name ="";
      Swal.fire('Success',x.message);
      if(x.status == 200) this.get();
    })
  }
  update(){
    this.api.post('util/edit-feature',{id:this.editData.id,display:this.name}).subscribe(x=>{
      this.name ="";
      this.cancel();
      Swal.fire('Success',x.message);
      if(x.status == 200) this.get();
    })
  }
  get(){
    this.api.get('util/feature').subscribe(x=>{
      if(x.status == 200) this.data = x.data;
    })
  }
  onDeleteConfirm(id:number){
    this.api.get('util/delete-feature?id='+id).subscribe(x=>{
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

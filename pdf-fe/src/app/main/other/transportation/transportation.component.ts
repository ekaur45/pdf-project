import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/utils/api.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';


declare const $:any;

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent implements OnInit {

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
  data:any;
  isEdit:boolean = false;
  editData:any ={};
  deleteobj:any ={};
  description:string = "";
  price:number = 0;
  isLoadingList:boolean = false;
  isAdding:boolean = false;
  currencies: any = [];
  currency: number = 0;
  constructor(private api:ApiService) { 

    this.data = [];
  }

  ngOnInit(): void {
    this.getAllCurrencies();
    this.get();
  }
  add(){
    if(!this.description){
      this.Toast.fire({
        icon:"error",
        text:"All fields are required."
      })
      return;
    }
    if(this.isEdit) return this.update();
    this.isAdding = true;
    var form = new FormData();
    form.append("description",this.description);
    form.append("price",this.price+"");
    form.append("currency",this.currency+"");
    this.api.multiForm('util/transportation',form).subscribe(x=>{
      this.isAdding = false;
      this.description ="";
      this.price = 0;
      this.currency = 0;
      Swal.fire('Success',x.message);
      if(x.status == 200) this.get();
    })
  }
  update(){
    this.isAdding = true;
    this.api.post('util/update-transportation',{id:this.editData.id,description:this.description,price:this.price,currency:this.currency}).subscribe(x=>{
      this.isAdding = false;
      this.description = "";
      this.cancel();
      Swal.fire('Success',x.message);
      if(x.status == 200) this.get();
    })
  }
  get(){
    this.isLoadingList = true;
    this.api.get('util/transportation').subscribe(x=>{
      this.isLoadingList = false;
      if(x.status == 200) this.data = x.data;
    })
  }
  onDeleteConfirm(id:number){
    this.api.get('util/delete-transportation?id='+id).subscribe(x=>{
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
    this.description = r.description;
    this.currency = r.currency;
    this.isEdit = true;
  }
  cancel(){
    this.editData = {};
    this.description = "";
    this.isEdit =false;
  }
  getAllCurrencies(){
    this.api.get('util/currency').subscribe((res)=>{
      if(res.status == 200){
        this.currencies = res.data;
      }
    })
  }
}

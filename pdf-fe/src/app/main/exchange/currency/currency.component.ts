
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/utils/api.service';
declare const $:any;
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  isEdit: boolean = false;
  isLoadingList: boolean = false;
  isAdding: boolean = false;
  name: string = "";
  code: string = "";
  data: any[] = [];
  deleteobj: any = {};
  id: number = 0;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit(

  ): void {
    this.getAllCurrencies();
  }
  add() { 
    if(this.isEdit) return this.edit();
    this.api.post('util/currency',{name:this.name,code:this.code}).subscribe(x=>{
      this.getAllCurrencies();
    })
  }
  edit() {
    this.api.post('util/update-currency',{id:this.id,name:this.name,code:this.code}).subscribe((res:any)=>{
      this.id = 0;
      this.isEdit = false;
      this.name = "";
      this.code = "";
      this.getAllCurrencies();
    })
  }
  cancel() {
    this.isEdit = false;
    this.name = "";
    this.code = "";
   }
  onEdit(e: any) {
    this.id = e.id;
    this.isEdit = true;
    this.name = e.name;
    this.code = e.code;
  }
  onDelete(r: any) { 
    this.deleteobj = r;
    $("#modal-info-confirmed").modal("show");
  }
  onDeleteConfirm(r: any) { 
    this.api.get('util/delete-currency?id='+r).subscribe((res)=>{
      this.getAllCurrencies();
    })
  }

  getAllCurrencies() {
    this.api.get('util/currency').subscribe((res: any) => {
      if (res.status == 200) {
        this.data = res.data;
      }
    })
  }
}

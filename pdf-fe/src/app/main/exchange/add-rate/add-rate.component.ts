import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/utils/api.service';
declare const $:any;
@Component({
  selector: 'app-add-rate',
  templateUrl: './add-rate.component.html',
  styleUrls: ['./add-rate.component.css']
})
export class AddRateComponent implements OnInit {
  isEdit: boolean = false;
  isLoadingList: boolean = false;
  isAdding: boolean = false;
  name: string = "";
  code: string = "";
  data: any[] = [];
  value : number = 0;
  fromValue : number = 1;
  fromCurrency : number = 0;
  toCurrency : number = 0;
  deleteobj: any = {};
  toCurrencies: any = [];
  fromCurrencies: any = [];
  id: number = 0;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit(

  ): void {
    
    this.getAllRates();
  }
  add() {
    if(this.isEdit) return this.update();
    this.api.post('util/exchangeRate',{from:this.fromCurrency,to:this.toCurrency,fromValue:this.fromValue,toValue:this.value}).subscribe((data: any) => {
      if(data.status == 200){
        this.getAllRates();
      }
    })
   }
  update() {
    this.api.post('util/update-exchangeRate',{id:this.id,from:this.fromCurrency,to:this.toCurrency,fromValue:this.fromValue,toValue:this.value}).subscribe((data: any) => {
      if(data.status == 200){
        this.getAllRates();
        this.cancel();
      }
    })
  }
  cancel() { 
    this.isEdit = false;
    this.fromCurrency = 0;
    this.toCurrency = 0;
    this.value = 0;
  }
  onEdit(e: any) {
    this.isEdit = true;
    this.id = e.id;
    this.fromCurrency = e.currencyFrom;
    this.toCurrency = e.currencyTo;
    this.value = e.currencyToValue;
  }
  onDelete(r: any) { 
    this.deleteobj = r;
    $("#modal-info-confirmed").modal("show");
  }
  onDeleteConfirm(r: any) {
    this.api.get('util/delete-exchangeRate?id='+r).subscribe((data: any) => {
      if(data.status == 200){
        this.getAllRates()
      }
    });
   }

  getAllCurrencies() {
    this.api.get('util/currency').subscribe((data: any) => {
      if(data.status == 200){
        
        //this.data.map(x=>x.currencyFrom)
        
        this.toCurrencies = [...data.data];//[...data.data.filter((c:any)=>!this.data.map(x=>x.currencyFrom).includes(c.id))];
        this.fromCurrencies =[...data.data];//[...data.data.filter((c:any)=>!this.data.map(x=>x.currencyTo).includes(c.id))];
      }
    })
  }
  getAllRates(){
    this.api.get('util/exchangeRate').subscribe((data: any) => {
      if(data.status == 200){
        this.data = data.data;
        this.getAllCurrencies();
      }
    })
  }
}

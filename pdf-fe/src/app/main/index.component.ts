import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../utils/api.service';
import { CONSTANTS } from '../utils/constants';
declare const $: any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  selectedCurrency:string = CONSTANTS.currentCurrency;  
  currencies:any = [];
  url: string = environment.baseUrl;
  user: any = {};
  a:boolean =false;
  constructor(private router: Router,private api:ApiService) {
    this.user = JSON.parse(localStorage.getItem("user") ?? "{}");
  }

  ngOnInit(): void {
    this.init();
  }
  init() {
    let s = document.createElement("script");
    s.src = "assets/js/plugins.min.js";
    document.body.appendChild(s);
    let s1 = document.createElement("script");
    s1.src = "assets/js/script.min.js";
    document.body.appendChild(s1);
    this.getCurrencies()
  }
  getCurrencies() {
    this.api.get('util/currency').subscribe((res)=>{
      if(res.status == 200){
        this.currencies = res.data;
        CONSTANTS.currencies = res.data;
        this.selectedCurrency = res.data[0].code;
        this.a = true;
      }
    })
  }
  onSignout() {
    localStorage.setItem("user", "");
    this.router.navigate(['/account']);
  }
  checks(mod: string) {
    let e = this.user?.userType;
    if(e==1) return true;
    if (mod == 'booking') {
      return true;
    } else if (mod == 'other') {
      return e==1 || e==4;
    } else if (mod == '') {
    }
    return false;
  }
  onCurrencyChange(e:any){
    CONSTANTS.currentCurrency = e;
  }
}

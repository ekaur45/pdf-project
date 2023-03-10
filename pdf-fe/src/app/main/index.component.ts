import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  url:string = environment.baseUrl;
  user:any = {};
  constructor(private router:Router) { 
    this.user = JSON.parse(localStorage.getItem("user")??"{}");
  }

  ngOnInit(): void {
    this.init();
  }
  init(){
    let s = document.createElement("script");
    s.src = "assets/js/plugins.min.js";
    document.body.appendChild(s);
    let s1 = document.createElement("script");
    s1.src = "assets/js/script.min.js";
    document.body.appendChild(s1);
  }
  onSignout(){
    localStorage.setItem("user","");
    this.router.navigate(['/account']);
  }
}

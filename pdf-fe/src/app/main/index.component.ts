import { Component, OnInit } from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

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
    // $(".sidebar-toggle").on('click',function(){
    //   $("#sidebar").toggleClass("collapsed")
    //   // $(".main-content").toggleClass("expanded");
    //   $(".contents").toggleClass("expanded")
    //   $(".footer-wrapper").toggleClass("expanded")
    // });
    // $(".has-child").on("click",function(e:any){
    //   debugger
    //   $(e.currentTarget).toggleClass("open");
    // })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/utils/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    let s = document.createElement("script");
    s.src = "assets/js/plugins.min.js";
    document.body.appendChild(s);
    let s1 = document.createElement("script");
    s1.src = "assets/js/script.min.js";
    document.body.appendChild(s1);
  }
  onFormSubmit(e:any){
    this.api.post('account/login',e.value).subscribe((x:any)=>{
      if(x.status == 200){
        localStorage.setItem("user",JSON.stringify(x.data));
        this.router.navigate(['']);
      }else{
        alert(x.message);
      }
    })
  }
}

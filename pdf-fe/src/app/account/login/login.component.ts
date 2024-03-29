import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/utils/api.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean = false;

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
    this.loading = true;
    this.api.post('account/login',e.value).subscribe((x:any)=>{
      this.loading = false;
      if(x.status == 200){
        localStorage.setItem("user",JSON.stringify(x.data));
        Swal.fire({
          icon: 'success',
          title: 'Login successful',
          showConfirmButton: false,
          timer: 3000
        })
        window.location.href = this.router.parseUrl('').toString();//);// .navigate(['']);
      }else{
        Swal.fire({
          icon: 'error',
          title: x.message,
          showConfirmButton: false,
          timer: 3000
        })
      }
    })
  }
}

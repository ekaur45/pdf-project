import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/utils/api.service';
import Swal from 'sweetalert2';
declare const $: any;

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
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
  loading: boolean = false;
  
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void { }

  onAddUserSubmit(f: any,e:any) {
    this.loading = true;
    if(!f.valid) {
     this.Toast.fire({
      icon: 'error',
      title:"Validation",
      text:"All fields are required",
      timer:1500
     })
     this.loading = false;
      return;
    }
    var formData = new FormData(e.target);
    this.api.multiForm('user/add', formData).subscribe(x => {
      this.loading = false;
      if (x.status != 200) {
        Swal.fire({
          icon: 'error',
          title: x.message,
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: x.message,
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          this.router.navigate(['/user/list'])
        }, 1000);
      }
    });
  }
}

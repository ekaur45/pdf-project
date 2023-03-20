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
  
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void { }

  onAddUserSubmit(f: any) {
    if(!f.valid) {
     this.Toast.fire({
      icon: 'error',
      title:"Validation",
      text:"All fields are required",
      timer:1500
     })
      return;
    }
    var formData = new FormData(f.target);
    this.api.multiForm('user/add', formData).subscribe(x => {
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

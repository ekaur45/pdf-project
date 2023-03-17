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

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void { }

  onAddUserSubmit(f: any) {
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

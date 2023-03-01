import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/utils/api.service';
declare const $:any;
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    //$(".select2").select2()
  }
  onAddUserSubmit(f:NgForm){
    this.api.post('user/add',f.value).subscribe(x=>{
      if(x.status !=200){
        alert(x.message);
      }else{
        this.router.navigate(['/user/list'])
      }
    });     
  }
}

import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/utils/api.service';
declare const $:any;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  url:string = environment.baseUrl;
  userList:any = [];
  deleteUser:any={};
  editUser:any={};
  editPassword: any;
  editId: any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getUsersList();
  }
  getUsersList(){
    this.api.get('user').subscribe(x=>{
      if(x.status == 200){
        this.userList = x.data as any;
      }
    })
  }
  onUserDelete(id:any){
    this.deleteUser = id;
    $("#modal-info-confirmed").modal("show")
  }
  onUserEdit(id:any){
    this.editUser = id;
    $("#modal-edit-user").modal("show")
  }
  onDeleteUser(id:number){
    this.api.get('user/delete?id='+id).subscribe(x=>{
      if(x.status == 200){
        this.getUsersList();
        alert("User deleted");
      }
    })
  }
  saveEditUser(){
    this.api.post('user',this.editUser).subscribe(x=>{
      this.getUsersList();
      $("#modal-edit-user").modal("hide");
    })
  }
  saveEditPassword(){
    this.api.post('user/reset-password',{id:this.editId,password:this.editPassword}).subscribe(x=>{
      this.editId=null;
      this.editPassword = "";
      this.editUser = {};
      this.getUsersList();
      $("#modal-edit-password").modal("hide");
    })
  }

  onEditPassword (id:any){
    this.editUser = id;
    this.editId=this.editUser.id;
    $("#modal-edit-password").modal("show");
  }
}

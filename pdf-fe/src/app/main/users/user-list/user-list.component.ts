import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/utils/api.service';
declare const $:any;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:any = [];
  deleteUser:any={};
  editUser:any={};
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
}

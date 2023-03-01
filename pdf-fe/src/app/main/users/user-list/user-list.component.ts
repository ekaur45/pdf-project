import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/utils/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:any = [];
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
}

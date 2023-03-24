import { environment } from './../../../environments/environment';
import { ApiService } from './../../utils/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  url = environment.baseUrl;
  usersLoader: boolean=false;
  users: any[]=[];
  data: any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getDashboardData();
    //this.getUsers();
  }
  getUsers(){
    this.usersLoader = true;
    this.api.get('user').subscribe((x:any)=>{
      this.usersLoader = false;
      if(x.status == 200) {
        this.users = x.data;
      }
    })
  }
  getDashboardData(){
    this.api.get('util/dashboard-data').subscribe((x:any)=>{
      if(x.status == 200)
      this.data = x.data;
    })
  }
}

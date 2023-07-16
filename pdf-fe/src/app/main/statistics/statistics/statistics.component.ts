import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/utils/api.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  data: any;
  startDate!:Date
  lastDate!:Date
  isLoaded:boolean = false;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    //this.getStats();
  }
  onGetStatsClick(){
    this.getStats();
  }
  getStats(): void {
    this.api.post('util/get-stats',{startDate:this.startDate,lastDate:this.lastDate}).subscribe(res => {
      if (res.status == 200) {
        this.isLoaded = true;
        this.data = res.data;
      }
    })
  }
}

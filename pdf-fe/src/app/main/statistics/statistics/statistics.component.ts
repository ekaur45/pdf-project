import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/utils/api.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  data: any;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.getStats();
  }

  getStats(): void {
    this.api.get('util/get-stats').subscribe(res => {
      if (res.status == 200) {
        this.data = res.data;
      }
    })
  }
}

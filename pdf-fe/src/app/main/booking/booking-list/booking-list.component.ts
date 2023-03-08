import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/utils/api.service';
import { environment } from 'src/environments/environment';
declare const $:any;
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  apiUrl: string = environment.baseUrl;
  list: any[] = [];
  loadingPdf: boolean = false;
  deleteobj:any = {};
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getBookings();
  }
  getBookings() {
    this.api.get('booking/all').subscribe(x => {
      this.list = x.data as any[];
    })
  }
  onPrintClick(id: number) {
    this.loadingPdf = true;
    const el = document.getElementById('loadericon' + id);
    if (el)
      el.innerHTML = '<i class="fa fa-spinner"></i>';
    this.api.get('booking/print?id='+id).subscribe(x => {
      //this.loadingPdf = false;
      if (el)
        el.innerHTML = '<i class="fa fa-print"></i>';
      window.open(`${this.apiUrl}${x.data}`)
    })
  }

  onUserEdit(e:any){}
  onUserDelete(e:any){
    $("#modal-info-confirmed").modal("show");
  }
  onDeleteConfirm(e:any){}
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/utils/api.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
declare const $: any;
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  apiUrl: string = environment.baseUrl;
  list: any[] = [];
  loadingPdf: boolean = false;
  deleteobj: any = {};
  user: any = {};
  constructor(private api: ApiService) { 
    this.user = JSON.parse(localStorage.getItem("user") ?? "{}");

  }

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
      el.innerHTML = '<i class="uil uil-spinner"></i>';
    this.api.get('booking/print?id=' + id).subscribe(x => {
      //this.loadingPdf = false;
      if (el)
        el.innerHTML = '<i class="uil uil-print"></i>';
      window.open(`${this.apiUrl}${x.data}`)
    })
  }

  onPrintClick2(id: number) {
    this.loadingPdf = true;
    const el = document.getElementById('loadericon1' + id);
    if (el)
      el.innerHTML = '<i class="uil uil-spinner"></i>';
    this.api.get('booking/print2?id=' + id).subscribe(x => {
      this.loadingPdf = false;
      if (el)
        el.innerHTML = '<i class="uil uil-bill"></i>';
      window.open(`${this.apiUrl}${x.data}`)
    })
  }
  onPrintClick3(id: number) {
    this.loadingPdf = true;
    const el = document.getElementById('loadericon3' + id);
    if (el)
      el.innerHTML = '<i class="uil uil-spinner"></i>';
    this.api.get('booking/print-voucher?id=' + id).subscribe(x => {
      this.loadingPdf = false;
      if (el)
        el.innerHTML = '<i class="uil receipt-alt"></i>';
      window.open(`${this.apiUrl}${x.data}`)
    })
  }

  onStatusChange(id: any, status: any) {
    this.api.get('booking/update-status?id=' + id + '&status=' + status).subscribe(x => {
      this.getBookings();
    })
  }

  onUserEdit(e: any) { }

  onBookingDelete(e: any) {
    this.deleteobj = e;
    $("#modal-info-confirmed").modal("show");
  }

  onDeleteConfirm(e: any) {
    this.api.get('booking/delete?id=' + e).subscribe((x) => {
      if (x.status == 200) {
        Swal.fire({
          icon: 'success',
          title: x.message,
          showConfirmButton: false,
          timer: 1500
        });
        this.getBookings();
      } else {
        Swal.fire({
          icon: 'error',
          title: x.message,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

}

import { environment } from 'src/environments/environment';
import { AddBooking, BookingDestination, BookingFlight, BookingHotel } from './models/add-booking.model';
import { ApiService } from './../../../utils/api.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UtilService } from 'src/app/utils/util.service';
import Swal from 'sweetalert2';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
declare const $: any;

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  Toast = Swal.mixin({
    customClass: "z1050",
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  url = environment.baseUrl;
  agentControl = new FormControl('');
  hotels: any = [];
  roomTypes: any = [];
  destinationData: any = [];
  model: AddBooking = new AddBooking();
  destinationList: AddBooking[] = [];
  agents: any = [];
  staffs: any = [];
  features: any[] = [];
  public options: any;
  constructor(private api: ApiService, private util: UtilService) {
    this.model = new AddBooking();
    this.destinationList = [];
    this.model.orderNo = util.makeString(8);
    this.options = {
      width: '300',
      templateResult: this.templateResult,
      templateSelection: this.templateSelection
    };
  }

  ngOnInit(): void {
    this.getFeatures();
    //this.getHotels();
    //this.getRoomTypes();
    this.getDestination();
    this.getAgents();
    this.getStaffs();
    //$("select").select2();
    // $(document).ready(function(){
    //   setTimeout(() => {
    //     $(".flatpickr-minimum").datepicker();
    //   }, 1000);
    // })
  }

  onAddDestination() {
    if(this.validateDest()){
    this.destinationList.push({ ...this.model });
    this.model.destination = new BookingDestination();
    this.model.flight = new BookingFlight();
    this.model.hotel = new BookingHotel();
    }else{
      this.Toast.fire({
        icon:"error",
        text:"All fields are required."
      })
    }
  }

  getDestination() {
    this.api.get('booking/destination').subscribe(x => {
      if (x.status == 200) this.destinationData = x.data.map((c: any) => { return { id: c.id, text: c.display, additional: { image: this.url + c.file } } });
    })
  }

  getHotels(id: any) {
    this.api.get('util/hotels?id=' + id).subscribe(x => {
      if (x.status == 200) {
        this.hotels = x.data.map((c: any) => { return { id: c.id, text: c.name } });
      }
    })
  }

  getStaffs() {
    this.api.get('util/staffs').subscribe(x => {
      if (x.status == 200) {
        this.staffs = x.data.map((c: any) => { return { id: c.id, text: c.firstName } });
      }
    })
  }

  getAgents() {
    this.api.get('util/agents').subscribe(x => {
      if (x.status == 200) {
        this.agents = x.data.map((c: any) => { return { id: c.id, text: c.firstName } });
      }
    })
  }

  getRoomTypes(id: any) {
    this.api.get('util/roomtypes?id=' + id).subscribe(x => {
      if (x.status == 200) {
        this.roomTypes = x.data.map((c: any) => { return { id: c.id, text: c.display } });
      }
    })
  }

  getFeatures() {
    this.api.get('util/feature').subscribe((x: any) => {
      if (x.status == 200) {
        this.features = x.data;
      }
    })
  }

  onFormSubmit() {
    if (!this.validateModel()) return;
    let _features = this.features.filter(x => x.checked === true).map(x => x.id);
    this.api.post('booking/add', { booking: this.model, list: this.destinationList, features: _features }).subscribe(x => {
      if (x.status == 200) {
        Swal.fire({
          icon: 'success',
          title: x.message,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }

  onPriceChange() {
    let price = this.model.price;
    let discount = this.model.discount;
    let xCharges = this.model.extraCharges;
    this.model.totalPrice = (price + xCharges) - (discount * price) / 100;
  }
  onDateChange(e: any) {

  }
  removeRow(ndx: number) {
    this.destinationList.splice(ndx, 1);
  }
  onDestinationChange(e: any) {
    this.getHotels(e)
  }
  onHotelValueChanged(e: any) {
    this.getRoomTypes(e);
  }
  displayDestination(e: string) {
    if (this.destinationData.length > 0)
      return this.destinationData.filter((x: any) => x.id == e)[0].text;
    else return "";
  }


  public templateResult = (state: Select2OptionData): JQuery | string => {
    if (!state.id) {
      return state.text;
    }

    let image = '<span class="image"></span>';
    if (state.additional.image) {
      image = '<div class="d-flex align-items-center"><img style="height:54px;width:54px" src="' + state.additional.image + '"</div>';
    }

    return jQuery('<span> ' + image + ' <b class="ms-3">' + state.text + '.</b></span>');
  }

  // function for selection template
  public templateSelection = (state: Select2OptionData): JQuery | string => {
    if (!state.id) {
      return state.text;
    }

    return jQuery('<span>' + state.text + '</span>');
  }


  private validateModel() {
    let m = this.model;
    let _features = this.features.filter(x => x.checked === true).map(x => x.id);
    if (!(m.agentName && m.staffName && m.date && m.orderNo && m.passengers && m.nights && m.departure && m.arrival && m.customerName && m.price && m.discount && m.extraCharges && m.totalPrice && m.currency && m.guestType && this.destinationList.length > 0 && _features.length > 0)) {
      this.Toast.fire({
        icon: "error",
        text: "All fields are required and add at least one destination and one feature."
      });
      return false;
    }
    return true;
  }
  validateDest() {
    return this.model.destination.destination&&
    this.model.destination.dateTo&&
    this.model.destination.dateFrom&&
    this.model.flight.to&&
    this.model.flight.from&&
    this.model.flight.dateTo&&
    this.model.flight.dateFrom&&
    this.model.hotel.bookingNo&&
    this.model.hotel.hotel&&
    this.model.hotel.nights&&
    this.model.hotel.roomType;
  }
}

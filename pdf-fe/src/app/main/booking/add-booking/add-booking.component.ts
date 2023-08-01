import { environment } from 'src/environments/environment';
import { AddBooking, BookingDestination, BookingFlight, BookingHotel, ScheduleModel } from './models/add-booking.model';
import { ApiService } from './../../../utils/api.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UtilService } from 'src/app/utils/util.service';
import Swal from 'sweetalert2';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
import { CCurrencyPipe } from 'src/app/pipes/c-currency.pipe';
import { CONSTANTS } from 'src/app/utils/constants';
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
  _hotels: any = [];
  roomTypes: any = [];
  destinationData: any = [];
  model: AddBooking = new AddBooking();
  destinationList: AddBooking[] = [];
  scheduleModel:ScheduleModel = new ScheduleModel();
  agents: any = [];
  staffs: any = [];
  features: any[] = [];
  public options: any;
  tocs: any[] = [];
  isAdding:boolean = false;
  transportationList: any[] = [];
  cPipe:CCurrencyPipe;
  constructor(private api: ApiService, private util: UtilService) {
    this.cPipe = new CCurrencyPipe();
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
    this.getToc();
    this.getTransportationList();
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
        this.hotels = x.data.map((c: any) => { return { id: c.id, text: c.name+" ( "+(c.price??0)+" "+c.priceCurrency +" )", additional: { image: this.url + c.file } } });
        this._hotels = x.data;//.map((c: any) => { return { id: c.id, text: c.name+" ( "+(c.price??0) +" )" } });
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
        this.roomTypes = x.data.map((c: any) => { return { id: c.id, text: c.display, additional: { image: this.url + c.file } } });
      }
    })
  }
  getToc(){
    this.api.get('util/toc').subscribe(x=>{
      if(x.status == 200){
        this.tocs = x.data;
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
    this.isAdding = true;
    let _features = this.features.filter(x => x.checked === true).map(x => x.id);
    let _tocs = this.tocs.filter(x=>x.checked == true).map(x=>x.id);
    let _transportation = this.tocs.filter(x=>x.checked == true).map(x=>x.id);
    this.api.post('booking/add', { booking: this.model, list: this.destinationList, features: _features,tocs:_tocs,transportation:_transportation }).subscribe(x => {
      this.isAdding = false;
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
    //this.model.totalPrice = (price + xCharges + this.model.transportationPrice ) - (discount * price) / 100;
  }
  get priceCalculated(){
    let price = 0;
    let discount = this.model.discount;
    let xCharges = this.model.extraCharges;
    var lst = this.destinationList.map(cc=>{
      return this.getHotelPrice(Number(cc.hotel.hotel)) + this.convertCurrency(cc.flight.price,cc.flight.priceCurrency)
    });
    let ll = 0;
    if(lst.length>0) ll = lst.reduce((a,b)=>a+b)
    //console.log({lst});
    //this.model.totalPrice = (price + xCharges + this.model.transportationPrice ) - (discount * price) / 100;
    return (price + ll + this.model.transportationPrice);
  }  
  get totalPriceCalculated(){
    let price = this.priceCalculated;
    let discount = this.model.discount;
    let xCharges = this.model.extraCharges;
    var lst = this.destinationList.map(cc=>{
      return this.getHotelPrice(Number(cc.hotel.hotel)) + this.convertCurrency(cc.flight.price,cc.flight.priceCurrency)
    });
    let ll = 0;
    if(lst.length>0) ll = lst.reduce((a,b)=>a+b)
    //console.log({lst});
    //this.model.totalPrice = (price + xCharges + this.model.transportationPrice ) - (discount * price) / 100;
    let tPrice = this.getTransportationPrice();
    return (price + xCharges + tPrice) - (discount * price) / 100;
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
    this.model.price = this.priceCalculated;
    this.model.currency = CONSTANTS.currentCurrency;    
    this.model.flight.priceCurrency = CONSTANTS.currentCurrency;    
    this.model.totalPrice = this.totalPriceCalculated;
    let m = this.model;
    
    let _features = this.features.filter(x => x.checked === true).map(x => x.id);
    if (!(m.agentName && m.staffName && m.date && m.orderNo && m.passengers && m.nights && m.departure && m.arrival && m.customerName && m.price && m.totalPrice && m.currency && m.guestType&& m.address && this.destinationList.length > 0 && _features.length > 0)) {
      this.Toast.fire({
        icon: "error",
        text: "All fields are required and add at least one destination and one feature."
      });
      return false;
    }
    return true;
  }
  validateDest() {
    // if(this.transportationList.filter(x=>x.checked == true).length>0){
    //   this.model.transportationPrice = this.transportationList.filter(x=>x.checked == true).map(x=>x.price).reduce((a,b)=>a+b);
    // }
    return this.model.destination.destination&&
    this.model.destination.dateTo&&
    this.model.destination.dateFrom&&
    // this.model.flight.to&&
    // this.model.flight.from&&
    // this.model.flight.dateTo&&
    // this.model.flight.dateFrom&&
    this.model.hotel.bookingNo&&
    this.model.hotel.hotel&&
    this.model.hotel.nights&&
    this.model.hotel.roomType;
  }
  getHotelPrice(id:number){
    return this.convertCurrency(Number(this._hotels.filter((x:any)=>x.id == id)[0].price),this._hotels.filter((x:any)=>x.id == id)[0].priceCurrency);
    
  }
  addScheduleItem(){
    this.model.schedule.push(this.scheduleModel);
    this.scheduleModel = new ScheduleModel();
  }
  removeScheduleItem(ndx:number){
    this.model.schedule.splice(ndx, 1);
  }
  getTransportationList(){
    this.api.get('util/transportation').subscribe((res)=>{
      if(res.status == 200){
        this.transportationList = res.data;
      }
    });
  }
  convertCurrency(val:number,symbol:string):number{
    return this.cPipe.transform(val,symbol);
  }
  getTransportationPrice() {
    let checkedList = this.transportationList.filter(x=>x.checked == true);
    if(checkedList.length>0){
      return checkedList.map(x=>this.convertCurrency(x.price,x.currency)).reduce((a,b)=>a+b);
    }
    return 0;
  }
}

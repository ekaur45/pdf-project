import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/utils/api.service';
import { Component, DebugElement, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
declare const $: any;
@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  url = environment.baseUrl;
  name: string = "";
  data: any;
  isEdit: boolean = false;
  editData: any = {};
  deleteobj: any = {};
  destinationData: any[] = [];
  destination: number = 0;
  destinationName: string = "";
  roomTypeName: string = "";
  roomTypes: any[] = [];
  file: any;
  public options: any;
  constructor(private api: ApiService) {

    this.data = [];
  }

  ngOnInit(): void {
    this.getDestination();
    this.getRoomType();
    this.get();
    this.options = {
      width: '300',
      templateResult: this.templateResult,
      templateSelection: this.templateSelection
    };
  }
  getDestination() {
    this.api.get('booking/destination').subscribe(x => {
      if (x.status == 200) this.destinationData = x.data.map((c: any) => { return { id: c.id, text: c.display, additional: { image: this.url + c.file } } });
    })
  }
  add() {
    if (this.isEdit) return this.update();
    var form = new FormData();
    form.append("name", this.name);
    form.append("destination", this.destination + "");
    let _roomTypes = this.roomTypes.filter(x => x.checked == true).map(x => x.id);
    for (let i = 0; i < _roomTypes.length; i++) {
      const el = _roomTypes[i];
      form.append("roomTypes[]", el);
    }
    form.append("file", this.file);
    this.api.multiForm('booking/hotel', form).subscribe(x => {
      this.name = "";
      this.get();
      Swal.fire('Success', x.message);
      if (x.status == 200) this.get();
    })
  }
  update() {
    let _roomTypes = this.roomTypes.filter(x => x.checked == true).map(x => x.id);
    this.api.post('util/update-hotel', { id: this.editData.id, name: this.name, destination: this.destination, roomTypes: _roomTypes }).subscribe(x => {
      this.name = "";
      this.cancel();
      Swal.fire('Success', x.message);
      if (x.status == 200) this.get();
    })
  }
  get() {
    this.api.get('booking/hotel').subscribe(x => {
      if (x.status == 200) this.data = x.data;
    })
  }
  onDeleteConfirm(id: number) {
    this.api.get('util/delete-hotel?id=' + id).subscribe(x => {
      Swal.fire('Success', x.message);
      if (x.status == 200) this.get();
    })
  }
  onDelete(id: any) {
    this.deleteobj = id;
    $("#modal-info-confirmed").modal("show")
  }
  onEdit(r: any) {
    this.editData = r;
    this.name = r.name;
    this.destination = r.location;
    this.roomTypes = this.roomTypes.map(x => {
      let ids = r?.roomTypes?.map((c: any) => c.id);
      if (ids?.includes(x.id)) x.checked = true;
      return x;
    })
    this.isEdit = true;
  }
  cancel() {
    this.editData = {};
    this.name = "";
    this.destination = 0;

    this.roomTypes = this.roomTypes.map(x => {
      x.checked = false;
      return x;
    })
    this.isEdit = false;
  }
  displayDestination(e: string) {
    if (this.destinationData.length > 0 && this.destinationData.filter((x: any) => x.id == e).length > 0)
      return this.destinationData.filter((x: any) => x.id == e)[0].text;
    else return "";
  }

  showAddDestinationModal() {
    $("#modal-add-destination").modal("show");
  }
  showAddRoomTypeModal() {
    $("#modal-add-roomType").modal("show");
  }

  addDestination() {
    this.api.post('booking/destination', { name: this.destinationName }).subscribe(x => {
      this.destinationName = "";
      if (x.status == 200) {
        this.getDestination();
        this.get();
      }
    })
  }

  addRoomType() {
    if (this.isEdit) return this.update();
    this.api.post('booking/room-types', { name: this.roomTypeName }).subscribe(x => {
      this.roomTypeName = "";
      if (x.status == 200) {
        this.getRoomType();
      }
    })
  }
  getRoomType() {
    this.api.get('booking/room-types').subscribe(x => {

      if (x.status == 200) this.roomTypes = x.data;
    })
  }

  onFileChange(e: any) {
    this.file = e.target.files[0];
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



}

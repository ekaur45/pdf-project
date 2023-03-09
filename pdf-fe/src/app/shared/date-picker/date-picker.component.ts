import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
declare const $: any;
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  @Input() name: any;

  @Input() date: any;
  @Output() dateChange: EventEmitter<any> = new EventEmitter();


  ngOnInit(): void {
    let n = this.name;
    let _this = this;
    setTimeout(() => {
      let datepicker = $("#" + n).datepicker({
        onSelect: function (dateText: any) {
          _this.dateChange.emit(dateText);
          console.log("Selected date: " + dateText + "; input's current value: " + this.value);
        }
      });
    }, 1000);
  }

}

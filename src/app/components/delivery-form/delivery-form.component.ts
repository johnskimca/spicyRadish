import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {NgbDateStruct, NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {

  constructor(private calendar: NgbCalendar) {
  }
  model: NgbDateStruct;
  date: {year: number, month: number};
  deliveryform = new FormGroup(    {
      quantitiesList: new FormArray([
      ])
    }
  );

  ngOnInit(): void {
  }

  isDisabled(date: NgbDateStruct): boolean {
    const d = new Date(date.year, date.month - 1, date.day);
    return  d.getDay() !== 0;
  }
}

import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {NgbDateStruct, NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {CartService} from '../../services/cart.service';
import {CartItem} from '../../model/cart-item';


@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {

  constructor(private calendar: NgbCalendar, private formBuilder: FormBuilder, public cartService: CartService) {
  }

  payload: any;

  deliveryform = new FormGroup(    {
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      mobileNumber: new FormControl('xxx-xxx-xxxx'),
      email: new FormControl(''),
      address: new FormControl(''),
      selectedTime: new FormControl('')
      }
    );

  timeslots: string[] = ['6:00 PM', '6:20 PM', '6:40 PM', '7:00 PM', '7:20 PM', '7:40 PM', '8:30 PM', '8:50 PM', '9:10 PM'];
  model: NgbDateStruct;
  date: {year: number, month: number};

  ngOnInit(): void {
    this.payload = this.cartService.getPayLoad();
  }

  isDisabled(date: NgbDateStruct): boolean {
    const d = new Date(date.year, date.month - 1, date.day);
    return  d.getDay() !== 0;
  }

  displayInformation(): void {
    console.log(this.deliveryform.get('selectedTime').value);
  }

  onSubmit(): void {

  }
}

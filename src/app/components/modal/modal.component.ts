import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../../services/cart.service';
import {FormControl, FormGroup} from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  closeResult: string;
  total: number;
  listOfCartItems;
  // need an event emitter here?
  form;
  getCartItems(): void {
    this.listOfCartItems = this.cartService.getlistOfCartItems();
  }
  // create a setter here for listOfCartItems with the new quantity
  getTotal(): void {
    this.total = this.cartService.cartItemTotals();
  }
  getQuantitiesForm(): void {
    this.form = this.cartService.getQuantitiesForm();
    console.log(this.form);
  }
  onSubmit(): void {
    console.log(this.form);
  }
  // use this listOfCartItems to A test then B render
  constructor(public activeModal: NgbActiveModal, public cartService: CartService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getCartItems();
    this.getTotal();
    this.getQuantitiesForm();
  }

}

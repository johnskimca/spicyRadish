import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item';
import {FormBuilder, FormControl, FormArray, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  payload: any;
  listOfCartItems: CartItem[] = [];
  cartItemSet = new Set();
  // need an event emitter here?
  form = new FormGroup(    {
      quantitiesList: new FormArray([
      ])
    }
  );
  total = 0;
  addToCart(orderItem): void {
    if (!this.cartItemSet.has(orderItem.title)){
      this.listOfCartItems.push(orderItem);
      this.cartItemSet.add(orderItem.title);
      this.addFormControl();
    }
  }
  removeAt(index): void {
    const removedItem = this.listOfCartItems.splice(index, 1);
    this.removeFormControl(index);
    this.cartItemSet.delete(removedItem[0].title);
  }
  get quantitiesList(): FormArray {
    return this.form.get('quantitiesList') as FormArray;
  }

  setItemQuantity(index, value): void {
    this.listOfCartItems[index].quantity = value;
  }
  setPayLoad(payload): void {
    this.payload = payload;
  }
  addFormControl(): void {
    this.quantitiesList.push(new FormControl(1));
  }
  removeFormControl(index): void {
    this.quantitiesList.removeAt(index);
  }
  getlistOfCartItems(): CartItem[] {
    return this.listOfCartItems;
  }
  getQuantitiesForm(): any {
    return this.form;
  }

  getPayLoad(): any {
    return this.payload;
  }
  cartItemTotals(): number {
    // tslint:disable-next-line:prefer-const
    let subTotal = 0;
    // this.total = 0;
    for (const cartItem of this.listOfCartItems){
      subTotal += cartItem.price * cartItem.quantity;
    }
    return subTotal;
  }
  constructor(private fb: FormBuilder) { }
}

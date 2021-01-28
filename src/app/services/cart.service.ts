import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item';
import {FormBuilder, FormControl, FormArray, FormGroup} from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class CartService {
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
  get quantitiesList(): FormArray {
    return this.form.get('quantitiesList') as FormArray;
  }
  addFormControl(): void {
    this.quantitiesList.push(new FormControl(1));
  }
  getlistOfCartItems(): CartItem[] {
    return this.listOfCartItems;
  }
  getQuantitiesForm(): any {
    return this.form;
  }
  cartItemTotals(): number {
    for (const cartItem of this.listOfCartItems){
      this.total = cartItem.price * cartItem.quantity + this.total;
    }
    return this.total;
  }
  constructor(private fb: FormBuilder) { }
}

import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../model/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  pictureUrl: string[] = [
    '../../../assets/landingPage%20-%20Fried%20Rice%20High%20Res.jpg',
    '../../../assets/landingPage%20-%20Fried%20Rice%20High%20Res.jpg',
    '../../../assets/landingPage%20-%20Fried%20Rice%20High%20Res.jpg'
  ];

  menuItems: CartItem[] = [
    {picture: this.pictureUrl[0], title: 'Fried Rice',
      description: 'Egg, rice, shrimp, onion, carrots, garlic and love', price: 11, quantity: 1},
    {picture: this.pictureUrl[1],
      title: 'Spaghetti', description: 'Spaghetti noodles, ground beef, cumen, garlic, cinnamon', price: 13, quantity: 1},
    {picture: this.pictureUrl[2],
      title: 'Curry Rice', description: 'Simple butter chicken curry with white rice', price: 12, quantity: 1}
  ];

constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

}

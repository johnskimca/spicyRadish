import { Component, OnInit } from '@angular/core';
import {MenuCard} from '../../model/menu-card';

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

  menuItems: MenuCard[] = [
    {picture: this.pictureUrl[0], title: 'Fried Rice', description: 'Egg, rice, shrimp, onion, carrots, garlic and love', price: '$11.00'},
    {picture: this.pictureUrl[1], title: 'Spaghetti', description: 'Spaghetti noodles, ground beef, cumen, garlic, cinnamon', price: '$13.00'},
    {picture: this.pictureUrl[2], title: 'Curry Rice', description: 'Simple butter chicken curry with white rice', price: '$12.00'}
  ];

constructor() { }

  ngOnInit(): void {
  }

}

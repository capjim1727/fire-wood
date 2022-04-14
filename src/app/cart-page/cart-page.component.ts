import { Component, OnInit } from '@angular/core';
import { CartItem } from '../shared/models/cartitems';
import { Cart } from '../shared/models/carts';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService: CartService, private foodService:FoodService) { 
    let foods = foodService.getAll();
    cartService.addToCart(foods[1]);
    cartService.addToCart(foods[3]);
    cartService.addToCart(foods[4]);
    cartService.addToCart(foods[5]);
    this.setCart();
  }
  ngOnInit(): void {
  }
  
  removeFromCart(cartItem:CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }


}

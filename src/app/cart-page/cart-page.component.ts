import { Component, OnInit } from '@angular/core';
import { CartItem } from '../shared/models/cartitems';
import { Cart } from '../shared/models/carts';
import { CartService } from '../services/cart/cart.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService: CartService) { 
    
    this.setCart();
  }
  ngOnInit(): void {
  }
  
  removeFromCart(cartItem:CartItem) {
    this.cartService.removeFromCart(cartItem.wood.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.wood.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }
}

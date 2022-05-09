import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/carts';
import { CartItem } from 'src/app/shared/models/cartitems';
import { Wood } from 'src/app/shared/models/wood';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();

  addToCart(wood: Wood):void{
    let cartItem = this.cart.items.find(item => item.wood.id === wood.id);
    if(cartItem){
      this.changeQuantity(wood.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(wood));
  }

  removeFromCart(woodId:number): void {
    this.cart.items = 
    this.cart.items.filter(item => item.wood.id != woodId);
  }

  changeQuantity(woodId:number, quantity:number) {
    let cartItem = this.cart.items.find(item => item.wood.id === woodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}

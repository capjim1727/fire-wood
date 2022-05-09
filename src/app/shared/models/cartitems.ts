import { Wood } from "./wood";

export class CartItem {
    constructor(wood:Wood){
        this.wood = wood;
    }
    wood:Wood;
    quantity:number = 1;

    get price():number{
        return this.wood.price * this.quantity;
    }
}
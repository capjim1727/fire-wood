import { Component, OnInit } from '@angular/core';
import { WoodService } from '../services/wood/wood.service';
import { Wood } from '../shared/models/wood';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-wood-page',
  templateUrl: './wood-page.component.html',
  styleUrls: ['./wood-page.component.css']
})
export class WoodPageComponent implements OnInit {

  wood!: Wood;
  constructor(private activatedRoute:ActivatedRoute, 
    private woodService: WoodService,
    private cartService: CartService,
    private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.wood = woodService.getWoodById(params['id']);
    })
   }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.wood);
    this.router.navigateByUrl('/cart-page');
  }
    
}


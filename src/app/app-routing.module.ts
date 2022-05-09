import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { WoodPageComponent } from './woods/wood-page.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MapComponent } from './map/map.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path: 'tag/:tag', component:HomeComponent},
  {path: 'wood/:id', component:WoodPageComponent},
  {path: 'cart-page', component:CartPageComponent},
  {path: 'checkout', component: CheckoutComponent },
  {path: 'wood-page', component: WoodPageComponent },
  { path: 'map', component: MapComponent },
  {path: 'display', component: DisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

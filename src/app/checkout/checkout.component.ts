import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  paymentHandler:any = null

  makePayment(amount: number) { 
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51KYyWlI33pJC862W7XpM5gMbMi6FJb2blSeYIUoq8sylXz3xRsb19qv0kKPoQiHnbFY9zMqwvTs2Ssq7K0ys3W7c00gZL1xLUl',
      locale: 'auto',
      token:function(stripeToken:any) {
          console.log(stripeToken)
      } 
    });

    paymentHandler.open({
      name: "capjim llc",
      description: "a software service",
      amount:amount*100
    })
  }

  ngOnInit(): void {
    this.invokeStripe();
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key:'pk_test_51KYyWlI33pJC862W7XpM5gMbMi6FJb2blSeYIUoq8sylXz3xRsb19qv0kKPoQiHnbFY9zMqwvTs2Ssq7K0ys3W7c00gZL1xLUl',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }
}


import { Component, OnInit } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'checkout',
  templateUrl: 'checkout.component.html',
})
export class CheckoutComponent implements OnInit {

  // TODO connect me up with the store!

  constructor() {
  }

  ngOnInit() {
  }

  checkout() {
    console.log("Hi there");
  }
}

import { Component, OnInit } from '@angular/core'
import { AppStore, RemoteStateType, RemoteStates, CheckoutAction, getCheckoutState } from './store'
import { ObservableLite } from './observable-lite'

@Component({
  moduleId: module.id,
  selector: 'checkout',
  templateUrl: 'checkout.component.html',
})
export class CheckoutComponent implements OnInit {

  // DONE connect me up with the store!

  private checkoutState$: ObservableLite<RemoteStateType> = ObservableLite.empty();


  constructor(private store: AppStore) {
  }

  ngOnInit() {
    // Imperative: everytime state changes, re-assign property

    //this.store.select(s =>
    //  this.checkoutState = getCheckoutState(s)
    //);

    // To declarative - transform the original Observable into a new one
    this.checkoutState$ = this.store.select(getCheckoutState);
  }

  checkout() {
    this.store.dispatch(new CheckoutAction());
  }
}



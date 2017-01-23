import { Component, OnInit } from '@angular/core'
import { AppStore, RemoteStateType, RemoteStates, CheckoutAction, getCheckoutState } from './store'

@Component({
  moduleId: module.id,
  selector: 'checkout',
  templateUrl: 'checkout.component.html',
})
export class CheckoutComponent implements OnInit {

  // DONE connect me up with the store!

  private checkoutState: RemoteStateType = RemoteStates.Unstarted;

  constructor(private store: AppStore) {
  }

  ngOnInit() {
    // Imperative: everytime state changes, re-assign property
    this.store.select(s =>
      this.checkoutState = getCheckoutState(s)
    );
  }

  checkout() {
    this.store.dispatch(new CheckoutAction());
  }
}





import { Component, OnInit } from '@angular/core'
import { RemoteStateType, AppStore, CheckoutAction, RemoteStates } from './store'
import { ObservableLite } from './observable-lite'

@Component({
  moduleId: module.id,
  selector: 'checkout',
  templateUrl: 'checkout.component.html',
})
export class CheckoutComponent implements OnInit {

  checkoutState$: ObservableLite<RemoteStateType> = ObservableLite.empty()

  constructor(private store: AppStore) {
  }

  ngOnInit() {
    this.checkoutState$ = this.store.select(s => s.checkout.state);
  }

  checkout() {
    this.store.dispatch(new CheckoutAction());
  }
}

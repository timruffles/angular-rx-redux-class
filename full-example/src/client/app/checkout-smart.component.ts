


import { Component, ViewChild, OnInit } from '@angular/core'
import { CheckoutComponent } from './checkout.component'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'
import { AppState } from './app.reducer'
import { getCheckoutModel, CheckoutData, CheckoutAction } from './checkout.reducer'

export class CheckoutModel {
  constructor(
	  public readonly submittable: boolean,
	  public readonly errorMessage?: string,
	  public readonly successMessage?: string,
	){}

	static initial() {
	    return new CheckoutModel(false);
  }
}





@Component({
  moduleId: module.id,
  selector: 'checkoutSmart',
  template: `
    <checkout>
     </checkout>
  `
})
export class CheckoutSmartComponent implements OnInit {

  @ViewChild(CheckoutComponent)
  checkout: CheckoutComponent;

  // TODO pass state into the dumb component as a Observable from store
  // TODO convert events coming out of the component to a dispatched action

  constructor(private store: Store<AppState>) {

  }

  // option 1 - imperative
  // submitted(data: CheckoutData) {
  //   console.log('smart heard', data);
  // }

  ngOnInit() {
    this.checkout
      .submissions
      .map(data => new CheckoutAction(data))
      .subscribe(a => this.store.dispatch(a))
  }



}

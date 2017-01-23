


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
    <checkout
      [model]="model$"
      (submission)="submitted($event)"
      >
     </checkout>
  `
})
export class CheckoutSmartComponent implements OnInit {

  @ViewChild(CheckoutComponent) checkoutComponent: CheckoutComponent;

  model$: Observable<CheckoutModel> = Observable.of(CheckoutModel.initial());

  constructor(private store: Store<AppState>) {

  }

  submitted(data: CheckoutData) {
    this.store.dispatch(new CheckoutAction(data));
  }

  ngOnInit() {
    this.model$ = this.store.select(s =>
      getCheckoutModel(s.checkout)
    )
  }



}

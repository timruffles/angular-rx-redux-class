import { Component, ViewChild, OnInit } from '@angular/core'
import { CheckoutComponent } from './checkout.component'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'
import { AppState } from './app.reducer'
import { getCheckoutModel, CheckoutData, CheckoutAction } from './checkout.reducer'
import { PersistenceState } from './persistence-types'

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

  submissionResult$: Observable<PersistenceState<{}>>;


  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.checkout
      .submissions
      .map(data => new CheckoutAction(data))
      .subscribe(a => this.store.dispatch(a))
  }

}

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



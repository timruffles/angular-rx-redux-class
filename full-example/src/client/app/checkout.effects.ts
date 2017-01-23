

import { Effect, Actions } from '@ngrx/effects'
import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { CheckoutActionType, CheckoutResolvedAction, Success } from './checkout.reducer'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class CheckoutEffects {
  constructor(
    private http: Http,
    private actions$: Actions
  ) { }

  @Effect() login$ = this.actions$
    .ofType(CheckoutActionType.Checkout)
    .map(action => JSON.stringify(action.payload))
    // each new action creates an observable, we switch between them dropping the old
    .switchMap(payload =>
      this.http.post('/checkout', payload)
      .map(res => (
         new CheckoutResolvedAction(new Success(res.json()))
      ))
      .catch((e) => Observable.of(new CheckoutResolvedAction(e)))
    );
}

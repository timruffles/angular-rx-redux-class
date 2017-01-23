import { Effect, Actions } from '@ngrx/effects'
import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

const API_URL = 'http://localhost:3999';

@Injectable()
export class CheckoutEffects {
  constructor(
    private http: Http,
    private actions$: Actions
  ) { }

  @Effect() checkout$ = this.actions$
    .ofType('TODO');
  // TODO filter down to a single type of action
  // TODO turn it into a stream of HTTP observables, talking to our API
  // TODO turn the success response into a CheckoutResolvedAction
  // TODO turn the error response into a CheckoutResolvedAction
}

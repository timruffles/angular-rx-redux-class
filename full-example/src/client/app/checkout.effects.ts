import { Effect, Actions } from '@ngrx/effects'
import { Http, Headers, RequestOptions } from '@angular/http'
import { Injectable } from '@angular/core'
import { CheckoutActionType, CheckoutAction, CheckoutResolvedAction } from './checkout.reducer'
import { Success, Failure } from './persistence-types'
import { Observable } from 'rxjs/Rx'
import { ShowToasterAction } from './toaster.reducer'

const API_URL = 'http://localhost:3999';



@Injectable()
export class CheckoutEffects {
  constructor(
    private http: Http,
    private actions$: Actions
  ) { }


  @Effect() checkout$ = this.actions$
    // filter down to a single type of action
    .ofType(CheckoutActionType.Checkout)
    // TODO - fix typing issue
    .map(({ data: { cardNumber: number, name } }: any) =>
      JSON.stringify({ number, name})
    )
    .switchMap((jsonString: string) => {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });

      // turn it into a stream of HTTP observables, talking to our API
      return this.http.post(API_URL + '/checkout', jsonString, options)
        // turn the success response into a CheckoutResolvedAction
        .map(res => res.json())
        .concatMap(data => (
          Observable.from([
            new CheckoutResolvedAction(new Success(data)),
		        new ShowToasterAction(`Woohoo, checkout succeeded!`, 'success')
          ])
        ))
        // turn the error response into a CheckoutResolvedAction
        .catch(() => Observable.of(
          new ShowToasterAction(`Oh no, something went wrong`, 'error')
        ))
    })
}

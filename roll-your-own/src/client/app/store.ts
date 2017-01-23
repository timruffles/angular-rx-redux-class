

import { Injectable } from '@angular/core'
class ActionTypes {
  static readonly Checkout = 'Checkout';

}

export class CheckoutAction {
  readonly type = ActionTypes.Checkout;
}

export type Action = CheckoutAction;

export class RemoteStates {
  static readonly Unstarted: 'Unstarted' = 'Unstarted';
  static readonly Loading: 'Loading' = 'Loading';
  static readonly Success: 'Success' =  'Success';
  static readonly Failure: 'Failure' = 'Failure';
}

export type RemoteStateType =
   typeof RemoteStates.Unstarted
	 | typeof RemoteStates.Loading
	 | typeof RemoteStates.Success
	 | typeof RemoteStates.Failure;

export class CheckoutState {
  state: RemoteStateType = RemoteStates.Unstarted;
}

class AppState {
  checkout = new CheckoutState();
}


@Injectable()
export class AppStore {

  constructor() {
  }

  dispatch(a: Action) {
  }

  select<T>(f: (s: AppState) => T): any {
  }
}


export function reducer(s: AppState, a: Action) {
  return s;
}

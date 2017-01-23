

import { Injectable } from '@angular/core'
import { StoreLiteService, StoreLite } from './store-lite.service'
import { ObservableLite, ReplaySubjectLite } from './observable-lite'
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

  private store: StoreLite<AppState, Action>;
  private state$: ObservableLite<AppState>;

  constructor(private storeLite: StoreLiteService) {
    this.store = storeLite.create(reducer, new AppState);

    const subject = new ReplaySubjectLite;
    this.state$ = subject.observable();

    this.store.subscribe(s => subject.sendNext(s));

    // send initial state to subject
    subject.sendNext(this.store.getState());
  }

  dispatch(a: Action) {
    this.store.dispatch(a);
  }

  select<T>(f: (s: AppState) => T): ObservableLite<T> {
    return this.state$.map(f);
  }
}


export function reducer(s: AppState, a: Action) {
  switch(a.type) {
    case ActionTypes.Checkout:
      return {
        ...s,
        checkout: {
          ...s.checkout,
          state: RemoteStates.Loading,
        },
      };

    default:
      return s;
  }

}

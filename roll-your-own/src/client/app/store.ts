

import { Injectable } from '@angular/core'
import { StoreLiteService, StoreLite, Reducer } from './store-lite.service'
class ActionTypes {
  static readonly Checkout = 'Checkout';

}

export class CheckoutAction {
  readonly type = ActionTypes.Checkout;
  readonly another = 'hi';
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

export class AppState {
  checkout = new CheckoutState();
}

@Injectable()
export class AppStore {

  private store: StoreLite<AppState, Action>;

  constructor(storeLite: StoreLiteService) {
    this.store = storeLite.create(logger(reducer), new AppState());
  }

  dispatch(a: Action) {
    this.store.dispatch(a);
  }

  // TODO - Observer-ify later
  select<T>(f: (s: AppState) => T): any {
    this.store.subscribe(f);
  }
}

export function getCheckoutState(s: AppState) {
  return s.checkout.state;
}

function logger<State,Action>(reducer: Reducer<State,Action>): Reducer<State,Action> {
  return function(s:State, a: Action)  {
    console.log("before", a, s);
    const newState =  reducer(s, a);
    console.log("after", a, newState);
    return newState;
  }
}

export function reducer(state: AppState, action: Action) {
  switch(action.type) {
    case ActionTypes.Checkout:
      return {
        ...state,
        checkout: {
          ...state.checkout,
          state: RemoteStates.Loading,
        },
      };

    default:
      return state;
  }
}

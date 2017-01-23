



import { Store, Dispatch, combineReducers, Reducer } from "redux";
import { CheckoutState, checkoutReducer } from './checkout.reducer'
import { Action } from './actions'
import { toasterReducer, ToasterState } from './toaster.reducer'

export class AppState {
  checkout = new CheckoutState;
  toaster = new ToasterState;
}

export const reducer = stripActionPrototype(combineReducers({
  checkout: checkoutReducer,
  toaster: toasterReducer,
}));

function stripActionPrototype(originalReducer: Reducer<{}>) {
  return function (s: any, a: Action) {
    // pull all enumerable properties out of action + state, which redux wants to be plain objects
    return originalReducer({...s}, {...a});
  }
}

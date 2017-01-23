
// this is the information sent back from our API
import { CheckoutModel } from './checkout-smart.component'
import { PersistenceState, Pending, PersistenceStates } from './persistence-types'
export class SubmissionSuccess {
  readonly result: string;
}

export class CheckoutData {
  readonly name: string;
  readonly number: string;
}

class CheckoutSucceeded {
  constructor(
    public message: string,
  ) {}
}

export class CheckoutState {
  submissionState: PersistenceState<CheckoutSucceeded> = new Pending;
  submitted?: CheckoutData;
}

export class CheckoutActionType {
  static readonly Checkout = 'Checkout';
  static readonly CheckoutResolved = 'CheckoutResolved';
}

export class CheckoutAction {
  readonly type = CheckoutActionType.Checkout;
  constructor(
    public readonly data: CheckoutData,
) {}
}

export class CheckoutResolvedAction {
  readonly type = CheckoutActionType.CheckoutResolved;
  constructor(
    public readonly result: PersistenceState<CheckoutSucceeded>,
  ) {}
}

export type AllCheckoutActions = CheckoutAction
    | CheckoutResolvedAction;

export function checkoutReducer(s: CheckoutState = new CheckoutState, a: AllCheckoutActions) {
  switch(a.type) {
    case CheckoutActionType.CheckoutResolved:

      return {
        ...s,
        submissionState: a.result,
      }

    default:
      return s;

  }
}

export function getCheckoutModel(s: CheckoutState) {
  switch(s.submissionState.type) {
    case PersistenceStates.Pending: return new CheckoutModel(true);
    case PersistenceStates.Loading: return new CheckoutModel(false);
    case PersistenceStates.Failure: return new CheckoutModel(false, s.submissionState.error.message);
    case PersistenceStates.Success: return new CheckoutModel(false, null, s.submissionState.value.message);
  }
}

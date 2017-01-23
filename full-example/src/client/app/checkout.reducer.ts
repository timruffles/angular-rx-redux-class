


// this is the information sent back from our API
import { CheckoutModel } from './checkout-smart.component'
export class SubmissionSuccess {
  readonly result: string;
}

export class CheckoutData {
  readonly name: string;
  readonly number: string;
}

export class PersistenceStates {
  static readonly Pending = 'Pending';
  static readonly Loading = 'Loading';
  static readonly Success = 'Success';
  static readonly Failure = 'Failure';
}

export class Success<T> {
  readonly type = PersistenceStates.Success;
  constructor(public value: T) {}
}

export class Failure {
  readonly type = PersistenceStates.Failure;
  constructor(public error: Error) {}
}

export class Pending {
  readonly type = PersistenceStates.Pending;
}

export class Loading {
  readonly type = PersistenceStates.Loading;
}

export type PersistenceState<T> = Success<T> | Failure | Pending | Loading;

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

export type CheckoutActions = CheckoutAction;

export function checkoutReducer(s: CheckoutState = new CheckoutState, a: CheckoutAction) {
  switch(a.type) {
    case CheckoutActionType.Checkout:
      return s;

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

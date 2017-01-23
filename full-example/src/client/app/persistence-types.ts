
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

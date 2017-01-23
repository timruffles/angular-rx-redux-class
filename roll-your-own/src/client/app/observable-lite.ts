/**
 * An Observable is a thing that:
 *
 * - given a observer
 * - connects it to a producer
 * - and returns a cancellation function
 *
 * That's it!
 *
 * Let's build that:
 */

export interface Observer<T> {
  next(t: T): void;
  complete(): void;
  error(e: Error): void;
}

type CancelObservation = () => void;

interface ObservableLiteContract<T> {
  subscribe(o: Observer<T>): CancelObservation;
  new (create: (o: Observer<T>) => CancelObservation): void;
}

export class ObservableLite<T> implements ObservableLiteContract<T> {

  static empty(): ObservableLite<{}> {
    // TODO
    return {} as any;
  }


}

function createIntervalObservable(n: number): ObservableLite<number> {
  // TODO - create an Observable that sends out events every n milliseconds
  return {} as any;
}

export interface SubjectLiteContract<T> {
  sendNext(t: T): void;

  sendError(e: Error): void;

  sendComplete(): void;

  observable(): ObservableLite<T>;
}

export class SubjectLite<T> implements SubjectLiteContract<T> {
}

export class ReplaySubjectLite<T> extends SubjectLite<T> {
  // TODO implement a ReplaySubject
  // TODO this should 'replay' the previously emitted value on subscribe
}




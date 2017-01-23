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

  constructor(private create: (o: Observer<T>) => CancelObservation) {
  }

  static empty() {
    return new ObservableLite((o: Observer<{}>) {
      return () => undefined;
    });
  }

  subscribe(o: Observer<T>) {
     return this.create(o);
  }

  map<U>(mapper: (t: T) => U) {
    return new ObservableLite<U>(function(observer: Observer<U>) {
      const innerObserver = {
        next(t) {
          const u = mapper(t);
          observer.next(u);
        },
        error: (e) => observer.error(e),
        complete: () => observer.complete(),
      };

      return this.subscribe(innerObserver);
    });
  }

}

export interface SubjectLiteContract<T> {
  sendNext(t: T): void;

  sendError(e: Error): void;

  sendComplete(): void;

  observable(): ObservableLite<T>;
}

export class SubjectLite<T> implements SubjectLiteContract<T> {
  observers: Observer<T>[] = [];

  sendNext(t: T) {
    for(const o of this.observers) {
      o.next(t);
    }
  }

  sendError(e: Error) {
    for(const o of this.observers) {
      o.error(e);
    }
  }

  sendComplete() {
    for(const o of this.observers) {
      o.complete();
    }
  }

  observable() {
    return new ObservableLite((observer: Observer<T>) => {
       this.observers.push(observer);

       return () => {
         const index = this.observers.findIndex(o => o === observer);
         if(index !== -1) {
           this.observers.splice(index, 1);
         }
       }
    })
  }
}

export class ReplaySubjectLite<T> extends SubjectLite<T> {
  // TODO implement a ReplaySubject
  // TODO this should 'replay' the previously emitted value on subscribe
}




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

export class ObservableLite<T> {
  constructor(private create: (o: Observer<T>) => CancelObservation) {
  }

  static empty() {
    return new ObservableLite((o: Observer<{}>) => {
      return () => undefined;
    });
  }

  subscribe(o: Observer<T>): CancelObservation {
    return this.create(o);
  }

  map<U>(transform: (t: T) => U): ObservableLite<U>  {
    return new ObservableLite((observer: Observer<U>) => {
      const innerObserver: Observer<T>  = {
        next(t: T) {
          observer.next(transform(t))
        },
        complete: () => observer.complete(),
        error: (e) => observer.error(e)
      }
      return this.subscribe(innerObserver);
    })
  }

  scan<S>(reducer: (s: S, t: T) => S, initial: S): ObservableLite<S>  {
    return new ObservableLite((observer: Observer<S>) => {
      let memo = initial;
      const innerObserver: Observer<T>  = {
        next(t: T) {
          memo = reducer(memo, t);
          observer.next(memo);
        },
        complete: () => observer.complete(),
        error: (e) => observer.error(e)
      }
      return this.subscribe(innerObserver);
    });
  }

}

// idea of Observable being a fn that returns a cancel is weird -
// unless understood as the subscribe() method of the observable
function createIntervalObservable(n: number): ObservableLite<number> {
  return new ObservableLite((o: Observer<number>) => {
	  	let nth = 0;
  		let interval = setInterval(() => o.next(nth++), n);

  		return () => {
  		  if(interval) {
          clearInterval(interval);
        }
  		}
  });
}

export class SubjectLite<T> {

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

  observable(): ObservableLite<T> {
    return new ObservableLite((o: Observer<T>) => {
      this.observers.push(o);

      return () => {
        const index = this.observers.findIndex(c => c === o);
        if(index !== -1) {
          this.observers.splice(index, 1);
        }
      }
    });
  }
}

export class ReplaySubjectLite<T> extends SubjectLite<T> {

  previous?: T;

  sendNext(t: T) {
    this.previous = t;
    for(const o of this.observers) {
      o.next(t);
    }
  }

  observable(): ObservableLite<T> {
    return new ObservableLite((o: Observer<T>) => {
      this.observers.push(o);

      if(this.previous) {
        setTimeout(() => {
          o.next(this.previous);
        });
      }

      return () => {
        const index = this.observers.findIndex(c => c === o);
        if(index !== -1) {
          this.observers.splice(index, 1);
        }
      }
    });
  }

}




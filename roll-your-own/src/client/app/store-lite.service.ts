/**
 *  OUR REDUX!
 *
 *
 */
import  { Injectable, NgZone } from "@angular/core";
import { SubjectLite } from './observable-lite'

export type Reducer<State, Action> = (s: State, a: Action) => State;

type Listener<State> = (s: State) => void;

@Injectable()
export class StoreLiteService {


  constructor(private ngZone: NgZone) {
  }

  create<State,Action>(reducer: Reducer<State, Action>, state: State): StoreLite<State,Action> {
    const store = new StoreLite(reducer, state);

    // run inside zone so page updates
    const originalDispatch = store.dispatch;
    store.dispatch = (a: Action) => {
      this.ngZone.run(() => {
        originalDispatch.call(store, a);
      });
    }

    return store;
  }
}

// vanilla redux
export class StoreLite<State, Action> {

  listeners: Listener<State>[] = [];

  constructor(private reducer: Reducer<State, Action>, private state: State) {
  }

  getState(): State {
    return this.state;
  }

  dispatch(a: Action) {
    this.state = this.reducer(this.state, a);

	  for(const l of this.listeners) {
		  l(this.state);
    }
  }

  subscribe(f: Listener<State>) {
    this.listeners.push(f);
  }

}

# Roll your own RxJS

Observables are a simple idea at heart. We can build an implementation that works seamlessly with Angular 2 in 10s of lines of code!

## Goal

- A working demo of our `ObservableLite` implementation handling our events
- Using this, connect up our `StoreLite` to our Angular components

## Steps

- First off, let's build something together in the Chrome 'snippet' view
- Now we've seen how simple Observables can be, we're going to convert them into the more familar classes/prototypes based version
  - Start off in `roll-your-own/src/client/app/observable-lite.ts`
  - You can probably reimplement the code by reading the type signatures of `Observer` and `ObservableLite`
  - Once that's done, look at making `AppStore` more observable-friendly
    - hide the redux store
    - add a `dispatch()` method to the store
    - add a `select()` method to the store, which allows you to pull out a specific bit of state
  - Update the `checkout.component` to use the new store API
- You've only gone and re-built one of the magic-est libraries out there! You win all the programmer cred.
  


## Resources

- [Learning Observable By Building Observable](https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87)

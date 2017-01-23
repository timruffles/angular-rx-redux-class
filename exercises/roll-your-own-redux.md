# Roll your own Redux

Redux is actually a very simple idea. It's important to get central concepts down, as it's what your whole app will rest on!

## Goal

We're going to end up with a working Redux store, with Actions being dispatched from our components.

## Steps

- First up, if you've not before play around with [`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
  - Make a reducer that simply joins together all the items in an array with a string
  - Consider: you're 'folding' up the sequence into one item
- Next, implement reduce with the following actions:
  - Return a state object after each action, with `{ value: sumSoFar }`, starting with `{ value: 0 }`

```javascript
const actions = [
  { type: "add", value: 5 },
  { type: "add", value: -2 },
  { type: "add", value: 7 },
  { type: "add", value: -4444 },
]
```

- Now let's implement the full Redux `Store` API in `roll-your-own/src/client/app/store-lite.ts`

```javascript
interface {
  getState(): State
  dispatch(action: Action): void
  subscribe(listener: (s: State) => void): void
}
```

- Now use your store in the app - providing it at the module level and pulling it into the component
- Finally, using the `Stores` API, send some `Action`s in respnse to events, and display the store's state


## Resources

- [http://redux.js.org/](http://redux.js.org/)
- [Closures MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Closures)


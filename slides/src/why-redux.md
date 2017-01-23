## Redux
{title:1}

## Redux is about State

## State is tricky

## Redux gives us 2 wins

## Single point of truth (SPOT)

- All application state centralised

## Single interface to change state

- Via actions, only

## Powerful tooling

- Potential for time-travelling debugger, etc

## Parts

- Reducer
- Action

## Reducer

- same idea as `Array.prototype.reduce`

```javascript
function reduce(state, action) {
   switch(...) {
   }
}
```

## Simple contract

```typescript
type Reducer<State, Action> =
  (s: State, a: Action) => State;
```

## How should state be structured?

## Normalized

## What is normalization?

## Avoiding duplicating state

## If we duplicate state, we lose SPOT

## e.g

- What happens here when we wish to edit Alice's food?

```typscript
const state = {
  selectedUser: {
    name: 'alice',
    id: 12,
    favouriteFood: 'cheese',
  },
  users: [{
    name: 'alice',
    id: 12,
    favouriteFood: 'cheese',
  }],
}
```

## Normalized version

- Keep state flat, using ids for references

```typscript
const state = {
  selectedUser: 12,
  users: [{
    name: 'alice',
    id: 12,
    favouriteFood: 'cheese',
  }],
}
```

## Very similar to 

- SQL. Relational model
- Reading any database design book will help

## Selectors
{title: 1}

## Relational data is not convenient

## Selectors are your data access API

## e.g

```typscript
const state = {
  selectedUser: 12,
  users: [{
    name: 'alice',
    id: 12,
    favouriteFood: 'cheese',
  }],
}

function getSelectedUser(state: State)
  : SelectedUser | undefined {
  if(state.selectedUser) {
    return state.users.find(
      u => u.id === state.selectedUser
    );
  }
}
```

## Selectors should be composable

## So...

## Let's build our own redux!

Check you have node > 6

    ./roll-your-own
    npm install





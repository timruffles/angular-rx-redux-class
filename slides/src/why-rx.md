## Why Rx?
{title:1}

## Firstly, Rx = library

## Big idea is Observables

## So why Observables?

## Challenges with async

- Bookeeping
- e.g when A, B happen then do C
- race > 1 async actions etc

## Let's go back 1 step

## Promises

## Everyone comfortable with Promises?

## Give us a *value* for async

```javascript
// we have no *value* to start using
const xhrA = new XMLHttpRequest;
xhrA.open('GET', 'some.data')
xhrA.onload = function() {
}

const xhrB = new XMLHttpRequest;
xhrB.open('GET', 'other.data')
xhrB.onload = function() {
  // manually implement combination logic here
}
```

## Promises

```javascript
const both = Promise.all([
  get('some.data'),
  get('other.data'),
])
.then(([a,b]) => {
  // we know if we're here we got both
})
.catch(e) => {
  // we know if we're here one or both failed
})
```

## Imperative to Declarative

- Imperative = we do bookeeping
- Declarative = we declare relationships
- Like Excel, C2 = A1 + B1, kept up to date

## Promise contract

- 1 x success OR 1 x error

## What about events?

- Things that can happen multiple times
- User input, streaming data etc

## Promises can't help here

## Observables

- Proposed by Erik Mejier
- Contract: `Next*(Complete|Error)?`
- Zero or more values, optionally followed by one of Complete or Error

## Again, declarative to imperative is big idea

## `subscribe` and `Subject` are imperative

- Try not to use them
- Using them = smell: something is not reactive!





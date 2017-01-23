## Full app
{title: 1}

## Implementing a simple form-driven app

## Reactively

## No `subscribe` in components

## No services in presentation components

## No untyped code

## Lots of modules to play with

- `@ngrx/store` - store for RxJS
- `@ngrx/effects` - RxJS effect handling
- `redux` - Core Redux library

## Data-flow
{title:1}

## Smart + dumb

## Dumb components, AKA...

- presentation components

## Dumb components take data, draw

- Dumb components take in *values* and render them
- They emit *values* when users interact

## Why values

- Canned values can be easily produced

## Values v objects

- Values = no identity
- Values = compare by value
- Values = immutable

## Demo pages

- If a dumb component only consumes values, can easily produce demo pages
- Work on your component in complete isolation from rest of app

## Smart components, AKA...

- container components

## Connect to store, services

- links up the dumb components to your app
- these are very coupled to a specific context

## e.g

![data-flow](img/data-flow.jpeg)

## Smart components

- usually quite 'thin'
- interesting stuff happens in services
- think: glue

## e.g

![smart-v-dump](img/smart-v-dumb.jpeg)





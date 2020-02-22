1. What problem does the context API help solve?

Context API solves the problem of of prop drilling by allowing components to access a context object

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: describes what has changed in the app and triggers reducers
Reducers: functions that return only a copy of our state with what changed
Store: Contains our state for our app

The store is imutable. We never post to the store directly and only copy the state and change the state. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state pertains to the whole application, component state may only effect one or a few components. Component state is useful for things like buttons that do the same thing over and over again. Application state is useful for retaining a logged in/ logged out status etc.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a middleware that allows us to intercept a process and run a function before continuing or stopping the process. It changes our action creators by running functions before the data is passed to the reducer

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system is redux. Using logger and middlware with redux allows me to think more strictly about my data flow.

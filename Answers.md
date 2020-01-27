1. What problem does the context API help solve?
<!--! Allows you to pass state to components without prop drilling via provider -->
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
<!--! action: what is dispatched with payload, if needed, to run through the reducer switchStatement -->
<!--! reducer: takes in current state and a action to change state and return the new state  -->
<!-- store: where all the state is stored, it is where all the global state in the application is stored, stays updated with the reducer -->
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
<!--! application state: global state, used everywhere
      Component state: state only used and stored within a component -->
 <!-- Its best to use component state when it is only ever going to be used in that component, ex. onUpdate via forms -->
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
<!-- thunk is a middleware that allows us to use action creators as functions rather than just an object -->
1. What is your favorite state management system you've learned and this sprint? Please explain why!
<!-- React, its longer to set up but so much easier to predict state as well as keeping it all in a single place. Great for large applications -->

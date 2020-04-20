1. What problem does the context API help solve?

It enables us to share specific forms of data across all levels of the application. and solves the problem of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- actions are the bits of information (objects) that send data from the application to the store.
- reducers are functions that determine the way application state changes in response to the actions sent to the store.
- store is the object that brings actions and reducers together, holding and allowing access to the application's current state. It is known as the single source of truth because our state tree (all application state) is the store and we can have only one store in the application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application State is when we hold all state on the redux store or the parent of all components, meaning that the state of the application is kept at the top. Component State is when we use state inside any component, which prevents other components from accessing that state, for example, Formik.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux - because the state of your application is kept in a store, and each component can access any state that it needs from this store, making it easier to maintain these states. 

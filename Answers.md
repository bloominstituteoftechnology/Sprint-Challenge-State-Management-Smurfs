1. What problem does the context API help solve?
Allows access of state throughout the app
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are payloads of data being sent from your application to the store.
Reducer specifiy how the application's state will respond to the actions sent to the store
Store brings everything together, holds state, allows access to that state and for it to be updated 
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Components states live within a certian component and can only be updated in that component, and can only be passed down to it's children thru props.
Application state is global, can be accessed anywhere as long as the user hooks into it.
Use component state when you don't need access to that state across the app and application state would be used if you need access to to state across the whole app.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux allows us to return functions instead of an action object
1. What is your favorite state management system you've learned during this sprint? Please explain why!
Context API is my favorite so far, it allows me to access state throughout my app. I want to get better with redux, because I think
it's more commonly used.

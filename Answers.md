1. What problem does the context API help solve?
    It allows us to share specific forms of data across all levels of the application. It helps solves prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions - payloads of data that send data from your app to the store.
    reducers - specify how application state changes in response to actions sent to the store. 
    store - The store holds the application state, allows access to state via getState(), allows state to be updated with dispatch(). 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    application state is global, component state is local, redux use stores to hold state, any component anywhere in the app can use it as long as they hook into it. 
    component state lives within a specific component, and can only be updated within that component and passed down via props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux-thunk is a middleware that lets you call action-creators that return a function instead of an action object. It allows you to perform synchronous actions in the body of the function once the asynchronous operations have completed. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    I'm honestly not sure. I'm back and forth between both of them and trying to be somewhat equal with both of them. Context API is a little easier for me, but i'm trying to do this with Redux, to better myself with Redux.
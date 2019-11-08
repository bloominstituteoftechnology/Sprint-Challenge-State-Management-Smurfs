1. What problem does the context API help solve?
    It is a way to handle state in a larger application to avoid `prop drilling`, or the passing of props from component to component. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    -Actions are objects with a `type` property sent to a dispatcher allow with previous state, wich the dispatcher uses to return the new version of state. 
    -Reducers are functions that take the previous state and an action and returns an updated state object based on both args
    -Store is the single immutable state tree where all state chanfes are explicitly handled by dispatching actions

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    App state is state that is used throughout the application, as in: it is displayed in one component but manipulated in a different, possibly distant component. 
    component state is state that is only used within a single component, that is not affected by external data

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux Thunk is a middleware created by Dan Abramov, that provides the ability to handle asynchronous operations inside our Action Creators. it changes the ACs to perform API calls, as it is middleware, so it doesnt affect the reducer. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!
    Redux is still a formidable monster, but its super popular and theres propabably a goood reason for it. handling state on large apps is probably way better with redux than throuh vanilla propdrilling

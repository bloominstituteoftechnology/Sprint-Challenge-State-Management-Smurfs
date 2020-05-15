1. What problem does the context API help solve?
    The context api solves the problem of passing props and states threw childern component
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    reducers act as a wedding planner that knows what each guest needs are 
    they store information to be later used. Actions are the events to be carried
    out by the reducer if that target is hit. And the store is known as the symbol of 
    truth because it can hold global state across the app

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    the difference between the two is that application is more of a global bank while components act more like 
    a local bank.. An example will be if your using a login you may want to store the users information into a
    global state to be used over and over while completing a form in a component would be stored on a component
    state.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux thunk stands as a middleware to take in actions and changes multiple states
1. What is your favorite state management system you've learned and this sprint? Please explain why!
    The context api is probably my favorite just because of the time it takes to setup.

1. What problem does the context API help solve?
the problem of prop drilling!

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece 
to me actions are events that i can disperse at any time in any component that triggeres a state change, 
said state change comes from my reducer that keeps track of all state and triggers upon action. the store is literally a store of all state to connect to a component

do? Why is the store known as a 'single source of truth' in a redux application?
its the object of all state 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
storing globally vs storing within the component. i would only use app state if im working with a sizely application otherwise if i just need a couple compoennts i can easily pass or create state within the comp

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
gives us the ability for async  actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
redux becuase i like putting actions in functions :)

1. What problem does the context API help solve?
Solves the problem of props drilling. It allows you to share props or state with an indirect child or parent.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are 'actions' used by the reducer that detail how to update the state. Reducers dispatch actions and detail how the detail will be updated.

The store is a global state that holds state that CANNOT be mutated. The store is referred to as the single source of truth because we only ever make one store that holds all of our data across an entire application.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is best used when mantaining state in seperate components becomes to complicated or prop drilling is prevalent. Making the switch to application state should only happen when managing state by passing props in no longer controllable.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk allows us to create action creators that return functions instead of actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Both are useful I'd say Redux because it gives more power for multiple developers to work on larger applications alot less painlessly.

1. What problem does the context API help solve?
Don't have to pass props down from component to component - “prop drilling”. 


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions - objects with information for the reducer. (type and payload)
Reducers - functions that create a new state
Store - where our state is stored

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

It depends on the same of the project and the state. If there's a lot of data in different component, application state would be the best bet.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a middleware, used to delay the dispatch of an action, useful for data fetching for example.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
Once redux clicked I'd say it's my favorite because everything is stored properly in its place and the visual of the flow makes sense to me.

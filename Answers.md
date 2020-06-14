1. What problem does the context API help solve?

    It lets you manage state within child components more easily

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are like an ID we use to access reducers, reducers are functions with state logic, store is where all of the is stored

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

component state is kind like function scope and application state is kinda like global scope.
If I can get away with only using component scope I will but sometimes state has to be passed between multiple components and at that point it becomes Application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is middleware that lets you call action creators returning a function opposed to just action object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context. I like it because it's light weight. I need more practice with redux.

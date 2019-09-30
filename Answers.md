1. What problem does the context API help solve?
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1. What is your favorite state management system you've learned and this sprint? Please explain why!

1) Enables users to share specific forms of data across all levels of the application.
2) Action watches for a change in state, store stores that state and reducers limits the state to a component the user wants to change.
   3.Component state is local and application state is global;
3) Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
4) I thought it was Context APi but tonight I had trouble with it.

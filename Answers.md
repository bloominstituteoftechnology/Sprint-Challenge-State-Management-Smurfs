1. What problem does the context API help solve?
  Ans:- It solve prop drilling, by passes passing the state data into several layers of the application.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   Ans: -Actions -> User interactions with the application, reducers --> clones the states and modifies it based on actions, store -> state of the application. As store is the global state of the application and holds all the data, we say it as single source of truth.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Application state is the global state where all the data is stored, where as component state is limited to the component and its children only.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   redux-thunk is a middleware and it provides asynchronous to the application, it changes the action-creators by allowing as to dispatch the action the way we want do it.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
    Context-api and redux state management system because both avoid the problem of prop drilling. Redux is useful to maintain the complex state.

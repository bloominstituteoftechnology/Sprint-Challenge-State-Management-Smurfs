1. What problem does the context API help solve?
It helps initial state be immutable so that there is application state versus component state.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions create new state, reducers take initial state copy it and produce state that can be updated, the store is how you pass state from the reducer to the application.



3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Applicaton state provides an intial state that never changes but through reducers can be copied and updated to return new state. Component State allows you to change state directly. I believe Application state is best when building a whole application so the back-end and front-end work together to create new state without changing old state, component state is best used only when you need a fast answer but would be worth checking things out before updating to application state.


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
 
 Redux thunk is a middleware programs that helps us be able to tell application state when to update through async actions.


5. What is your favorite state management system you've learned and this sprint? Please explain why!

I actually think I prefer redux as it has the potential to be bigger and work together for a very large app. I think Context API is a bit easier to understand and would be better if I had not discovered redux hooks. Redux hooks just make redux easier to understand and use on large-scale applications because it is easier to apply throughout than context API in my opinion.

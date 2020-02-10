1. What problem does the context API help solve?

-it helps with prop drilling and makes sharing data easier throughout your app.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-
actions-objects that state intent to transform the state, it allows for easier debugging, and ensures that the views and the callback. (state is read-only!)

reducers-functions that take the previous state and an action and return the next state. allows you to determine the order in which they are called as well as add additional data. can be made to be reusable.

store- makes it easier to debug and test an application with all of your state stored in one place and as a single tree. middleman between actions and reducers. because it gives us the ability to maintain a 'clean' state, and the only way to change it is to use an action which changes the state in the reducer. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

-application is global, component can only be seen inside the component and needs to be passed as props to sub components. 
-if the state doesnt need to be shared with other components then use component state. if more than one component needs access to state then use application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-middleware that lets you call action creators that return a function rather than an object. allows us to use the dispatch method to dispatch synchronous actions after the asynchronous operations are done. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

-redux, i feel it is easier to understand and less work and i like that it can be used with other frameworks

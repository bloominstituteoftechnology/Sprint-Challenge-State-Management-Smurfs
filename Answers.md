1. What problem does the context API help solve?

As our app gets bigger, it helps us manage state more easily by eliminating prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions change the state, reducers update state when the actions are called. Store, holds the whole state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state of the application where information can be passed to components. Component state is the state of the component and can only be passed down as props. Application state is more suitable for big applications.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a middleware that allows us to use async actions. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I prefer redux, probably because I don't see the benefits of Context API because my projects so far have been simple enough to not necessitate it.
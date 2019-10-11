1. What problem does the context API help solve?

context API solves the problem wherein data is needed to be passed around through components but needs to be shared to other components with the updated or the same data.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are events that are initiated by a user while reducers update the states after the actions are called. Store on the other hand, holds the state tree which is also known as 'single source of truth'.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is a global state in redux while component state is a local state that can only be passed down to child components.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a middleware that allows async actions to dispatch to reducers as synchronous actions

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Im not so sure because Im still a little bit in the confusion phase, but using redux with the reducers and actions made keeping track of my events and change of states much more organized which probably is my favorite out of all.

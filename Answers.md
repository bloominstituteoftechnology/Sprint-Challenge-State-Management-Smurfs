1. What problem does the context API help solve?

Helps you pass data down without you having to specifically pass props through EVERY level of the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions allow you to modify application state. Actions contain an action type and any data associated with the action type.

Reducers are functions that that 2 arguements => current state and an action. They return new state based on those two arguements.

Store is a "single, immutable state tree". It contains the state for an application.

The store is known as a single source of truth in a redux application because it holds the application state, and it cannot be changed. Only copies of the store can be changed. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that is consumed by the entire application.

Component state is state that is specific to a component.

You would use application state when state is applied to multiple components. Use component state when the state is only needed in a specific component. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a middleware library that interrrupts the flow of actions to the reducers. It makes the flow ansynchronous, and allows us to make API calls from the action creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Contect API. Hands down. I liked it because it was very easy for me to understand. 
1. What problem does the context API help solve?

Context API allows us to pass state to all components in our App without passing props. It solves the problem of props drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The action object connects data from the App totransfer to the store.
The reducers receives information from the action and uses it to create new state.
The store holds all state, and it is the single source of truth because all components get their state from the store and it is immutable.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state makes use of the Context API to provide state to every component of an app. It is useful for data that needs to be used for many different components or for components that are far down the componenet chain. Componenet state is state that is only found in a component and this state would have to be passed by props drilling. It is useful for storing state that is only needed for that one component of an app.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middle-ware that allows action-creators to return a function. Normally action-creators only return objects.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like redux the best and the reason is the syntax for the ProductContext is not as clean in my mind anyway.
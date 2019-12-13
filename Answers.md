1. What problem does the context API help solve?

Context API helps solve passing props down components. It stores data into a context object and allows us to pass the data straight into the components without prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are packets of data that contain an action type and payload that holds data. Actions tell us about the changes from an event the user fires. This action will then be sent to our Reducer. The Reducer is a state machine that allows us to update state in the store. The Reducer accepts the actions and reacts accordingly. After the action on the reducer, the store will update accordingly. The store, also known as the single source of truth, is what holds the application data. The store is known as the single source of truth because it holds the application state and it's data.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

The difference between application state and component state is that application state holds all of the state for the entire application while component states hold state in specific components. Component state isn't usually shared with the entire application. When you have a big application and there are a lot state being held in a component, it would be beneficial to have the application to hold state. Smaller applications are great to use component state while larger applications with a lot of data should use application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware that takes care of asynchronous action creators. It makes the flow asynchronous and make API calls from our action. Redux-thunk changes our action-creators by giving us access to the dispatch function. This means we can run async functions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system is probably redux because I like knowing there is a single source of truth. Having the store makes it easy to understand where the React data is. However, there is a lot of boilerplate to use redux.


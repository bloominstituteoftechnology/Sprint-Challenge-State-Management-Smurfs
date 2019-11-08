1. What problem does the context API help solve?

Context API provides a way to share values between components without having to explicitly pass a prop through every level of the state tree. In large applications, the passing of props can become cumbersome and complex. Context API lets global data that many components share be available in a single, reusable context.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are more or less 'events' that take place in our application. They contain properties related to what's happening in our apps. They inform the reducer of what 'event' has taken place. The reducer then processes those actions by comparing the previous state to what would be the updated state and returns the updated state to the application. This makes the state tree changes predictable. The store is the immutable state of the application, which cannot change, but rather is copied and re-rendered. All fo the state changes are handled in the store, or the state tree and can only be updated by dispatching actions. This helps to avoid side effect and allows for mutation tracking, or the referenceable history of the states of an application.



1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state of the entire application, whereas component state is the state of the components within the application. If the components are continuously updating independently in an application, this can cause problems when scaling with the component updates getting out of sync. The benefit to managing the state of the Application as a whole is that all independent state statuses are kept current and in sync with the current state tree.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that allows us to intercept the actions taking place in our app and use that interception to hand asynchronous operations inside of the action creators. Thunk has access to the dispatch function, which allows us to use it to carry out an API call and then dispatch an action.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system is connect(). I just seemed to understand it intuitively, because it's like plugging a component into the Redux store. The implementation is intuitive and simple. In one line we connect the component to the store and pass the changes in the component to the store as well. 
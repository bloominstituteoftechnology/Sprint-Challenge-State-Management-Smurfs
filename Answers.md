1. What problem does the context API help solve?

The context API helps solve the problem of prop drilling. Prop drilling is when you have to send props down through multiple components, which aren't being used by the intermediary components that they're traveling through.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are the actions a user can take in your app. They're like messages that tell your reducers how to update state. Reducers are pure functions that update your state based on the actions they receive. The store is a global behemoth that holds your state. The store is known as a single source of truth in a redux application because that's typically your global state where you store all -- if not most -- of your state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that's releveant to the entirety of your application, such as theming, or a user's username. Component state is state that's irrelevant to the entirety of your app, and is local to a component. An example of this would be state containing a search term inside a form.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a piece of middleware that allows us to dispatch asynchronous actions. It also gives us more granular control over how we dispatch our actions, allowing us to dispach several actions over the course of one action creator. It changes our action creators by requiring them to return a function (or thunk) instead of an object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system I've learnred in this sprint is the marriage of useReducer and the context API. I love how simple it is to set up a global state and dispatch actions. It's much simpler to reason about than react-redux's `connect` HOC. I will say that using react-redux's hooks is a close second though. That's also very nice to work with due to its simplicity.
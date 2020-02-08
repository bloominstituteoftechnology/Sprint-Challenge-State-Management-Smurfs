1. What problem does the context API help solve?

The context api helps prevent prop drilling in the application. All you to share data on all levels of the application.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is where the state is stored in the app. It is the single source of truth beause there is where the app data is stored.

Actions are what sends data to the store through payloads.

Reducers will change the apps state based on the actions that are sent to the store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the global state of the application while component state is the local state for the said compoenent. You can use component state when you are only effecting state changes to that compoenent and not making and gobal changes. But if you want the state changes to be used through out the whole app, you would need to use the application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows us to run redux asynconously (api calls, etc). It makes the action-creator call a function instead of an action object, so will take 2 arrow functions. () => () => {}

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like context because it is easier to get up and running without all the boiler plate code that Redux has. It looks cleaner to read and just less code to get running.

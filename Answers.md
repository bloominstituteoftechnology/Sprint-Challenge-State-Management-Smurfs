1. What problem does the context API help solve?

- `React Context is a way for a child component to access a value in a parent component.`

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- `Actions - Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. `

- ` Reducers: A reducer is a pure function that takes the previous state and an action, and returns the next state `

- `Store: Store is basically just a plain JavaScript object that allows components to share state.`

- `Redux is a single source of truth, it means that the only way to change your data in UI is to dispatch redux action which will change state within redux reducer. And your React components will watch this reducer and if that reducer changes, then UI will change itself too. But never other way around, because Redux state is single source of truth.`

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- `Your application state is global, and your component state is local`

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-  `Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.`

1. What is your favorite state management system you've learned and this sprint? Please explain why!

- `Context, because it is a lot easier for me to understand`


1. What problem does the context API help solve?
Context API is an easy way to pass state without needing to use props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Action: are payloads of info that sends data from the app to your store 
Reducer: is a function that determines changes to an application state. 
Store: stores the whole state of the app in an immutable object tree. The store is known as the single source of truth because it carries everything throughout the app.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the global state that all comp. are in in the comp. tree Component state is the local state that is local to a single comp. and cannot be seen outside. It would depend on whether which one to use but usually when there is much data being passed you would use the application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk is the middleware that lets you call an action creator that returns a function instead of an action object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
I liked context api, i found it to be simple but i also enjoy redux

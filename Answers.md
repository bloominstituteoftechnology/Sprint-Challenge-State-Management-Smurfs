1. What problem does the context API help solve?

-->You don't have to pass props down from component to component or prop drill. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? 

--> actions: A simple object 
    ROLE: Carries data

--> reducers: Pure functions
    ROLE: Take the previous state and and an action/dispatch and return you with a new state

--> store: Everything that changes within the application will be represented by a single Object.
    ROLE: The store contains our state for our application


Why is the store known as a 'single source of truth' in a redux application?

--> It means that the only way to change your data in UI is to dispatch redux action which will change state within redux reducer.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

--> Application state is global, and your component state is local. 

--> When to use Application state: A good time to use global is if you are trying to pass the component anywhere within your app.

--> When to use Component State: A good time to use it is for a small scale app. It can only be updated within that component and passed down to its children via props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

--> middleware that lets allows us to call action creators that return a function instead of an action object. It receives a dispatch which sends regular synchronous actions inside the body of the function once the asynchronous operations have completed.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

--> Redux due to the capability to be able to pass state globally.

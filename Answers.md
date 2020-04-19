1. What problem does the context API help solve?

- Context API helps to simplify an application by reducing the need for prop-drilling by making a component or state usage available to different parts of the application.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-  `Actions` are the functions that carry out the changes to state within Redux. `Reducers` use the information from actions to alter the state of the application. The `store` is where the application's state is kept and altered.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is a form of state that can be reused from anywhere within an application, and is useful for a state shape that will be used multiple times throughout an application. Component state is a form of state that exists only within a specific component, and is good for single-use states.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- `Redux-thunk` allows us to use Redux asynchronously, or in other words, with `promises`, such as `axios` requests. It changes our `action-creators` by giving the option to run an async function by returning a `thunk`.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

- My favorite state management system was the Context API, because of the way it eliminates prop-drilling and simplifies reusable state across a whole application.

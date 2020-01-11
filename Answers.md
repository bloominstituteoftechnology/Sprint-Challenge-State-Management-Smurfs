1. What problem does the context API help solve?
Prop drilling

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions hold the vanilla js functions that dispatch the type (name) of which payloads of information to send your application to your store.
Reducers hold the switch case statement that takes an action’s type and specifies how the application’s state changes in response to the called case.
The Store is global place (object) that holds the state where every file in the app has access to the state.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
App state is global and Component is local. Component state is useful if it only needs to be updated within that component, if state that affects the whole app is needed to be updated the App state is useful.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
Redux because it seems like the most used and best way to manage large production level apps.
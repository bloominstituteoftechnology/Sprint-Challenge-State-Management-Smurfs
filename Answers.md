1. What problem does the context API help solve?
In large applications where we have many components, passing props from parent to child becomes cumbersome, context API helps us solve this problem of prop drilling.
Context API helps share values over several components without having to pass props through every level of the tree. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Action is an object with a type property and a payload property. Actions are dispatched to the reducer, when the reducer receives the action function it updates the state according to the type and payload.
Reducers specify how the applications state will change in response to actions sent to the store.
Everything that changes within an application is stored in single javascript object called store. Store is where we keep our state of application.
Store is where everything is organised and kept it holds the whole state tree of your application, that is why it is called the single source of truth.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global and can be accessed from anywhere whereas component state is local and can be accessed only within the component and passed to children via props.
Redux library has application state called redux store which can be accessed from anywhere in the component as long as we are hooking into it.
Component state can be used when there is a small application and props can be passed to child components, however in large applications it would be difficult to keep track of all state changes and props. Application state can become handy under those situations. The Application state can be easily accessed by multiple components using hooks.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk is a middleware we use to make our reducer flow asynchronous and to make API calls. Thunk is another name for function, a special function that is returned by another function.
Thunk returns an action-creator using which we can make axios calls from an API.
5. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system would be context API, this is because you can get rid of unnecessary prop drilling exercise using this system. This also enables one to keep code easy to read and less lines to work with once we get into large applications.
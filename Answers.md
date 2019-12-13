1. What problem does the context API help solve?

It solves the problem of prop drilling, where you're looking to get state from the top of your react tree down to the bottom and end up passing props through components that do not necessarily need them. It's a way for a child component to access a value in a parent component.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. Reducers specify how the application's state changes in response to actions sent to the store. Redux is a state container for JavaScript apps, often called a Redux store. It stores the whole state of the app in an immutable object tree. The only way to change the state inside it is to dispatch an action on it.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

State is nothing but the state of the application at a given point of time. Generally component state is stored locally within a component and is not accessible from other components unless it’s explicitly passed as props to it’s sub components. When the number of components increases, the passing of props starts becoming cumbersome. Application state used in Redux is a centralised global store which is accessible to any component that subscribes to the store. This makes your app easier to manage as it grows bigger.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I guess it would be Redux. It seems to be quite useful, and I can understand it fairly well. At this point I'm not sure I have enough experience to really explain why I like one over the other. It pretty much comes down to which one I can understand and use with the least amount of bugs/problems.

1. What problem does the context API help solve?

ANS: The Context API is a neat way to pass state across the app without having to use props. 
ThE contedt API solves one major problem known as prop drilling. Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components.
However, by making use of the context API a component has access to application state no matter how deeply nested the component is within the application.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

ACTION: An action is like a message that we send (i.e. dispatch) to our Redux store. We can think of an action as being just a javascript object with a mandatory type property and an optional Payload property depending on whether we want to modify initial state or not.

REDUCER: A reducer is a function (a pure function) that takes the previous state and an action, and returns the next state. using the arrow syntax, I would represent a reducer as: 
        const reducer = (previousState, action) => newState. 

STORE: The store holds the whole state tree of your application. The store is known as a single source of truth because it serves as a central place for which all component state is being accessed by other components of an application state and the only way to change the state inside it is to dispatch an action on it.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

ANS: Application state is shared state. i.e state that could be passed via props among diff components. Application state also refers to the global state and is accessible by all other components of an application.

Component state, however, refers to the state that is available to just a particular component within a react
application.

If a particular slice of state is going to be needed across the entire application, then it would be wise to set such a slice of state as Application state using state management tools. If, however, a slice of state is only needed within a particular component of our react application , the we would restrict the slice of state to
be a component state


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Action creators normally return an action object (with a type property and sometimes a payload property). 

Redux-thunk is a middleware that lets us call action creators that return a function instead of an action object. 

Redux thunk allows us to interact with actions that have been dispatched to the store(by action-creators) before they reach the store's reducer, making it possible to perform asynchronous requests and dispatching new actions.


5. What is your favorite state management system you've learned and this sprint? Please explain why!

ANS: For now, my favourite state management system learned so far this sprint is the Context API. The context API helps in teleporting state from a top level component to a deeply nested component without dealing with the 
problem of prop drilling. Unlike Redux, the steps involved in setting up a context are simple to understand and easy to use. This is why the Context API is my favourite state management system(For now!)

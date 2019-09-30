1. What problem does the context API help solve?

React Context is a way for a child component to access a value in a parent component without the need for prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are packaged info that send data from your application to your store.

Reducers say how the apps state should change in response to actions.

The store brings everything together and holds the state.  It is the single source or truth because it is the state which all the other components can access and refer to.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is state that is accessed by a component and can be drilled to its children.
I would use component state when I am trying to give only a single component access to a certain set of data.  This can be usefull for trainsiant state used for individual components like a mouse clicks down for drag and drops and etc.  

App state is state that can be accessed at the highest levels of the components all the way down.  Global state should be use for data that needs to be widley dispersed among the components.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware that allows us to use action creators to return a function instead of an action object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I find useContext to be simpler to set up and user friendly.
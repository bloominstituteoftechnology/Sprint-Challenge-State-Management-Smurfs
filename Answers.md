1. What problem does the context API help solve?
  ***Helps share data to specific components that need the data. It also helps with prop drilling.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  ***Actions- plain Javascript object that contains information.      Actions have type feilds that tells what kind of action to perform and a payload that holds the data to change to.
    Reducer- holds if statements or switch case statements and perform an action depending on the type and tells the store how and what to change state to.
    Store- Holds the state where every component has access to the state. It's the only place which represents original state.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
***Application state is global and component state is local. Application state is good if your wanting state in multiple components and component state is good if you only need state in one component.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
****Redux-thunk is a redux middleware that handles asynchronous requests. Thunk will intercept the normal redux flow and make a call before actions make it to the reducer. Usually used for API calls. 
1. What is your favorite state management system you've learned and this sprint? Please explain why!
***I like context api because it's easier to understand and set up. 

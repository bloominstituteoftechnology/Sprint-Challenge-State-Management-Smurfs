1. What problem does the context API help solve?
   It helps you too avoid unnecessary prop drilling.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   Actions are events that you create that are triggered by an action creator function. Once the functions are called they are shoot off to the reducers, via a dispatch, an action type and a payload. The reducer is both where the state and the action functions live. Reducers receive the action type and the payload and do something with them to update the state. The reducer is sent to the store in the src\index.js file and the App component is wrapped in the Provider with the store as the prop. Now all the children of App have direct acces to what's in the store. The state of the Apps data is only updated in one place and accessible to all the child components.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Application state is state for the entire App and it's child components. When you need to make a change to the database and data that feeds to all the child components you'd use application state. When you only need to change small things within components, say form fields who's values will get added to the Application state on the form submit, you'd use Component state to handle the changes to the form itself.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   redux-thunk is middleware that lets you call action creators that return a function instead of an object.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
   Redux. It's completely intuitive, that is once you get everything set up right. I makes it way easier to plan around a centralized store.

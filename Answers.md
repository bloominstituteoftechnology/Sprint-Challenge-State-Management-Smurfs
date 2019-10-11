1. What problem does the context API help solve?
    easier control and creating/manipulating of state
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece 
do? Why is the store known as a 'single source of truth' in a redux application?
    actions are litterally actions that you describe. reducers are how state changes based on those actions, and store is storeing those actions. 
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    application state is global, and component state is strictly in that component. App state would be good for anything you need to access everywhere, and compo state would be good for nesting state into that state specifically where you only need that data in a single place.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    middleware, allows you to call action creators that return functions instead of an action object. 
1. What is your favorite state management system you've learned and this sprint? Please explain why!
    redux, having the inistate in a file and having everything nearly global is really nice. just need more time with it.
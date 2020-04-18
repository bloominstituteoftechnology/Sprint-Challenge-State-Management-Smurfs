1. What problem does the context API help solve?

    Context API was made to solve the problem of prop drilling, or passing props multiple levels deep through components. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions send data from the application to the store. 
    
    Reducers update the state of the app based on actions sent to the store. 
    
    The store is an immutable state tree which holds the main state of the application, thus its name as the "single source of truth".

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global, and component state is local. The first is used so any component can access it, while with the latter, only the specific component can access it.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk enables developers to write action creators that return functions instead of actions.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    Well, I don't think I really have a favorite, but I definitely have a least favorite and its Redux. It's just so complicated... I'm sure I'll get the hang of it someday though.


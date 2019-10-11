1. What problem does the context API help solve? 
Ans. Context API helps solve issues of deeply nested data and need to pass data through intermediate components or global data shared by lots of components. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Ans. Store holds application state tree and is called single source of truth.   Actions are events or user initiated interactions that when defined can serve to limit application state (finite state) and are passed to reducers.  Reducers update application state based on the current state and a given Action. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Ans. Application state is global such as state available in Redux store versus Component state which is local and can only be passed to component’s children. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Ans. 	Redux Thunk is middleware that allows asynchronous actions to be dispatched to reducers as synchronous actions. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!
Ans. 	I don’t have a favorite state management system, yet, but Redux store seems easier to follow state flow, but boilerplate dependencies is drawback however Redux Dev tools are beneficial for troubleshooting. 
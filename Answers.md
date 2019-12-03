1. What problem does the context API help solve?

It helps solve the problem of having to pass data to components by prop drilling. Context API provides a way top share without having to explicitly pass a prop through every level of a tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

In redux the store is where our state for the entire application lives. A reducer is a function that predictably and indirectly updates our state. An Action is an event object that tells the reducer how to handle the state. 
The store is a single source of truth because it is the place that ’stores’ our state that we can then use to pass to any component  that needs it.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is only accessible to that component or its children. Application state is potentially available to any component of the application. It is better to use application state once the app is complex enough to rely on state being available to multiple components throughout the application.


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to use redux asynchronously. Which allows us to consume data from external API’s. It changes our action creators by allowing us dispatch actions based on the API call.  


5. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is my favorite one so far. I liked context API as well but Redux seems to cover more bases and can still be used in simpler applications without too much setup.


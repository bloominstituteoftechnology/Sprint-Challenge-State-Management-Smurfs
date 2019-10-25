
What problem does the context API help solve?

1 - Context API helps solve problems with prop drilling. Helps keep our state clean.


 In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

 2 - Action (an object) tells the reducer what action just occurred in the app. Reducer is a pure function without any side effects. Store is a global state object that hold ALL of our state. (Parent provider to all children).
 It is a 'source of truth' because state stored in store is cloned, never mutated. 

 
 What is the difference between Application state and Component state? When would be a good time to use one over the other?

3 - Application is the global state and component is a state that is local.  Application uses Redux (large applications) and Component state can only be seen within that component and passed down to its children via props.


 Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

4 - Redux-thunk is a middleware package (used in Redux) that we can us to give redux the ability to run asynchronous operations (multiple at a times).


 What is your favorite state management system you've learned and this sprint? Please explain why!

 5 - My more favorable state management system is Redux; it is a lot to set up but once it's in place, it's easier to manage and work with.

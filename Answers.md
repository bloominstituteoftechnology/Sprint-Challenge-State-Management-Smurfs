1. What problem does the context API help solve? It passes props through every level of tree wihot passing props on each hierarchical level.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? store is like state. action tells what to do on a certain change on a stata. reducer tells how to manage the state from the previous data.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Application state is global while component state is the between components within the application.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   Redux-thunk is to make code asybchronously which allows action-creators to call from APIs.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
   Context seems easy to apply but, Redux woud be much easier for lager apps becuase it holds all props to pass in a place. 

1. What problem does the context API help solve?
---- Context API solves the issue of complexity when dealing with 'state'. It allows you to share data globally throughout your app without prop drilling. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
---- Actions: Are payloads that pass data into reducers. 
---- Reducers: Are functions that control how and when to change the 'initialState' when activated by the 'actions'.
---- Store: is the 'single source of truth' that brings the actions and reducers together. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
---- Application state is 'global' and Component state is 'local'. You would want to use local when dealing with sensitive information such as forms. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
---- 'Redux-thunk' is a middleware that allows us to run code async in react-redux. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!
---- Redux is my favorite so far because I want to use it when making large, complicated apps.


-- 
1. What problem does the context API help solve?

It helps us manage components and props through out all levels of an application.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-Actions contain information about what kind of action to perform.
-Reducers are the pure functions that take the instructions and information from Actions and return the new state
-Store is the object that holds the state of the application

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

-Application state is what you would want for something to persist through out the whole application, they are essentially like a database any part of the app can access it.

-Component state lives in the specific componenet and can only be changed within the component and passed down to children using props. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It let's action creators call functions instead of an action object, which allows synchronous actions to be performed within the body

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux was difficult to learn, but it seems to be worth the trouble. When the ground work is laid down it seems to be painless and reliable.
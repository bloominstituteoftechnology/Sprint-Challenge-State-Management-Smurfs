1. What problem does the context API help solve?

   It helps us manage components and props through all level of application.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each 
piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions  - Contain information about what kind of action to perform
    Reducers - Are the functions that take instructions
    Store    - Is the object that holds the state of application

1. What is the difference between Application state and Component state? When would be a good time to use one 
over the other?

    Application State - It is what you want to hold out the whole application, like a memory database stored.
    Component State   - Is a specific component and can only be changed within the component and down to children using props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-Thunk let's action creators call functions instead of an action object. That allows synchronous actions within the body of the page.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    I cant say what is my favorite but majority of them is fun to use too. Since there are just moments where you got it down at the same time still confused.
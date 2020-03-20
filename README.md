## Minimum Viable Product

- [x] Plan and implement how you are going to manage your state for your application
- [x] You _must_ use either context or Redux as your state management system
- [x] Once you have planned out your state management system, fetch data from the smurf server and display the data it returns
- [x] Add a form to collect info for a new smurf, and make a POST request to the server to add a new smurf to your village

## Questions

What problem does the context API help solve?

    Having to pass down props to get to multi level deep components 

In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do?

    actions - These are the logic that you can use with the page
    reducers - This controls the current state of the app

Why is the store known as a 'single source of truth' in a redux application?

    The only way to change the data is through the store(reducer and actions)

What is the difference between Application state and Component state? 

    Application state is global, component state is local

and when would be a good time to use one over the other?

    If data is only needed for a single component and it's children, you don't need to provide it in the application state.
    Application state is great for handling the data that needs to be passed around between multiple components.

Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

    Middleware that lets you call action creators that return a function instead of an object. This allows you to dispatch() and update the state with the reducer asynchronously

What is your favorite state management system you've learned and this sprint? Please explain why!
    
    I used Redux because it's what I used first so I felt more comfortable with it. I need more practice with Context API before I decide which is my favorite.

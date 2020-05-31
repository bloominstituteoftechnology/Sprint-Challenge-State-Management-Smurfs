- [.] What problem does the context API help solve?

  It reduces the complexity of handling state amongst many components. If the your state gets larger and you need to split the data around all the prop drilling would make your app messy really fast. Context delivers any amount of state where you need it without introducing much complexity.

- [.] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

        Actions are objects that you create or dynamically created to give a reducer the info it needs to change the state.
        Reducers are functions that take the data from actions and update the state
        Store is the home of the application state. All the data you want for your app is stored there.

- [.] What is the difference between Application state and Component state? When would be a good time to use one over the other?

        Application state is information that you think the entire app needs to be aware of. Component state is similar but you know that the whole app doesn't need the data stored in the object. For example, in some cases you would not need to store form data in the application level because your navigation doesn't need to know about it. But you can store it in the form's state, because its necessary.

- [.] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

        Redux-thunk is a middleware that captures your action-flow and allows you to do different things with the data you plan to send to the reducer. Since the redux flow is usually synchronus the thunk middleware  allows you to perform async actions on your data like fetching something from the internet.

- [.] What is your favorite state management system you've learned and this sprint? Please explain why!
  At first I thought it was redux, but Context allows such simplicity, that combined with useReducers makes implementing app level state easy.

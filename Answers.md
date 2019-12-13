1. What problem does the context API help solve?

The ability to pass state within a branch without requiring prop drilling through the traditional path of inheritance

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are payloads of information that send data from your application to your store
reducers specify how the application state changed in response to actions
store holds the whole state tree of your application, making it a centralized location of stored state that can be accessed from any branch of any tree of your application directly.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, and component state is local. The required accessibility of your state should dictate whether you use one or the other.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is a middleware that allows you to call action-creators that return a function instead of an object

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I really like the idea of redux, and I think after enough reps and all the boiler plate becames more familiar and comfortable, I will actually like using it. 
The benefits of compartmentalizing the various aspects of state, actions and reducers has a clear advantage wheen attempting to manage more robust user interactions and maintain the updating and maintenance of an application



    What problem does the context API help solve?

    using context allows us to share values between components without having to pass props through every level of the tree.

    In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are payloads of information that send data from your application to your store. -Reducers specify how the application's state changes in response to actions sent to the store. -store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

    What is the difference between Application state and Component state? When would be a good time to use one over the other?

-Application state will pass state around the whole app while component state will only be used inside that specific component, it is best to use component state rather than app state if we only need certain information that pertains to that component.

    Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

-Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

    What is your favorite state management system you've learned and this sprint? Please explain why!

-redux is my favorite because it allows us to use state wherever we want with minimal problems.

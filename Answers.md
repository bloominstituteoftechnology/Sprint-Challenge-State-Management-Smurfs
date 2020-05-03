1. What problem does the context API help solve?
    Context API soles the issue of state management and prop drilling. Context API gives us the ability to pass the state to any component in any tree without having to use props.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are the items or conditions passed to the reducer. The reducer uses the action to determine what to do with the state.
    Reducers are used to in conjunction with actions to update the state and pass it to the components.
    Stores are used to hold data and keep it out of the individual components and thus avoid prop drilling. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is the state thats stored globally and can be passed or drilled to virtually any component. Component state is stored locally in the component and is only accessible if the state is passed as props.
    
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux-thunk allows us the use of middleware. Middleware lets us handle our actions and state asynchronously. Middleware can be used when calling multiple APIs and the data return times are not syncronized.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
    For the applications we're been putting together I'd have to say context API is my preferred method of state management. Its so much easier to setup and use as opposed to redux.

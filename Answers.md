1. What problem does the context API help solve?

    `It helps with props drilling by allowing us to share specific forms of data across all levels of our application.`

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    `actions: payloads of information that send data from your application to the store. You send the actions data by using dispatch().`

    `reducers: a pure function(without side effects), takes in the previous state and an action and returns the updated state.`

    `store: the store holds the whole state of the app. You can create a store by using the createStore().`

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    `application state is global, whereas component state is local and cannot be seen outside of that single component. You would only want to use component state if you plan to only update your state in that component, because you cannot access it with a hook and it cannot be passed down as props.`

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    `redux thunk is middleware that lets you call an action creator and it will returns a function rather than an action object.`

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    `I like redux the best. It is easiest for me to understand, and I feel like it keeps everything organized.`

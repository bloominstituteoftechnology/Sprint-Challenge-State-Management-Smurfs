1. What problem does the context API help solve?


    `It helps solve the problem of passing created global variables around in a react app. You do not have to do prop drilling (passing props down through each file). helps keep state clean.`



1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?


    `Actions- A. It performs a feature, like - Add, remove, toggle.`
            `B. Its role: contain properties related to some action that happens inside App.`

    `Reducers- A. Its Kind of like packaging like items together.`
            `B. takes 2 arguments - current state and action and returns new updated sate object base on both arguments`

    `Store- A. Kind of like a store- contains everything.`
            `B. A Single Javascript object. contains our state for our entire application`



1. What is the difference between Application state and Component state? When would be a good time to use one over the other?


    `Application state- Apps entire contents, access to all the components.`
    `Component state- is just contents of said component, only able to access itself.`



1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    `Node package that can make the flow asynchornous, we can make API calls from our action creators.`

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    `Redux...because I have had more practice with it (since flexing). Also, I like how it  organizes tons of files, makes it easier/cleaner in the long run. The downside is, there are tons of parts to set up and connect, which makes it extremely complicated. Oh, also its great for really big apps!`
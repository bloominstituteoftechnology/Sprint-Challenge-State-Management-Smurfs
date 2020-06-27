1. What problem does the context API help solve?

Made to solve the issue of passing props through multiple levels with components

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-actions send data from app to the store created
-reducers update the state of app based on the actions created and stored in store
-The store is the single source of truth. it contains main state of the app. Known as immutable

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

App state is global and any component can access it. Component state is local and only a specific component can access it

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It allows developers to write action creators that return functions instead of actions

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I wish i could say context api because it is meant to be easier and more convenient. But i have worked with react-redux more and feel more comfortable with it. It allows me to seperate files and helps me personally stay oraganized and easier to follow my code

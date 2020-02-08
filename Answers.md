1. What problem does the context API help solve?
-Context provides a way to pass data through the component tree without having to pass props down manually at every level

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. 
- actions are like packets of data that send info from your app to your store, must contain a type, can contain a payload
What does each piece do? 
 - type states which action
   - payload provides input to update state with
Why is the store known as a 'single source of truth' in a redux application?
   - because it is the only place global state is stored
3. What is the difference between Application state and Component state? 
- application state is global and available to the entire application, - component state is local and is not available outside of itself unless passed as props
When would be a good time to use one over the other?
- if data needs to be widely available to multiple components, use application state - if data is only relevant to the component it lives in or maybe it's immediate children, it is a good time to use component stte
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   - gives them the ability to execute asynchronous actions
5. What is your favorite state management system you've learned and this sprint? Please explain why!
 - Redux

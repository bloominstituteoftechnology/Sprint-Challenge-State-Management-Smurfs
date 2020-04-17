1. What problem does the context API help solve?

## Passing props from the top to bottom.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

store- a global state, holds 'props' for every file you request it for
actions- its sorta just described whats gonna happen
reducers- where the magic code happens to do stuff, return an altered version of state, not the same state no more.

---

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

## from react docs 'props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).'

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-Thunk is the most popular middleware used to handle asynchronous actions in Redux.
From redux tutorial
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
setTimeout(() => {
dispatch(incrementByAmount(amount));
}, 1000);
};

1. What is your favorite state management system you've learned and this sprint? Please explain why!

The last one we learned on thursday was nice with the Provider and Consumer.

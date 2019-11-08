1. What problem does the context API help solve?
* It's relief from prop-drilling.

2. In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
* Actions: payloads of info that move the data from app to store.
* Reducers: how the apps state based on actions sent to the store.
* Store: the entire state tree of the app.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
* It is literally "react state for an entire app" vs "react state for a single component". Use app state for moving data between multiple components with their own component state.

4. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
* It is middleware that allows redux to operate asynchronously.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
* I like redux because it is consistently available to the entire app. IMO, there is no job where redux is too big. If you're going to need state mgmt, don't even bother with something smaller in scope. And also, it's my fave because  it's the most recent thing I learned and I remember the important parts for the sprint. 
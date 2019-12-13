1. What problem does the context API help solve? 

A: Context provides a way to share values between components without having to explicitly pass props through every level of the tree(prop drilling).

2. In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? 
A: Actions pass payloads(data) into reducers. Reducers hold the logic of when and how to change to original state in response to the actions. Store is the single object that contains our state for our app, and the reducers and actions refer to this single truth to procced.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other? 

A: Your application state is global, and your component state is local. An example would be a form. We would want to control the handling of the state of the inputs on that component because the entire application doesn’t need to know each keystroke someone does on a form.

4. Describe redux-thunk, what does it allow us to do? How does it change our action-creators? 

A: Is a middleware that gives us the ability to run code async in react-redux. It allows our action-creators to call from APIs.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

A: Redux, I guess, but only because I've had more practice with it. I find that it adds a lotttt of extra complexity to these tiny apps. The way everything is organized, though, makes the code cleaner and I imagine much better for larger apps. 


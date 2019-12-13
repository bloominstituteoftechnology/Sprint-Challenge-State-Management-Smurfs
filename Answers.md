What problem does the context API help solve?
    Context API simplifies state management.

In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? 
    Actions describe how the state is going to change. Reducers respond to actions and update the state. The store is a JavaScript object that represents 	          everything that changes within the application. The store's universal change representation is why it is known as a 'single source of truth'.

Why is the store known as a 'single source of truth' in a redux application?
    Application state is passed top-down from parent to child, while Component state is stored on a context object which can be plugged into any other components. It seems that using Component state is going to be the best option in most cases, but I think it would be simpler to use Application state if the state won't be leaving the component.


What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is passed top-down from parent to child, while Component state is stored on a context object which can be plugged into any other components. It seems that using Component state is going to be the best option in most cases, but I think it would be simpler to use Application state if the state won't be leaving the component.


Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
    Redux-thunk provides more security in your application functionality. It intercepts your actions before it reaches the reducer and is essentially a "filter". It can stop an action, dispatch a different (or multiple) actions, or forward the action untouched.


What is your favorite state management system you've learned and this sprint? Please explain why!
    Surprisingly, once I actually figured out Redux it became my favorite state management system. It's complicated at first but once you learn the nuances it's definitely a very powerful system that's worth the wild learning curve.
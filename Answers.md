1. What problem does the context API help solve?

 ⚛︎ the problem of 'prop drilling' -- passing props down from component to component. 
 ⚛︎ allows context to be set up in a parent component & then directly access context elsewhere.




1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

⚛︎ reducers: used for data immutability -- instead of altering already exisiting data we return & create a new copy based on interactions with the UI. Doing this allows for our state & application to be more predicalble as to what will happen with UI interaction & also give assurance as to what the shape of state will be once it comes out of a reducer. reducers also act on action objects. These objects usually have a action type & a action payload.

⚛︎ actions: have 3 parts -- action type, action crator, & action object. The action type is what kind of action we want to preform. The action creator is a vanilla JS function that houses some logic & ultimately returns what is know as the action object. The action object is what will be handed to the reducer & acted on accordingly.

⚛︎ store: what houses our logic & defanitions for both actions & reducers. The store is know as a single source of truth because this is our state management & also our reducer management. All state & reducers live here & UI interaction goes through the store.



1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

⚛︎ component state: state that is stored locally in a component usually in a state hook or state object depending on the component. If you want this state to be accessed by othe components, then you would want to either prop drill the state or use the context api.

⚛︎ application state:  the state of your application at any given point in time. Usually application state is in the context of Redux bc any ^ all components can tap into the store of redux & access the state tree that it holds.



1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

⚛︎ redux-thunk: middleware that is used to capture & dispatch actions accordingly -- action creators become a JS thunk -- meaning that the action creator will pass in its data to thunk & then thunk will handle that information as defined by the dev.




1. What is your favorite state management system you've learned and this sprint? Please explain why!

⚛︎ I have no favorite. But, my least favorite area (out of every topic covered so far) is Redux/Redux related.


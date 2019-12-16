
✦ What problem does the context API help solve?
⚛︎ the problem of 'prop drilling' -- passing props down from component to component.
 ⚛︎ allows context to be set up in a parent component & then directly access context elsewhere.



✦ In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. 
What does each piece do? 
⚛︎ reducers: reducers are used for datat immutability. What this means is that instead of altering already exisiting data we return and create a new copy based on interactions with the UI. Doing this allows for our state and application to be more predicalble as to what will happen with UI interaction and also give assurance as to what the shape of state will be once it comes out of a reducer. reducers also act on action objects. These objects usually have a action type and a action payload.

⚛︎ actions: Actions have 3 parts to them action type, action crator and an action object. The action type is what kind of action we want to preform. The action creator is a vanilla JS function that houses some logic and ultimately returns what is know as the action object. The action object is what will be handed to the reducer and acted on accordingly.

⚛︎ store: The store in redux is what houses our logic and defanitions for both our actions and also our reducer(s). The store is know as a single source of truth because this is our state management and also our reducer management. All state and reducers live here and UI interaction goes through the store.
 



✦What is the difference between Application state and Component state?
⚛︎ component state: component state is state that is stored locally in a component usually in a state hook or state object depending on the component. If you want this state to be accessed by othe components then you would want to either prop drill the state or use the context api.

⚛︎ application state: state is simply the state of your application at any given point in time. Usually application state is in the context of Redux bc any and all components can tap into the store of redux and access the state tree that it holds.




✦ Describe `redux-thunk`, what does it allow us to do? 
⚛︎ redux-thunk: middleware that is used to capture and dispatch actions accordingly. Our action creators become what is known as a JS thunk which means the action creator will pass in its data to thunk and then thunk will handle that information as defined by the dev.



✦ What is your favorite state management system you've learned and this sprint? Please explain why!
⚛︎ I honestly have no 'favorite' - this has not been a sprint that I enjoyed. 

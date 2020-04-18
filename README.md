## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What problem does the context API help solve?

* Context API is a state management tool that allows developers to have ease of access to top-level state without having to do prop drilling. Prop drilling is the act of passing down props through multiple layers of components. This takes a lot of time to do and it could lead to long, silly mistakes.

- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux 
application?

* actions - an object that describes to the reducer what it will do to the state. It can come with a payload, which is the data value that you'll use to manipulate the store.
* reducers - Considered as a pure function, meaning it returns the same output. To clarify, this means that the state doesn't manipualte external variables, but instead, returns values that are instantiated and unrelated in memory to existing variables. Contains the state for the app. Takes in actions through a list of cases. If there's a match, it will manipulate the state accordingly.
* store - Houses the app-level state that can be connected by components from various locations.
* The store is commonly regarded so because in an a redux app, the store can be shared by every component. Changing the store from one component changes it every where else in the app. 

- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?

* Component state should be used if the component is solely using it for itself. The changes in that state should not affect others. IE: Highligting a component. Application state, on the other hand, affects any component that is connected to it. IE: Fetched data from a API call passed down as props.

- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

* Redux-thunk is a library that allows redux to manipulate the store with asynchronous actions. A thunk is a function returned by a function. This concept allows the function to be saved, modified, and then called later by external code. This changes the action-creators by having the action functions return a function instead of an object. This would normally not permitted by redux, but redux-thunk is a middleware that intercepts the action dispatches and checks to see if a function is returned instead. This allows us to appropriately place the dispatch call in the then and catch methods so it can send actions to the store when the async work is done.

- [ ] What is your favorite state management system you've learned and this sprint? Please explain why!

* Context API is WAY more convenient to implement than Redux. I will say, learning Redux and how it all came together made me a better developer. Concepts like immutability, thunks, higher order functions, and pure functions were all part of the knowledge gained by learning Redux. So yeah, Context API.

## Project Set Up

Follow these steps to set up your project:

- [ ] `fork & clone` this repository.
- [ ] `cd` into the forked copy of this repository.
- [ ] **RUN** `npm install` to retrieve all `server-side` the dependencies.
- [ ] **RUN** `npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [ ] After your API is up and running, you can open chrome and type in `http://localhost:3333/smurfs`. You should see an array with one smurf in it returned to you. This is an array that your **API** will be using to store our Smurf Data.
- [ ] **LOOK** at your `smurfs` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [ ] **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware.
- [ ] **cd** into `smurfs` and run `npm install` to retrieve the client side dependencies.
- [ ] **RUN** `npm start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.

**LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.

## Minimum Viable Product

- [ ] Plan and implement how you are going to manage your state for your application
- [ ] You _must_ use either context or Redux as your state management system
- [ ] Once you have planned out your state management system, fetch data from the smurf server and display the data it returns
- [ ] Add a form to collect info for a new smurf, and make a POST request to the server to add a new smurf to your village

## API documentation

### GET '/smurfs'

- [ ] Retrieve an array all the Smurfs in the Smurf DB by writing a `GET` to the endpoint `/smurfs`.
- [ ] Double check that your response from the server is an array of smurfs.

```js
[
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  }
];
```

### POST '/smurfs'

- [ ] Design the functionality to add a smurf to the Smurf DB you'll need all three fields. `name`, `age`, and `height`.

Example of the shape of data to be sent to the `POST` endpoint:

```js
{
  name: 'Brainey',
  age: 200,
  height: '5cm'
}
```

- [ ] Double check to make sure that a smurf is created correctly once your functionality is built out.

Initially Brainey will be in the array, but it takes more than one smurf to make the village. Be sure to add a few smurfs to populate our smurf village.

**HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.

Example of object created in Smurf DB:

```js
[
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  },
  {
    name: "Sleepy",
    age: 200,
    height: "5cm",
    id: 1
  }
];
```

## STRETCH PROBLEM

The following two endpoints are here for you if you'd like to push yourselves a little further.

### PUT '/smurfs/123', where 123 is the Id of the smurf you want to modify

- [ ] For this endpoint to work, you'll need an `id` added to the URL, and at least one field to update on the Smurf object. `name` `age` `height`.

Example:

```js
input:
{
  id: 1,
  name: 'Grumpy'
}
output:
[
  {
    name: 'Grumpy',
    age: 30,
    height: '3cm',
    id: 1
  },
  {
    name: 'Sleepy',
    age: 211,
    height: '2cm',
    id: 0
  }
]
```

### DELETE '/smurfs/123', where 123 is the Id of the smurf you want to remove

For this endpoint to work, all you need is an id sent up as part of the request url.

If your delete worked, you'll get a an array back with all of the smurfs but with your requested smurf removed.

- [ ] You don't need any input beyond the url parameter of the smurf, so if we send up a delete request to `/smurfs/123` then you'll remove the smurf by that id.

Example:

```js
output: [
  {
    name: "Sleepy",
    age: 200,
    height: "5cm",
    id: 1
  }
];
```

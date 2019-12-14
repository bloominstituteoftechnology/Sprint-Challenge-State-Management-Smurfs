# Sprint Challenge: State Management - Smurfs

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored the context API, the reducer pattern, and Redux. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web.

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency throughout State Management and your command of the concepts and techniques in the the context API, the reducer pattern, and Redux.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

In this challenge, you are to build a Smurfs village utilizing context or Redux as your state management. Build this challenge from the ground up using what you have learned about state management.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What problem does the context API help solve?

Typical react apps pass state top-down (parent to child) via props (called prop drilling, but this can become very cumbersome quickly, especially when those props are required by many components across your application. Context API allows us to store data on a context object, and retrieve that data in the necessary components from the context object, not props!


- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

store sees all, remembers all
reducers are the guides
actions are the doers

Redux is a small, light-weight state container for use when building JavaScript applications. Remember, Redux has nothing to do with React other than the fact that many developers use them together. Redux is a predictable state management library for JavaScript applications and is the most popular State container for React applications.

As components grow and deal with larger sets of data, storing and transporting  state across the entire app becomes cumbersome as well. Reducers offer one possible way to address this problem within the component. At the level of the application, an elegant combination of the Context API with reducers provides one possible way that React developers can manage global state.

The  Store:  a single javaScript  Object that  is a single  immutable state tree in Redux  where all state changes are explicitly handled by dispatching actions. Everything that changes within your application is represented by The store.

Actions: dispatched actions handle state changes that originate from the store and are processed by reducers
Reducers: processes dispatched actions that accepts the previous state and the action and returns the next state of your application
This system makes it easy  to predict which action will be dispatched based on some event or interaction. This all leads to very predictable state management.


- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is Immutable: When the app  state changes, we clone the state object, modify the clone, and replace the original state with the new copy. We never mutate the original object, and we never write to our store object.

Pure functions change our state. Given the same input, a pure function returns the same output every time. All functions (reducers) in Redux must be pure functions. Meaning they take in some state and a description of what changes took place and return a copy of our state.

Application state is global while component state is local. Component state lives within the component and can only be updated within that component and passed down to it's children via props. Flux and Redux use stores to hold the application state so components anywhere in the app can access it with hooks.

Whenever state needs to be shared by multiple components/pages some data must persist over route changes and that data goes into the redux store in the App State. Presentational components that merely receive data and pass the data down through props use component state.



- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware created by Dan Abramov, that provides the ability to handle asynchronous operations inside our Action Creators.
By nature Redux is synchronous. Because of this we need to apply some middleware such as redux-thunk  to extend the functionality of our Redux package to allow for things like, promises which are asynchronous. Middleware in Redux is very common and gives us a chance to do a few different things with the data passing from action creators to the reducers. Middleware is a powerful extension point for Redux. We can use middleware to add new functionality to Redux.

Middleware intercepts some process, runs a function at the intercept point, then (usually) continues the process. Or, sometimes middleware stops the process entirely.

When whatever “process” in question is kicked off, there is usually data that is flowing through different functions. With middleware, when we “intercept” the process, we are usually trying to use that flowing data.

- [ ] What is your favorite state management system you've learned and this sprint? Please explain why!

So far I prefer the Context API because it seems simpler compared to Redux. Not having to drill down state through props  and instead using context objects is more efficient/manageable. However, with time, I am thinking I will prefer Redux because it sound more powerful by being able to snatch state, manipulate state and spit out the new state (but learning the syntax and the potential for typos/bugs makes me a little wary of Redux) I'd like to practice with Redux more.

## Project Set Up

Follow these steps to set up your project:

- [ ] `fork & clone` this repository.
- [ ] `cd` into the forked copy of this repository.
- [ ] **RUN** `yarn` to retrieve all `server-side` the dependencies.
- [ ] **RUN** `yarn start` or `npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [ ] After your API is up and running, you can open chrome and type in `http://localhost:3333/smurfs`. You should see an array with one smurf in it returned to you. This is an array that your **API** will be using to store our Smurf Data.
- [ ] **LOOK** at your `smurfs` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [ ] **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware.
- [ ] **cd** into `smurfs` and run `yarn` to retrieve the client side dependencies.
- [ ] **RUN** `yarn start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.

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

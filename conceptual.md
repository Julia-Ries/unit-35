### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

  JavaScript provides the following 3 ways of handling asynchronous code.
    - callbacks (allow you to provide functions to call once the asynchronous method has finished running.)
    - promises (allow you to chain methods together)
    - async/await keywords 


- What is a Promise?
  
  A promise is a one-time guarantee of future value.  It is an object and can be in one of three states: pending(doesnt have a value yet), resolved (successfully obtained a value), and rejected (failed to obtain a value). The only way to access a resolved or rejected promise is to chain on a method on the end of the promise such as .then and .catch. 


- What are the differences between an async function and a regular function?

  the difference between a regular function and an async funciton is the async funciton always returns a promise. 



- What is the difference between Node.js and Express.js?

  Node.js is a JavaScript environment that runs server-side and can be used to build any kind of server-side JS. Express.js is a minimalist framework that is very similar to Flask and the most popular in the Node ecosystem. Express.js sits on top of Node.js's web server functionality to simpilfy its APIs and add hlepful new features. 

  Difference between the two:
  - Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.
  - Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.



- What is the error-first callback pattern?

  Node.js callbacks usually conform to an “error-first” pattern.

  The callback function’s first parameter should be listed as error. Node will supply an error object (if something bad happened), otherwise null as arguments.

  then follow th eother parameters if there are any.
  
   

- What is middleware?

  Middleware is code that runs in the middle of the request/response cycle and opens up the door for seperating our code into more logical groupings and providing more robust/abstracted error handling. 



- What does the `next` function do?

  the next function will run or execute the code after all the middleware function is finished. If we do not include it, we will not make it to the next route. if arugement is passed to next, Express always treats this as an error. 



- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

```js
async function getUsers() {
  const baseURL = 'https://api.github.com/users'
  const elie = $.getJSON(`${baseURL}/elie`);
  const joel = $.getJSON(`${baseURL}/joelburton`);
  const matt = $.getJSON(`${baseURL}/mmmaaatttttt`);

  let elie1 = await elie;
  let joel1 = await joel;
  let matt1 = await matt;

}
getUsers();
```
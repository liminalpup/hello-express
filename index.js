// ! SETTING UP YOUR FILES
/* 
In the new directory, run npm init -y to create a new 'package.json', followed by npm i express to install Express.
*/

//Step 1: import express -- Node imports differently than JS and React and uses the following syntax:
const express = require("express");

//Step 2: assign the invocation of express to the variable 'app'.
const app = express();


//Step 3: Create a variable to reference the port the app will run on. You will need to use process.env.PORT to do this. You will also want to use the logical OR or=perator to run on 5000 if the computer default is not available.

let PORT = 4000 || 5000;

// ! OPENING UP THE CONNECTION TO A PORT (Socket)
/* You will need to use the listen method on app. 'listen' takes two arguments: the 'port' variable and a callback fx. Set up the callback function to print a message to the console that informs the user of which port the server is listening on.*/

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
});

// ! Set up your first GET route
/*
The first route we want to set up is for the '/' route (aka the Index route). 
Step 1: We want to use a .get method, and we want to send the response of "Hello, home!"
 */
app.get('/', (req, res) => {
  res.send("Hello, home!")
});

//Step 2: Set up at least three more GET routes. They should all be different pages, and the response they send should reflect what page the user is on.

// Your .send can also send HTML on your routes.

// -------------------------------------------

// app.get('/about', (req, res) => {
//   res.send("<h1>This is where I'd put an about me... <b>IF I HAD ONE!</b></h1>");
// })

// app.get('/contact', (req, res) => {
//   res.send(`Don't contact me`)
// });

// app.get('/prettyanimals', (req, res) => {
//   res.send("no pretty animals, just text")
// })

app.get('/:page', (req, res) => {
    const page = req.params.page;

    if (page == "about") {
      res.send("<h1>About Me</h1>");
    } else if (page == "contact") {
      res.send("<h1>Contact</h1>");
    } else if (page == "prettyanimals") {
      res.send("<h1>Pretty Animals</h1>");
    } 
   });


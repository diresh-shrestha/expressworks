/* PUG
 Exercise 3 of 8

Create an Express.js app with a home page rendered by the Pug template engine.

The home page should respond to /home.

The view should show the current date using 'new Date().toDateString()'.

We use 'toDateString()' to simply return the date in a human-readable format
without the time.
 */
const express = require('express');
const path = require('path');

const app = express();

// telling express.js app what template engine to use
app.set('view engine', 'pug');
app.set('views', process.argv[3] || path.join(__dirname, 'templates'));

app.get('/home', (req, res) => {
    return res.render('index', {date: new Date().toDateString()});
});

 n         
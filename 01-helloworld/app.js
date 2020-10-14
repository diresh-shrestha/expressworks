/* HELLO WORLD!
 Exercise 1 of 8

Create an Express.js app that outputs "Hello World!" when somebody goes to /home.

The port number will be provided to you by expressworks as the first argument of
the application, i.e., process.argv[2].
 */
const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    return res.send("Hello World!")
}).listen(process.argv[2]);
/* GOOD OLD FORM
 Exercise 4 of 8

Forms are important. This exercise will teach you how to process the traditional (non-AJAX) web form.

Write a route ('/form') that processes HTML form input
(<form><input name="str"/></form>) and responds with the value of str backwards.
 */
const express = require("express");
// body parsing middleware. parse incoming request bodies
// in a middleware before your handlers
const bodyparser = require("body-parser");
const app = express();

// urlencoded() method to parse request bodies
app.use(bodyparser.urlencoded({ extended: false }));

app.post("/form", (req, res) => {
    // reverse string
  let str = req.body.str.split("").reverse().join("");
  res.send(str);
});

app.listen(process.argv[2]);

/* JSON ME
 Exercise 8 of 8

Most of the times we're building RESTful API servers with JSON.

Write a server that, when it receives a GET, reads a file, parses it to JSON,
and responds with that content to the user.

The server should respond to any GET that matches the /books resource path.
As always, the port is passed in process.argv[2]. The file to read is passed
in process.argv[3].

Respond with:

    res.json(object)

Everything should match the /books resource path.

For reading the file, use the fs module

 */
const fs = require('fs');
const express = require('express');
const app = express();

const port = process.argv[2];


app.get('/books', (req, res) => {
    fs.readFile(process.argv[3], (err, data) => {
        if (err) return err;
        // parse the data with JSON.parse
        let books = JSON.parse(data);
        // respond with json
        res.json(books);
    })
    
})

app.listen(port);
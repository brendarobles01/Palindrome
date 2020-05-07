const express = require('express');
const app = express();

app.use(express.static(__dirname + '/ejercicio/'));

app.listen('3000', function() {
    console.log("The server is running")
});
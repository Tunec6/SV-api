const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000.")
})

app.get('/contacts', (request, response) => {
    response.send(contacts)
})

app.get('/',(request,response) =>{
    response.send(main)
})


app.get('/aboutme',(request,response) =>{
    response.send(aboutme)
})
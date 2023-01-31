const { request, response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const contacts = require('./content/contacts');
const main = require('./content/main');
const aboutme = require('./content/aboutme');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));

app.get('/contacts', (request, response) => {
    response.send(contacts)
})

app.get('/',(request,response) =>{
    response.send(main)
})


app.get('/aboutme',(request,response) =>{
    response.send(aboutme)
})

app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000.")
})
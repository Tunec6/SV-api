const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const contacts = require('./content/contacts');
const main = require('./content/main');
const aboutme = require('./content/aboutme');

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',(req,response) =>{
    respond.send(main)
})


app.get('/contacts', (req, response) => {
    respond.send(contacts)
})


app.get('/aboutme',(req,response) =>{
    respond.send(aboutme)
})

app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000.")
})
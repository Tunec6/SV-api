const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const contacts = require('./content/contacts')
const main = require('./content/main')
const aboutme = require('./content/aboutme')

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/contacts', (req, res) => {
    respond.send(contacts)
})


app.get('/main',(req,res) =>{
    respond.send(main)
})


app.get('/aboutme',(req,res) =>{
    respond.send(aboutme)
})

app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000.")
})
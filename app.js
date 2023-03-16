const express = require("express");
const bodyParser = require("body-parser");
const sqlite = require("sqlite")
const db = new sqlite.Database('./db/list.db')

var app = express();
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000.")
})

app.get('/', (req, res) => {
    res.json('yes')
})

app.get('/todo',(req, rows) =>{
    db.all(`SELECT * FROM TODO`,(err, rows) =>{
        res.json(rows)
    })
})

app.post('/todo',(req, res) =>{
    const data = req.body
    const request = `INSERT INTO TODO VALUES (
        null,
        '${data.data}'
        '${data.task}'
        '${data.description}'
        '${data.status}')`

        console.log(request)

    db.run(request,(err) =>{
        if (err) {
            res.json(err)
        }
        res.json('добавлено')
    })
})
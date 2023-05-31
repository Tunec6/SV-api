const express = require("express");
const bodyParser = require("body-parser");
const sqlite = require("sqlite3")
const md5 = require("md5")
const cors = require("cors")
const db = new sqlite.Database('./db/list.db')

const port = 4000

const app = express();
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.listen(port, () => {
    console.log("Сервер запущен на порту " + `${port}`)
})

app.get('/list/questions', (req, res) => {
    db.all(`SELECT * FROM questions`, (err, rows) => {
        res.json(rows)

    })
})


app.post('/list/questions', (req, res) => {
    const questions = req.body
    const request = `INSERT INTO questions VALUES(
    null,
    '${questions.question}'
    )`
    console.log(request)

    db.run(request, (err) => {
        if (err) {
            res.json(err)
        }
        res.json('добавлено')
    })
}),

app.post('/list/answer', (req, res) => {
    const answer = req.body
    const zapros = `INSERT INTO answer VALUES(
        null,
        '${answer.question_id}',
        '${answer.answer}',
        '${answer.is_correct}'
    )`

    db.run(zapros, (err) => {
        if (err) {
            res.json(err)
        }
        res.json('ответы добавлены')
    })
})
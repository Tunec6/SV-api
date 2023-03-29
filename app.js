const express = require("express");
const bodyParser = require("body-parser");
const sqlite = require("sqlite3")
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

app.get('/todo',(req, res) =>{
    db.all(`SELECT * FROM todo`,(err, rows) =>{
        res.json(rows)
        
    })
})

app.get('/todo/:id',(req, res) =>{
    const {id} = req.params
    db.all(`SELECT * FROM todo WHERE id=${id}`,(err, rows) =>{
        res.json(rows)
        
    })
})

app.put('/todo/:id',(req, res) =>{
    const {id} = req.params
    const {Date} = req.body
    const {task} = req.body
    const {description} = req.body
    const {status} = req.body
    const request = `UPDATE todo SET date = "${Date}", task = "${task}", description = "${description}", status = "${status}" WHERE id=${id}`


    db.run(request, (err) =>{
        if (err){
            res.json(err)
        }
        res.json('задача обновлена')
    })
})

app.delete('/todo/:id',(req, res) =>{
    const {id} = req.params
    const request = `DELETE FROM todo WHERE 
        id=${id}`
        
        
        db.run(request, (err) => {
            if(err) {
                res.json(err)
            }
            res.json('задача удалена')
        })
})

app.post('/todo',(req, res) =>{
    const data = req.body
    const request = `INSERT INTO todo VALUES (
        null,
        '${data.Date}',
        '${data.task}',
        '${data.description}',
        '${data.status}')`

       

    db.run(request,(err) =>{
        if (err) {
            res.json(err)
        }
        res.json('добавлено')
    })
})
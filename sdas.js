app.get('/todo',(req, rows) =>{
    db.all(`SELECT * FROM TODO`,(err, rows) =>{
        res.json(rows)
    })
})

app.get('/todo/date/:date', (req, res) => {
    const date = req.params.price
    db.all(`SELECT * FROM TODO WHERE date > $date`, {$status: date }, (err, rows) =>{
        res.json(rows)
    })
})
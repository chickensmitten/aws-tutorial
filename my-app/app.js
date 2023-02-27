const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();


app.use(bodyParser.json());


const conn = mysql.createConnection({
    host:'<DB_NAME>.<ENDPOINT>.us-east-1.rds.amazonaws.com',
    user:'admin',
    password:'password',
    database:'restapi'
});


conn.connect((err) => {
    if(err) throw err;
    console.log('Database is connected to app');
    
})

app.get('/api/items', (req, res) => {
    let sql = "SELECT * FROM items";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(apiResponse(results))
    });
    
});


app.post('/api/items', (req,res) => {
    let data = {title:req.body.title, body:req.body.body};

    let sql = "INSERT INTO items SET ?";

    let query = conn.query(sql, data, (err, results) => {
        if(err) throw err;
        res.send(apiResponse(results));
    });
});

app.get('/api/items/:id', (req, res) => {
    let sql = "SELECT * FROM items WHERE id=" + req.params.id;

    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(apiResponse(results));
    });
});


app.put('/api/items/:id', (req, res) => {
    let sql = "UPDATE items SET title='"+req.body.title+"', body='"+req.body.body+"' WHERE id="+req.params.id;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(apiResponse(results));
    });
});


app.delete('/api/items/:id', (req, res) => {
    let sql = "DELETE FROM items WHERE id="+req.params.id+"";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(apiResponse(results));
    });
});



function apiResponse(results) {
    return JSON.stringify({"status":200, "error":null, "response":results});

}


app.listen(3000, () => {
    console.log('server started');
    
})



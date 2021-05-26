'use strict';

// Persistent DATA saved in my Database 

// load environment variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const pg = require('pg');
const PORT = process.env.PORT;
const app = express();

const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', err => console.log("PG PROBLEM!!!") );

app.get('/student', (request, response)=> {
    let SQL = 'SELECT * FROM student';
    client.query(SQL).then(result=> {
        console.log(result.rows);
        response.send(result.rows);
    });
});

// insert through query string parameters 
app.get('/add', (request, response)=> {
    let name = request.query.name;
    let course = request.query.course;

    // Binding: Safe paramters Secured way (NO SQL INJECTION WILL HAPPEN)
    let SQL = 'INSERT INTO student (name, course) VALUES($1, $2) RETURNING *';
    let values = [name, course];

    // let SQL2 = `INSERT INTO student (name, course) VALUES(${name}, ${values})`;
    
    client.query(SQL, values).then(result=> {
        console.log(result.rows);
        response.send(result.rows);
    });
});

app.use(cors());

client.connect().then(()=> {
    console.log("connected");
    app.listen(PORT, ()=> console.log(`App is running on ${PORT}`));
});
// run the app on PORT 


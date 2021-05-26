'use strict';

const express = require('express');
const app = express();

// 1. Set the backend templating engine to ejs
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=> {
    // by default it will look through views folder
    // ejs extension is not required
    res.render('index');
});

app.get('/list', (req, res)=> {
    const shoppingListItems = ['apple', 'kiwi', 'banana', 'pineapple'];
    const emptyMessage = 'Your Shopping List is Empty!! add some items please!';
    res.render('list', {myList: shoppingListItems, msg : emptyMessage });
});


app.get('*', (req, res)=> {res.status(404).send('Page Not Found')})
app.listen(PORT ,()=> console.log(`Running on ${PORT}`))
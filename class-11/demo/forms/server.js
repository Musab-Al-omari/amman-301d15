'use strict';

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// MUST ADD THIS middleware : reading from the request body in POST;
app.use(express.urlencoded({ extended: true })); // parse the body

app.use(express.static('./public'));

app.post('/contact', (request, response) => {
 console.log("inside Post !!! ")
 console.log("request.query",request.query);
  console.log(request.body);
  console.log("request.body['first-name'] :", request.body['first-name'])
  response.sendFile('./thanks.html', { root: './public' });
});

app.get('/contact', (request, response) => {
  console.log("inside of the get request")
  console.log(request.query); // object with key value pairs of my parameters
  // response.send('THank you for contacting us')
  response.sendFile('./hello.html', { root: './public' });
});

app.get('*', (request, response) => response.status(404).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

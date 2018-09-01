'use strict';

const fs = require('fs');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get('/sighnup', (req, res) => {
  console.log('get route hit!')
  res.status(200);
  res.write('sighnup get hit!')
  res.end()
})

app.post('/sighnup', (req, res) => {
  // console.log('Post hit: ' req)
  // let firstName = req.body.firstName
  // let lastName = req.body.lastName
  // let email = req.body.email
  let information = req.body.json
  res.status(201);
  // res.write(firstName)
  // res.write(lastName)
  // res.write(email)
  res.write(information)
  res.end()
  // res.sendFile('public/index.html');
})


// // static files
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: './public' });

})


app.listen(PORT, () => {
  console.log('Listening on port:', PORT, 'use CTRL+C to close.')
})
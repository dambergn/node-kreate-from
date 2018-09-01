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
  let information = req.body
  res.send(information)
  console.log(information)
  saveData(information)
})

// save data
function saveData(toBeSaved){
  let firstName = toBeSaved['firstName']
  let lastName = toBeSaved['lastName']
  let email = toBeSaved['email']
  let formatedData = firstName + ',' + lastName + ',' + email + ',' + toBeSaved['interests'] + '\n'
  // save data to csv file.
  fs.appendFile('interested.csv', formatedData, 'utf8', function (err) {
    if (err) {
      console.log('error, data not saved.')
    } else {
      console.log('data saved.')
    }
  })
}


// // static files
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: './public' });

})


app.listen(PORT, () => {
  console.log('Listening on port:', PORT, 'use CTRL+C to close.')
})
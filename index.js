const express = require('express')
const app = express()
const PORT = 3000

app.get('/', function(req, res){
  res.send('All Star Home page')
})

app.get('/users', function(req, res){
  res.send('Welcome to the users page')
})

app.listen(PORT, function(){
  console.log('Running on Port:', PORT);
})

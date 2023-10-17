// Load express
const express = require('express')
const path = require('path')
const studentsDb = require('./data/students')

// Create our express app
const app = express();

// Configure the app (app.set)
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views')); 

// Mount middleware (app.use)
  

// Mount routes - define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function(req, res) {
    res.redirect('/home')
  })

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3001, function () {
  console.log('Listening on port 3000')
})

app.get('/home', function(req, res){
  //Never begin a template name with a forward slash
    res.render('home')
})

app.get('/student-grades', function(req, res) {
  const students = studentsDb.getAll()
  res.render('student-grades/index', { students })
});

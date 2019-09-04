const express = require('express');
const app = express();
var mongoose = require ("mongoose"); 

var userroutes = require('../routes/users')

mongoose.connect('mongodb://localhost:27017/UserList', {useNewUrlParser: true});

var cors = require('cors');
app.use(cors({ origin: 'http://localhost:4200' }));
var bodyParser = require('body-parser');
app.use(bodyParser.json());

const server = app.listen(1337);
console.log("listening on port 1337")

app.use('/users',userroutes)



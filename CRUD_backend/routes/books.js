
module.exports = (app) => {

const book = require('../controllers/book.controller.js');

app.post('/createuser', book.create);

app.get('/books', book.findAll);

}








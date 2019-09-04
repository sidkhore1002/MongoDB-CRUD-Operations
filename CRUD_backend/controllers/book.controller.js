//const book = require('../models/book.js').book;
let book = require('../models/book')

exports.create = (req, res) =>{

    status = 201

    const bookdata ={
    id: 1 ,
    }
    // create book in the database
    book.create(bookdata)    
};
exports.update = (req) =>{

    var id= "5d6dffc4ad45f41b9d55271e"
    book.findOneAndUpdate(id, {id:req}, function (err) {
        if (err) return next(err);
       
    });
};
exports.findone = (req) =>{

    var id= "5d6dffc4ad45f41b9d55271e"
    book.findById(id, function (err, book) {
        if (err) return next(err);
        if(book)
        {
            console.log(book.id)          
        }   
       
    });
};

exports.findAll = (req, res) => {
    book.find()
    .then(book => {
        res.send(book);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving books."
        });
    });
};

exports.delete = (req) =>{

    var id= "5d6e01adab55a41e4b1a5427"
    book.deleteOne(id, function (err, book) {
        if (err) return next(err); 
        if(book)
        {
            console.log(book.id," deleted")          
        }   
       
    });
};



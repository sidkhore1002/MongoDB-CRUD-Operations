let user = require('../models/user')

exports.getusers = function() {
    return new Promise(function(fulfill, reject) {
        user.find(function(err, result) {
            if (err) {
                fulfill([]);
            } else {
                fulfill(result);
            }
        })
    });
};
exports.create = (id,name,res) =>{

    var myData = new user();
    myData.id = id
    myData.name = name
    myData.save()
      .then(data => {
        res.send("item saved to database");
      })
};
exports.delete = (id,res) =>{
    console.log(id)
    
    user.deleteOne({id:id}, function (err, userdelete) {
        if (err) 
            console.log(err)
    });
};
exports.update = (id,name) =>{  

    user.findOneAndUpdate({id:id}, {name:name}, {new: true, useFindAndModify: false}, function (err) {
        if (err) 
            console.log(err)       
    });
};

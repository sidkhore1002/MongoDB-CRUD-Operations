const express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user.controller')

router.get('/', function(req, res) {
    userCtrl.getusers().then(function(users){
        if(users.length>0){
            res.status(200).json(users)
        }
    })
})
router.post('/createuser', function(req, res) {    
    console.log(req.body)
    id=1
    userCtrl.getusers().then(function(users){
        if(users.length>0){
            id = users[users.length-1].id
            id = id + 1
        }
        userCtrl.create(id,req.body.name,res)
    })
})
router.put('/deleteuser', function(req, res) {    
    console.log(req.body)
    var id = req.body.name
    userCtrl.delete(id)
})
router.put('/updateuser', function(req, res) {    
    console.log(req.body)
    var id = req.body.id
    var name = req.body.newname
    userCtrl.update(id,name)
    
})

module.exports = router;

    
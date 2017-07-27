var mongoose = require('mongoose');
var User = mongoose.model('User');

function UserController() {

    this.create = function(req, res) {
        var user = new User(req.body)
        user.save((err)=> {
            if(err){
                res.status(401).json({error: "WHOOPS"})
            }
            else {
                res.json(req.body)
            }
        })
    }



}


module.exports = new UserController();
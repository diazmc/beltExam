var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: String

})
 
var User = mongoose.model('User', UserSchema);
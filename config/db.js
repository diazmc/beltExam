var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var fs = require('fs');

var promise = mongoose.connect('mongodb://localhost/beltexamdatabase', {
  useMongoClient: true
});

promise.then(()=> {
  console.log("SUCCESSFULLY CONNECTED TO BELT_EXAM_DATABASE")
})

var models_path = __dirname + "/../models"

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0) {
		require(models_path + '/' + file);
	}
})
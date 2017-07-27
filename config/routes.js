var path = require('path');
var Questions = require('./../controllers/questions.js');
var Users = require('./../controllers/users.js');

module.exports = function(app){

    app.get('/question/:id', function(req, res){
        Questions.findQuestion(req, res)
    })

    app.get('/questions', function(req, res){
        Questions.findQuestions(req, res)
    })


    app.post('/createQuestion', function(req, res){
        Questions.create(req, res)
    })

    app.all('*', (req, res , next) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    })
}

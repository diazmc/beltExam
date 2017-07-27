var mongoose = require('mongoose');
var Question = mongoose.model('Question')

function QuestionController() {

    this.create = function(req, res) {
        var question = new Question(req.body)
        question.save((err)=> {
            if(err){
                res.status(401).json({error: "WHOOPS"})
            }
            else {
                console.log(req.body)
                res.json(req.body)
            }
        })
    }

    this.findQuestions = function(req, res) {
        Question.find({}, function(err, questions){
            if(err){
                res.status(401).json({error: "Whoops"})
            }
            else {
                res.json({questions: questions})
            }
        })
    }

    this.findQuestion = function(req, res){
        Question.find({_id: req.params.id}, function(err, question){
            if(err){
                console.log('Error', err)
            }
            else {
                res.json({question: question})
            }
        })
    }

}


module.exports = new QuestionController();
var mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
    name: String,
    text: String,
    option1: String,
    vote1: Number,
    option2: String,
    vote2: Number,
    option3: String,
    vote3: Number,
    option4: String,
    vote4: Number

},{timestamps: true})
 
var Question = mongoose.model('Question', QuestionSchema);
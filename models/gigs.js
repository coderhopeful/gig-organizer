const mongoose = require("mongoose");



const gigsSchema = new mongoose.Schema({
    name: String,
    date: String,
    budget: String,
    status: String,
    required: Number,
    hired: Number,
    applicants: Number
    
});


module.exports = mongoose.model('gig',gigsSchema); 
const mongoose = require("mongoose")

const courseschema = new mongoose.Schema({
    coursecode: {
      type: String,
      required: true,
      unique: true
    },
    coursename: {
      type: String,
      required: true,   
    }
});

const course = mongoose.model('Course', courseschema);

module.exports = course;
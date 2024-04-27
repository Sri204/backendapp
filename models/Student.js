const mongoose = require("mongoose")

const studentschema = new mongoose.Schema({
   
    fullname: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required:true,
        enum: ['male', 'female', 'others']
      },
      dateofbirth: {
        type: String,
        required: true
      },
      school: {
          type: String,
          required: true
        },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        default:"klef"
    },
    address: {
        type: String,
        required: true 
    },
     contact: {
          type: String,
          required: true,
          unique:true
    },
    email:{
      type:String,
      required:true,  
    },
});

const student = mongoose.model('student', studentschema);
module.exports = student;
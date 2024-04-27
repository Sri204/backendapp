const mongoose = require("mongoose")

const facultyschema = new mongoose.Schema({
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
  college: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      default:"klef1234"
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
});

const faculty = mongoose.model('Faculty', facultyschema);

module.exports = faculty;
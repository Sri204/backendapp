const studentcontroller = require("../controllers/studentcontroller")

const express = require("express")
const studentrouter = express.Router()

studentrouter.post("/checkstudentlogin",studentcontroller.checkstudentlogin)

studentrouter.put("/changestudentpwd",studentcontroller.changestudentpwd)

module.exports = studentrouter
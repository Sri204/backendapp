const facultycontroller = require("../controllers/facultycontroller")

const express = require("express")
const facultyrouter = express.Router()

facultyrouter.get("/viewstudents",facultycontroller.viewstudents)
facultyrouter.post("/checkfacultylogin",facultycontroller.checkfacultylogin)

facultyrouter.put("/changefacultypwd",facultycontroller.changefacultypwd)

module.exports = facultyrouter
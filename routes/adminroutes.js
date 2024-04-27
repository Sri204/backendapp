const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter = express.Router()

adminrouter.post("/addstudent",admincontroller.addstudent)
adminrouter.post("/addfaculty",admincontroller.addfaculty)
adminrouter.post("/addcourse", admincontroller.addcourse)

adminrouter.get("/viewstudents",admincontroller.viewstudents)
adminrouter.get("/viewfaculties",admincontroller.viewfaculties)
adminrouter.get("/viewcourses",admincontroller.viewcourses)

adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)

adminrouter.delete("/deletestudent/:username",admincontroller.deletestudent)
adminrouter.delete("/deletefaculty/:username",admincontroller.deletefaculty)
adminrouter.delete("/deletecourse/:coursecode",admincontroller.deletecourse)

adminrouter.put("/changeadminpwd",admincontroller.changeadminpwd)

module.exports = adminrouter
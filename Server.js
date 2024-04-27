// server connection using express
const express = require("express")
const mongoose = require("mongoose") // schema is a part of mongoose
const cors = require("cors")

const dburl = "mongodb://localhost:27017/system"
mongoose.connect(dburl).then(() => {
    console.log("connected to db successfully")
    
}).catch((err) => {
    console.log(err.message)
    
});

const app = express()
app.use(express.json())
app.use(cors())

const studentrouter = require("./routes/studentroutes")
const adminrouter = require("./routes/adminroutes")
const facultyrouter = require("./routes/facultyroutes")

app.use("", studentrouter)
app.use("",adminrouter)
app.use("",facultyrouter)

const port = 2024
app.listen(port,() =>{
    console.log("Server is running at port:"+port)
})
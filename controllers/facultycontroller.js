const Student = require("../models/Student")
const Faculty = require("../models/Faculty")

 const viewstudents = async (request, response) => 
 {
    try 
    {
      const students = await Student.find();
      if(students.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(students);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  
  const checkfacultylogin = async(request,response) =>{
    try
    {
        const input = request.body;
        const faculty = await Faculty.findOne(input);
        response.json(faculty)
    }
    catch(error)
    {
        response.status(500).send(error.message);
    }
};
const changefacultypwd = async (request, response) => {
  try 
  {
    const { username, oldpassword, newpassword } = request.body;

    const faculty = await Faculty.findOne({ username, password: oldpassword });
    
     if (!faculty) 
    {
      response.status(400).send('Invalid Old Password');
    }
    else
    {
        if(oldpassword==newpassword)
        {
          response.status(400).send('Both Passwords are Same');
        }
        else
        {
          await Faculty.updateOne({username},{ $set: { password: newpassword } });
           response.json('Password Updated Successfully');
        }
      
    }
  } 
  catch (error) 
  {
    response.status(500).send(error.message);
  }
};
module.exports = {viewstudents,changefacultypwd,checkfacultylogin}
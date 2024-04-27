const Student = require("../models/Student")

const checkstudentlogin = async(request,response) =>{
    try
    {
        const input = request.body;
        const student = await Student.findOne(input);
        response.json(student)
    }
    catch(error)
    {
        response.status(500).send(error.message);
    }
};

const changestudentpwd = async (request, response) => {
    try 
    {
      const { username, oldpassword, newpassword } = request.body;

      const student = await Student.findOne({ username, password: oldpassword });
      
       if (!student) 
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
            await Student.updateOne({username},{ $set: { password: newpassword } });
             response.json('Password Updated Successfully');
          }
        
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
module.exports = {checkstudentlogin,changestudentpwd}
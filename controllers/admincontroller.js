const Student = require("../models/Student")
const Admin = require("../models/Admin")
const Faculty = require("../models/Faculty")
const Course = require("../models/Courses")

const addcourse = async (request, response) => {
  try 
  {
    const input = request.body;
    const course = new Course(input);
    await course.save();
    response.status(200).send('Course Added Successfully');
  } 
  catch(e) 
  {
    response.status(500).send(e.message);
  }
};

const viewcourses = async (request, response) => 
 {
    try 
    {
      const courses = await Course.find();
      if(courses.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(courses);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const deletecourse = async (request, response) => 
 {
    try 
    {
      const coursecode = request.params.coursecode
      const course = await Course.findOne({"coursecode":coursecode})
      if(course!=null)
      {
        await Course.deleteOne({"coursecode":coursecode})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("coursecode Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
 
const addstudent = async (request, response) => {
  try 
  {
    const input = request.body;
    const student = new Student(input);
    await student.save();
    response.status(200).send('Student Added Successfully');
  } 
  catch(e) 
  {
    response.status(500).send(e.message);
  }
};

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

  const deletestudent = async (request, response) => 
 {
    try 
    {
      const username = request.params.username 
      const student = await Student.findOne({"username":username})
      if(student!=null)
      {
        await Student.deleteOne({"username":username})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Username Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  const changeadminpwd = async (request, response) => {
    try 
    {
      const { username, oldpassword, newpassword } = request.body;

      const admin = await Admin.findOne({ username, password: oldpassword });
      
       if (!admin) 
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
            await Admin.updateOne({username},{ $set: { password: newpassword } });
             response.json('Password Updated Successfully');
          }
        
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  

  const addfaculty = async (request, response) => {
    try 
    {
      const input = request.body;
      const faculty = new Faculty(input);
      await faculty.save();
      response.status(200).send('Faculty Added Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };
  const viewfaculties = async (request, response) => 
 {
    try 
    {
      const faculties = await Faculty.find();
      if(faculties.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(faculties);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  
  
  const deletefaculty = async (request, response) => 
 {
    try 
    {
      const username = request.params.username 
      const faculty = await Faculty.findOne({"username":username})
      if(faculty!=null)
      {
        await Faculty.deleteOne({"username":username})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Username Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  

  const checkadminlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       console.log(input)
       const admin = await Admin.findOne(input)
       response.json(admin)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
  };

  module.exports = {addcourse,deletecourse,viewcourses,addstudent,changeadminpwd,viewstudents, deletestudent,addfaculty,viewfaculties,deletefaculty,checkadminlogin}
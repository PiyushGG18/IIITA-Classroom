const {Router} = require("express") 
const { Admin, Student, Professor,Course } = require("../models/index")
const router = Router();
const bcrypt = require('bcrypt');

// Admin router
router.post("/addStudent",async (req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    let password = req.body.password;
    const rollno = req.body.rollno;

    const isExist = await Student.findOne({email:email})
    if(isExist){
        return res.status(400).json({
            msg: "Student already exists"
        })
    }
    const saltRounds = 10;
    const hasedPassword =  await bcrypt.hash(password,saltRounds);
    password = hasedPassword;
    const studentDetails = await Student.create({
        name:name,
        email:email,
        password: password,
        rollno: rollno        
    })
    res.status(200).json({
        msg:"Student added successfully"
    })
})

router.post("/addStudentSubject",async (req,res) =>{
    const courseName = req.body.courseName;
    const courseId = req.body.courseId;
    const email = req.headers.email;

    const courseDetails = await Course.findOne({coursename: courseName, courseid : courseId});
    const id = courseDetails._id;
    await Student.updateOne({
        email: email
    },{
        "$push":{
            courses: id
        }
    })
    res.status(200).json({
        msg: "Course added to user successfully"
    })

})

router.post("/addProfessor",async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    let password = req.body.password;
    const id = req.body.id;
    
    const isExist = await Professor.findOne({email:email,id:id});
    if(isExist){
        return res.status(400).json({
            msg: "Professor Already Exists"
        })
    } 
    const saltRounds = 10;
    const hasedPassword = await bcrypt.hash(password,saltRounds);
    password = hasedPassword;
    const professorDetails = Professor.create({
        id:id,
        name:name,
        email:email,
        password:password,
    }) 
    res.status(200).json({
        msg: "Professor added successfully"
    })
})




module.exports = router
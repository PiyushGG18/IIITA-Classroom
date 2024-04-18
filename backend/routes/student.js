const {Router} = require("express");
const router = Router();
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const {Student} = require("../models/index");


// Student routes
router.post("/login",async (req,res) =>{
try{
    const email = req.body.email;
    const password = req.body.password;

    //check student exists or not
    const student = await Student.findOne({email: email});
    // const student = await Student.findOne({ email: email }).populate({
    //     path: 'courses.course',
    //     model: 'Course', // Assuming you have a Course model set up correctly
    //     // populate: {
    //     //     path: 'professor',
    //     //     model: 'Professor' // Further populating the professor data if needed
    //     // }
    // });
    if(await !student){
        return res.status(400).json({
            msg: "User not exists"
        })
    }
    const checkPassword = await bcrypt.compare(password,student.password);
    if(await !checkPassword){
        return res.status(400).json({
            message:"Incorrect email or password"
        })
        
    }
    // const courses = await Student.courses
    const token = jwt.sign({ email: email }, 'sadadsa', { expiresIn: '1h' });
    // const { password: _, ...studentData } = student.toObject();
    
    student.password = undefined;
    student.courses = undefined;
    res.json({
        message: 'Login successful',
        student: student.toObject({ virtuals: true }),
        token
    })
} catch(err){
    res.status(500).json({message: "Server error"});
}


});

// router.get("/",async (req,res)=>{


// });

// router.post("/add",async (req,res) =>{
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
//     const rollno = req.body.rollno;
    
//     await Student.create({
//         name:name,
//         email:email,
//         password:password,
//         rollno: rollno
//     })
//     res.status(200).json({
//         msg: "Student added successfully"
//     })

// });

module.exports = router
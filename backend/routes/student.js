const {Router} = require("express");
const router = Router();
const bcrypt = require("bcrypt")
const {Student} = require("../models/index");


// Student routes
router.post("/login",async (req,res) =>{
try{
    const email = req.body.email;
    const password = req.body.password;

    //check student exists or not
    const student = await Student.findOne({email: email});
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
    // const token = 
    const { password: _, ...studentData } = student.toObject();
    res.json({
        message: 'Login successful',
        student: studentData,
        // token
    })
} catch(err){
    res.status(500).json({message: "Server error"});
}


});

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
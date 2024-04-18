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

// router.post("/addStudentSubject",async (req,res) =>{
//     const courseName = req.body.courseName;
//     const courseId = req.body.courseId;
//     const email = req.headers.email;

//     const courseDetails = await Course.findOne({coursename: courseName, courseid : courseId});
//     const id = courseDetails._id;
//     console.log(id);
//     await Student.updateOne({
//         email: email
//     },{
//         "$push":{
//             courses: id
//         }
//     })
//     res.status(200).json({
//         msg: "Course added to user successfully"
//     })

// })

router.post("/addStudentSubject", async (req, res) => {
    const { courseName, courseId } = req.body;
    const email = req.headers.email;

    try {
        // Find the course details by name and ID
        const courseDetails = await Course.findOne({ coursename: courseName, courseid: courseId });
        if (!courseDetails) {
            return res.status(404).json({ msg: "Course not found" });
        }

        // Push a new course record into the student's courses array
        const updatedStudent = await Student.findOneAndUpdate(
            { email: email },
            {
                $push: {
                    courses: {
                        course: courseDetails._id, // References the course's ObjectId
                        attendance: [], // Initializes the attendance array
                        c1: [], // Initializes c1 grades array
                        c2: [], // Initializes c2 grades array
                        c3: []  // Initializes c3 grades array
                    }
                }
            },
            { new: true } // Option to return the updated document
        );

        if (!updatedStudent) {
            return res.status(404).json({ msg: "Student not found" });
        }

        res.status(200).json({
            msg: "Course added to student successfully",
            updatedStudent
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Failed to add course to student",
            error: error.message
        });
    }
});

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
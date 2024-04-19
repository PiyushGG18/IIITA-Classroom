const {Router} = require("express");
const { Course } = require("../models/index");
const Userauthenticate = require("../middleware/user");

const router = Router();


router.post("/addCourse",async (req,res)=>{
    const courseName = req.body.courseName;
    const courseId = req.body.courseId;
    
    const isExist = await Course.findOne({courseid : courseId});
    if(isExist){
        return res.status(400).json({
            msg: "Course already exists"
        })
    }
    else{
        const CourseDetails = Course.create({
            coursename: courseName,
            courseid : courseId
        })
        res.status(200).json({
            msg: "Course added successfully"
        })
    }

})

router.get("/:courseid",Userauthenticate,async (req,res)=>{
    const courseid = req.params.courseid; 
    const CourseDetails = await Course.findOne({courseid: courseid});
    console.log(CourseDetails);
    res.status(200).json({
        course: CourseDetails
    })

})

module.exports = router;
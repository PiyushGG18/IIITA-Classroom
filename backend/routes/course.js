const {Router} = require("express");
const { Course, Professor } = require("../models/index");
const Userauthenticate = require("../middleware/user");

const router = Router();


router.post("/addCourse",async (req,res)=>{
    const courseName = req.body.courseName;
    const courseId = req.body.courseId;
    const professorName = req.body.professorName;
    const professorId = req.body.professorId;
    const professorDetails = await Professor.findOne({id : professorId});
    console.log(professorDetails);
    const isExist = await Course.findOne({courseid : courseId});
    if(isExist){
        return res.status(400).json({
            msg: "Course already exists"
        })
    }
    else{
        const CourseDetails = Course.create({
            coursename: courseName,
            courseid : courseId,
            professor: professorDetails._id
        })
        res.status(200).json({
            msg: "Course added successfully"
        })
    }

})

router.get("/:courseid", Userauthenticate, async (req, res) => {
    const courseid = req.params.courseid;
    try {
        const CourseDetails = await Course.findOne({ courseid: courseid }).populate({
            path: 'professor',
            model: 'Professor'
        });

        if (!CourseDetails) {
            return res.status(404).json({ message: "Course not found" });
        }

        // Set each professor's password to undefined
        for (const prof of CourseDetails.professor) {
            prof.password = undefined;
        }

        console.log(CourseDetails);
        res.status(200).json({
            course: CourseDetails
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
});


module.exports = router;
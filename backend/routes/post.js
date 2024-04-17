const {Router} = require("express");
const {Course, Student,Professor} = require("../models/index"); 
const router = Router();

router.post("/:course",async (req,res)=>{
    const coursename = req.params.course;
    const author = req.headers.name;
    const content = req.body.content; 
    console.log(coursename);
    const CourseDetails = await Course.findOne({coursename: coursename});
    console.log(CourseDetails);
    await Course.updateOne({
        courseid: CourseDetails.courseid
    },{
        "$push": {
            "posts": {
                author: author,
                content: content,
                date: new Date().toISOString()
            }
        }
    })
    res.status(200).json({
        msg: "Post added successfully"
    })

})

module.exports = router;
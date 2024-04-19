const {Router} = require("express");
const {Course, Student,Professor} = require("../models/index"); 
const Userauthenticate = require("../middleware/user");
const router = Router();

router.post("/:courseid",Userauthenticate,async (req,res)=>{
    const courseid = req.params.courseid;
    const author = req.name;
    const content = req.body.content; 
    const CourseDetails = await Course.findOne({courseid: courseid});
    console.log(CourseDetails);
    await Course.updateOne({
        courseid: courseid
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
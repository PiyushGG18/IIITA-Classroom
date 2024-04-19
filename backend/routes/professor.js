const express = require('express');
const router = express.Router();
const {Student} = require("../models/index");
const { Course, Assignment } = require('../models/index'); // Adjust path as needed

// POST route to mark attendance for a specific course
router.post('/attendance/:studentId/:courseId', async (req, res) => {
    const { studentId, courseId } = req.params;
    const { date, present } = req.body;

    try {
        // Update the student by pushing into the nested attendance array for a specific course record
        const student = await Student.findOneAndUpdate(
            { "_id": studentId, "courses.course": courseId },
            {
                $push: {
                    "courses.$.attendance": { date, present }
                }
            },
            { new: true }
        );

        if (!student) {
            return res.status(404).json({ message: 'No student or course found with given IDs' });
        }

        res.status(200).json({
            message: 'Attendance marked successfully',
            studentData: student
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating attendance', error: error.message });
    }
});




// Route to post an assignment to a course
router.post('/courses/:courseId/assignments', async (req, res) => {
    try {
        const { title, description, dueDate, files } = req.body;
        const { courseId } = req.params;

        // Create a new assignment
        const assignment = new Assignment({
            title,
            description,
            dueDate,
            course: courseId,
            files,
            postedBy: req.body.id  // Assuming req.user is populated from a middleware
        });

        // Save the assignment
        await assignment.save();

        // Add the assignment to the course's assignment list
        await Course.findByIdAndUpdate(courseId, {
            $push: { assignments: assignment }
        });

        res.status(201).json({ message: 'Assignment posted successfully', assignment });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to post assignment", error: err.message });
    }
});


module.exports = router;

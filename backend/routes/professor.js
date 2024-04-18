const express = require('express');
const router = express.Router();
const {Student} = require("../models/index");

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


module.exports = router;

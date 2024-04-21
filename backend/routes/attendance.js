const express = require('express');
const router = express.Router();
const {Student} = require("../models/index");
const { Course, Assignment } = require('../models/index'); // Adjust path as needed
const Userauthenticate = require('../middleware/user');
const professorauthenticate = require('../middleware/professorAuth');

router.get("/:courseId", professorauthenticate ,async (req, res) => {
    const { courseId } = req.params;

    try {
        // Find the course by courseid and populate the students array
        const courseWithStudents = await Course.findOne({ courseid: courseId })
            .populate('students', 'name email rollno image');  // Customize the fields you need from the Student model

        if (!courseWithStudents) {
            return res.status(404).json({ msg: "Course not found" });
        }

        if (courseWithStudents.students.length === 0) {
            return res.status(404).json({ msg: "No students enrolled in this course" });
        }

        res.status(200).json({
            msg: "Students retrieved successfully",
            students: courseWithStudents.students
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Failed to retrieve students",
            error: error.message
        });
    }
});

module.exports = router;
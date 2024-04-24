const express = require('express');
const router = express.Router();
const { Course, Assignment, Professor, Student, Submission } = require('../models/index');  // Ensure this path matches your setup
const Userauthenticate = require('../middleware/user');
const professorauthenticate = require('../middleware/professorAuth');
const userAuthenticate = require('../middleware/userAuth');
const upload = require('../middleware/Upload');
const Authenticate = require("../middleware/user");

router.post('/:courseId', professorauthenticate, upload.single('file') , async (req, res) => {
    const { courseId } = req.params;
    const { title, description, dueDate} = req.body;
    const professorId = req.user.email; // Assuming req.user is populated from the authentication middleware
    const fileUrl = req.file ? req.file.location : null;
    const courseDetails = await Course.findOne({courseid: courseId});
    const professorDetails = await Professor.findOne({email: professorId});
    try {
        // Create a new assignment
        const newAssignment = new Assignment({
            title,
            description,
            dueDate,
            course: courseDetails._id,
            files: fileUrl,
            postedBy: professorDetails._id
        });

        // Save the assignment
        const savedAssignment = await newAssignment.save();
        // Add the assignment to the course's assignment list
        const updatedCourse = await Course.findByIdAndUpdate(courseDetails._id, {
            $push: { assignments: savedAssignment._id }
        }, { new: true }); // Optionally populate if you need to return full assignment details

        if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(201).json({
            message: 'Assignment posted successfully',
            assignment: savedAssignment,
            course: updatedCourse
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to post assignment", error: err.message });
    }
});




router.post('/:courseId/submit', userAuthenticate, upload.single('file'), async (req, res) => {
    
    const { assignmentId } = req.body;
    const submissionFile = req.file ? req.file.location : null;
    // const studentId = req.user.email;
    try {
        const userDetail = await Student.findOne({email: req.user.email});
        const assignment = await Assignment.findById(assignmentId);
        if (!assignment) {
            return res.status(404).send({ message: 'Assignment not found.' });
        }

        const newSubmission = new Submission({
            assignment: assignmentId,
            student: userDetail._id, // assuming _id is set in JWT token
            submissionFile,
            submittedOn: new Date()
        });

        await newSubmission.save();
        await Student.findByIdAndUpdate(userDetail._id, {
            $push: { submissions: newSubmission._id }
        });
        await Assignment.findByIdAndUpdate(assignmentId,{
            $push: { submissions: newSubmission._id }
        
        });
        res.status(201).send({ message: 'Assignment submitted successfully.', submission: newSubmission });
    } catch (error) {
        res.status(500).send({ message: 'Failed to submit assignment.', error: error.message });
    }
});

// router.get('/courses/:courseId/assignments', async (req, res) => {
//     const { courseId } = req.params;

//     try {
//         const assignments = await Assignment.find({ course: courseId }).populate('postedBy', 'name');
//         if (!assignments.length) {
//             return res.status(404).send({ message: 'No assignments found for this course.' });
//         }

//         res.status(200).send(assignments);
//     } catch (error) {
//         res.status(500).send({ message: 'Failed to retrieve assignments.', error: error.message });
//     }
// });

router.get('/:courseId', Authenticate, async (req, res) => {
    const { courseId } = req.params;
    const userEmail = req.email; // Assuming req.user is populated from the authentication middleware
    const userRole = req.role;
    // console.log(userRole.toString());
    let userDetail;

    try {
        const courseDetails = await Course.findOne({courseid: courseId});
        if(userRole.toString() === "Professor"){
            
            userDetail = await Professor.findOne({email: userEmail});
        }
        else{
            userDetail = await Student.findOne({email: userEmail});
        }
        const course = await Course.findById(courseDetails._id)
            .populate({
                path: 'assignments',
                populate: {
                    path: 'submissions',
                    match: { student: userDetail._id } // Only populate submissions by the logged-in student
                }
            });

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        // console.log(course.assignments[0].submissions);
        // Extract assignments and include student-specific submission details
        const assignments = course.assignments.map(assignment => {
            // Find submission for this student (if exists)
            const submission = assignment.submissions;
            // console.log(submission[0]);
            return {
                _id: assignment._id,
                title: assignment.title,
                description: assignment.description,
                dueDate: assignment.dueDate,
                files: assignment.files,
                postedBy: assignment.postedBy,
                postedOn: assignment.postedOn,
                submission: submission[0] ? {
                    _id: submission[0]._id,
                    submissionFile: submission[0].submissionFile,
                    submittedOn: submission[0].submittedOn
                } : null
            };
        });

        res.status(200).json({
            message: 'Assignments retrieved successfully',
            assignments
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to retrieve assignments", error: err.message });
    }
});

router.get('/:courseId/submissions',professorauthenticate,async (req, res) => {
    // console.log(req.body);
    try {
        // console.log(req.body);
        const { assignmentId } = req.body;
        // console.log(assignmentId);
        const submissions = await Submission.find({ assignment: assignmentId })
        .populate('student', 'name') // Optional: Populate student details
        .exec();
        res.json(submissions);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


// router.get('/courses/:courseId/assignments', async (req, res) => {
//     const { courseId } = req.params;

//     try {
//         const assignments = await Assignment.find({ course: courseId }).populate('postedBy', 'name');
//         if (!assignments.length) {
//             return res.status(404).send({ message: 'No assignments found for this course.' });
//         }

//         res.status(200).send(assignments);
//     } catch (error) {
//         res.status(500).send({ message: 'Failed to retrieve assignments.', error: error.message });
//     }
// });

module.exports = router;

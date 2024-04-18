const mongoose = require("mongoose")

//connecting mongoose database
mongoose.connect("mongodb+srv://jaydeepmeena62:qzanQm5k3KPf4wlV@iiita-classroom.iy8hix9.mongodb.net/?retryWrites=true&w=majority&appName=IIITA-Classroom")
.then((response) =>{
    console.log("Database connected successfully")
})
.catch((error) => {
    console.log("Database not connected")
        
    
})

//Schemas

const CourseRecordSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    attendance: [{
        date: String,
        present: Boolean
    }],
    c1: [{
        quiz: Number,
        review: Number,
        assignment: Number
    }],
    c2: [{
        quiz: Number,
        review: Number,
        assignment: Number
    }],
    c3: [{
        quiz: Number,
        review: Number,
        assignment: Number
    }]
});

const CourseRecordSchema1 = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
});


const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    rollno: { type: String, required: true },
    courses: [CourseRecordSchema]
});



const AdminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const ProfessorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    id: String,
    courses: [CourseRecordSchema1],
    teachingAssistant: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
})

const CourseSchema = new mongoose.Schema({
    coursename: String,
    courseid: String,
    posts:[{
        author: String,
        date: String,
        content: String
        // comments: [{
            // user: String,
            // comment: String
        // }]
    }],
    professor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professor'
    }]

})

const Student = mongoose.model('Student', StudentSchema)
const Admin = mongoose.model("Admin",AdminSchema)
const Professor = mongoose.model("Professor",ProfessorSchema)
const Course = mongoose.model("Course",CourseSchema)

module.exports = {
    Student,
    Admin,
    Professor,
    Course
}


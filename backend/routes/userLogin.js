const {Router} = require("express");
const router = Router();
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const {Student} = require("../models/index");
const {Professor} = require("../models/index");
const {Admin} = require("../models/index");


const models = {
    Student: Student,
    Professor: Professor,
    Admin: Admin
};

router.post("/login", async (req, res) => {
    try {
        const { email, password, signIn } = req.body;

        // Validate signIn type
        if (!models[signIn]) {
            return res.status(400).json({ msg: "Invalid sign-in type" });
        }

        // Dynamic model selection based on signIn type
        const User = models[signIn];

        // Check user exists or not
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({
                msg: "User does not exist"
            });
        }

        // Check if the password is correct
        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            return res.status(400).json({
                message: "Incorrect email or password"
            });
        }

        // Generate a JWT token
        const token = jwt.sign({ email: email, role: signIn }, 'sadadsa', { expiresIn: '1h' });

        // Exclude password and possibly other sensitive information
        user.password = undefined;
        if (user.courses) user.courses = undefined; // Assuming only students have courses

        // Return the login response
        res.json({
            message: 'Login successful',
            user: user,
            token
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

module.exports = router;
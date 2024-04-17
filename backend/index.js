const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const studentRouter = require("./routes/student");
const adminRouter = require("./routes/admin");
const courseRouter = require("./routes/course");
const postRouter = require("./routes/post");
// const bcrypt = require('bcrypt');


app.use(bodyParser.json());
app.use("/student",studentRouter);
app.use("/admin",adminRouter);
app.use("/course",courseRouter);
app.use("/post",postRouter);


app.listen(3000,()=>{
    console.log("Server started running")
})

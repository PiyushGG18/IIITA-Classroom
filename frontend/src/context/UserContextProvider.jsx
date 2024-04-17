import React, { useState } from 'react'
import UserContext from './UserContext'

const Image1 = "/photos/Subjects/img1.jpg";
const Image2 = "/photos/Subjects/img2.jpg";
const Image3 = "/photos/Subjects/img3.jpg";
const Image4 = "/photos/Subjects/img4.jpg";
const Image5 = "/photos/Subjects/img5.jpg";


const UserContextProvider=({children})=>{
    const [user,setUser]=useState({
        user:"Roshan Chaudhary",
        userImage:"/photos/Dashboard/dummy.jpeg",
        userEmail:"chaudharyrhan@gmail.com",
    })

    const data = [
      {
        Image: Image4,
        course_name: "Machine Learning",
        course: "Btech - IT/ITBI",
        proffesor: "Dr. K.P.Singh",
      },
      {
        Image: Image2,
        course_name: "Data Visualization 2024",
        course:
          "M.Tech-IT Data Engineering / Software Eng (Elective) & BTech Elective ",
        proffesor: "Pavan Chakraborty",
      },

      {
        Image: Image3,
        course_name: "Data Mining C",
        course: "2024",
        proffesor: "Dr. OP Vyas",
      },
      {
        Image: Image1,
        course_name: "IBO",
        course: "Btech - ITBI",
        proffesor: "Dr. Ranjit",
      },
      {
        Image: Image5,
        course_name: "Business Analytics",
        course: "Btech - IT/ITBI",
        proffesor: "Dr. Ranjana Vyas",
      },
    ];

    const subjects = [
      {
        course_name: "Machine Learning",
        posts: [
          {
            Author: user.user,
            pfp: user.userImage,
            date: "Feb 21",
            content: "This is first post of ML ",
          },
          {
            Author: user.user,
            pfp: user.userImage,
            date: "Feb 24",
            content: "This is second post of ML",
          },
        ],
      },
      {
        course_name: "Data Visualization 2024",
        posts: [
          {
            Author: user.user,
            pfp: user.userImage,
            date: "Feb 11",
            content: "This is first post of DV",
          },
          {
            Author: user.user,
            pfp: user.userImage,
            date: "Feb 14",
            content: "This is second post of DV",
          },
        ],
      },
      {
        course_name: "Data Mining C",
        posts: [
          {
            Author: user.user,
            pfp: user.userImage,
            date: "Feb 1",
            content: "This is first post of DM",
          },
          {
            Author: user.user,
            pfp: user.userImage,
            date: "Feb 4",
            content: "This is second post of DM",
          },
        ],
      },
      {
        course_name: "IBO",
        posts: [
          {
            Author: user.user,
            pfp: user.userImage,
            date: "Feb 2",
            content: "This is first post of IBO",
          },
          {
            Author: user.user,
            pfp: user.userImage,
            date: "Feb 9",
            content: "This is second post of IBO ",
          },
        ],
      },
      {
        course_name: "Business Analytics",
        posts: [
          {
            Author: user.user,
            pfp: user.userImage,
            date: "Feb 21",
            content: "This is first post of BA",
          },
          {
            Author: user.user,
            pfp: user.userImage,
            date: "Feb 24",
            content: "This is second post of BA",
          },
        ],
      },
    ];

    const [expand,setExpand]=useState(false)
    return(
        <UserContext.Provider value={{expand,setExpand,user,setUser,data,subjects}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import UserContextProvider from "./context/UserContextProvider";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";



import Login from "./components/login/Login";
import UserCard from "./components/dashboard/UserCard";
import SubjectInfo from "./components/SubjectInfo/SubjectInfo";
import Attendance from "./components/Attendance/Attendance";
import ToDo from "./components/To-Do/ToDo";
import Results from "./components/Results/Results";
import Admin from "./components/Admin/Admin"

const lst=JSON.parse(localStorage.getItem('nuser'));
const role=localStorage.getItem('role');

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    lst?(role==='Admin'? <Admin /> :<App />):<Login/>,
    children: [
      {
        path: "",
        element: <UserCard />,
      },
      {
        path: "subject/:subId",
        element: <SubjectInfo />,
      },
      {
        path: "/attendance",
        element: <Attendance />,
      },
      {
        path: "/to-do",
        element: <ToDo />,
      },
      {
        path: "/results",
        element: <Results />,
      },
    ],
  }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);

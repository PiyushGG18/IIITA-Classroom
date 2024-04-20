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
import TakeAttendance from "./components/Attendance/TakeAttendance";
import FormAttendance from "./components/Attendance/FormAttendance";
import ViewAttendance from "./components/Attendance/ViewAttendance"

const lst=JSON.parse(localStorage.getItem('nuser'));
const role=localStorage.getItem('role');

const router = createBrowserRouter([
  {
    path: "/",
    element: lst ? role === "Admin" ? <Admin /> : <App /> : <Login />,
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
        path: "to-do",
        element: <ToDo />,
      },
      {
        path: "results",
        element: <Results />,
      },
    ],
  },
  {
    path: "/attendance",
    element: <App />,
    children: [
      {
        path: "",
        element: role === "Professor" ? <TakeAttendance /> : <Attendance />,
      },
      {
        path: ":subId",
        element: role === "Professor" ? <FormAttendance /> : <ViewAttendance />,
      },
    ],
  },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);

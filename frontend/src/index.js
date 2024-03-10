import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import UserContextProvider from "./context/UserContextProvider";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";



import Login from "./components/login/Login";
import UserCard from "./components/dashboard/UserCard";
import SubjectInfo from "./components/SubjectInfo/SubjectInfo";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <UserCard />,
      },
      {
        path:"subject/:subId",
        element: <SubjectInfo/>
      }

    ],
  },
  {
    path: "/login",
    element: <Login />,
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

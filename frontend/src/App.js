import React from "react";
import Login from "./components/login/Login";
import UserCard from "./components/dashboard/UserCard";

function App() {
  return (
    <>
      {/* <Login/> */}
      <UserCard
        user="Roshan Chaudhary"
        userImage="/photos/Dashboard/dummy.jpeg"
        userEmail="chaudharyrhan@gmail.com"
      />
    </>
  );
}

export default App;

import React from "react";
import Login from "./components/login/Login";
import UserCard from "./components/dashboard/UserCard";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      {/* <Login /> */}
      <UserCard/>
    </UserContextProvider>
  );
}

export default App;

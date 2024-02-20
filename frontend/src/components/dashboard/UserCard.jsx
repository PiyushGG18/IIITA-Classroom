import React, { useContext } from "react";
import Sidebar from "../Sidebar/Sidebar";
import UserSection from "../dashboard/UserSection";

import Header from "../Header/Header";
import UserContext from "../../context/UserContext";
import Cards from "../SubjectCards/Cards";

function UserCard() {
  const {expand} =useContext(UserContext)
  return (
    <>
      <Header/>
      <div className="flex">
        <div className={`${expand?"flex":"md:flex hidden"} w-full md:w-1/5`}>
          <Sidebar />
        </div>
        <div className={`w-full ${expand?"hidden md:flex":"flex"} flex-col`}>
          <div className="w-full h-1/2 hidden md:flex ">
            <UserSection/>
          </div>
          <div>
            <Cards/>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
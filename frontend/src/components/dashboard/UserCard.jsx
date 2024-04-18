import React, { useEffect } from "react";
import UserSection from "../dashboard/UserSection";

import Cards from "../SubjectCards/Cards";

function UserCard() {
  // useEffect()
  return (
    <>
      <div className="w-full h-1/2 hidden md:flex ">
        <UserSection />
      </div>
      <div>
        <Cards />
      </div>
    </>
  );
}

export default UserCard;

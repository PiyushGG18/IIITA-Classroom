import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Calender from "../dashboard/Calender";
import SubjectPost from "./SubjectPost";
import Announcement from "../Announcement/Announcement"

function SubjectInfo() {
  const { subId } = useParams();
  const { data } = useContext(UserContext);

  var d = data.find((obj) => {
    return obj.course_name === subId;
  });

  return (
    <div className="flex flex-col">
      <div className="p-4 md:p-8 h-11/12  md:h-3/6 flex">
        <div className="w-full md:w-3/4 relative bg-contain h-40 md:h-64  overflow-hidden rounded-2xl shadow-lg group  ">
          <img
            src={d.Image}
            alt=""
            className="w-full h-full  transition-transform group-hover:scale-110 duration-200"
          />
          <div className="absolute flex items-end inset-0 bg-gradient-to-t from-black/60 to-black/0">
            <div>
              <div className="flex-col  p-8 h-full text-white font-bold">
                <div className="text-xl">{d.course_name}</div>
                <div className="text-sm font-medium">{d.proffesor}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col w-1/4 h-full p-4 pr-0 flex-end">
          <span className="font-semibold">Calender</span>
          <div className="w-full mt-3">
            <Calender />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-full md:w-3/4 ">
          <div >
            <Announcement/>
          </div>
          <div>
          <SubjectPost /></div>
        </div>
        <div className="w-1/4 hidden md:flex">blank space</div>
      </div>
    </div>
  );
}

export default SubjectInfo;

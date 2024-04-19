import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Calender from "../dashboard/Calender";
import SubjectPost from "./SubjectPost";
import Announcement from "../Announcement/Announcement"
import axios from "axios";

function SubjectInfo() {
  const { subId } = useParams();

  
  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const data = await axios.get(`http://localhost:5000/course/${subId}`, {
            headers: {
              authorization: token, 
            },
          });
          console.log(data)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        console.error("Token not found in localStorage");
      }
    };

    getData();
  }, []);
  

  

  return (
    <div className="flex flex-col">
      {/* <div className="p-4 md:p-8 h-11/12  md:h-4/6 flex">
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
      </div> */}
      <div className="flex md:h-40">
        <div className="w-full md:w-3/4 ">
          <div  >
            <Announcement subId/>
          </div>
          <div>
          {/* <SubjectPost sub={d}/> */}
          </div>
        </div>
        <div className="w-1/4 hidden md:flex">blank space</div>
      </div>
    </div>
  );
}

export default SubjectInfo;

import React from "react";
import Calender from "./Calender";

function UserCard(props) {
  return (
    <div className="flex max-h-screen">
      <div className="hidden w-1/5 border border-black  md:block">Sidebar</div>
      <div className="w-full max-h-screen my-3 mx-3 flex flex-col gap-4 md:w-4/5 ">
        {/* my-3 mx-10  flex flex-col gap-4 w-4/5*/}
        <div className="w-full h-full flex gap-8">
          <div className="w-full h-1/2 flex flex-col md:w-9/12 md:h-4/5 ">
            <div
              className="w-4/6 my-4 flex rounded-2xl"
              style={{ backgroundColor: "#f8f7ff" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0,0,256,256"
                className=" my-2 mx-3"
              >
                <g
                  fill="#7666df"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M21,3c-9.4,0 -17,7.6 -17,17c0,9.4 7.6,17 17,17c3.35455,0 6.47104,-0.98016 9.10352,-2.65234l12.27539,12.27344l4.24219,-4.24219l-12.09766,-12.09961c2.17229,-2.8553 3.47656,-6.40865 3.47656,-10.2793c0,-9.4 -7.6,-17 -17,-17zM21,7c7.2,0 13,5.8 13,13c0,7.2 -5.8,13 -13,13c-7.2,0 -13,-5.8 -13,-13c0,-7.2 5.8,-13 13,-13z"></path>
                  </g>
                </g>
              </svg>

              <input
                id="search"
                className=" bg-transparent focus:outline-none rounded-2xl w-full "
                placeholder="Search for student, teacher, any document.."
                type="text"
                style={{ color: "#7666DF" }}
              />
            </div>
            <div
              className="w-full my-2 rounded-3xl h-3/4 flex text-white md:my-4"
              style={{ backgroundColor: "#5743d8" }}
            >
              <div className="w-full px-10 p-5 flex flex-col justify-center text-xl md:w-3/5 md:text-2xl">
                Welcome Back,
                <br />
                <h3 className="mt-2 font-bold">{props.user}</h3>
              </div>
              <div className="hidden overflow-hidden justify-start h-3/4 mt-8 object-cover md:flex">
                <img src="/photos/dashboard/study.svg" alt="err" className="" />
              </div>
            </div>
          </div>
          <div className="hidden flex-col w-1/3 md:flex">
            {/*flex flex-col w-4/12 */}
            <div className="my-8 h-1/12 flex justify-center">
              <div className="flex gap-2">
                <img
                  className=" w-10 h-10 rounded-full"
                  src={props.userImage}
                  alt="err"
                />
                <div className="flex flex-col justify-center">
                  <div className=" text-xs font-bold">{props.user}</div>
                  <div
                    className=" text-gray-500"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {props.userEmail}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 h-full">
              <span className="font-semibold">Calender</span>
              <div className=" w-4/5">
                <Calender />
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-black h-96 ">Part2</div>
      </div>
    </div>
  );
}

export default UserCard;

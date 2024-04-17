import {BarChart3,LayoutDashboard,CandlestickChart, LifeBuoy, ListTodo  } from "lucide-react";

const items=[
  {
      icon:<LayoutDashboard size={20} />,
      text:"Dashboard",
      active:"active",
  },
  {
    icon:<BarChart3 size={20} />,
    text:"Attendence",
    active:""
  },
  {
    icon:<ListTodo size={20} />,
    text:"To do",
    active:""
  },
  {
    icon:<CandlestickChart size={20} />,
    text:"Result",
    active:""
  },
  {
    icon:<LifeBuoy size={20} />,
    text:"Help",
    active:""
  },
]

export default function Sidebar() {

  return (
    <div className="w-full">
      <div
        className="h-full  mt-8 flex flex-col bg-white border-r shadow-sm"
      >
      <ul className="">
        {items.map((item,i,items)=>(
                <li
                  className={`${(i+1===items.length)?"mt-24 border-t-2":""} flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                    item.active
                      ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                      : "hover:bg-indigo-50 text-gray-600"
                  } `}
                >
                  {item.icon}
                  <span className="overflow-hidden transition-all ml-3 w-full">
                    {item.text}
                  </span>
                </li>
        ))}
      </ul>


        <div className="mt-8 border-t flex p-3 justify-center mb-40">
          
          <button
            className="bg-indigo-500 hover:text-white shadow-sm rounded-lg border-indigo-500 border text-indigo-100 text-center font-medium text-base px-5 py-3 inline-flex items-center justify-center"
          >
            <img
              src="/photos/Sidebar/Icon.svg"
              className="h-5 w-5 mr-3"
              alt=""
            />
            <span class="relative flex flex-col justify-center items-center">
              Join a new class
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}


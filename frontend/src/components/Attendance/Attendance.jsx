import React, { useContext } from 'react'
import Charts from '../Charts/Charts'
import UserContext from '../../context/UserContext';

function Attendance() {
  const {data} = useContext(UserContext)
  console.log(data)
  return (
    <div className="flex">
    
      {data.map((d)=>(
        <div>
          {d.course_name}
        </div>
      ))}
      <div className=" w-1/6 bg-gray-200 m-3">
        <Charts pdata={[5,3]} />
      </div>
    </div>
  );
}

export default Attendance
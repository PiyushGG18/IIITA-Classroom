import React from 'react'
import Charts from '../Charts/Charts'

function Attendance() {
  return (
    <div className="flex">
    

      <div className=" w-1/6 bg-gray-200 m-3">
        <Charts pdata={[5,3]} />
      </div>
      <div className=" w-1/6 bg-gray-200 m-3">
        <Charts pdata={[2,6]}/>
      </div>
      <div className=" w-1/6 bg-gray-200 m-3">
        <Charts pdata={[7,1]} />
      </div>
    </div>
  );
}

export default Attendance
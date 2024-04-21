import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function ViewAttendance() {
  // Dummy data for attendance (replace with actual data)
  const attendanceData = {
    "2024-01-20": "absent",
    "2024-02-21": "present",
    "2024-03-01": "present",
    "2024-04-30": "present",
    "2024-05-31": "absent",
    // Add more dates and attendance status here...
  };

  const {subId} = useParams();

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const data = await axios.get(
            `http://localhost:5000/viewAttendance/${subId}`,
            {
              headers: {
                authorization: token,
              },
            }
          );
          console.log(data)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        console.error("Token not found in localStorage");
      }
    };

    getData();
  }, [subId]);

  // Get the first date in the attendance data
  const firstDate = Object.keys(attendanceData)[0];
  const [year, month] = firstDate.split("-");

  // Generate calendar based on the range of months in the data
  const calendarMonths = [];
  if (parseInt(month) >= 1 && parseInt(month) <= 6) {
    // Generate calendar for January to June
    for (let monthIndex = 1; monthIndex <= 6; monthIndex++) {
      const monthStartDate = new Date(year, monthIndex - 1, 1);
      const monthEndDate = new Date(year, monthIndex, 0);
      calendarMonths.push(renderMonth(monthStartDate, monthEndDate));
    }
  } else {
    // Generate calendar for July to December
    for (let monthIndex = 7; monthIndex <= 12; monthIndex++) {
      const monthStartDate = new Date(year, monthIndex - 1, 1);
      const monthEndDate = new Date(year, monthIndex, 0);
      calendarMonths.push(renderMonth(monthStartDate, monthEndDate));
    }
  }

  // Function to render a month's calendar
  function renderMonth(startDate, endDate) {
    const monthDays = [];

    // Loop through each day of the month
    for (let day = 1; day <= endDate.getDate(); day++) {
      const currentDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        day
      );
      const timezoneOffset = currentDate.getTimezoneOffset() * 60000; // convert offset to milliseconds
      const localDate = new Date(currentDate.getTime() - timezoneOffset);
      const dateString = localDate.toISOString().split("T")[0];

      let status = "no-class"; // Default status for days with no class

      // Check if the date has attendance data
      if (attendanceData[dateString]) {
        status = attendanceData[dateString];
      }

      // Set background color based on attendance status
      let bgColor;
      switch (status) {
        case "absent":
          bgColor = "bg-red-500";
          break;
        case "present":
          bgColor = "bg-green-500";
          break;
        default:
          bgColor = "bg-white";
          break;
      }

      // Add day to monthDays array
      monthDays.push(
        <td
          key={dateString}
          className={`px-2 py-1 text-center border ${bgColor}`}
        >
          {day}
        </td>
      );
    }

    // Fill in the remaining days of the week if needed
    const firstDayOfWeek = startDate.getDay(); // 0 (Sun) - 6 (Sat)
    for (let i = 0; i < firstDayOfWeek; i++) {
      monthDays.unshift(
        <td
          key={`empty-${i}`}
          className="px-2 py-1 text-center border bg-gray-100"
        ></td>
      );
    }

    // Create rows for the calendar
    const rows = [];
    let week = [];
    monthDays.forEach((day, index) => {
      if (index % 7 === 0 && index !== 0) {
        rows.push(<tr key={`row-${index / 7}`}>{week}</tr>);
        week = [];
      }
      week.push(day);
    });
    // Push the last week
    rows.push(<tr key={`row-${monthDays.length / 7}`}>{week}</tr>);

    return (
      <div key={startDate.toISOString()} className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-center">
          {startDate.toLocaleDateString("default", { month: "long" })}{" "}
          {startDate.getFullYear()}
        </h2>
        <table className="table-auto bg-white shadow-md rounded-lg overflow-hidden mx-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-2 py-1 text-center">Sun</th>
              <th className="px-2 py-1 text-center">Mon</th>
              <th className="px-2 py-1 text-center">Tue</th>
              <th className="px-2 py-1 text-center">Wed</th>
              <th className="px-2 py-1 text-center">Thu</th>
              <th className="px-2 py-1 text-center">Fri</th>
              <th className="px-2 py-1 text-center">Sat</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Attendance Calendar
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {calendarMonths.map((month, index) => (
          <div key={index} className="text-center">
            {month}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewAttendance;

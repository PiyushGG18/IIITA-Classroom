import React, { useState } from "react";

function FormAttendance({ onSubmitAttendance }) {
  // Dummy user data
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
    { id: 5, name: "Emma Davis" },
    { id: 6, name: "Michael Wilson" },
    { id: 7, name: "Olivia Martinez" },
    { id: 8, name: "William Anderson" },
    { id: 9, name: "Sophia Taylor" },
    { id: 10, name: "James Thomas" },
    { id: 11, name: "Emily Jackson" },
    { id: 12, name: "Benjamin White" },
    { id: 13, name: "Isabella Harris" },
    { id: 14, name: "Alexander Martin" },
    { id: 15, name: "Mia Thompson" },
    { id: 16, name: "Ethan Garcia" },
    { id: 17, name: "Charlotte Martinez" },
    { id: 18, name: "Daniel Rodriguez" },
    { id: 19, name: "Amelia Brown" },
    { id: 20, name: "Jacob Wilson" },
    { id: 21, name: "Liam Taylor" },
    { id: 22, name: "Ava Anderson" },
    { id: 23, name: "Logan Miller" },
    { id: 24, name: "Sophia Harris" },
    { id: 25, name: "Mason Davis" },
    // Add more dummy data here if needed
  ];

  const [attendance, setAttendance] = useState({});

  // Function to handle toggle of attendance
  const handleToggleAttendance = (userId) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [userId]: !prevAttendance[userId], // Toggle the attendance
    }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitAttendance(attendance);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
        Mark Attendance
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center p-4 bg-gray-100 rounded-lg"
          >
            <input
              type="checkbox"
              id={user.id}
              checked={attendance[user.id] || false}
              onChange={() => handleToggleAttendance(user.id)}
              className="form-checkbox h-5 w-5 text-blue-600 mr-4"
            />
            <label htmlFor={user.id} className="text-gray-800">
              {user.name}
            </label>
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300 ease-in-out"
      >
        Submit Attendance
      </button>
    </form>
  );
}

export default FormAttendance;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SubAssignment() {
  const [userRole, setUserRole] = useState("");
  const [assignments, setAssignments] = useState([]);
  const [expandedAssignmentId, setExpandedAssignmentId] = useState(null);
  const [fileStates, setFileStates] = useState({});
  const [newAssignmentFormVisible, setNewAssignmentFormVisible] =
    useState(false);

  const [newAssignmentData, setNewAssignmentData] = useState({
    title: "",
    description: "",
    dueDate: "",
    file: null, 
  });


  useEffect(() => {
    // Get user role from local storage
    const role = localStorage.getItem("role");
    setUserRole(role);

    // Dummy data for demonstration
    const dummyData = [
      {
        id: 1,
        title: "Assignment 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        dueDate: "2024-05-01",
        uploadDate: "2024-04-20",
        files: ["file1.pdf", "file2.docx"],
        postedBy: "John Doe",
        previousSubmission: "previous_submission1.pdf",
      },
      {
        id: 2,
        title: "Assignment 2",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        dueDate: "2024-05-10",
        uploadDate: "2024-04-25",
        files: ["file3.pdf"],
        postedBy: "Jane Smith",
        previousSubmission: "previous_submission2.pdf",
      },
    ];

    // Set the assignments state with dummy data
    setAssignments(dummyData.reverse());
  }, []);

  const toggleExpanded = (id) => {
    setExpandedAssignmentId(expandedAssignmentId === id ? null : id);
  };

  const handleFileChange = (e, assignmentId) => {
    const selectedFile = e.target.files[0];
    setFileStates({
      ...fileStates,
      [assignmentId]: selectedFile,
    });
  };

  const handleSubmit = (assignmentId) => {
    // Logic to handle submission for a specific assignment
    const file = fileStates[assignmentId];
    console.log("Submitted file for Assignment", assignmentId, ":", file);
  };

  const handleViewSubmission = (submission) => {
    // Logic to view previous submission
    console.log("Viewing previous submission:", submission);
  };

  const handleNewAssignmentFormChange = (e) => {
    const { name, value } = e.target;
    setNewAssignmentData({
      ...newAssignmentData,
      [name]: value,
    });
  };

  const handleNewAssignmentFileChange = (e) => {
    const selectedFile = e.target.files[0]; // Selecting just the first file
    setNewAssignmentData({
      ...newAssignmentData,
      file: selectedFile,
    });
  };
  const {subId} = useParams();

  const handleNewAssignmentSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("file", newAssignmentData.file); // Adjust field name to "file"
    formData.append("title", newAssignmentData.title);
    formData.append("description", newAssignmentData.description);
    formData.append("dueDate", newAssignmentData.dueDate);

    try {
      await axios.post(`http://localhost:5000/todo/${subId}`, formData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Assignment submitted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error uploading:", error);
    }

    setNewAssignmentData({
      title: "",
      description: "",
      dueDate: "",
      file: null,
    });
    setNewAssignmentFormVisible(false);
  };;

  const handleCancelNewAssignment = () => {
    setNewAssignmentFormVisible(false);
    // Reset form fields when canceling
    setNewAssignmentData({
      title: "",
      description: "",
      dueDate: "",
      files: [],
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold">Assignments</h1>
        {userRole === "Professor" && !newAssignmentFormVisible && (
          <button
            className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full"
            onClick={() => setNewAssignmentFormVisible(true)}
          >
            New Assignment
          </button>
        )}
      </div>
      {newAssignmentFormVisible && (
        <div className="">
        <form
          onSubmit={handleNewAssignmentSubmit}
          className="bg-white rounded-lg shadow-md p-6 mb-4  max-w-full"
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={newAssignmentData.title}
              onChange={handleNewAssignmentFormChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={newAssignmentData.description}
              onChange={handleNewAssignmentFormChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="dueDate"
              className="block text-gray-700 font-semibold"
            >
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={newAssignmentData.dueDate}
              onChange={handleNewAssignmentFormChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="files"
              className="block text-gray-700 font-semibold"
            >
              Files
            </label>
            <input
              type="file"
              id="files"
              name="files"
              onChange={handleNewAssignmentFileChange}
              multiple
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full mr-2"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleCancelNewAssignment}
              className="text-gray-600 border border-gray-300 hover:bg-gray-200 py-2 px-4 rounded-full"
            >
              Cancel
            </button>
          </div>
        </form></div>
      )}
      {assignments.map((assignment) => (
        <div
          key={assignment.id}
          className="bg-white rounded-lg shadow-md p-6 mb-4 relative"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">{assignment.title}</h2>
            <p className="text-gray-600">{assignment.dueDate}</p>
          </div>
          {!expandedAssignmentId || expandedAssignmentId !== assignment.id ? (
            <p className="text-gray-600 mb-2">
              {assignment.description.substring(0, 100)}...
            </p>
          ) : (
            <>
              <p className="text-gray-600 mb-2">{assignment.description}</p>
              <p className="text-gray-600 mb-2">
                Uploaded On: {assignment.uploadDate}
              </p>
              <div className="flex items-center mb-2">
                <span className="text-gray-600 mr-2">Files:</span>
                {assignment.files.map((file, index) => (
                  <a
                    key={index}
                    href={file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline mr-2"
                  >
                    File {index + 1}
                  </a>
                ))}
              </div>
              <p className="text-gray-600">Posted By: {assignment.postedBy}</p>
              {(userRole === "Student" && (
                <div className="mt-4">
                  <label className="inline-flex items-center bg-white rounded-lg border border-gray-300 shadow-sm px-4 py-2 text-blue-500 hover:bg-blue-100 hover:border-blue-500 cursor-pointer">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                    {fileStates[assignment.id]
                      ? fileStates[assignment.id].name
                      : "Upload File"}{" "}
                    {/* Show file name if selected */}
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, assignment.id)}
                      className="hidden"
                    />
                  </label>
                  <button
                    className="text-blue-500 hover:underline ml-4"
                    onClick={() => handleSubmit(assignment.id)}
                  >
                    Submit
                  </button>
                  <button
                    className="text-blue-500 hover:underline ml-4"
                    onClick={() =>
                      handleViewSubmission(assignment.previousSubmission)
                    }
                  >
                    View My Submission
                  </button>
                </div>
              )) || (
                <div className="mt-4">
                  <button className="text-blue-500 hover:underline ml-4">
                    View Submissions
                  </button>
                </div>
              )}
            </>
          )}
          {expandedAssignmentId === assignment.id && (
            <button
              className="text-blue-500 hover:underline absolute bottom-2 right-2"
              onClick={() => toggleExpanded(assignment.id)}
            >
              Collapse
            </button>
          )}
          <button
            className="text-blue-500 hover:underline absolute bottom-2 right-2"
            onClick={() => toggleExpanded(assignment.id)}
          >
            {expandedAssignmentId === assignment.id ? "Collapse" : "Expand"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default SubAssignment;

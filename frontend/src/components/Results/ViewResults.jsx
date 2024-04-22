import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ViewResults() {
  const { subId } = useParams();
  const [results, setResults] = useState({});
const examType = window.location.pathname.includes("midSem")
  ? "midSem"
  : "endSem";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(
            `http://localhost:5000/results/${subId}/${examType}`,
            {
              headers: {
                authorization: token,
              },
            }
          );
          setResults(response.data);
        } else {
          console.error("Token not found in localStorage");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [subId, examType]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Results for {subId}</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-2">Review Test</h2>
        <p className="text-lg">Marks: {results["review test"]}</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <h2 className="text-xl font-semibold mb-2">Quiz</h2>
        <p className="text-lg">Marks: {results.quiz}</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <h2 className="text-xl font-semibold mb-2">Assignment</h2>
        <p className="text-lg">Marks: {results.assignment}</p>
      </div>
    </div>
  );
}

export default ViewResults;

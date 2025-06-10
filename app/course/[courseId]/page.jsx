"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BasicInfo from "../../Create-Course/[ProductId]/_components/BasicInfo";

function Course({ params: paramsPromise }) {
  const params = React.use(paramsPromise); // Unwrap the params Promise
  const { courseId } = params; // Extract courseId from unwrapped params
  const [course, setCourse] = useState(null); // State to store the course data
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const apiUrl = `http://localhost:3000/api/v1/courses/getCourseById/${courseId}`;
        console.log(`Fetching course from: ${apiUrl}`); // Debugging log

        const response = await axios.get(apiUrl);
        if (response.status === 200) {
          console.log("Course fetched successfully:", response.data); // Debugging log
          setCourse(response.data); // Set the fetched course data
        } else {
          console.error("Failed to fetch course:", response.data.error);
        }
      } catch (error) {
        console.error("Error while fetching the course:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    if (courseId) {
      fetchCourse(); // Fetch the course data when courseId is available
    }
  }, [courseId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="p-10 border rounded-xl shadow-2xl mt-10 w-full max-w-[1050px] sm:w-full md:w-[90%] lg:w-[1050px]">
          <div className="w-full h-[300px] bg-slate-300 animate-pulse rounded-lg"></div>
        </div>
        <div className="flex flex-wrap p-10 border rounded-xl shadow-2xl mt-5 gap-5 justify-center w-full max-w-[1050px] sm:w-full md:w-[90%] lg:w-[1050px]">
          {[1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              className="w-[200px] h-[150px] bg-slate-300 animate-pulse rounded-lg"
            ></div>
          ))}
        </div>
        <div className="flex flex-wrap p-10 border rounded-xl shadow-2xl w-full max-w-[1050px] sm:w-full md:w-[90%] lg:w-[1050px]">
          <div className="w-full h-[200px] bg-slate-300 animate-pulse rounded-lg"></div>
        </div>
        <div className="flex justify-end p-5 w-full">
          <div className="w-[150px] h-[50px] bg-slate-300 animate-pulse rounded-lg"></div>
        </div>
      </div>
    );
  }

  if (!course) {
    return <p>Course not found.</p>; // Show a fallback message if no course is found
  }

  return (
    <div>
      <BasicInfo course={course} refreshData={() => {}} />
    </div>
  );
}

export default Course;

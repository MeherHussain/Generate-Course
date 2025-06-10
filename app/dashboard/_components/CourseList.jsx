"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message
  const { user } = useUser();

  useEffect(() => {
    user && getUserCourses();
  }, [user]);

  const getUserCourses = async () => {
    try {
      const apiUrl = `http://localhost:3000/api/v1/courses/getUserCourses/${user?.primaryEmailAddress?.emailAddress}`;
      console.log("Fetching courses from:", apiUrl);

      const response = await axios.get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Courses fetched successfully:", response.data);
        setCourses(response.data);
        setErrorMessage(""); // Clear any previous error message
      } else {
        console.error("Failed to fetch courses:", response.data.error);
        setErrorMessage("Failed to fetch courses!");
      }
    } catch (error) {
      if (error.response?.status === 404) {
        console.warn("No courses found for the user.");
        setErrorMessage("You have no generated courses."); // Set fallback message
        setCourses([]); // Ensure courses state is empty
      } else {
        console.error("Error while fetching the courses:", error);
        setErrorMessage(
          error.response?.data?.error ||
            "An error occurred while fetching the courses."
        );
      }
    }
  };

  return (
    <div className="mt-10">
      <h2 className="font-bold text-4xl  text-blue-950 text-center">
        My AI Courses
      </h2>
      {errorMessage ? (
        <p className="text-center text-gray-500 mt-5">{errorMessage}</p> // Display error message
      ) : (
        <div className="flex flex-wrap gap-10 mt-10 ml-[70px]">
          {courses?.length > 0
            ? courses.map((course, index) => (
                <CourseCard
                  key={index}
                  course={course}
                  refreshData={() => getUserCourses()}
                  handleOnDelete={(deletedCourseId) =>
                    setCourses((prevCourses) =>
                      prevCourses.filter((c) => c.courseId !== deletedCourseId)
                    )
                  }
                />
              ))
            : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <div
                  key={index}
                  className="w-[250px] mt-5 bg-slate-300 animate-pulse rounded-lg h-[400px]"
                ></div>
              ))}
        </div>
      )}
    </div>
  );
}

export default CourseList;

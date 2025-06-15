"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";
import { motion } from "framer-motion";

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
    <div className="w-full px-4 md:px-8 sm:py-5 lg:px-12 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My AI Courses
        </h2>

        {errorMessage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 max-w-md mx-auto text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200">
              <svg
                className="w-12 h-12 mx-auto text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-600">{errorMessage}</p>
            </div>
          </motion.div>
        ) : (
          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-8 px-4 sm:px-8 mt-10">
              {courses?.length > 0 ? (
                courses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="w-full"
                  >
                    <CourseCard
                      course={course}
                      refreshData={() => getUserCourses()}
                      handleOnDelete={(deletedCourseId) =>
                        setCourses((prevCourses) =>
                          prevCourses.filter(
                            (c) => c.courseId !== deletedCourseId
                          )
                        )
                      }
                    />
                  </motion.div>
                ))
              ) : (
                <React.Fragment>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                    <div
                      key={index}
                      className="w-full mt-5 bg-slate-300 animate-pulse rounded-lg h-[400px]"
                    ></div>
                  ))}
                </React.Fragment>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default CourseList;
//

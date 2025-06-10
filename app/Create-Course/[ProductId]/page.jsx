"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for API calls
import BasicInfo from "./_components/BasicInfo"; // Ensure BasicInfo is correctly exported

function page({ params }) {
  const { user } = useUser(); // Correctly destructure the user object
  const [course, setcourse] = useState(null); // Initialize as null

  useEffect(() => {
    params && GetCourse();
  }, [params, user]); // Fix dependency array placement

  const GetCourse = async () => {
    if (!user) return; // Ensure user is available before proceeding
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/courses/getCourse`, // Replace with the correct API endpoint
        {
          params: {
            courseId: params?.courseId,
            createdBy: user?.primaryEmailAddress?.emailAddress, // Match schema's 'createdBy'
          },
        }
      );
      console.log("API Response:", response.data); // Log the full API response

      // Check if response.data is an array or an object
      const courseData = Array.isArray(response.data)
        ? response.data[0]
        : response.data;

      if (courseData) {
        setcourse(courseData); // Update state with the correct course data
        console.log("Updated course state:", courseData); // Log the updated course state
      } else {
        console.error("No course data found in API response.");
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  return (
    <div className="mt-10 px-7 md:px-20 lg:px-44">
      <h2 className="font-bold text-center text-2xl">Your Course Layout</h2>
      <BasicInfo course={course} refreshData={() => GetCourse()} />{" "}
      {/* Ensure BasicInfo is correctly imported */}
      {/* Course Detail */}
      {/* list of Lesson */}
    </div>
  );
}

export default page;

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./../../../../@/components/ui/dialog"; // Corrected relative path
import { BiSolidEdit } from "react-icons/bi";

function CourseEdit({ course, onCourseUpdate, refreshData }) {
  const [name, setname] = useState(""); // Initialize with an empty string
  const [description, setDescription] = useState(""); // Initialize with an empty string

  useEffect(() => {
    setname(course?.courseOutput?.courseName || ""); // Fallback to empty string
    setDescription(course?.courseOutput?.description || ""); // Fallback to empty string
  }, [course]);

  const onUpdate = async () => {
    const courseId = course.courseId;

    const updatedData = {
      courseName: name || course?.courseOutput?.courseName,
      description: description || course?.courseOutput?.description,
    };

    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/courses/updateCourse/${courseId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Course updated successfully:", data.course);
        onCourseUpdate({
          name: updatedData.courseName,
          courseOutput: {
            description: updatedData.description, // Ensure description is updated
          },
        });
      } else {
        console.error("Failed to update course:", data.error);
      }
    } catch (error) {
      console.error("Error while updating course:", error);
    }
    refreshData(true);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <BiSolidEdit size={40} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edite Course Tittle & Description</DialogTitle>
            <div className="space-y-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Course Title
                </label>
                <input
                  className="p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300 hover:border-blue-500"
                  placeholder="Enter course title"
                  value={name} // Bind directly to the name state
                  onChange={(event) => setname(event.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Description
                </label>
                <textarea
                  className="p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300 hover:border-blue-500"
                  placeholder="Enter course description"
                  value={description} // Use value instead of defaultValue
                  onChange={(event) => setDescription(event.target.value)}
                  rows={5}
                  onInput={(e) => {
                    e.target.style.height = "auto"; // Reset height
                    e.target.style.height = `${e.target.scrollHeight}px`; // Set height based on content
                  }}
                />
              </div>
            </div>
          </DialogHeader>
          <DialogFooter>
            <div className="flex justify-between items-center w-full">
              <DialogClose asChild>
                <button
                  type="button"
                  className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-transform duration-300 hover:scale-110"
                >
                  Close
                </button>
              </DialogClose>
              <DialogClose asChild>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300 hover:scale-110"
                  onClick={onUpdate}
                >
                  Update
                </button>
              </DialogClose>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CourseEdit;

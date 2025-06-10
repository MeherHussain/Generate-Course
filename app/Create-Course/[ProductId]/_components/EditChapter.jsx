"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "./../../../../@/components/ui/dialog";
import { BiSolidEdit } from "react-icons/bi";

function EditChapter({ course, index, onCourseUpdate, refreshData }) {
  const chapters = course?.courseOutput?.chapters;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (chapters && chapters[index]) {
      setTitle(chapters[index].title);
      setDescription(chapters[index].description);
    }
  }, [course, index]);

  const onUpdate = async () => {
    try {
      const courseId = course.courseId; // Get the courseId from the course object
      const chapterIndex = index; // Use the provided index for the chapter

      // Make the PUT request to the backend API
      const response = await fetch(
        `http://localhost:3000/api/v1/courses/updateChapter/${courseId}/${chapterIndex}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Chapter updated successfully:", data.course);

        // Update the course object in the parent component
        const updatedChapters = [...chapters];
        updatedChapters[index] = {
          ...updatedChapters[index],
          title,
          description,
        };

        // Ensure onCourseUpdate is a valid function before calling it
        if (typeof onCourseUpdate === "function") {
          onCourseUpdate({
            ...course,
            courseOutput: {
              ...course.courseOutput,
              chapters: updatedChapters,
            },
          });
        } else {
          console.warn("onCourseUpdate is not provided or is not a function.");
          // Optional: Log the updated course object for debugging
          console.log("Updated course object:", {
            ...course,
            courseOutput: {
              ...course.courseOutput,
              chapters: updatedChapters,
            },
          });
        }
      } else {
        console.error("Failed to update chapter:", data.error);
        alert("Failed to update chapter: " + data.error);
      }
    } catch (error) {
      console.error("Error while updating chapter:", error);
      alert("Error while updating chapter: " + error.message);
    }
    refreshData(true);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <BiSolidEdit size={30} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Course Chapters</DialogTitle>
            <DialogDescription asChild>
              <div>
                <div className="space-y-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Course Title
                    </label>
                    <input
                      className="p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300 hover:border-blue-500"
                      placeholder="Enter course title"
                      value={title || ""} // Use the title state instead of chapters[index].title
                      onChange={(event) => setTitle(event.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Description
                    </label>
                    <textarea
                      className="p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300 hover:border-blue-500"
                      placeholder="Enter course description"
                      value={description || ""} // Use the description state
                      onChange={(event) => setDescription(event.target.value)}
                      rows={5}
                      onInput={(e) => {
                        e.target.style.height = "auto"; // Reset height
                        e.target.style.height = `${e.target.scrollHeight}px`; // Set height based on content
                      }}
                    />
                  </div>
                </div>
              </div>
            </DialogDescription>
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

export default EditChapter;

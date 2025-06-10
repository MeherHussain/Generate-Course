"use client";
import React from "react";
import ThreeD from "./ThreeD"; // Ensure ThreeD is a default export
import Level from "./Level"; // Ensure Level is a default export
import Duration from "./Duration"; // Ensure Duration is a default export
import Chapters from "./NoChapters"; // Ensure Chapters is a default export
import VideoPlay from "./VideoPlay"; // Ensure VideoPlay is a default export
import ChapDetails from "./ChapDetails"; // Ensure ChapDetails is a default export
import GenButton from "./GenButton"; // Ensure GenButton is a default export

function BasicInfo({ course, refreshData }) {
  console.log("Received course prop in BasicInfo:", course); // Log the course prop

  // Ensure course is fully loaded
  if (!course || !course.courseOutput || !course.courseOutput.assessment) {
    return <p>Loading course information...</p>; // Display a loading message if course is not ready
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="p-10 border rounded-xl shadow-2xl mt-10 w-full max-w-[1050px] sm:w-full md:w-[90%] lg:w-[1050px]">
        <ThreeD course={course} refreshData={() => refreshData(true)} />
      </div>
      <div className="flex flex-wrap p-10 border rounded-xl shadow-2xl mt-5 gap-5 justify-center w-full max-w-[1050px] sm:w-full md:w-[90%] lg:w-[1050px]">
        <Level course={course} />
        <Duration course={course} />
        <Chapters course={course} /> {/* Ensure course is passed correctly */}
        <VideoPlay course={course} />
      </div>
      <div className="flex flex-wrap p-10 border rounded-xl shadow-2xl w-full max-w-[1050px] sm:w-full md:w-[90%] lg:w-[1050px]">
        <ChapDetails course={course} refreshData={() => refreshData(true)} />
      </div>
      <div className="flex justify-end p-5 w-full">
        <GenButton course={course} refreshData={() => refreshData(true)} />
      </div>
    </div>
  );
}

export default BasicInfo;

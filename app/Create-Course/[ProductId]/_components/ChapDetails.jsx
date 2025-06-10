import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import EditChapter from "./EditChapter";

function ChapDetails({ course, refreshData }) {
  return (
    <div className="mt-3">
      <h2 className="font-bold text-2xl text-blue-800 border-b-2 border-blue-800 pb-2">
        Chapters
      </h2>
      <div className="mt-4">
        {course?.courseOutput?.chapters.map((chapter, index) => (
          <div
            key={index}
            className="border rounded-lg border-gray-300 shadow-md p-4 mb-6 bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="flex flex-col md:flex-row justify-between p-6 md:p-10 items-center gap-4">
              <h2 className="bg-blue-800 h-10 w-10 md:h-12 md:w-12 text-white rounded-full text-center flex items-center justify-center text-lg font-bold">
                {index + 1}
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                <h2 className="font-bold text-lg md:text-xl text-gray-800">
                  {chapter?.title}
                </h2>
                <EditChapter
                  course={course}
                  index={index}
                  refreshData={() => refreshData(true)}
                />
              </div>
              <FaRegCheckCircle className="text-xl md:text-2xl text-gray-500" />
            </div>
            <div className="ml-2 md:ml-4 mt-4">
              <h3 className="font-semibold text-md md:text-lg text-blue-700">
                Objectives:
              </h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {chapter?.keyObjectives?.map((objective, objIndex) => (
                  <li key={objIndex}>{objective}</li>
                ))}
              </ul>
              <h1 className="font-semibold text-md md:text-lg text-blue-700 mt-4">
                Details:
              </h1>
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                {chapter?.description}
              </p>
              <p className="flex items-center gap-2 text-blue-800 mt-4 font-semibold text-sm md:text-base">
                <FaRegClock />
                <span>Time: {chapter?.estimatedTime}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapDetails;

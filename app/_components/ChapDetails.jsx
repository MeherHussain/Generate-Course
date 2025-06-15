import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import EditChapter from "./EditChapter";

function ChapDetails({ course, refreshData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-3 px-4 sm:px-6"
    >
      <div className="relative">
        <h2 className="font-bold text-2xl sm:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-3 mb-6">
          Chapters
        </h2>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
      </div>

      <div className="mt-8 space-y-6">
        {course?.courseOutput?.chapters.map((chapter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

            <div className="relative border rounded-xl border-gray-200 shadow-lg p-6 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Chapter Number */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm opacity-75" />
                  <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 h-12 w-12 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Title and Edit */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <h2 className="font-bold text-xl text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                      {chapter?.title}
                    </h2>
                    <EditChapter
                      course={course}
                      index={index}
                      refreshData={() => refreshData(true)}
                    />
                  </div>
                </div>

                {/* Status Icon */}
                <FaRegCheckCircle className="text-2xl text-green-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Section */}
              <div className="mt-6 space-y-6">
                {/* Objectives */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-blue-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Objectives
                  </h3>
                  <ul className="grid gap-2 pl-4">
                    {chapter?.keyObjectives?.map((objective, objIndex) => (
                      <motion.li
                        key={objIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: objIndex * 0.1 }}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                        {objective}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-blue-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Details
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-4">
                    {chapter?.description}
                  </p>
                </div>

                {/* Time */}
                <div className="flex items-center gap-2 text-blue-700 font-medium pl-4">
                  <FaRegClock className="text-lg" />
                  <span>{chapter?.estimatedTime}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default ChapDetails;

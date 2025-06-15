"use client";
import React from "react";
import Input from "./Input";
import { motion } from "framer-motion";

function TopicDescription({
  topicName,
  setTopicName,
  description,
  setDescription,
}) {
  return (
    <motion.div
      className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 sm:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Topic input */}
      <div className="w-full mt-8 sm:mt-12 px-2 sm:px-0">
        <label className="w-full">
          <Input
            value={topicName}
            onChange={(e) => setTopicName(e.target.value)}
            className="w-full"
          />
        </label>
      </div>

      {/* Description input with glow effect */}
      <div className="w-full mt-8 px-2 sm:px-0">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          <div className="relative bg-white rounded-lg p-4 sm:p-6">
            <label className="block text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Tell us more about your course
            </label>
            <textarea
              className="w-full min-h-[150px] p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm 
                focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 
                transition-all duration-300 resize-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
              placeholder="Describe what you want to include in your course..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="mt-2 text-xs text-gray-500">
              Provide details about your course content, objectives, and target
              audience.
            </div>
          </div>
        </div>
      </div>

      {/* Character count */}
      <motion.div
        className="mt-4 text-center text-xs sm:text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {description.length > 0 && <span>{description.length} characters</span>}
      </motion.div>
    </motion.div>
  );
}

export default TopicDescription;

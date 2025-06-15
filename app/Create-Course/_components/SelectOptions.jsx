import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { UserInputContext } from "../../_Context/UserInputContext";
import { motion } from "framer-motion";

function SelectOptions() {
  const [userCourseInput, setUserCourseInput] = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="px-4 sm:px-6 md:px-8 lg:px-12 mt-6 sm:mt-10 max-w-4xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {[
          {
            label: "Difficulty Level",
            field: "level",
            type: "select",
            options: [
              { value: "beginner", label: "Beginner" },
              { value: "intermediate", label: "Intermediate" },
              { value: "advanced", label: "Advanced" },
            ],
          },
          {
            label: "Course Duration",
            field: "Duration",
            type: "select",
            options: [
              { value: "1 Hours", label: "1 Hour" },
              { value: "2 Hours", label: "2 Hours" },
              { value: "More than 3 Hours", label: "More than 3 Hours" },
            ],
          },
          {
            label: "Add Video",
            field: "DisplayVideo",
            type: "select",
            options: [
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ],
          },
          {
            label: "No of Chapters",
            field: "Chapters",
            type: "input",
          },
        ].map((field, index) => (
          <motion.div
            key={field.field}
            className="relative group"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg -z-10 group-hover:blur-sm transition-all duration-300" />
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <label className="block font-bold text-base sm:text-lg mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {field.label}
              </label>
              {field.type === "select" ? (
                <Select
                  value={userCourseInput?.[field.field] || ""}
                  onValueChange={(value) =>
                    handleInputChange(field.field, value)
                  }
                >
                  <SelectTrigger className="w-full p-3 bg-white/70 border border-blue-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300">
                    <SelectValue placeholder="Select option..." />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-md border border-blue-100 rounded-lg shadow-xl">
                    {field.options.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="p-3 hover:bg-blue-50/50 transition-colors duration-200"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <input
                  type="text"
                  placeholder="Enter number of chapters"
                  className="w-full p-3 bg-white/70 border border-blue-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  value={userCourseInput?.[field.field] || ""}
                  onChange={(e) =>
                    handleInputChange(field.field, e.target.value)
                  }
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default SelectOptions;

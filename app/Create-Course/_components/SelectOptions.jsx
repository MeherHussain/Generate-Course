import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select"; // Corrected import path
import { UserInputContext } from "../../_Context/UserInputContext";

function SelectOptions() {
  const [userCourseInput, setUserCourseInput] = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="px-10 md:px-20 lg:px-40 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col">
          <label className="font-bold text-lg mb-2">Difficulty Level</label>
          <Select
            value={userCourseInput?.level || ""}
            onValueChange={(value) => handleInputChange("level", value)}
          >
            <SelectTrigger className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-300 rounded-lg shadow-lg mt-2">
              <SelectItem value="beginner" className="p-3 hover:bg-gray-100">
                Beginner
              </SelectItem>
              <SelectItem
                value="intermediate"
                className="p-3 hover:bg-gray-100"
              >
                Intermediate
              </SelectItem>
              <SelectItem value="advanced" className="p-3 hover:bg-gray-100">
                Advanced
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-lg mb-2">Course Duration</label>
          <Select
            value={userCourseInput?.Duration || ""}
            onValueChange={(value) => handleInputChange("Duration", value)}
          >
            <SelectTrigger className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-300 rounded-lg shadow-lg mt-2">
              <SelectItem value="1 Hours" className="p-3 hover:bg-gray-100">
                1 Hour
              </SelectItem>
              <SelectItem value="2 Hours" className="p-3 hover:bg-gray-100">
                2 Hours
              </SelectItem>
              <SelectItem
                value="More than 3 Hours"
                className="p-3 hover:bg-gray-100"
              >
                More than 3 Hours
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-lg mb-2">Add Video</label>
          <Select
            value={userCourseInput?.DisplayVideo || ""}
            onValueChange={(value) => handleInputChange("DisplayVideo", value)}
          >
            <SelectTrigger className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-300 rounded-lg shadow-lg mt-2">
              <SelectItem value="Yes" className="p-3 hover:bg-gray-100">
                Yes
              </SelectItem>
              <SelectItem value="No" className="p-3 hover:bg-gray-100">
                No
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-lg mb-2">No of Chapters</label>
          <input
            type="text"
            placeholder="How many Chapters"
            className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={userCourseInput?.Chapters || ""}
            onChange={(event) =>
              handleInputChange("Chapters", event.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default SelectOptions;

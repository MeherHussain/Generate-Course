"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  HiClipboardDocumentCheck,
  HiLightBulb,
  HiMiniSquares2X2,
} from "react-icons/hi2";
import Selcategory from "./_components/Selcategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOptions from "./_components/SelectOptions";
import { UserInputContext } from "../_Context/UserInputContext";
import { GenerateCourseLayout_AI } from "../../Configs/AiModel";
import LoadingDialog from "./_components/Loading";
import uuid4 from "uuid4";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function CreateCourse() {
  const StepperOptions = [
    {
      id: 1,
      name: "Category",
      icon: <HiLightBulb />,
    },
    {
      id: 2,
      name: "Topic & Description",
      icon: <HiClipboardDocumentCheck />,
    },
    {
      id: 3,
      name: "Options",
      icon: <HiMiniSquares2X2 />,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [userCourseInput, setUserCourseInput] = useContext(UserInputContext);
  const [topicName, setTopicName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    setUserCourseInput((prev) => ({
      ...prev,
      topicName,
      description,
    }));
  }, [topicName, description, setUserCourseInput]);

  useEffect(() => {
    console.log("User Course Input:", userCourseInput);
  }, [userCourseInput]);

  // const GenerateCourseLayout = async () => {
  //   setLoading(true);
  //   const BASIC_PROMPT = `
  //   Generate a comprehensive and detailed course tutorial based on the following information:
  //   - Topic Name: {Course Name}
  //   - Description: {Course Description}
  //   - Chapters: {Chapter Details}
  //   - Duration: {Course Duration}
  //   - Level: {Difficulty Level}
  //   - Category: {Course Category}

  //   Please include:
  //   1. A brief introduction to the course.
  //   2. A detailed breakdown of chapters with titles, descriptions, and key learning objectives.
  //   3. The estimated time required for each chapter.
  //   4. A summary of the course objectives and outcomes.
  //   5. Suggested exercises or activities for each chapter.
  //   6. Recommended resources (e.g., books, articles, videos) for further learning.
  //   7. A final assessment or quiz to evaluate the learner's understanding.
  //   `;

  //   const USER_INPUT_PROMPT = `
  //   - Category: ${userCourseInput?.category || "Not specified"}
  //   - Topic Name: ${userCourseInput?.topicName || "Not specified"}
  //   - Level: ${userCourseInput?.level || "Not specified"}
  //   - Duration: ${userCourseInput?.Duration || "Not specified"}
  //   - Chapters: ${userCourseInput?.Chapters || "Not specified"}
  //   - Description: ${userCourseInput?.description || "Not specified"}

  //   Please provide the response in a structured JSON format with the following keys:
  //   - "introduction": A brief introduction to the course.
  //   - "chapters": An array of objects, each containing "title", "description", "keyObjectives", and "estimatedTime".
  //   - "objectives": A summary of the course objectives and outcomes.
  //   - "exercises": Suggested exercises or activities for each chapter.
  //   - "resources": Recommended resources for further learning.
  //   - "assessment": A final assessment or quiz.
  //   `;

  //   const PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;
  //   console.log("Generated Prompt:", PROMPT);
  //   const result = await GenerateCourseLayout_AI.sendMessage(PROMPT);
  //   console.log(result.response?.text());
  //   console.log(JSON.parse(result.response?.text()));
  //   SaveCourseLayoutInDB(JSON.parse(result.response?.text()));
  // };

  const GenerateCourseLayout = async () => {
    setLoading(true);

    const BASIC_PROMPT = `
    Generate a comprehensive and detailed course tutorial based on the following information:
    - Topic Name: {Course Name}
    - Description: {Course Description}
    - Chapters: {Chapter Details}
    - Duration: {Course Duration}
    - Level: {Difficulty Level}
    - Category: {Course Category}

    Please include:
    1. A brief introduction to the course.
    2. A detailed breakdown of chapters with titles, descriptions, and key learning objectives.
    3. The estimated time required for each chapter.
    4. A summary of the course objectives and outcomes.
    5. Suggested exercises or activities for each chapter.
    6. Recommended resources (e.g., books, articles, videos) for further learning.
    7. A final assessment or quiz to evaluate the learner's understanding.
    `;

    const USER_INPUT_PROMPT = `
    - Category: ${userCourseInput?.category || "Not specified"}
    - Topic Name: ${userCourseInput?.topicName || "Not specified"}
    - Level: ${userCourseInput?.level || "Not specified"}
    - Duration: ${userCourseInput?.Duration || "Not specified"}
    - Chapters: ${userCourseInput?.Chapters || "Not specified"}
    - Description: ${userCourseInput?.description || "Not specified"}

    Please provide the response in a structured JSON format with the following keys:
    - "introduction": A brief introduction to the course.
    - "chapters": An array of objects, each containing "title", "description", "keyObjectives", and "estimatedTime".
    - "objectives": A summary of the course objectives and outcomes.
    - "exercises": Suggested exercises or activities for each chapter.
    - "resources": Recommended resources for further learning.
    - "assessment": A final assessment or quiz.
    `;

    const PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;
    console.log("Generated Prompt:", PROMPT);

    const result = await GenerateCourseLayout_AI.sendMessage(PROMPT);
    const rawText = await result.response?.text();

    console.log("Raw LLM response:", rawText);

    // Remove ```json or ``` wrapping (code block markers)
    const cleanedText = rawText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    try {
      const json = JSON.parse(cleanedText);
      console.log("Parsed JSON:", json);
      SaveCourseLayoutInDB(json);
    } catch (error) {
      console.error("Failed to parse JSON:", error);
      alert("AI response was not in proper JSON format. Please try again.");
    }

    setLoading(false);
  };

  const SaveCourseLayoutInDB = async (courseLayout) => {
    try {
      var id = uuid4();
      const result = await axios.post(
        "http://localhost:3000/api/v1/courses/addCourse",
        {
          courseId: id,
          name: userCourseInput?.topicName,
          description: userCourseInput?.description,
          category: userCourseInput?.category,
          level: userCourseInput?.level,
          Duration: userCourseInput?.Duration,
          Chapters: userCourseInput?.Chapters,
          courseOutput: courseLayout,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          userName: user?.fullName,
          userProfileImage: user?.imageUrl,
        }
      );
      console.log("Course saved successfully:", result.data);

      router.replace(`/Create-Course/${id}`);
    } catch (error) {
      console.log("Errors in Server:", error);
      alert("Failed to save the course. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center pt-[150px] pb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
          Create Course
        </h2>
      </div>

      {/* Stepper Section */}
      <div className="flex justify-center items-center gap-8 sm:gap-[130px] mt-10 px-4">
        {StepperOptions.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col items-center relative group"
          >
            <div
              className={`flex justify-center items-center w-12 h-12 rounded-xl transition-all duration-500 transform group-hover:scale-110 ${
                activeIndex >= index
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg"
                  : "bg-gray-200"
              }`}
            >
              <span
                className={`text-xl ${
                  activeIndex >= index ? "text-white" : "text-gray-500"
                }`}
              >
                {item.icon}
              </span>
            </div>

            <div className="mt-4">
              <h2
                className={`text-center font-bold transition-colors duration-300 ${
                  activeIndex >= index ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {item.name}
              </h2>
            </div>

            {index !== StepperOptions.length - 1 && (
              <div
                className={`hidden sm:block h-1 w-[170px] rounded-full transition-all duration-500 absolute top-6 left-[100px] ${
                  activeIndex > index
                    ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {activeIndex === 0 ? (
          <Selcategory />
        ) : activeIndex === 1 ? (
          <TopicDescription
            topicName={topicName}
            setTopicName={setTopicName}
            description={description}
            setDescription={setDescription}
          />
        ) : (
          <SelectOptions />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between p-6 sm:p-10 max-w-7xl mx-auto">
        <button
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform 
            ${
              activeIndex === 0
                ? "opacity-50 cursor-not-allowed bg-gray-200 text-gray-400"
                : "bg-white text-gray-700 hover:scale-105 hover:shadow-lg border border-gray-200"
            }`}
          disabled={activeIndex === 0}
          onClick={() => setActiveIndex(activeIndex - 1)}
        >
          Previous
        </button>

        {activeIndex < 2 ? (
          <button
            className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
            onClick={() => setActiveIndex(activeIndex + 1)}
          >
            Next
          </button>
        ) : (
          <button
            className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 relative group"
            onClick={() => GenerateCourseLayout()}
          >
            <span className="relative z-10">Create</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        )}
      </div>

      <LoadingDialog loading={loading} />
    </div>
  );
}

export default CreateCourse;

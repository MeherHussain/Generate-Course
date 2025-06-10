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
    <div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl text-slate-900 font-bold">Create Course</h2>
      </div>
      <div className="flex justify-center items-center gap-[130px] mt-10">
        {StepperOptions.map((item, index) => (
          <div key={item.id} className="flex flex-col items-center">
            <div
              className={`flex justify-center items-center bg-gray-400 w-10 h-10 text-white rounded-full 
            ${activeIndex >= index && "bg-slate-600"}`}
            >
              {item.icon}
            </div>
            <div className="mt-3">
              <h2 className="text-center font-bold">{item.name}</h2>
            </div>
            {index != StepperOptions?.length - 1 && (
              <div
                className={`h-1 w-[50px] md:w-[100px] lg:w-[170px] rounded-full bg-gray-300 relative left-[130px] bottom-[50px] ${
                  activeIndex - 1 >= index ? "bg-slate-500" : ""
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
      {activeIndex == 0 ? (
        <Selcategory />
      ) : activeIndex == 1 ? (
        <TopicDescription
          topicName={topicName}
          setTopicName={setTopicName}
          description={description}
          setDescription={setDescription}
        />
      ) : (
        <SelectOptions />
      )}
      <div className="flex justify-between p-10">
        <button
          className="bg-slate-400 w-[100px] h-[40px] rounded-full hover:scale-[1.1] hover:transition-all ease-in-out duration-75 hover:bg-slate-200"
          disabled={activeIndex == 0}
          onClick={() => setActiveIndex(activeIndex - 1)}
        >
          Previous
        </button>
        {activeIndex < 2 && (
          <button
            className="bg-slate-400 w-[100px] h-[40px] rounded-full hover:scale-[1.1] hover:transition-all ease-in-out duration-75 hover:bg-slate-200"
            onClick={() => setActiveIndex(activeIndex + 1)}
          >
            Next
          </button>
        )}
        {activeIndex == 2 && (
          <button
            className="bg-slate-400 w-[100px] h-[40px] rounded-full hover:scale-[1.1] hover:transition-all ease-in-out duration-75 hover:bg-slate-200"
            onClick={() => GenerateCourseLayout()}
          >
            Create
          </button>
        )}
      </div>
      <LoadingDialog loading={loading} />
    </div>
  );
}

export default CreateCourse;

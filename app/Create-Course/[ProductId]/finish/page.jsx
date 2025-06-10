"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ChapSidbar from "./ChapSidbar";
import YoutubeContent from "./YoutubeContent";

function Page({ params }) {
  const { ProductId } = React.use(params);
  const [course, setCourse] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  useEffect(() => {
    GetCourse();
  }, []);

  const GetCourse = async () => {
    try {
      const apiUrl = `http://localhost:3000/api/v1/courses/getCourseById/${ProductId}`;
      const response = await axios.get(apiUrl);
      if (response.status === 200) {
        setCourse(response.data);
        // Set the first chapter as selected by default
        setSelectedChapter(response.data?.courseOutput?.chapters?.[0] || null);
        return response.data;
      } else {
        console.error("Failed to fetch course:", response.data.error);
        return null;
      }
    } catch (error) {
      console.error("Error fetching course:", error);
      return null;
    }
  };

  return (
    <div className="flex ">
      {/* Chapter list content */}
      <div className="w-64 hidden md:block h-screen">
        <ChapSidbar course={course} setChapters={setSelectedChapter} />
      </div>
      <div className="m-[30px]">
        <YoutubeContent course={course} chapter={selectedChapter} />
      </div>
    </div>
  );
}

export default Page;

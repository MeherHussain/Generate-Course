import React, { useState } from "react";
import styled from "styled-components";
import GetVideos from "../../../../Configs/service";
import LoadingDialog from "../../_components/Loading";
import { useRouter } from "next/navigation";

const GenButton = ({ course }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const GenChapters = async () => {
    setLoading(true);
    // Access the chapters array dynamically
    const Chapters = course?.courseOutput?.chapters;
    if (Chapters && Array.isArray(Chapters)) {
      for (const [index, chapter] of Chapters.entries()) {
        const PROMT = `
          Generate a detailed explanation for the following topic:
          - **Course Name**: ${course?.name}
          - **Chapter Title**: ${chapter?.title}

          Provide the output in **JSON format** with the following fields:
          1. **title**: The title of the chapter.
          2. **description**: A comprehensive explanation of the chapter's content.
          3. **keyObjectives**: A list of key learning objectives for this chapter.
          4. **estimatedTime**: The estimated time required to complete this chapter.
          5. **codeExample**: Include a relevant code example (in **HTML format**) if applicable. If not applicable, mention "No code example required."

          Ensure the explanation is clear, concise, and suitable for advanced learners. Use professional language and include examples where necessary.
        `;
        console.log(`PROMT for Chapter ${index}:`, PROMT); // Log PROMT for each chapter
        try {
          // Fetch video data dynamically using GetVideos
          const videoResponse = await GetVideos(
            course?.name + ":" + chapter?.title
          );
          if (!videoResponse || videoResponse.length === 0) {
            console.error("No video data found for chapter:", chapter?.title);
            continue;
          }

          // Extract videoId and channelId from the first video result
          const videoData = videoResponse[0];
          const videoId = videoData.id.videoId;
          const channelId = videoData.snippet.channelId;

          const courseId = course?.courseId; // Ensure courseId is defined
          const chapterIndex = index; // Chapter index starts from 1
          const ChapterId = chapter?.title; // Use chapter title as ChapterId
          const Content = { key: channelId }; // Content object with channelId
          const VideoId = videoId; // Use videoId as VideoId

          // Call the backend API to save video details
          const response = await fetch(
            `http://localhost:3000/api/v1/courses/addVideoDetails/${courseId}/${chapterIndex}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                YoutubeID: channelId, // Store channelId in YoutubeID
                ChapterId,
                Content,
                VideoId,
              }),
            }
          );

          const data = await response.json();

          if (response.ok) {
            console.log("Video details added successfully:", data.course);
          } else {
            console.error("Failed to add video details:", data.error);
          }
        } catch (error) {
          console.error("Error while adding video details:", error);
        }
      }
    }
    setLoading(false); // Ensure loading is stopped after all chapters are processed
    // router.replace("/Create-Course/" + course?.courseId + "/finish");
    router.replace(`/Create-Course/${course?.courseId}/finish`);
  };

  return (
    <StyledWrapper>
      <button onClick={GenChapters}>Generate Course</button>
      <LoadingDialog loading={loading} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    width: 9em;
    height: 3em;
    border-radius: 30em;
    font-size: 15px;
    font-family: inherit;
    border: none;
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  }

  button::before {
    content: "";
    width: 0;
    height: 3em;
    border-radius: 30em;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #0fd850 0%, #f9f047 100%);
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }

  button:hover::before {
    width: 9em;
  }
`;

export default GenButton;

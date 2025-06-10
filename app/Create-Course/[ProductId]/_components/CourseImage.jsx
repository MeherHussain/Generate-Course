import React, { useState } from "react";
import styled from "styled-components";
import { PiBookOpenTextLight } from "react-icons/pi";
// Import Firebase storage utilities

const CourseImage = ({ course }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const onSelected = async (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      // Generate a temporary URL for the selected file
      const tempFileUrl = URL.createObjectURL(file);
      setSelectedFile(tempFileUrl); // Set the temporary URL for preview

      console.log("Selected file:", file);

      // Upload the file to the backend
      try {
        const courseId = course?.courseId; // Replace with the actual courseId

        // Create a FormData object to send the file
        const formData = new FormData();
        formData.append("CourseImage", file); // Append the file with the key "CourseImage"

        // Call the backend API to save the CourseImage
        const response = await fetch(
          `http://localhost:3000/api/v1/courses/addCourseImage/${courseId}`,
          {
            method: "POST",
            body: formData, // Send the FormData object
          }
        );

        // const data = await response.json();

        // if (response.ok) {
        //   console.log("CourseImage added successfully:", data.course);
        //   alert("CourseImage added successfully!");
        // } else {
        //   console.error("Failed to add CourseImage:", data.error);
        //   alert("Failed to add CourseImage: " + data.error);
        // }
      } catch (error) {
        console.error("Error while adding CourseImage:", error);
        alert("Error while adding CourseImage: " + error.message);
      }
    }
  };

  return (
    <StyledWrapper
      style={{ "--card-width": "300px", "--card-height": "280px" }}
    >
      <div className="card">
        <div className="content">
          <label htmlFor="upload-image" className="upload-label">
            <p className="heading">Course Image</p>
            {selectedFile ? (
              <img
                src={selectedFile}
                alt="Selected"
                className="preview-image"
              />
            ) : (
              <PiBookOpenTextLight size={150} />
            )}
          </label>
          <input
            type="file"
            id="upload-image"
            style={{ display: "none" }}
            onChange={onSelected}
          />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--card-width, 320px);
    height: var(--card-height, 180px);
    max-height: 300px; /* Ensure height does not exceed 300px */
    border-radius: 24px;
    line-height: 1.6;
    transition: all 0.64s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 24px;
    border-radius: 24px;
    background: transparent;
    color: #000000;
    z-index: 1;
    transition: all 0.64s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .upload-label {
    cursor: pointer; /* Make the label clickable */
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .preview-image {
    width: 300px; /* Set the image width to 100% of its container */
    height: 200px; /* Set a fixed height for the image */
    max-height: 250px; /* Ensure the image does not exceed 300px */
    object-fit: cover; /* Ensure the image fits nicely without distortion */
    border-radius: 12px; /* Add rounded corners */
  }
  .card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: #0a3cff;
    border-radius: inherit;
    height: 100%;
    width: 100%;
    opacity: 0;
    transform: skew(-24deg);
    clip-path: circle(0% at 50% 50%);
    transition: all 0.64s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .content .heading {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.3;
    z-index: 1;
  }
  .card:hover::before {
    opacity: 1;
    transform: skew(0deg);
    clip-path: circle(140.9% at 0 0);
  }
  .card:hover .content {
    color: #ffffff;
  }

  @media (max-width: 1024px) {
    .card {
      display: none; /* Hide on tablet and smaller screens */
    }
  }
`;

export default CourseImage;

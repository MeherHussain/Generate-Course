import React from "react";
import styled from "styled-components";
import axios from "axios";
import Link from "next/link";

const CourseCard = ({ course, handleOnDelete, refreshData }) => {
  const apiUrl = `http://localhost:3000/api/v1/courses/deleteCourse/${course?.courseId}`;

  const handleDelete = async () => {
    try {
      console.log(`Sending DELETE request to: ${apiUrl}`);
      const response = await axios.delete(apiUrl);

      if (response.status === 200) {
        console.log("Course deleted successfully:", response.data);
        alert("Course deleted successfully!");
        handleOnDelete(course?.courseId); // Notify parent component to update the UI
      } else {
        console.error("Failed to delete course:", response.data.error);
        alert("Failed to delete course!");
      }
      if (response) {
        refreshData();
      }
    } catch (error) {
      console.error(
        "Error while deleting the course:",
        error.response || error
      );
      alert(
        error.response?.data?.error ||
          "An error occurred while deleting the course."
      );
    }
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className="upper-part">
          <div className="upper-part-face">
            {course?.CourseImage ? (
              <img
                src={course.CourseImage}
                alt="CourseImage"
                className="course-image"
              />
            ) : null}
          </div>
          <div
            className="upper-part-back"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <Link href={`/course/${course?.courseId}`}>
              <h1 className="font-bold text-2xl">Course Level: </h1>
              <p>{course?.level || "No description available."}</p>
            </Link>
          </div>
        </div>
        <div className="lower-part">
          <div
            className="lower-part-face"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <h1 className="font-bold text-2xl">Course Name: </h1>
            <p>{course?.name}</p>
          </div>
          <div
            className="lower-part-back"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <p className="font-bold text-2xl">{course?.category}</p>
            <button onClick={handleDelete} className="delete-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 260px; /* Adjusted width */
    height: 370px; /* Adjusted height */
    position: relative;
    border-radius: 40px;
    transition: all 0.8s;
    perspective: 600px;
    perspective-origin: center bottom;
  }

  .upper-part {
    width: 100%;
    height: 70%;
    border-radius: 40px 40px 0 0;
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.9s;
  }

  .upper-part-face,
  .upper-part-back {
    text-align: center;
    background-color: lightgray;
    color: purple;
    border: 3px solid purple;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 15px;
    border-radius: 40px 40px 0 0;
    font-weight: bold;
    z-index: 2;
    backface-visibility: hidden;
    transition: all 0.6s;
  }

  .upper-part-back {
    background-color: purple;
    color: lightgray;
    transform: rotatex(180deg);
  }

  .course-image {
    width: 100%; /* Set the image width to 100% of its container */
    height: 230px; /* Maintain aspect ratio */
    max-height: 500px; /* Set a maximum height for the image */
    object-fit: cover; /* Ensure the image fits nicely */
    border-radius: 10px; /* Add rounded corners */
  }

  .lower-part {
    width: 100%;
    height: 35%;
    border-radius: 0 0 40px 40px;
    position: relative;
    transform-style: preserve-3d;
    transform-origin: center top;
    transition: all 0.9s;
  }

  .lower-part-face,
  .lower-part-back {
    background-color: purple;
    width: 100%;
    height: 100%;
    color: lightgray;
    font-weight: bold;
    position: absolute;
    border-radius: 0 0 40px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(0, -0.8px);
    backface-visibility: hidden;
    z-index: 2;
  }

  .lower-part-back {
    backface-visibility: visible;
    border-radius: 40px;
    color: purple;
    background-color: lightgray;
    transform: rotateX(180deg);
    z-index: 1;
    transition: border-radius 0.6s;
  }

  .card:hover > .upper-part {
    transform: rotatex(-0.5turn);
  }

  .card:hover > .lower-part {
    transform: translateY(88.3px) rotateX(0.5turn);
  }

  .card:hover > .lower-part > .lower-part-back {
    border: 3px solid purple;
    border-radius: 0 0 40px 40px;
  }

  .delete-button {
    background-color: #d13613;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .delete-button:hover {
    background-color: #b12e10;
    transform: scale(1.1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  .delete-button:active {
    transform: scale(1);
    box-shadow: none;
  }
`;

export default CourseCard;

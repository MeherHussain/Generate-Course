"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { FaBrain } from "react-icons/fa6";
import CourseEdit from "./CourseEdit";
import CourseImage from "./CourseImage";
import { useUser } from "@clerk/nextjs";

const ThreeD = ({ course: initialCourse, refreshData }) => {
  const { user } = useUser();
  const [course, setCourse] = useState(initialCourse);

  const handleCourseUpdate = (updatedCourse) => {
    setCourse((prevCourse) => ({
      ...prevCourse,
      ...updatedCourse,
      courseOutput: {
        ...prevCourse.courseOutput,
        ...updatedCourse.courseOutput, // Ensure nested updates for courseOutput
      },
    }));
  };

  return (
    <StyledWrapper>
      <div className="parent">
        <div className="card">
          <div className="logo">
            <span className="circle circle1" />
            <span className="circle circle2" />
            <span className="circle circle3" />
            <span className="circle circle4" />
            <span className="circle circle5">
              <img
                src={course?.userProfileImage}
                alt="User Profile"
                className="user-image"
              />
            </span>
          </div>
          <div className="glass" />
          <div className="content">
            <span className="title">
              <span
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                {course?.name}
                <CourseEdit
                  course={course}
                  onCourseUpdate={handleCourseUpdate}
                  refreshData={() => refreshData(true)}
                />
              </span>
            </span>
            <span className="text">
              {/* {course?.courseOutput?.assessment?.description */}
              {course?.courseOutput?.introduction || "No description available"}
              {/* Correctly access the description property */}
            </span>
            <div
              className="course-image-container"
              style={{
                position: "absolute",
                top: "250px",
                bottom: "10px",
                right: "200px",
                width: "150px",
                height: "300px",
              }}
            >
              <CourseImage course={course} />
            </div>
          </div>
          <div className="bottom">
            <div className="social-buttons-container">
              <button className="social-button social-button1">
                <FaBrain className="svg" />
              </button>
              <button className="social-button social-button2">
                <span className="category-text">Start</span>
              </button>
            </div>
            <div className="view-more">
              <button className="view-more-button"> {course?.category}</button>
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .parent {
    width: 100%; /* Make the width responsive */
    max-width: 848px; /* Limit the maximum width */
    margin: 0 auto; /* Center the card */
    perspective: 1000px;
  }

  .card {
    height: 580px; /* Default height */
    border-radius: 30px;
    background: linear-gradient(
      135deg,
      rgb(0, 255, 214) 0%,
      rgb(8, 226, 96) 100%
    );
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: rgba(5, 71, 17, 0.1) 0px 10px 20px, rgba(5, 71, 17, 0.2) 0px 5px 10px;
    position: relative;
  }

  @media (max-width: 768px) {
    .card {
      height: 500px; /* Reduce height for tablets */
      max-width: 90%; /* Adjust width for smaller screens */
    }
  }

  @media (max-width: 480px) {
    .card {
      height: 400px; /* Further reduce height for mobile screens */
      max-width: 100%; /* Full width for very small screens */
    }
  }

  .course-image-container {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 120px; /* Default width */
    height: 250px; /* Default height */
  }

  @media (max-width: 768px) {
    .course-image-container {
      width: 100px; /* Reduce width for tablets */
      height: 200px; /* Reduce height for tablets */
    }
  }

  @media (max-width: 480px) {
    .course-image-container {
      width: 80px; /* Further reduce width for mobile screens */
      height: 150px; /* Further reduce height for mobile screens */
    }
  }
  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.349) 0%,
      rgba(255, 255, 255, 0.815) 100%
    );
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    transition: all 0.5s ease-in-out;
  }

  .content {
    padding: 100px 60px 20px 30px; /* Adjust bottom padding for better spacing */
    transform: translate3d(0, 0, 26px);
  }

  .content .title {
    display: block;
    color: #00894d;
    font-weight: 900;
    font-size: 20px;
  }

  .content .text {
    display: block;
    color: rgba(0, 137, 78, 0.7647058824);
    font-size: 15px;
    margin-top: 20px;
  }

  .bottom {
    padding: 10px 12px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translate3d(0, 0, 26px);
  }

  .bottom .view-more {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: flex-end;
    transition: all 0.2s ease-in-out;
  }

  .bottom .view-more:hover {
    transform: translate3d(0, 0, 10px);
  }

  .bottom .view-more .view-more-button {
    background: none;
    border: none;
    color: #00c37b;
    font-weight: bolder;
    font-size: 12px;
  }

  .bottom .view-more .svg {
    fill: none;
    stroke: #00c37b;
    stroke-width: 3px;
    max-height: 15px;
  }

  .bottom .social-buttons-container {
    display: flex;
    gap: 10px;
    transform-style: preserve-3d;
  }

  .bottom .social-buttons-container .social-button {
    width: 30px;
    aspect-ratio: 1;
    padding: 5px;
    background: rgb(255, 255, 255);
    border-radius: 50%;
    border: none;
    display: grid;
    place-content: center;
    box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px;
  }

  .bottom .social-buttons-container .social-button:first-child {
    transition: transform 0.2s ease-in-out 0.4s,
      box-shadow 0.2s ease-in-out 0.4s;
  }

  .bottom .social-buttons-container .social-button:nth-child(2) {
    transition: transform 0.2s ease-in-out 0.6s,
      box-shadow 0.2s ease-in-out 0.6s;
  }

  .bottom .social-buttons-container .social-button:nth-child(3) {
    transition: transform 0.2s ease-in-out 0.8s,
      box-shadow 0.2s ease-in-out 0.8s;
  }

  .bottom .social-buttons-container .social-button .svg {
    width: 15px;
    fill: #00894d;
  }

  .bottom .social-buttons-container .social-button:hover {
    background: black;
  }

  .bottom .social-buttons-container .social-button:hover .svg {
    fill: white;
  }

  .bottom .social-buttons-container .social-button:active {
    background: rgb(255, 234, 0);
  }

  .bottom .social-buttons-container .social-button:active .svg {
    fill: black;
  }

  .bottom .social-buttons-container .social-button2 {
    background: none; /* Remove background */
    width: 60px;
    height: 35px;/;
    border: 2px solid #00c37b; /* Add a border for better visibility */
    color: #00c37b; /* Match the color of "View more" */
    font-weight: bold; /* Make the text bold */
    font-size: 14px; /* Slightly increase font size */
    padding: 5px 10px; /* Add padding for better spacing */
    border-radius: calc(5px + 0.5em); /* Dynamically adjust border radius */
    cursor: pointer;
    text-transform: uppercase; /* Make text uppercase for emphasis */
    transition: all 0.3s ease-in-out;
  }

  .bottom .social-buttons-container .social-button2:hover {
    transform: translate3d(0, 0, 10px); /* Apply hover effect */
    background: #00c37b; /* Change background color on hover */
    color: white; /* Change text color on hover */
    border-color: #00894d; /* Change border color on hover */
  }

  .bottom .social-buttons-container .social-button2 .category-text {
    font-weight: 700; /* Make text even bolder */
    letter-spacing: 0.5px; /* Add letter spacing for better readability */
  }

  .logo {
    position: absolute;
    right: 0;
    top: 0;
    transform-style: preserve-3d;
  }

  .logo .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 0;
    right: 0;
    box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background: rgba(0, 249, 203, 0.2);
    transition: all 0.5s ease-in-out;
  }

  .logo .circle1 {
    width: 170px;
    transform: translate3d(0, 0, 20px);
    top: 8px;
    right: 8px;
  }

  .logo .circle2 {
    width: 140px;
    transform: translate3d(0, 0, 40px);
    top: 10px;
    right: 10px;
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    transition-delay: 0.4s;
  }

  .logo .circle3 {
    width: 110px;
    transform: translate3d(0, 0, 60px);
    top: 17px;
    right: 17px;
    transition-delay: 0.8s;
  }

  .logo .circle4 {
    width: 80px;
    transform: translate3d(0, 0, 80px);
    top: 23px;
    right: 23px;
    transition-delay: 1.2s;
  }

  .logo .circle5 {
    width: 50px;
    transform: translate3d(0, 0, 100px);
    top: 30px;
    right: 30px;
    display: grid;
    place-content: center;
    overflow: hidden; /* Ensure the image stays within the circle */
    transition-delay: 1.6s;
  }

  .logo .circle5 .user-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image fits properly */
    border-radius: 50%; /* Make the image circular */
  }

  .logo .circle5 .svg {
    width: 20px;
    fill: white;
  }

  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px,
      rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
  }

  .parent:hover .card .bottom .social-buttons-container .social-button {
    transform: translate3d(0, 0, 50px);
    box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
  }

  .parent:hover .card .logo .circle2 {
    transform: translate3d(0, 0, 60px);
  }

  .parent:hover .card .logo .circle3 {
    transform: translate3d(0, 0, 80px);
  }

  .parent:hover .card .logo .circle4 {
    transform: translate3d(0, 0, 100px);
  }

  .parent:hover .card .logo .circle5 {
    transform: translate3d(0, 0, 120px);
  }

  @media (max-width: 768px) {
    .parent {
      max-width: 100%; /* Full width for smaller screens */
    }

    .card {
      width: 90%; /* Reduce width for mobile screens */
      margin: 0 auto; /* Center the card */
      border-radius: 20px; /* Adjust border radius for mobile */
    }

    .content {
      padding: 60px 15px 15px; /* Reduce padding for mobile */
    }

    .logo .circle5 {
      width: 50px; /* Smaller logo for mobile */
    }
  }
`;

export default ThreeD;

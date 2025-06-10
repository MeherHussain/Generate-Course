import React from "react";
import styled from "styled-components";
import { BsBarChart } from "react-icons/bs";

const Level = ({ course }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="c-txt">
          {" "}
          {/* Changed from <p> to <div> */}
          <span className="icon-text">
            <BsBarChart />
            <h2>Skill Level</h2>
          </span>
          <h2 className="font-bold">{course?.level}</h2>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    height: 254px;
    background: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    color: #333;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    border-radius: 40px;
    cursor: pointer;
    position: relative;
    transition: all 0.7s ease-in-out;
    overflow: hidden;
  }

  .card::before {
    content: "";
    position: absolute;
    height: 40%;
    width: 100%;
    background-color: #088080;
    bottom: 0;
    right: 0;
    transform: translatey(70px);
    border-radius: 100%;
    transition: all 0.7s ease-in-out;
  }

  .c-txt {
    z-index: 2;
    text-align: center;
  }

  .icon-text {
    display: flex;
    align-items: center;
    gap: 8px; /* Adds spacing between the icon and text */
  }

  .icon-text svg {
    color: blue; /* Sets the default color of the BsBarChart icon */
    transition: color 0.3s ease-in-out; /* Smooth transition for color change */
  }

  .card:hover .icon-text svg {
    color: white; /* Changes the color to white on hover */
  }

  .icon-text h2 {
    font-size: 0.6em; /* Reduces the font size */
    line-height: 1.2; /* Adjusts the line height */
  }

  .font-bold {
    margin-top: 8px; /* Adds spacing between the two lines */
  }

  .card:hover::before {
    transform: scale(7) translate(-20px);
  }

  .card:hover {
    box-shadow: 0 0 20px 10px #9fe4e44a; /* Reduced the size of the shadow */
    color: #f3f3f3;
  }
`;

export default Level;

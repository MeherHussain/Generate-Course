import React, { useState } from "react";
import styled from "styled-components";
import { GiBookmarklet } from "react-icons/gi";
import { CiClock1 } from "react-icons/ci";
import SkeletonSide from "./SkeltonSide";

const ChapSidbar = ({ course, setChapters }) => {
  if (!course) {
    return <SkeletonSide />;
  }
  //   const [chapters, setChapters] = useState();

  return (
    <div className="hidden md:block h-screen w-[270px]">
      <StyledWrapper>
        <div className="card">
          <div className="sidebar-title group mb-4">
            <h1 className="font-bold text-2xl text-center mt-2 transition-all duration-300 group-hover:text-yellow-500 group-hover:scale-105">
              {course?.name}
            </h1>
          </div>
          <div>
            {course?.courseOutput?.chapters?.map((chapter, index) => (
              <div className="chapter-card" key={index}>
                <div
                  className="flex items-center gap-3"
                  onClick={() => setChapters(chapter)}
                >
                  <GiBookmarklet className="chapter-icon" />
                  <span className="chapter-title">{chapter?.title}</span>
                </div>
                <div className="chapter-time">
                  <CiClock1 />
                  {chapter?.estimatedTime}
                </div>
              </div>
            ))}
          </div>
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .card {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 1rem;
    backdrop-filter: blur(15px);
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.192),
      inset 0 0 5px rgba(255, 255, 255, 0.274), 0 5px 5px rgba(0, 0, 0, 0.164);
    transition: 0.5s;
  }

  .card:hover {
    animation: ease-out 5s;
    background: rgba(173, 173, 173, 0.05);
  }

  .card ul {
    padding: 1rem;
    display: flex;
    list-style: none;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .chapter-card {
    background: linear-gradient(90deg, #fffbe6 0%, #ffe0b2 100%);
    border-radius: 12px;
    box-shadow: 0 2px 12px 0 rgba(255, 174, 0, 0.1);
    padding: 1rem 1.2rem;
    margin-bottom: 1.2rem;
    transition: box-shadow 0.3s cubic-bezier(0.4, 2, 0.6, 1),
      transform 0.3s cubic-bezier(0.4, 2, 0.6, 1), background 0.3s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: 1.5px solid #ffe066;
    position: relative;
  }
  .chapter-card:hover {
    background: linear-gradient(90deg, #ffe066 0%, #ffd700 100%);
    box-shadow: 0 8px 24px 0 rgba(255, 174, 0, 0.25);
    transform: scale(1.03) translateY(-2px);
    border-color: #ffb347;
  }
  .chapter-icon {
    color: #ffb300;
    font-size: 1.7rem;
    transition: color 0.3s;
  }
  .chapter-card:hover .chapter-icon {
    color: #ff9800;
  }
  .chapter-title {
    font-weight: 600;
    font-size: 1.1rem;
    color: #b8860b;
    transition: color 0.3s;
  }
  .chapter-card:hover .chapter-title {
    color: #ff9800;
  }
  .chapter-time {
    display: flex;
    gap: 10px;
    align-items: center;

    font-size: 1rem;
    color: #a1887f;
    margin-left: 2.2rem;
    opacity: 0.85;
  }
  .card ul li {
    cursor: pointer;
  }

  .svg {
    transition: all 0.3s;
    /* if you find some problems change w - h : 30px*/
    padding: 1rem;
    height: 60px;
    width: 60px;
    border-radius: 100%;
    color: rgb(255, 174, 0);
    fill: currentColor;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
  }

  .text {
    opacity: 0;
    border-radius: 5px;
    padding: 5px;
    transition: all 0.3s;
    color: rgb(255, 174, 0);
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    z-index: 9999;
    box-shadow: -5px 0 1px rgba(153, 153, 153, 0.2),
      -10px 0 1px rgba(153, 153, 153, 0.2),
      inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.082);
  }

  /*isometric prooyection*/
  .iso-pro {
    transition: 0.5s;
  }
  .iso-pro:hover a > .svg {
    transform: translate(15px, -15px);
    border-radius: 100%;
  }

  .iso-pro:hover .text {
    opacity: 1;
    transform: translate(25px, -2px) skew(-5deg);
  }

  .iso-pro:hover .svg {
    transform: translate(5px, -5px);
  }

  .iso-pro span {
    opacity: 0;
    position: absolute;
    color: #1877f2;
    border-color: #1877f2;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
    border-radius: 50%;
    transition: all 0.3s;
    height: 60px;
    width: 60px;
  }

  .iso-pro:hover span {
    opacity: 1;
  }

  .iso-pro:hover span:nth-child(1) {
    opacity: 0.2;
  }

  .iso-pro:hover span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
  }

  .iso-pro:hover span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }
`;

export default ChapSidbar;

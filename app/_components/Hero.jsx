"use client";
import React from "react";
import Button from "../components/ui/botton";
import Link from "next/link";
import { StyledSkillCard } from "./StyledSkillCard";
import Image from "next/image";
import styled from "styled-components";

// HighlightCard component for Program Highlights
const HighlightCard = ({ imgSrc, imgAlt, text, isExternal }) => (
  <div
    className="relative group p-2 z-0 overflow-hidden rounded-[1em] flex flex-col items-center justify-between h-[15em] min-w-[12em] bg-white m-auto shadow-lg
    sm:h-[15em] sm:min-w-[12em]
    w-full
    max-w-xs
    xs:max-w-sm
    transition-all
    "
    style={{ minWidth: "0" }}
  >
    <div className="z-[-1] h-full w-[200%] rounded-[1em] bg-gradient-to-br from-green-400 via-lime-400 to-yellow-400 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[300%] duration-500 origin-bottom-right" />
    <div className="flex flex-col items-center justify-center h-full w-full relative z-10">
      {isExternal ? (
        <img
          src={imgSrc}
          alt={imgAlt}
          width={120}
          height={120}
          className="mb-2 object-contain sm:w-[120px] sm:h-[120px] w-[70px] h-[70px]"
        />
      ) : (
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={120}
          height={120}
          className="mb-2 object-contain sm:w-[120px] sm:h-[120px] w-[70px] h-[70px]"
        />
      )}
      <p className="font-bold text-center text-[1em] sm:text-[1.1em] mt-2 text-gray-800 group-hover:text-white transition-colors duration-300">
        {text}
      </p>
    </div>
  </div>
);

// Add ToolCard styled-component for tools section
const ToolCardWrapper = styled.div`
  .card {
    position: relative;
    width: clamp(120px, 40vw, 200px);
    height: clamp(120px, 45vw, 250px);
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 24px #bebebe44, 0 1.5px 8px #00dbde33;
    background: transparent;
  }

  .bg {
    position: absolute;
    top: 6px;
    left: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    z-index: 2;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(18px);
    border-radius: 10px;
    outline: 2px solid #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.2em 0.5em 0.7em 0.5em;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00dbde 40%, #fc00ff 100%);
    opacity: 0.7;
    filter: blur(18px);
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }

  .tool-img {
    width: clamp(40px, 20vw, 70px);
    height: clamp(40px, 20vw, 70px);
    object-fit: contain;
    margin-bottom: 0.7em;
    margin-top: 0.5em;
    z-index: 3;
    pointer-events: none;
    user-select: none;
  }

  .tool-title {
    font-weight: 700;
    color: #22223b;
    font-size: clamp(0.95rem, 2.5vw, 1.15rem);
    text-align: center;
    z-index: 3;
    margin-bottom: 0.2em;
    letter-spacing: 0.01em;
  }

  @media (max-width: 640px) {
    .card {
      width: 100%;
      height: 110px;
      margin-bottom: 1rem;
    }
    .bg {
      padding: 0.7em 0.2em 0.5em 0.2em;
    }
    .tool-img {
      width: 36px;
      height: 36px;
      margin-bottom: 0.3em;
    }
    .tool-title {
      font-size: 0.85rem;
    }
  }
`;

// Styled-component for Why AI Course Generator cards with Uiverse.io hover effect
const WhyCardWrapper = styled.div`
  .why-card {
    position: relative;
    width: 190px;
    height: 190px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
    color: rgb(255, 255, 255);
    margin: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 24px #bebebe44, 0 1.5px 8px #00dbde33;
    transition: transform 0.2s;
    min-width: 0;
    flex: 1 1 190px;
    max-width: 100%;
  }
  .why-card > div {
    margin: auto auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .why-card img {
    width: 56px;
    height: 56px;
    object-fit: contain;
    margin-bottom: 0.5em;
  }
  .why-card::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 200px;
    height: 200px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #fff01c 0%, #40c9ff 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .why-card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fff01c 0%, #40c9ff 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
    transition: filter 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .why-card:hover {
    transform: scale(1.04);
  }
  .why-card:hover::after {
    filter: blur(30px);
  }
  .why-card:hover::before {
    transform: rotate(-90deg) scaleX(1) scaleY(1);
  }
  .why-card .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
  }
  .why-card p:not(.heading) {
    font-size: 14px;
    word-break: break-word;
    text-align: center;
  }
  .why-card p:last-child {
    color: #e81cff;
    font-weight: 600;
  }
  /* Responsive styles */
  @media (max-width: 900px) {
    .why-card {
      width: 45vw;
      min-width: 150px;
      height: 160px;
      padding: 10px;
    }
    .why-card img {
      width: 44px;
      height: 44px;
    }
  }
  @media (max-width: 640px) {
    .why-card {
      width: 95vw;
      max-width: 340px;
      min-width: 0;
      height: 144px; /* was min-height: 120px; now increased by 20% */
      min-height: 144px;
      padding: 14px 6px;
      margin: 0.5rem 0;
      /* Disable hover effect on mobile */
      transition: none;
    }
    .why-card img {
      width: 36px;
      height: 36px;
    }
    .why-card p:not(.heading) {
      font-size: 13px;
    }
    .why-card:hover,
    .why-card:hover::before,
    .why-card:hover::after {
      /* Remove hover effect on mobile */
      transform: none !important;
      filter: none !important;
    }
  }
`;

function Hero() {
  // Card data for "Why AI Course Generator?"
  const whyCards = [
    {
      img: "https://excelrindia.b-cdn.net/data_science_course_training/assets/images/why/we_icon2.png",
      text: "Industry Based Course Curriculum.",
    },
    {
      img: "https://excelrindia.b-cdn.net/data_science_course_training/assets/images/why/we_icon5.png",
      text: "Experienced Faculty From different platforms and institutes.",
    },
    {
      img: "https://excelrindia.b-cdn.net/data_science_course_training/assets/images/why/we_icon2.png",
      text: "Industry Based Course Curriculum",
    },
    {
      img: "https://excelrindia.b-cdn.net/data_science_course_training/assets/images/why/we_icon6.png",
      text: "Work hands on with Multiple real life projects",
    },
    {
      img: "https://excelrindia.b-cdn.net/data_science_course_training/assets/images/why/we_icon7.png",
      text: "Dedicated Placement cell for Placement Assistance",
    },
    {
      img: "https://excelrindia.b-cdn.net/data_science_course_training/assets/images/why/we_icon8.png",
      text: "Project Code stored on Github & Deployed on Streamlit.",
    },
    {
      img: "https://excelrindia.b-cdn.net/data_science_course_training/assets/images/why/we_icon9.png",
      text: "Dedicated Case studies support team",
    },
    {
      img: "https://excelrindia.b-cdn.net/data_science_course_training/assets/images/why/we_icon11.png",
      text: "Lifetime eLearning access",
    },
    {
      img: "https://excelrindia.b-cdn.net/data_science_course_training/assets/images/why/we_icon12.png",
      text: "Access to all future course updates",
    },
  ];

  return (
    <section
      className="text-white pt-20 sm:pt-24"
      style={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      }}
    >
      {/* Learning Path at the very top */}
      <div className="px-2 py-4 sm:p-7">
        <div className="flex flex-col items-start text-white">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400 bg-clip-text text-transparent p-8 text-left drop-shadow-lg tracking-tight">
            Learning Path
          </h1>
          <div className="w-full flex justify-center">
            <img
              src="https://excelr.in/data_science_training_delhi/assets/images/Learning-path.png"
              alt="Learning Path"
              className="w-11/12 max-w-xs sm:max-w-md md:max-w-lg h-auto object-contain"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="p-2 sm:p-7">
        <h1 className="font-extrabold text-3xl sm:text-4xl bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400 bg-clip-text text-transparent p-8 text-left drop-shadow-lg tracking-tight">
          Program Highlights
        </h1>
        <div
          className="
          grid grid-cols-1
          xs:grid-cols-2
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-4
          gap-4 sm:gap-6 mt-4
          w-full
          overflow-x-auto
          "
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <HighlightCard
            imgSrc="/icon1.png"
            imgAlt="Icon 1"
            text="Multiple Assignments with 24/7 Support of AI."
          />
          <HighlightCard
            imgSrc="https://excelrindia.b-cdn.net/data_science_course_training/assets/images/icon2.png"
            imgAlt="Icon 2"
            text="Interactive Live Sessions with Experts."
            isExternal
          />
          <HighlightCard
            imgSrc="http://excelrindia.b-cdn.net/data_science_course_training/assets/images/icon3.png"
            imgAlt="Icon 3"
            text="Hands-on Projects & Real-world Case Studies."
            isExternal
          />
          <HighlightCard
            imgSrc="/Icon4.png"
            imgAlt="Icon 4"
            text="International Certification Opportunities."
          />
        </div>
      </div>
      <div className="p-2 sm:p-7">
        <h1 className="font-extrabold text-3xl sm:text-4xl bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400 bg-clip-text text-transparent p-8 text-left drop-shadow-lg tracking-tight mb-2 sm:mb-4">
          Covered Skills
        </h1>
        <div
          className="
            grid 
            grid-cols-1 
            xs:grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-2 sm:gap-4 
            justify-items-center 
            w-full
          "
        >
          <StyledSkillCard aria-label="Statistics">
            <img
              src="https://excelr.in/data-science-course/assets/images/skills/Skills_1.png"
              alt="Statistics"
            />
            <h2>Statistics</h2>
          </StyledSkillCard>
          <StyledSkillCard aria-label="Data Analysis">
            <img
              src="https://excelr.in/data-science-course/assets/images/skills/Skills_2.png"
              alt="Data Analysis"
            />
            <h2>Data Analysis</h2>
          </StyledSkillCard>
          <StyledSkillCard aria-label="Machine Learning">
            <img
              src="https://excelr.in/data-science-course/assets/images/skills/Skills_3.png"
              alt="Machine Learning"
            />
            <h2>Machine Learning</h2>
          </StyledSkillCard>
          <StyledSkillCard aria-label="Deep Learning">
            <img
              src="https://excelr.in/data-science-course/assets/images/skills/Skills_4.png"
              alt="Deep Learning"
            />
            <h2>Deep Learning</h2>
          </StyledSkillCard>
          <StyledSkillCard aria-label="Essemble Technique">
            <img
              src="https://excelr.in/data-science-course/assets/images/skills/Skills_5.png"
              alt="Essemble Technique"
            />
            <h2>Essemble Technique</h2>
          </StyledSkillCard>
          <StyledSkillCard aria-label="Text Mining / NLP">
            <img
              src="https://excelr.in/data-science-course/assets/images/skills/Skills_6.png"
              alt="Text Mining / NLP"
            />
            <h2>Text Mining / NLP</h2>
          </StyledSkillCard>
          <StyledSkillCard aria-label="Trading">
            <img
              src="https://excelr.in/data-science-course/assets/images/skills/Skills_7.png"
              alt="Trading"
            />
            <h2>Trading</h2>
          </StyledSkillCard>
          <StyledSkillCard aria-label="Artificial Intelligence">
            <img
              src="https://excelr.in/data-science-course/assets/images/skills/Skills_8.png"
              alt="Artificial Intelligence"
            />
            <h2>Artificial Intelligence</h2>
          </StyledSkillCard>
        </div>
      </div>
      <div className="p-2 sm:p-7">
        <h1 className="font-extrabold text-3xl sm:text-4xl bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400 bg-clip-text text-transparent p-8 text-left drop-shadow-lg tracking-tight">
          Tools and Technologies
        </h1>
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            gap-2 sm:gap-4 
            gap-y-4 sm:gap-y-6
            justify-items-center 
            w-full
            mt-2 sm:mt-4
            min-w-0
          "
        >
          <ToolCardWrapper className="w-full min-w-0">
            <div className="card">
              <div className="bg">
                <img
                  src="https://excelr.in/data-science-course/assets/images/tools/Tools_1.png"
                  alt="Python"
                  className="tool-img"
                />
                <div className="tool-title">Python</div>
              </div>
              <div className="blob" />
            </div>
          </ToolCardWrapper>
          <ToolCardWrapper className="w-full min-w-0">
            <div className="card">
              <div className="bg">
                <img
                  src="https://excelr.in/data-science-course/assets/images/tools/Tools_2.png"
                  alt="Pandas"
                  className="tool-img"
                />
                <div className="tool-title">Pandas</div>
              </div>
              <div className="blob" />
            </div>
          </ToolCardWrapper>
          <ToolCardWrapper className="w-full min-w-0">
            <div className="card">
              <div className="bg">
                <img
                  src="https://excelr.in/data-science-course/assets/images/tools/Tools_3.png"
                  alt="NumPy"
                  className="tool-img"
                />
                <div className="tool-title">NumPy</div>
              </div>
              <div className="blob" />
            </div>
          </ToolCardWrapper>
          <ToolCardWrapper className="w-full min-w-0">
            <div className="card">
              <div className="bg">
                <img
                  src="https://excelr.in/data-science-course/assets/images/tools/Tools_4.png"
                  alt="Skit Learn"
                  className="tool-img"
                />
                <div className="tool-title">Skit Learn</div>
              </div>
              <div className="blob" />
            </div>
          </ToolCardWrapper>
          <ToolCardWrapper className="w-full min-w-0">
            <div className="card">
              <div className="bg">
                <img
                  src="https://excelr.in/data-science-course/assets/images/tools/Tools_5.png"
                  alt="Tableau"
                  className="tool-img"
                />
                <div className="tool-title">Tableau</div>
              </div>
              <div className="blob" />
            </div>
          </ToolCardWrapper>
          <ToolCardWrapper className="w-full min-w-0">
            <div className="card">
              <div className="bg">
                <img
                  src="https://excelr.in/data-science-course/assets/images/tools/Tools_6.png"
                  alt="Apache Spark"
                  className="tool-img"
                />
                <div className="tool-title">Apache Spark</div>
              </div>
              <div className="blob" />
            </div>
          </ToolCardWrapper>
          <ToolCardWrapper className="w-full min-w-0">
            <div className="card">
              <div className="bg">
                <img
                  src="https://excelr.in/data-science-course/assets/images/tools/Tools_7.png"
                  alt="MySQL"
                  className="tool-img"
                />
                <div className="tool-title">MySQL</div>
              </div>
              <div className="blob" />
            </div>
          </ToolCardWrapper>
          <ToolCardWrapper className="w-full min-w-0">
            <div className="card">
              <div className="bg">
                <img
                  src="https://excelr.in/data-science-course/assets/images/tools/Tools_8.png"
                  alt="Azure"
                  className="tool-img"
                />
                <div className="tool-title">Azure</div>
              </div>
              <div className="blob" />
            </div>
          </ToolCardWrapper>
          <ToolCardWrapper className="w-full min-w-0">
            <div className="card">
              <div className="bg">
                <img
                  src="https://excelr.in/data-science-course/assets/images/tools/Tools_9.png"
                  alt="Chatgpt"
                  className="tool-img"
                />
                <div className="tool-title">Chatgpt</div>
              </div>
              <div className="blob" />
            </div>
          </ToolCardWrapper>
        </div>
      </div>
      <div>
        <h1 className="font-extrabold text-3xl sm:text-4xl bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400 bg-clip-text text-transparent p-8 text-left drop-shadow-lg tracking-tight">
          Why AI Course Generator?
        </h1>
        <WhyCardWrapper>
          <div className="flex flex-wrap justify-center gap-4">
            {whyCards.map((card, idx) => (
              <div className="why-card" key={idx}>
                <div>
                  <img src={card.img} alt="" />
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </WhyCardWrapper>
      </div>
      <div className=" p-16 mt-6 sm:mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/dashboard">
          <Button />
        </Link>
      </div>
    </section>
  );
}

export default Hero;

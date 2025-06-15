// components/ui/StyledSkillCard.js
"use client";
import styled from "styled-components";

export const StyledSkillCard = styled.div`
  position: relative;
  width: clamp(140px, 40vw, 180px);
  height: clamp(120px, 28vw, 220px);
  background: linear-gradient(135deg, #0f172a 80%, #1e293b 100%);
  border-radius: 1em;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.18), 0 1.5px 8px #00dbde33;
  transition: transform 0.25s cubic-bezier(0.4, 2, 0.6, 1), box-shadow 0.25s;
  border: 2px solid transparent;
  background-clip: padding-box;
  margin: 0.5em 0;

  &:before {
    content: "";
    position: absolute;
    inset: -10px;
    background: linear-gradient(-45deg, #00dbde, #fc00ff, #00dbde 80%);
    z-index: -2;
    transform: scale(1.1);
    filter: blur(18px);
    opacity: 0.7;
    transition: all 0.5s;
  }

  &:hover,
  &:focus-visible {
    transform: scale(1.06) translateY(-4px);
    box-shadow: 0 0 40px 0 #fc00ff55, 0 4px 30px rgba(0, 0, 0, 0.22);
    border-color: #00dbde;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 8px #00dbde33;
  }

  img {
    width: clamp(68px, 30vw, 90px);
    height: clamp(68px, 30vw, 90px);
    object-fit: contain;
    margin-bottom: 10px;
    margin-top: 8px;
    user-select: none;
    pointer-events: none;
  }

  h2 {
    color: #fff;
    font-weight: bold;
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
    text-align: center;
    margin: 0 0.5em 0.5em 0.5em;
    line-height: 1.2;
    letter-spacing: 0.01em;
  }

  @media (max-width: 640px) {
    width: 100%;
    min-width: 0;
    height: 30vh;
    padding: 0.25em 0.5em;
    img {
      width: 50px;
      height: 50px;
      margin-bottom: 4px;
      margin-top: 4px;
    }
    h2 {
      font-size: 0.85rem;
      margin-bottom: 0.2em;
    }
  }
`;

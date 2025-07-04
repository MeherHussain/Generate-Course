"use client";
import React from "react";
import styled from "styled-components";

const AiButton = ({ width, height, textSize }) => {
  return (
    <StyledWrapper $width={width} $height={height} $textSize={textSize}>
      <button className="btn-17">
        <span className="text-container">
          <span className="text">Generate</span>
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn-17,
  .btn-17 * {
    border: 0 solid;
    box-sizing: border-box;
  }

  .btn-17 {
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    background-color: #000;
    background-image: none;
    color: #fff;
    cursor: pointer;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: ${(props) => props.$textSize || "100%"}; /* Control text size */
    font-weight: 900;
    line-height: 1.5;
    margin: 0;
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
    padding: 0;
    text-transform: uppercase;
    width: ${(props) => props.$width || "auto"};
    height: ${(props) => props.$height || "auto"};
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap; /* Prevent line breaks */
  }

  .btn-17:disabled {
    cursor: default;
  }

  .btn-17:-moz-focusring {
    outline: auto;
  }

  .btn-17 svg {
    display: block;
    vertical-align: middle;
  }

  .btn-17 [hidden] {
    display: none;
  }

  .btn-17 {
    border-radius: 99rem;
    border-width: 2px;
    padding: 0.8rem 3rem;
    z-index: 0;
  }

  .btn-17,
  .btn-17 .text-container {
    overflow: hidden;
    position: relative;
  }

  .btn-17 .text-container {
    display: block;
    mix-blend-mode: difference;
  }

  .btn-17 .text {
    display: block;
    position: relative;
  }

  .btn-17:hover .text {
    -webkit-animation: move-up-alternate 0.3s forwards;
    animation: move-up-alternate 0.3s forwards;
  }

  @-webkit-keyframes move-up-alternate {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(80%);
    }

    51% {
      transform: translateY(-80%);
    }

    to {
      transform: translateY(0);
    }
  }

  @keyframes move-up-alternate {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(80%);
    }

    51% {
      transform: translateY(-80%);
    }

    to {
      transform: translateY(0);
    }
  }

  .btn-17:after,
  .btn-17:before {
    --skew: 0.2;
    background: #fff;
    content: "";
    display: block;
    height: 102%;
    left: calc(-50% - 50% * var(--skew));
    pointer-events: none;
    position: absolute;
    top: -104%;
    transform: skew(calc(150deg * var(--skew))) translateY(var(--progress, 0));
    transition: transform 0.2s ease;
    width: 100%;
  }

  .btn-17:after {
    --progress: 0%;
    left: calc(50% + 50% * var(--skew));
    top: 102%;
    z-index: -1;
  }

  .btn-17:hover:before {
    --progress: 100%;
  }

  .btn-17:hover:after {
    --progress: -102%;
  }
`;

export default AiButton;

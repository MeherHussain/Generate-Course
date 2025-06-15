import React from "react";
import styled from "styled-components";

const Input = ({ value, onChange }) => {
  return (
    <StyledWrapper>
      <input
        type="text"
        name="text"
        className="input"
        placeholder="Topic Here!"
        value={value}
        onChange={onChange}
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .input {
    border: none;
    border-radius: 15px;
    padding: 15px;
    background-color: #e8e8e8;
    box-shadow: 6px 6px 12px #ffffff, -6px -6px 12px #c5c5c5;
    font-size: medium;
    font-weight: bold;
    width: 800px; /* Keep full width on large screens */
    max-width: 100%; /* Prevent overflow on small screens */
  }

  .input:focus {
    outline-color: white;
  }

  @media (max-width: 768px) {
    .input {
      width: 100%; /* Auto shrink on mobile */
      font-size: 0.95rem;
      padding: 12px;
    }
  }

  @media (max-width: 480px) {
    .input {
      font-size: 0.9rem;
      padding: 10px;
    }
  }
`;

export default Input;

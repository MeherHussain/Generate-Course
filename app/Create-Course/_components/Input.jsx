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
        onChange={onChange} // Correctly pass the event to the onChange handler
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center; /* Center the input field */
  width: 800px; /* Ensure the wrapper takes the full width */

  .input {
    border: none;
    border-radius: 15px;
    padding: 15px;
    background-color: #e8e8e8;
    box-shadow: 6px 6px 12px #ffffff, -6px -6px 12px #c5c5c5;
    font-size: medium;
    font-weight: bold;
    max-width: 100%; /* Ensure the input takes the full width of the container */
    width: 100%; /* Ensure the input takes the full width of the container */
  }

  .input:focus {
    outline-color: white;
    place-content: "Enter your message!";
  }
`;

export default Input;

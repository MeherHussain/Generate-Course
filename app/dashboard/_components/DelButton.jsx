import React from "react";
import styled from "styled-components";

const Delbutton = ({ id, handleOnDelete }) => {
  return (
    <StyledWrapper>
      <div className="toggle-border">
        <input id={id} type="checkbox" />
        <label htmlFor={id}>
          <div className="handle" onClick={handleOnDelete} />
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-border {
    border: 2px solid #f0ebeb;
    border-radius: 130px;
    margin-bottom: 45px;
    padding: 1px 2px;
    background: linear-gradient(
        to bottom right,
        white,
        rgba(220, 220, 220, 0.5)
      ),
      white;
    box-shadow: 0 0 0 2px #fbfbfb;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .toggle-border:last-child {
    margin-bottom: 0;
  }

  .toggle-border input[type="checkbox"] {
    display: none;
  }

  .toggle-border label {
    position: relative;
    display: inline-block;
    width: 65px;
    height: 20px;
    background: #d13613;
    border-radius: 80px;
    cursor: pointer;
    box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.3);
    transition: background 0.5s;
  }

  .toggle-border input[type="checkbox"]:checked + label {
    background: #13d162;
  }

  .handle {
    position: absolute;
    top: -8px;
    left: -10px;
    width: 35px;
    height: 35px;
    border: 1px solid #e5e5e5;
    background: repeating-radial-gradient(
        circle at 50% 50%,
        rgba(200, 200, 200, 0.2) 0%,
        rgba(200, 200, 200, 0.2) 2%,
        transparent 2%,
        transparent 3%,
        rgba(200, 200, 200, 0.2) 3%,
        transparent 3%
      ),
      conic-gradient(
        white 0%,
        silver 10%,
        white 35%,
        silver 45%,
        white 60%,
        silver 70%,
        white 80%,
        silver 95%,
        white 100%
      );
    border-radius: 50%;
    box-shadow: 3px 5px 10px 0 rgba(0, 0, 0, 0.4);
    transition: left 0.4s;
  }

  .toggle-border input[type="checkbox"]:checked + label > .handle {
    left: calc(100% - 35px + 10px);
  }
`;

export default Delbutton;

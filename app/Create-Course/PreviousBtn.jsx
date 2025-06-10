import React from "react";

const PreviousBtn = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-blue-500 text-white px-4 py-2 rounded ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      Previous
    </button>
  );
};

export default PreviousBtn;

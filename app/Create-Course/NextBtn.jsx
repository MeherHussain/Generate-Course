import React from "react";

const NextBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Next
    </button>
  );
};

export default NextBtn;

import React from "react";

function SkeltonSide() {
  return (
    <div>
      <div className="h-auto w-[270px] p-4">
        <div className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 rounded-2xl shadow-xl p-4 flex flex-col gap-4 animate-pulse h-full">
          <div className="h-8 w-3/4 bg-yellow-100 rounded mb-4"></div>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="bg-yellow-100 rounded-xl p-4 mb-2 flex flex-col gap-2"
            >
              <div className="h-4 w-2/3 bg-yellow-200 rounded"></div>
              <div className="h-3 w-1/3 bg-yellow-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkeltonSide;

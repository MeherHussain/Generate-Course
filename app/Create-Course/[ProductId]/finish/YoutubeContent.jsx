import React from "react";
import YouTube from "react-youtube";

// Improved Skeleton Loader Component
function SkeletonCard({ height = "h-64", className = "w-[900px]" }) {
  return (
    <div
      className={`w-full bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 rounded-2xl shadow-xl p-4 sm:p-8 md:p-12 overflow-hidden relative ${height} ${className}`}
    >
      {/* Animated shimmer bar */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
        <div className="w-2/3 h-full bg-gradient-to-r from-transparent via-yellow-200/60 to-transparent animate-[shimmer_1.5s_infinite]"></div>
      </div>
      {/* Skeleton content */}
      <div className="relative z-10 space-y-4">
        <div className="h-8 w-full bg-yellow-100 rounded mb-4 animate-pulse"></div>
        <div className="h-4 w-full bg-yellow-200 rounded mb-2 animate-pulse"></div>
        <div className="h-4 w-full bg-yellow-100 rounded animate-pulse"></div>
      </div>
      {/* Custom shimmer animation */}
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-[shimmer_1.5s_infinite] {
            animation: shimmer 1.5s infinite linear;
          }
        `}
      </style>
    </div>
  );
}

function YoutubeContent({ course, chapter }) {
  const isLoading = !chapter || !course;

  const exercises = chapter?.exercises;
  const achievements = chapter?.keyObjectives;
  const resources = course?.courseOutput?.resources;

  return (
    <div className="w-full">
      {/* Title & Description Card */}
      <div className="flex justify-center items-center min-h-[300px] w-full px-1 sm:px-2">
        {isLoading ? (
          <SkeletonCard height="h-44 w-full" />
        ) : (
          <div className="w-full bg-gradient-to-br from-yellow-50 via-white to-yellow-100 rounded-2xl shadow-xl p-4 sm:p-8 md:p-12 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl hover:bg-yellow-50/80 group cursor-pointer">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-700 mb-4 transition-colors duration-300 group-hover:text-yellow-500 break-words">
              {chapter?.title || "Select a chapter"}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-yellow-700 break-words">
              {chapter?.description || ""}
            </p>
          </div>
        )}
      </div>
      {/* Youtube Card */}
      <div className="flex justify-center mt-6 px-1 sm:px-2">
        {isLoading ? (
          <SkeletonCard height="h-72" />
        ) : (
          <div className="w-full bg-gradient-to-br from-yellow-100 via-white to-yellow-200 rounded-2xl shadow-xl p-2 sm:p-6 md:p-10 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl hover:bg-yellow-100/80 group cursor-pointer">
            <div className="w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden">
              <YouTube
                videoId={chapter?.VideoId || ""}
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: { autoplay: 0 },
                }}
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
      {/* Practicle Exercise Card */}
      <div className="flex justify-center mt-6 px-1 sm:px-2">
        {isLoading ? (
          <SkeletonCard />
        ) : (
          <div className="w-full bg-gradient-to-br from-yellow-200 via-white to-yellow-300 rounded-2xl shadow-xl p-4 sm:p-8 md:p-12 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-yellow-200/80 group cursor-pointer">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-700 mb-2 transition-colors duration-300 group-hover:text-yellow-600">
              Practicle Exercise
            </h1>
            <div className="space-y-2">
              {exercises ? (
                <div className="text-base sm:text-lg md:text-xl text-gray-700 transition-colors duration-300 group-hover:text-yellow-700 break-words whitespace-pre-line">
                  {exercises}
                </div>
              ) : (
                <div className="text-base sm:text-lg md:text-xl text-gray-700">
                  No Exercise Available for this chapter
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {/* Major Achievements Card */}
      <div className="flex justify-center mt-6 px-1 sm:px-2">
        {isLoading ? (
          <SkeletonCard />
        ) : (
          <div className="w-full bg-gradient-to-br from-yellow-300 via-white to-yellow-100 rounded-2xl shadow-xl p-4 sm:p-8 md:p-12 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-yellow-100/80 group cursor-pointer">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-700 mb-2 transition-colors duration-300 group-hover:text-yellow-600">
              Major Achievements from this Chapter
            </h1>
            <div className="space-y-2">
              {achievements ? (
                <div className="text-base sm:text-lg md:text-xl text-gray-700 transition-colors duration-300 group-hover:text-yellow-700 break-words whitespace-pre-line">
                  {achievements}
                </div>
              ) : (
                <div className="text-base sm:text-lg md:text-xl text-gray-700">
                  No key Content for Achievements available for this chapter
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {/* Resources Card */}
      <div className="flex justify-center mt-6 px-1 sm:px-2">
        {isLoading ? (
          <SkeletonCard />
        ) : (
          <div className="w-full bg-gradient-to-br from-yellow-100 via-white to-yellow-300 rounded-2xl shadow-xl p-4 sm:p-8 md:p-12 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-yellow-100/80 group cursor-pointer">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-700 mb-2 transition-colors duration-300 group-hover:text-yellow-600">
              Resources used for Generating this Course
            </h1>
            <div className="space-y-2">
              {resources ? (
                <div className="text-base sm:text-lg md:text-xl text-gray-700 transition-colors duration-300 group-hover:text-yellow-700 break-words whitespace-pre-line">
                  {resources}
                </div>
              ) : (
                <div className="text-base sm:text-lg md:text-xl text-gray-700">
                  No resources available to show
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default YoutubeContent;

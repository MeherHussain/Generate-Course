"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";
import AiButton from "./AiButton";
import Link from "next/link";

function AddCourse() {
  const { user } = useUser();
  return (
    <div className="relative w-full p-6 animate-fadeIn">
      <div className="relative overflow-hidden bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-100/50 hover:shadow-2xl transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-pink-100/20 to-purple-100/20 opacity-50" />

        <div className="relative flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6">
          <div className="w-full md:w-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-3">
              Hello,{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {user?.fullName}
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed">
              Create new course with{" "}
              <span className="text-blue-500 font-semibold">AI</span>, share
              with friends and{" "}
              <span className="text-pink-500 font-semibold">earn</span> from it.
            </p>
          </div>

          <Link href="/Create-Course" className="w-full md:w-auto">
            <AiButton
              width="200px"
              height="56px"
              textSize="16px"
              className="w-full md:w-auto !bg-gradient-to-r !from-blue-500 !via-purple-500 !to-pink-500 !rounded-xl !font-bold !shadow-xl hover:!scale-105 !transition-all !duration-300"
            />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default AddCourse;

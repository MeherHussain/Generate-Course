"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";
import AiButton from "./AiButton";
import Link from "next/link";

function AddCourse() {
  const { user } = useUser();
  return (
    <div className="relative flex items-center justify-between w-full">
      <div className="ml-[40px] mt-[20px]">
        <h2 className="text-3xl">
          Hello, <span className="font-bold">{user?.fullName}</span>
        </h2>
        <p className="text-sm mt-2 text-gray-500 mb-[40px]">
          Create new course with AI, Share with friends and Earn from it.
        </p>
      </div>
      <Link href={"/Create-Course"}>
        <AiButton
          width="180px"
          height="50px"
          textSize="9px"
          className="absolute right-0"
        />
      </Link>
    </div>
  );
}

export default AddCourse;

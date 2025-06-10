"use client";
import React, { useState } from "react";
import Header from "../_components/Header";
import { UserInputContext } from "../_Context/UserInputContext";

const CourseLayout = ({ children }) => {
  const [userCourseInput, setUserCourseInput] = useState({});
  return (
    <UserInputContext.Provider value={[userCourseInput, setUserCourseInput]}>
      <>
        <div>
          <Header />
          {children}
        </div>
      </>
    </UserInputContext.Provider>
  );
};

export default CourseLayout;

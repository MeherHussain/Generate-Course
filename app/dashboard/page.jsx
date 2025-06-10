import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddCourse from "./_components/AddCourse";
import CourseList from "./_components/CourseList";
function Dashboard() {
  return (
    <div>
      <div>
        <AddCourse />
      </div>

      <div>
        <CourseList />
      </div>
    </div>
  );
}

export default Dashboard;

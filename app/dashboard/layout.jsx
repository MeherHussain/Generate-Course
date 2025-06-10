"use client";
import React from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";

function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div className="md:w-64 hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;

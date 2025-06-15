"use client";
import React from "react";
import Image from "next/image";
import StartedBtn from "./StartedBtn";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-lg border-b border-blue-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 sm:px-8">
        <Link href="/" className="flex items-center group">
          <Image
            src="/Cubekit.svg"
            alt="Image Icon"
            width={60}
            height={60}
            className="transition-transform duration-200 group-hover:scale-110 drop-shadow-lg"
          />
          <span className="ml-2 text-xl font-extrabold bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent tracking-tight hidden sm:inline">
            AI Course Generator
          </span>
        </Link>
        <Link href="/dashboard" className="ml-auto">
          <StartedBtn className="!px-6 !py-2 !rounded-full !shadow-lg !bg-gradient-to-r !from-blue-500 !to-pink-400 hover:from-yellow-300 hover:to-blue-400 transition-all duration-200" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;

"use client";
import React from "react";
import Image from "next/image";
import StartedBtn from "./StartedBtn";
import Link from "next/link";
function Header() {
  return (
    <header className="flex justify-between p-4 flex-wrap flex-grow shadow-md">
      <Image
        src="/Cubekit.svg"
        alt="Image Icon"
        width={60}
        height={60}
        className="w-[150px]"
      />
      <Link href="/dashboard">
        <StartedBtn />
      </Link>
    </header>
  );
}

export default Header;

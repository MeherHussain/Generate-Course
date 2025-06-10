import { UserButton } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="flex justify-end items-center p-5 gap-[910px] bg-white shadow-md">
      <div className="relative w-10 h-10">
        <Image
          src="/Cube.svg"
          alt="Image Logo"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      {typeof window !== "undefined" && <UserButton />}
    </div>
  );
}

export default Header;

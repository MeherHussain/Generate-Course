import { UserButton } from "@clerk/nextjs";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "./Home";
import ExploreIcon from "./Explore";
import UpgradeIcon from "./Upgrade";
import LogoutIcon from "./Logout";
import { usePathname } from "next/navigation";

// Sidebar menu items (reuse from Sidebar.jsx)
const Menu = [
  { id: 1, name: "Home", icon: <HomeIcon />, path: "/dashboard" },
  {
    id: 2,
    name: "Explore",
    icon: <ExploreIcon />,
    path: "/dashboard/ExplPage",
  },
  { id: 3, name: "Upgrade", icon: <UpgradeIcon />, path: "/dashboard/upgrade" },
  { id: 4, name: "Logout", icon: <LogoutIcon />, path: "/dashboard/logout" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full h-[85px] bg-white/70 backdrop-blur-md shadow-lg border-b border-blue-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-8">
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/80 shadow-lg border border-blue-100 focus:outline-none mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open sidebar menu"
        >
          <span
            className={`block w-6 h-0.5 bg-blue-900 rounded transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-blue-900 rounded my-1 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-blue-900 rounded transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
        {/* Logo and title */}
        <div className="flex items-center">
          <div className="relative w-10 h-10 group">
            <Image
              src="/Cube.svg"
              alt="Image Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
              className="transition-transform duration-200 group-hover:scale-110 drop-shadow-lg"
            />
          </div>
          <span className="ml-3 text-xl font-extrabold bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent tracking-tight hidden sm:inline">
            Dashboard
          </span>
        </div>
        <div>
          <UserButton />
        </div>
      </nav>
      {/* Mobile Drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            onClick={() => setOpen(false)}
          />
          <nav
            className={`fixed top-0 left-0 z-50 h-full w-64 bg-white/95 backdrop-blur-lg shadow-2xl border-r border-blue-100 transform transition-transform duration-300 md:hidden ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col items-center mt-8 mb-4">
              <Image
                src="/Cubekit.svg"
                width={120}
                height={90}
                alt="Logo"
                className="drop-shadow-lg"
              />
            </div>
            <hr className="m-3 border-blue-200" />
            <ul className="flex flex-col gap-2">
              {Menu.map((item) => (
                <Link
                  href={item.path}
                  key={item.id}
                  onClick={() => setOpen(false)}
                >
                  <div
                    className={`flex items-center gap-4 px-4 py-3 my-1 cursor-pointer transition-all duration-300 rounded-2xl font-semibold
                      ${
                        item.path === path
                          ? "bg-gradient-to-r from-blue-400 via-pink-300 to-yellow-200 text-white shadow-lg"
                          : "text-blue-900 hover:bg-blue-100 hover:gap-7"
                      }
                    `}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-base">{item.name}</span>
                  </div>
                </Link>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;

"use client";
import React from "react";
import Image from "next/image";
import HomeIcon from "./Home";
import ExploreIcon from "./Explore";
import UpgradeIcon from "./Upgrade";
import LogoutIcon from "./Logout";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Progress } from "../../../components/ui/progress";
const Sidebar = () => {
  const path = usePathname();
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <HomeIcon />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <ExploreIcon />,
      path: "/dashboard/ExplPage",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <UpgradeIcon />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: <LogoutIcon />,
      path: "/dashboard/logout",
    },
  ];

  return (
    <div className="fixed h-full md:w-64 p-5 bg-white shadow-lg z-10">
      <Image src="/Cubekit.svg" width={160} height={130} alt="Logo" />
      <hr className="m-3" />
      <ul>
        {Menu.map((item) => (
          <Link href={item.path} key={item.id}>
            <div
              className={`flex items-center gap-4 text-gray-800 px-4 py-[6px] cursor-pointer hover:text-black hover:gap-7 transition-all duration-300 ease-in-out ${
                item.path === path ? "rounded-2xl text-black" : ""
              }`}
            >
              <div>{item.icon}</div>
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </ul>
      <div className="absolute bottom-10 w-[80%]">
        <Progress value={33} />
        <h2 className="text-sm my-2">3 Out of 5 Course created.</h2>
        <h2 className="text-xs text-gray-500">
          Upgrade your plan for unlimted course generated
        </h2>
      </div>
    </div>
  );
};

export default Sidebar;
// import HomeIcon from "../dashboard/_components/Home.jsx";
// import ExploreIcon from "../dashboard/_components/Explore.jsx";
// import UpgradeIcon from "../dashboard/_components/Upgrade.jsx";
// import LogoutIcon from "../dashboard/_components/Logout.jsx";

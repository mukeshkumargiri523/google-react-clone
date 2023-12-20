import React from "react";
import ProfileIcon from "./ProfileIcon";

function HomeHeader() {
  return (
    <header className="h-18 flex justify-between md:justify-end items-center gap-5 px-6">
      <div className="flex gap-4">
        <span className="text-black/[0.8] text-[15px] font-semibold hover:underline cursor-pointer">
          Gmail
        </span>
        <span className="text-black/[0.8] text-[15px] hover:underline  font-semibold cursor-pointer">
          Images
        </span>
      </div>
      <ProfileIcon />
    </header>
  );
}

export default HomeHeader;

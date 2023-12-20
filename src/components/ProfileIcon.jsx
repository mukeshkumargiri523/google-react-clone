import React from "react";

import { TbGridDots } from "react-icons/tb";
import Profile from "../assets/profile_pic1.jpg";
import ProfileRing from "../assets/profile-ring.svg";
function ProfileIcon() {
  return (
    <div className="flex gap-3 ">
      <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.1]">
        <TbGridDots size={25} color="#5f6464" />
      </span>
      <span className="h-12 w-12 relative flex justify-center items-center">
        <img className="absolute" src={ProfileRing} alt="" />
        <span className="h-10 w-10 overflow-hidden rounded-full">
          <img className="h-full w-full object-cover" src={Profile} alt="" />
        </span>
      </span>
    </div>
  );
}

export default ProfileIcon;

import React from "react";
import { quickLinks, settingMenu } from "../utils/Constants";

function Footer() {
  return (
    <div className="bg-[#f3f3f3]">
      <div className="flex py-[16px] px-[16px] md:px-[32px] border-b border-[#dadce0]">
        <span className="text-[#70777b] text-[17px] ">India</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px] border-b border-[#dadce0]">
        <div className="flex justify-center">
          {quickLinks.map((menu, index) => (
            <span
              key={index}
              className="text-[#70757a] text-[14px] md:text-[16px] leading-none p-[10px] md:p-[15px]"
            >
              {menu}
            </span>
          ))}
        </div>

        <div className="flex justify-center">
          {settingMenu.map((menu, index) => (
            <span
              key={index}
              className="text-[#70757a] text-[14px] md:text-[16px] leading-none p-[10px] md:p-[15px]"
            >
              {menu}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;

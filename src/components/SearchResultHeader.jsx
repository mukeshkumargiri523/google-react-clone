import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/google-logo.png";
import logo from "../assets/g-logo.png";
import ProfileIcon from "./ProfileIcon";
import SearchInput from "./SearchInput";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

function SearchResultHeader() {
  const [selectedMenu, setSelectedMenu] = useState("All");

  const { setImageSearch } = useContext(Context);

  useEffect(() => {
    return () => setImageSearch(false);
  }, []);

  const clickHandler = (menuItem) => {
    let isTypeImage = menuItem.name === "Images";
    setSelectedMenu(menuItem.name);
    setImageSearch(isTypeImage ? true : false);
  };
  return (
    <div className="  p-[16px] pb-[10px] md:pr-5 md:pl-20 md:pt-8 border-b border-[#ebebec] flex md:block flex-col  sticky top-0 bg-white">
      <div className=" flex items-center justify-between w-full">
        <div className="flex items-center">
          <Link to="/">
            <img className="hidden md:block w-[100px] mr-10" src={Logo} />
          </Link>
          <Link to="/">
            <img className=" md:hidden w-[30px] h-[30px] mr-10" src={logo} />
          </Link>
          <SearchInput from="searchResult" />
        </div>
        <div className="">
          <ProfileIcon />
        </div>
      </div>
      <div className="flex ml-[-12px] mt-3">
        {menu.map((menu, index) => (
          <span
            key={index}
            className={`flex items-center p-3 text-[#82878e] cursor-pointer relative ${
              selectedMenu === menu.name ? "text-blue-600" : ""
            }`}
            onClick={() => clickHandler(menu)}
          >
            <span className="hidden md:block mr-2">{menu.icon}</span>
            <span className="text-sm">
              {menu.name}
              {selectedMenu === menu.name && (
                <span className="h-[5px] w-[calc(100%-20px)] absolute bg-blue-600 bottom-0 left-[10px]"></span>
              )}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default SearchResultHeader;

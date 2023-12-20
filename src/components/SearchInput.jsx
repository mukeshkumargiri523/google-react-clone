import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import ImageIcon from "../assets/image.svg";
import MicIcon from "../assets/mic.svg";
function SearchInput() {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();
  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  return (
    <div
      id="searchBox"
      className="h-[50px] shadow-lg w-full md:w-[600px] flex items-center gap-4 px-4 border-1 border-[#9aa19f] rounded-3xl hover:bg-white hover:shadow-lg hover:border-2 focus-within:shadow-2xl focus-within:border-3"
    >
      <AiOutlineSearch size={20} color="#9aa0a8" />
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        placeholder="Search Google or Type a URL"
        autoFocus
        className="grow outline-0 text-black/[0.9]"
      />
      <div className="flex items-center gap-4">
        {searchQuery && (
          <IoMdClose
            size={26}
            color="#70737a"
            onClick={(e) => setSearchQuery("")}
          />
        )}
        <img src={MicIcon} alt="" className="h-7 w-7 cursor-pointer" />
        <img src={ImageIcon} alt="" className="h-7 w-7 cursor-pointer" />
      </div>
    </div>
  );
}

export default SearchInput;

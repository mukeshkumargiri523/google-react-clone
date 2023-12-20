import React from "react";
import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

function Home() {
  return (
    <div className="flex h-[100vh] flex-col">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center mt-48 ">
          <img className="w-[172px] md:w-[280px] mb-10" src={Logo} alt="" />
          <SearchInput />
          <div className="flex gap-2 text-[#3c4022] mt-10">
            <button className="h-10 px-5 bg-[#f8f8fa]  text-sm rounded-md border border-[#d8d3d3] hover:border-[#a39c9c] hover:shadow-lg">
              Google Search
            </button>
            <button className="h-10 px-5 bg-[#f8f8fa]  text-sm rounded-md border border-[#d8d3d3] hover:border-[#a39c9c] hover:shadow-lg">
              I'm feeling Lucky
            </button>
          </div>
          <div className="flex mt-2">
            <p className="">Google offered in:</p>
            <p className="text-md text-blue-700 ml-3">हिन्दी</p>
            <p className="text-md text-blue-700 ml-3">বাংলা</p>
            <p className="text-md text-blue-700 ml-3">తెలుగు</p>
            <p className="text-md text-blue-700 ml-3">मराठी</p>
            <p className="text-md text-blue-700 ml-3">தமிழ்</p>
            <p className="text-md text-blue-700 ml-3">ગુજરાતી</p>
            <p className="text-md text-blue-700 ml-3">ಕನ್ನಡ</p>
            <p className="text-md text-blue-700 ml-3">മലയാളം</p>
            <p className="text-md text-blue-700 ml-3">ਪੰਜਾਬੀ</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;

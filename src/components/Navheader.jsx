import React from "react";
import logo from "../assets/LogoCometChat.png";
import darkIcon from "../assets/darkIcon.png";

const Navheader = () => {
  const navItems = [
    { id: 1, text: "Platform" },
    {
      id: 2,
      text: "Solutions",
    },
    {
      id: 3,
      text: "Developers",
    },
    {
      id: 4,
      text: "Resource",
    },
    {
      id: 5,
      text: "Pricing",
    },
  ];
  return (
    // mobile version
    <div
      className="max-w-full container mx-auto
    px-4 md:px-20 h-20 shadow-md overflow-hidden
    absolute top-0 right-0 left-0 bottom-0 z-50 bg-[#0A0914] justify-around scrollbar-hide">
      <div className="flex justify-between items-center p-1 md:justify-between">
        <div>
          <img className="cursor-pointer" src={logo} alt="Logo" />
        </div>

        {/* for web version */}
        <div>
          <ul className=" hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => {
              return (
                <li
                  key={id}
                  className="flex cursor-pointer text-gray-200 hover:text-white md:hover:scale-110 md:duration-300 md:transition
                  md:hover:text-[#6852D6]  md:hover:font-bold">
                  {text}
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className="flex gap-1 justify-center items-center p-3 space-x-2
        font-normal cursor-pointer">
          <div>Log in</div>
          <div>
            <img src={darkIcon} className="md:hidden" alt="DarkIcon" />
            <button
              className=" hidden md:block rounded-xl bg-[#6852D6] px-4 py-3 text-[#FCFCFE] backdrop-blur-[30px] font-bold 
            cursor-pointer">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navheader;

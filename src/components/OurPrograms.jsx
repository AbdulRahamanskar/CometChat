import React from "react";
import Listsections from "./Listsections";
import Listsection2 from "./Listsection2";
import FAQs from "./FAQs";

const OurPrograms = () => {
  return (
    <>
      <div className="w-full max-h-screen bg-white relative overflow-hidden p-4 md:pt-6 md:pr-20 md:pl-20 scrollbar-hide ">
        <div className="flex flex-col  md:pt-4  mt-4 ">
          <div className="pl-4 gap-1">
            <span className="text-[#6852D6] text-xl font-semibold md:text-3xl ">
              Our programs
            </span>{" "}
            <br />
          </div>
          <div>
            <h1 className=" text-4xl pt-2 md:text-5xl md:w-2xl md:pt-3 pl-4 pr-4 text-black font-bold">
              Types of partnerships programs
            </h1>
          </div>
        </div>

        <Listsection2 />
      </div>
      <div></div>
    </>
  );
};

export default OurPrograms;

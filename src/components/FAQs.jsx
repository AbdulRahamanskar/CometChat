import React from "react";
import Accordians from "./Accordians";
import Blur from "../assets/FAQBlur1.png";

const FAQs = () => {
  return (
    <div
      className="w-full min-h-screen bg-white relative overflow-hidden px-4 md:px-20 pt-8 md:pt-7 scrollbar-hide
    md:pb-[20px] ">
      <div className="flex flex-col items-center text-center gap-2">
        {/* Subtitle */}
        <span className="text-[#6852D6] text-xl md:text-3xl font-semibold">
          FAQ’s
        </span>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-black max-w-3xl mx-auto">
          We want to help you with all your doubts
        </h1>
      </div>
      {/* Blur  */}
      <div>
        <img
          src={Blur}
          alt="Blur"
          className="hidden md:block absolute left-0  translate-y-10 translate-x-0 size-150 top-0 bottom-0"
        />
        <img
          src={Blur}
          alt="Blur"
          className="hidden md:block absolute right-0  translate-y-50 translate-x-80 opacity-40 size-150  top-0 rotate-20"
        />
      </div>

      {/* Accordions */}
      <div className="mt-8 flex justify-center">
        <Accordians />
      </div>
    </div>
  );
};

export default FAQs;

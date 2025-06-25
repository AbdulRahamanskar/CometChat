import React from "react";
import Listsections from "./Listsections";

const Thebenfits = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#0A0914] relative overflow-hidden p-4 md:p-20 scrollbar-hide">
        <div className="flex flex-col md:border md:border-gray-900 md:pt-20   md:hidden ">
          <div className="pl-4 gap-1">
            <span className="text-[#FF7F3E] text-xl font-semibold ">
              The benefits
            </span>{" "}
            <br />
          </div>
          <div>
            <h1 className="text-4xl  w-98 pl-4 pr-4 ">
              Moderation to help your community thrive
            </h1>
          </div>
        </div>
        {/* web only */}

        <div className=" hidden md:block flex-col md:border md:border-gray-900 md:pt-20 md:pb-20  ">
          <div className="pl-4 gap-1">
            <span className="text-[#FF7F3E] text-2xl font-semibold ">
              Be a Partner
            </span>{" "}
            <br />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl w-xl pl-4 pr-4 gap-1 mt-1">
              CometChat partner advantages
            </h1>
          </div>
        </div>
        <Listsections />
      </div>
    </>
  );
};

export default Thebenfits;

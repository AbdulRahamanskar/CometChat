import React from "react";
import FooterStars from "../assets/FooterStars.png";
import BlurLayer from "../assets/BlurLayerHeavyFooter.png";
import EllipseFooter from "../assets/EllipseFooter.png";
import EllipseFooterRight from "../assets/EllipseFooterRight.png";
import Gradient from "../assets/Gradient.png";
import FooterEffect1 from "../assets/PreFooterEffect1.png";
import FooterEffect2 from "../assets/PreFooterEffect2.png";

const PreFooter = () => {
  return (
    <div className="w-full max-h-screen relative overflow-hidden bg-[#0A0914] scrollbar-hide">
      <div className="w-[390px] h-[358px] relative md:w-full md:h-[400px]">
        {/* Stars Background */}
        <img
          src={FooterStars}
          alt="Footer Stars"
          className="opacity-90 bg-cover w-full z-0 h-[803px] absolute left-[15px] top-[-38px] md:justify-center md:items-center md:text-center"
        />

        {/* Ellipse Top-Left with 90deg rotation and slightly moved left/up */}
        <img
          src={EllipseFooter}
          alt="EllipseFooter"
          className="absolute top-0 left-0 w-[130px] h-[130px] md:size-[200px] rotate-90 -translate-x-1/4 -translate-y-1/4 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        />

        {/* Ellipse Bottom-Right (half out of screen) */}
        <img
          src={EllipseFooterRight}
          alt="EllipseFooterRight"
          className="absolute bottom-0 right-0 w-[130px] h-[130px] rotate-0 translate-x-1/2 translate-y-1/2 md:translate-x-0 md:translate-y-0
           md:right-[40px]  md:bottom-[30px]  drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        />

        {/* Blur Layer */}
        <img
          src={BlurLayer}
          alt="BlurLayer"
          className="absolute top-0 left-0 translate-y-20 w-[88px] h-[62px] md:size-[150px] opacity-50"
        />

        {/* Footer effect 1 Layer */}
        <img
          src={FooterEffect1}
          alt="Footer Effect 1"
          className=" hidden md:block absolute md:top-0 md:left-0 translate-y-20 w-full md:h-[20px] "
        />

        {/* Gradient Layer */}
        <img
          src={Gradient}
          alt="Gradient"
          className="absolute bottom-0 translate-y-20 w-full h-[20px] "
        />

        <div
          className=" justify-center items-center flex flex-col w-full pt-25 pr-4 pb-10 pl-7 md:text-center md:justify-center
              md:items-center  ">
          <h1 className=" text-white text-4xl  md:items-center  text-start font-semibold items-start">
            Get started for free
          </h1>
          <p
            className=" text-white text-md pt-2 text-start font-normal items-start opacity-74
        md:w-[300px] ">
            Build and test for as long as you need. Pick a plan when you’re
            ready.
          </p>

          <div className=" flex w-full h-[100px]  p-5 gap-2 md:justify-center md:items-center">
            <button
              className="text-white border-black font-semibold md:font-bold border p-2 rounded-2xl cursor-pointer items-start
           md:px-4 md:py-3 md:border-black md:border-2  z-20">
              Start free trail
            </button>
            <button
              className=" rounded-xl bg-[#6852D6] px-4 py-3 text-[#FCFCFE] backdrop-blur-[30px] font-bold
              cursor-pointer z-20">
              Schedule a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;

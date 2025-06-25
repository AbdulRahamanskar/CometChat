import React, { useState } from "react";
import Stars from "../assets/stars.png";
import Navheader from "./Navheader";
import Comets from "../assets/comets.png";
import CometsRight from "../assets/cometsRight.png";
import cometsOrange from "../assets/cometsOrange.png";
import BrandLogos from "../assets/BrandLogos.png";
import Gradient from "../assets/Gradient.png";
import Orbit from "../assets/Orbit.png";

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted ", formData);
  };
  return (
    <div className="w-full min-h-screen bg-[#0A0914] relative overflow-hidden scrollbar-hide scrollbar-hide">
      <Navheader />

      {/*  Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${Stars})` }}></div>

      {/*  Hero Content */}
      <div
        className="relative z-10 flex flex-col md:flex-row items-start pt-[120px] px-6 md:px-20 text-white
      md:justify-evenly">
        <div className=" md:w-[450px] flex-col md:mt-20 ">
          <h1 className="text-4xl font-semibold mb-4 max-w-xl z-100">
            Join the CometChat partner universe
          </h1>
          <p className="text-xl max-w-xl">
            Create value for your clients, leveraging our world-class
            technology. Partner with us and grow your business!
          </p>
        </div>

        <img
          src={cometsOrange}
          alt="Comet Orange"
          className="hidden md:block absolute md:left-[168px] md:bottom-0 md:right-0 md:top-[167px] size-100 z-10 
        
             opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        />

        <img
          src={Orbit}
          alt="Orbit"
          className="hidden md:block absolute md:left-[168px] md:bottom-0 md:right-0 md:top-[167px] md:w-5lg md:h-[470px] z-10 
         opacity-90 translate-y-30 md:translate-x-10 md:rotate-16"
        />

        <img
          src={Gradient}
          alt="Gradient"
          className="hidden md:block absolute md:left-[168px] md:bottom-0 md:right-0 md:top-[167px] md:w-5lg md:h-5xl z-10 
         opacity-90 translate-y-45"
        />

        <img
          src={Comets}
          alt="Comet"
          className="absolute left-0 bottom-0 right-0 md:bottom-0 md:top-0  z-10
             opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        />

        {/*  Glass Card */}
        <div
          className="mt-10 md:mt-0 md:ml-0 w-[360px] h-[465px] md:w-[528px] md:h-[490px] p-6
  rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl
  flex-col   z-100">
          <div>
            <h3 className="text-3xl md:text-4xl text-bold">Became a partner</h3>
          </div>

          <div className="flex-col">
            <form action="" onSubmit={handleSubmit} className="mt-10">
              <label htmlFor="fullName" className="md:mt-2">
                Full Name
              </label>
              <br />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                className="text-white text-lg rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl md:w-[464px] h-[44px] md:h-[50px]
  flex items-center justify-center z-100 p-4 w-80 "
                onChange={handleChange}
                placeholder="Type Your Name Here..."
              />
              <br />

              <label htmlFor="email" className="mt-2">
                Email Address
              </label>
              <br />
              <input
                type="email"
                name="email"
                value={formData.email}
                className="text-white text-lg rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl
  flex items-center justify-center z-100 p-4 w-80 md:w-[464px] h-[44px] md:h-[50px] "
                placeholder="Type Your Email Here..."
                onChange={handleChange}
              />
              <br />

              <label htmlFor="companyName" className="mt-2">
                Companies Name
              </label>
              <br />
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                className="text-white text-lg rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl
  flex items-center justify-center z-100 p-4 w-80 md:w-[464px] h-[44px] md:h-[50px]"
                onChange={handleChange}
                placeholder="Type Your Company Name Here..."
              />
              <br />

              <button
                className=" rounded-xl bg-[#6852D6] px-4 py-3 text-[#FCFCFE] backdrop-blur-[30px] font-bold
              cursor-pointer mt-4
               "
                type="submit"
                onClick={handleSubmit}>
                Submit Application
              </button>
            </form>
          </div>
        </div>
        <img
          src={CometsRight}
          alt="Comet Right"
          className="absolute  bottom-0 right-0 md:bottom-0 md:top-0 w-40 h-40 z-10 rotate-0
        md:size-120 md:rotate-x-205 md:rotate-y-365 md:rotate-z-350  
         
             opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        />
      </div>
      <div className=" md:h-40">
        <img
          src={BrandLogos}
          alt="Brand Logos Right"
          className="md:absolute  md:bottom-0 md:w-full md:h-[40px] z-100 md:justify-center md:items-center
         mt-5 md:mb-0 w-full h-full "
        />
      </div>
    </div>
  );
};

export default Hero;

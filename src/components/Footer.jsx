import React from "react";
import Gradient from "../assets/Gradient.png";
import Logo from "../assets/LogoCometChat.png";
import {
  FaPlus,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import WebFooter from "./WebFooter";

const Footer = () => {
  const arrayItems = [
    {
      id: 1,
      name: "Platform",
    },
    {
      id: 2,
      name: "Solutions",
    },
    {
      id: 3,
      name: "Developers",
    },
    {
      id: 4,
      name: "Resources",
    },
    {
      id: 5,
      name: "Competitors",
    },
    {
      id: 6,
      name: "Company",
    },
  ];

  const socialMediaLinks = [
    {
      id: 1,
      image: <FaFacebook />,
      name: "Facebook",
    },
    {
      id: 2,
      image: <FaLinkedin />,
      name: "LinkedIn",
    },
    {
      id: 3,
      image: <FaInstagram />,
      name: "Instagram",
    },
    {
      id: 4,
      image: <FaTwitter />,
      name: "Twitter",
    },
    {
      id: 5,
      image: <FaGithub />,
      name: "GitHub",
    },
  ];

  const mobileSecondaryLinks = [
    {
      id: 1,
      name: `${new Date().getFullYear()}  © CometChat`,
    },
    {
      id: 2,
      name: "Terms of Use",
    },
    {
      id: 3,
      name: "Privacy Policy",
    },
  ];

  return (
    <>
      <div className="w-f max-h-screen bg-[#0A0914] overflow-y-auto scrollbar-hide ">
        <div className="md:pl-[64px] md:pr-[64px] md:gap-10">
          <img
            src={Logo}
            alt="Logo"
            className="pl-6 md:pl-[64px] md:gap-10 md:pt-[20px] md:h-[40px]   "
          />
          <div className="block md:hidden">
            <div className="pl-6 pt-[20px] flex flex-col justify-between text-center align-middle ">
              {arrayItems.map(({ id, name }) => {
                return (
                  <div
                    key={id}
                    className="flex items-center justify-between w-full cursor-pointer">
                    <h1 className="text-md  font-semibold text-[#6852D6]">
                      {name}
                    </h1>
                    <FaPlus className=" pr-6 text-4xl  text-[#6852D6] text-center items-center align-middle float-end" />
                  </div>
                );
              })}
            </div>

            <div className="pl-6 pt-[30px] grid grid-cols-3 gap-4">
              {socialMediaLinks.map(({ id, image, name }) => {
                return (
                  <div
                    className="flex gap-3 items-center cursor-pointer"
                    key={id}>
                    {image}
                    <span className="font-semibold">{name}</span>
                  </div>
                );
              })}
            </div>

            <div className="pl-6 pt-[20px] grid grid-cols-3 text-sm pb-[10px] gap-2">
              {mobileSecondaryLinks.map((item) => {
                return (
                  <div key={item.id} className="font-semibold cursor-pointer">
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
          <WebFooter />
        </div>
      </div>
    </>
  );
};

export default Footer;

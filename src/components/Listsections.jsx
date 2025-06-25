import React from "react";
import ListIcon1 from "../assets/ListIcon1.png";
import ListIcon2 from "../assets/ListIcon2.png";
import ListIcon3 from "../assets/ListIcon3.png";
import ListIcon4 from "../assets/ListIcon4.png";
import ListIcon5 from "../assets/ListIcon5.png";
import ListIcon6 from "../assets/ListIcon6.png";
import ListIcon7 from "../assets/ListIcon7.png";
import ListIcon8 from "../assets/ListIcon8.png";
import ListIcon9 from "../assets/ListIcon9.png";

const Listsections = () => {
  const listItems = [
    {
      id: 1,
      img: ListIcon1,
      text: "Free credits",
      desc: "Empowering partners to scale.",
    },
    {
      id: 2,
      img: ListIcon2,
      text: "Revenue share",
      desc: "Get monthly recurring revenues when you refer clients.",
    },
    {
      id: 3,
      img: ListIcon3,
      text: "Training and mentoring sessions",
      desc: "Enabling partners to deliver the best experience.",
    },
    {
      id: 4,
      img: ListIcon4,
      text: "Special developer access",
      desc: "Get an all-access account to build unlimited PoCs for your clients.",
    },
    {
      id: 5,
      img: ListIcon5,
      text: "Reduced time",
      desc: "Deliver your products much faster with our partners’ programs.",
    },
    {
      id: 6,
      img: ListIcon6,
      text: "Value addition to your users",
      desc: "We need a 2 line text here",
    },
    {
      id: 7,
      img: ListIcon7,
      text: "Knowledge sessions",
      desc: "Access to product and market sessions.",
    },
    {
      id: 8,
      img: ListIcon8,
      text: "On-demand support",
      desc: "Technical assistance for implementation.",
    },
    {
      id: 9,
      img: ListIcon9,
      text: "Significant passive income",
      desc: "We need a 2 line text here.",
    },
  ];

  return (
    <div className="w-full min-h-screen md:max-h-screen relative overflow-hidden p-4 md:p-10 scrollbar-hide">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {listItems.map(({ id, img, text, desc }) => (
          <div className="pt-10 flex flex-col items-start" key={id}>
            <img src={img} className="size-10" alt={text} />
            <h3 className="font-semibold pt-2 text-white">{text}</h3>
            <p className="font-normal text-[#FAFAFF] opacity-74">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listsections;

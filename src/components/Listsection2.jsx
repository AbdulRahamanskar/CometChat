import React from "react";

import PurpleIcon1 from "../assets/PurpleIcon1.png";
import PurpleIcon2 from "../assets/PurpleIcon2.png";
import PurpleIcon3 from "../assets/PurpleIcon3.png";

const Listsection2 = () => {
  const listItems = [
    {
      id: 1,
      img: PurpleIcon1,
      text: "Affiliate partner program",
      desc: "Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers.",
    },
    {
      id: 2,
      img: PurpleIcon2,
      text: "Technology partner program",
      desc: "Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It’s simple, safe and secure!",
    },
    {
      id: 3,
      img: PurpleIcon3,
      text: "Start up growth program",
      desc: "We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies.",
    },
  ];

  return (
    <>
      <div className="flex md:flex md:flex-row w-full max-h-screen relative overflow-hidden p-4 md:p-10 text-black scrollbar-hide">
        <div className="flex-col md:flex-row md:flex md:items-start md:h-[184px]  gap-5 space-y-10 ">
          {listItems.map(({ id, img, text, desc }) => (
            <div
              className=" flex-col md:flex-row gap-5  md:items-start "
              key={id}>
              <img src={img} alt="Icons" className="size-10 " />
              <h3 className="font-semibold pt-2 text-black">{text}</h3>
              <p className="font-normal text-black opacity-74">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Listsection2;

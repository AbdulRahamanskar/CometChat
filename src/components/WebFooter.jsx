import React from "react";
import {
  FaPlus,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const WebFooter = () => {
  const websocialMediaLinks = [
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

  const webSecondaryLinks = [
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

  const webFooterSection = [
    {
      title: "Platform",
      categories: [
        {
          subtitle: "Features",
          items: [
            "Chat & Messaging",
            "Voice & Video Calls",
            "Security & Compliance ",
            "Extensions",
            "Features at a glance ",
            "Webhooks & Bots",
            "Moderation",
            "Analytics & Insights",
          ],
        },
        {
          subtitle: "Implementation",
          items: ["Widgets", "UI Kits", "SDKs & APIs"],
        },
        {
          subtitle: "Technologies",
          items: [
            "React Chat SDK & API",
            "Angular Chat SDK & API",
            "Vue Chat SDK & API",
            "IOS Swift Chat SDK & API",
            "Android Kotlin Chat SDK & API",
            "Android Java Chat SDK & API",
            "React Native Chat SDK & API",
            "Ionic/Capacitor Chat SDK & API",
            "WordPress Chat SDK & API ",
            "Lavarel/PHP Chat SDK & API",
            "Flutter Chat SDK & API",
            "Next.js Chat SDK & API",
          ],
        },
      ],
    },
    {
      title: "Solutions",
      categories: [
        {
          subtitle: "By Use cases",
          items: [
            "Social Community",
            "Marketplace",
            "Healthcare",
            "Education",
            "Virtual Events ",
            "On-Demand Service",
            "Dating Apps",
            "Gaming",
          ],
        },
        {
          subtitle: "By Organization Type",
          items: ["Enterprise", "Startups"],
        },
      ],
    },
    {
      title: "Developers",
      categories: [
        {
          subtitle: "Technologies documentation",
          items: [
            "React",
            "Angular",
            "Vue",
            "IOS Swift",
            "Android Kotlin",
            "Android Java",
            "React Native",
            "Ionic/Capactior",
            "WordPress",
            "Larvel/PHP",
            "Flutter",
            "Next.js",
          ],
        },
        {
          subtitle: "Documentation",
          items: [
            "Documentation",
            "Product updates",
            "Tutorials",
            "Open-source Apps",
            "Product status",
            "Glossary",
          ],
        },
      ],
    },
  ];

  const groupedRightSection = [
    {
      title: "Resources",
      items: [
        "Customer stories",
        "Blog",
        "Give feedback",
        "Community forum",
        "Help center",
        "Partners",
      ],
    },
    {
      title: "Competitors",
      items: ["SendBird", "GetStream", "Applozic", "Twilio", "PubNub"],
    },
    {
      title: "Company",
      items: ["About us", "Careers", "Partners", "Pricing", "Chat with us"],
    },
  ];

  return (
    <div className="w-full min
    -h-screen bg-[#0A0914] overflow-y-auto scrollbar-hide hidden md:block pb-5 scrollbar-hide">
      <div className="pt-[20px] pl-[64px] pr-[64px] grid grid-cols-4 gap-10">
        {/* First 3 columns */}
        {webFooterSection.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className=" cursor-pointer text-[#6852D6] text-md font-bold mb-2">
              {section.title}
            </h3>

            {section.categories?.map((category, categoryId) => (
              <div key={categoryId} className="mb-4">
                <h4 className=" cursor-pointer text-gray-400 text-sm font-semibold mb-1">
                  {category.subtitle}
                </h4>
                <ul className="list-none text-white text-sm space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <li className=" cursor-pointer" key={itemIndex}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        {/* Final column: Resources + Competitors + Company */}
        <div>
          {groupedRightSection.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6 cursor-pointer">
              <h3 className=" cursor-pointer text-[#6852D6] text-md font-bold mb-2">
                {section.title}
              </h3>
              <ul className=" cursor-pointer list-none text-white text-sm space-y-1">
                {section.items.map((item, itemIndex) => (
                  <li className=" cursor-pointer" key={itemIndex}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-gray-900" />
      <footer className="w-full pl-[64px] border pb-2 border-[#0A0914] flex justify-between pt-10">
        <div className="gap-8 flex">
          {webSecondaryLinks.map(({ name, id }) => {
            return (
              <div className="flex gap-2 cursor-pointer" key={id}>
                {name}
              </div>
            );
          })}
        </div>
        <div className="flex gap-8 text-center">
          {websocialMediaLinks.map(({ id, name, image }) => {
            return (
              <div
                className="flex gap-2 text-center items-center cursor-pointer"
                key={id}>
                <span>{image}</span>
                <h1>{name}</h1>
              </div>
            );
          })}
        </div>
      </footer>
    </div>
  );
};

export default WebFooter;

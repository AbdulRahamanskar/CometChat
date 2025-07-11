import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Accordians = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const arrayItems = [
    {
      id: 1,
      title: "This is a frequently asked question?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui...",
    },
    {
      id: 2,
      title: "This is a frequently asked question?",
      content:
        "Content of above Frequently Asked Question. This is last Faq Lorem ipsum dolor sit amet consectetur...",
    },
    {
      id: 3,
      title: "This is a frequently asked question?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui...",
    },
    {
      id: 4,
      title: "This is a very long frequently asked question about our services",
      content: "This is the content of the above FAQ.",
    },
    {
      id: 5,
      title: "This is a question?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui...",
    },
    {
      id: 6,
      title: "This is a question?",
      content:
        "This is the last Faq Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
    },
  ];

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-h-screen bg-white p-4 md:px-20 flex flex-col items-center cursor-pointer overflow-hidden md:pb-[20px]">
      {arrayItems.map((item, index) => (
        <div
          key={item.id}
          className="w-full max-w-3xl border border-black rounded-2xl bg-[#14131D05] my-2 transition-all duration-300 cursor-pointer">
          <button
            onClick={() => toggleIndex(index)}
            className="w-full flex justify-between items-center px-6 py-4 font-semibold text-lg text-[#14131D] focus:outline-none cursor-pointer">
            <span className="text-left">{item.title}</span>
            {openIndex === index ? (
              <FaChevronUp className="md:text-xl" />
            ) : (
              <FaChevronDown className="md:text-xl text-sm" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-left text-[#14131D] font-medium text-md opacity-80 cursor-pointer">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordians;

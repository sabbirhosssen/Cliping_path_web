// import React from 'react';

import { useState } from "react";

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const faqData = [
    {
      question: "How many images can you edit for adding shadow in a day?",
      answer:
        "Depending on the picture quality, we can edit 2000-4000 images in a day.",
    },
    {
      question: "Do you use automated tools for clipping shadow?",
      answer:
        "Not at all! We use a high-quality pen tool for Photoshop shadow service. The further editing process is done by our designers manually as well.",
    },
    {
      question: "Can I have a free service to check the quality of your work?",
      answer: "Yes, you can avail of a free service as a free trial.",
    },
    {
      question: "Do you provide any guarantee on protecting my data?",
      answer:
        "We provide 100% assurance on data security. Your information and pictures will be stored on our highly-secured private network, where we never allow access to anyone else.",
    },
    // Add more questions and answers here
  ];
  return (
    <>
      <div className="max-w-md  ">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-md mb-4">
            <button
              className="w-full p-4 text-sm font-bold flex justify-between gap-2 items-start hover:text-[#ff8a00] focus:text-[#ff8a00]"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}{" "}
              {activeIndex === null && (
                <div className="font-bold rotate-[90deg] text-right">{">"}</div>
              )}
              {activeIndex === index && (
                <div className="font-bold rotate-[270deg]">{">"}</div>
              )}
            </button>
            {activeIndex === index && (
              <div className="text-sm   font-thin p-4">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FaqAccordion;

// import React from 'react';

import { useState } from "react";

const RetouchingFaqAccording = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const faqData = [
    {
      question:
        "Do you use automated tools for eCommerce photo editing service?",
      answer:
        "Not at all! We use the manual editing technique for eCommerce product photo editing.",
    },
    {
      question:
        "How many images can you deliver in a day for eCommerce photo editing?",
      answer:
        "We can deliver roughly 3,000-4,000 images in a day for eCommerce. Depending on the editing, it’ll undoubtedly vary.",
    },
    {
      question: "Can I have a free service to check the quality of your work?",
      answer: "Yes, you can avail a free service as a trial.",
    },
    {
      question: "Do you provide any guarantee on protecting my data?",
      answer:
        "We provide 100% assurance on data security. Your information and pictures will be stored on our highly-secured private network, where we never allow access to anyone else.",
    },
    {
      question: "How many revisions can I get for eCommerce photo editing?",
      answer:
        "We’re ready to make as many edits as you need to ensure you’re satisfied with the work.",
    },
    // Add more questions and answers here
  ];
  return (
    <div>
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
    </div>
  );
};

export default RetouchingFaqAccording;

import React, { useState } from "react";
import AccordionItem from "./AccordianItems";

const Blogs = () => {
  // State to manage active accordion item
  const [activeItem, setActiveItem] = useState(null);

  // Data for questions and answers
  const qnaData = [
    {
      question: "How often do you publish new blog posts?",
      answer:
        "We aim to publish fresh content every week. Stay tuned for regular updates!",
    },
    {
      question: "Can I submit a guest post to your blog?",
      answer:
        "Absolutely! We welcome guest contributions. Please check our submission guidelines for more details.",
    },
    {
      question: "How do I stay updated with the latest blog posts?",
      answer:
        "Subscribe to our newsletter or follow us on social media to receive notifications about new posts.",
    },
    {
      question: "Are comments allowed on your blog?",
      answer:
        "Yes, we encourage readers to share their thoughts. Constructive discussions are always welcome!",
    },
    {
      question: "Can I request a specific topic for a future blog post?",
      answer:
        "Of course! We value your input. Feel free to suggest topics, and we'll do our best to cover them.",
    },
    {
      question: "How do I become a regular contributor to your blog?",
      answer:
        "Connect with our editorial team and express your interest. We're open to collaboration and building lasting partnerships.",
    },
  ];

  return (
    <div className="max-w-md mx-auto ">
      <div className=" flex justify-center flex-col items-center">
        <h2 className="text-2xl font-bold mb-1">Q N A !</h2>
        <p className="text-xs tracking-wide mb-2 font-semibold"> - click on the question for the answer ! - </p>
      </div>

      {/* Mapping through the data to create accordion items */}
      {qnaData.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
          isActive={activeItem === index}
          setActiveItem={setActiveItem}
        />
      ))}
    </div>
  );
};

export default Blogs;

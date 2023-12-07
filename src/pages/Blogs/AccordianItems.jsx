import React from 'react';

const AccordionItem = ({ index, question, answer, isActive, setActiveItem }) => {
  return (
    <div className="mb-3">
      <div
        className={`bg-gray-200 p-2 cursor-pointer ${
          isActive ? 'rounded-t' : 'rounded'
        }`}
        onClick={() => setActiveItem(isActive ? null : index)}
      >
        <p className="text-sm md:text-lg font-semibold p-2">{question}</p>
      </div>
      {isActive && (
        <div className="text-sm md:text-lg px-2 bg-white rounded-b font-bold font-sans leading-2 mt-2 ">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;

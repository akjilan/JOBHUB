import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const TruncatedText = ({ text, limit }) => {

        const [isExpanded, setIsExpanded] = useState(false);
      
        const toggleExpand = () => {
          setIsExpanded(!isExpanded);
        };
      
        const truncatedText = isExpanded ? text : `${text.slice(0, limit)}...`;
        const showButton = text.length > limit;

  return (
    <div className=''>
      <p>{truncatedText}</p>
      <button onClick={toggleExpand} className="text-blue-500 hover:underline">
        {isExpanded ? <span>Show Less </span> : <span>Show More</span>}
      </button>
    </div>
  );
};

export default TruncatedText;

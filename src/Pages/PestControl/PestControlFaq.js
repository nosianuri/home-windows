import React, { useState } from 'react'

const PestControlFaq = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleAccordion = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <div className="border-b border-gray-200">
    <div
      className="flex items-center justify-between py-4 px-6 cursor-pointer"
      onClick={toggleAccordion}
    >
      <h3 className="text-lg font-medium text-[#e48a03]">{props.title}</h3>
      <svg
        className={`h-6 w-6 transform transition-transform text-[#e48a03] ${isExpanded ? 'rotate-180' : ''
          }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="M7 10l5 5 5-5z" />
      </svg>
    </div>
    {isExpanded && <div className="px-6 py-4">{props.children}</div>}
  </div>
  )
}

export default PestControlFaq
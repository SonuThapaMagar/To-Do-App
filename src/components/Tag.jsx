import React from "react";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: "bg-[#fda821] text-white",
    CSS: "bg-[#15d4c8] text-white",
    JavaScript: "bg-[#ffd12c] text-black",
    React: "bg-[#4cdafc] text-black",
    default: "bg-gray-200 text-black",
  };

  return (
    <button
      type="button"
      className={`cursor-pointer font-medium py-2 px-4 sm:px-6 rounded-lg transition-all 
        ${selected ? tagStyle[tagName] : tagStyle.default} 
        hover:opacity-80 active:scale-95 text-sm sm:text-base mx-2 my-1`}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;

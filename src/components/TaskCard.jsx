import React from 'react';
import Tag from "./Tag";
import { FaTrash } from "react-icons/fa";

const TaskCard = ({ title, tags, deleteTask }) => {
    console.log("Rendering TaskCard with:", { title, tags });

    return (
        <article className="flex flex-col w-full max-w-sm sm:max-w-md mx-auto bg-gray-100 p-4 rounded-lg shadow-md">
  <p className="text-lg font-semibold">{title}</p>

  <div className="flex flex-wrap gap-2 my-2">
    {tags.map((tag, index) => (
      <Tag key={index} tagName={tag} selected />
    ))}
  </div>

  <div className="flex justify-end mt-auto">
    <FaTrash
      className="text-rose-800 cursor-pointer text-xl hover:text-rose-600 transition-all"
      title="Delete"
      onClick={() => deleteTask({ title, tags })}
    />
  </div>
</article>

    );
};

export default TaskCard;

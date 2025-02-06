import React from 'react';
import Tag from "./Tag";
import { FaTrash } from "react-icons/fa";

const TaskCard = ({ title, tags, deleteTask }) => {
    console.log("Rendering TaskCard with:", { title, tags });

    return (
        <article className="flex flex-col text-left p-4 rounded-lg max-w-xs sm:max-w-md mx-auto mb-4 bg-gray-100 shadow-md h-full">
            {/* Task Title */}
            <p className="mb-2 text-base sm:text-lg font-semibold">{title}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <Tag key={index} tagName={tag} selected />
                ))}
            </div>

            {/* Trash Icon (Always at Bottom Right) */}
            <div className="flex justify-end mt-auto">
                <FaTrash
                    className="text-rose-800 cursor-pointer text-xl sm:text-2xl hover:text-rose-600 transition-all"
                    title="Delete"
                    onClick={() => deleteTask({ title, tags })}
                />
            </div>
        </article>
    );
};

export default TaskCard;

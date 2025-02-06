import React from 'react';
import Tag from "./Tag";
import { FaTrash } from "react-icons/fa";

const TaskCard = ({ title, tags, index, deleteTask }) => {
    console.log("Rendering TaskCard with:", { title, tags });

    return (
        <article className="text-left p-4 rounded-lg max-w-xs sm:max-w-md mx-auto mb-4">
            <p className="mb-2 text-base sm:text-lg font-semibold">{title}</p>

            <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag, index) => (
                    <Tag key={index} tagName={tag} selected />
                ))}
            </div>

            <div className="flex justify-between items-center">
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

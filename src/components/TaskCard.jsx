import React from 'react';
import Tag from "./Tag";
import { FaTrash } from "react-icons/fa";

const TaskCard = ({ title, tags, index, deleteTask}) => {
    console.log("Rendering TaskCard with:", { title, tags });

    return (
        <article className="text-left p-4 bg-gray-100 rounded">
            <p className="mb-2">{title}</p>

            <div className="flex items-center justify-between">
                <div className='flex gap-2'>
                    {tags.map((tag, index) => (
                        <Tag key={index} tagName={tag} selected />
                    ))}
                </div>
                 <FaTrash
                    className="text-rose-800 cursor-pointer"
                    title="Delete"
                    onClick={() => deleteTask({ title, tags })}
                />
            </div>
        </article>
    );
};

export default TaskCard;
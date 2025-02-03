import React from 'react';
import Tag from "./Tag";
import { FaTrash } from "react-icons/fa";

const TaskCard = () => {
    return (
        <article className="text-left p-4 bg-gray-100 rounded">
            <p className="mb-2">This is sample text</p>

            <div className="flex items-center justify-between">
                <div className='flex gap-2'>
                    <Tag tagName="HTML" />
                    <Tag tagName="CSS" />
                </div>
                <FaTrash className="text-rose-800 cursor-pointer" title="Delete" />
            </div>
        </article>
    );
};

export default TaskCard;

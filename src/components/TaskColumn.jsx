import React from "react";
import { FaCheckCircle, FaStar, FaBullseye } from "react-icons/fa";
import TaskCard from "./TaskCard";

const icons = {
    "To Do": <FaBullseye className="text-blue-500 mr-2" title="Goal" />, 
    "Doing": <FaStar className="text-yellow-500 mr-2" title="In Progress" />, 
    "Done": <FaCheckCircle className="text-green-500 mr-2" title="Completed" />
};

const TaskColumn = ({ title }) => {
    return (
        <section className="w-full m-4 rounded text-center text-black p-4 bg-gray-100 shadow-lg">
            <h2 className="text-lg font-bold flex items-center justify-center gap-2">
                {icons[title] || null}
                {title}
            </h2>

            <TaskCard></TaskCard>
        </section>
    );
};

export default TaskColumn;
